from django.shortcuts import render
from transbank.webpay.webpay_plus.transaction import Transaction
from transbank.error.transbank_error import TransbankError

def home(request):    
    return render(request, 'core/index.html')

def login(request):    
    return render(request, 'core/login.html')

def membresia(request):    
    return render(request, 'core/membresia.html')

def pagar(request,total):
    total = total
    buy_order = str(1)
    session_id = str(1)
    return_url = 'http://127.0.0.1:8000/terminar/'

    amount = total
    total= str('{:,.0f}'.format(total).replace(",", "@").replace(".", ",").replace("@", "."))
    try:
        response = Transaction().create(buy_order, session_id, amount, return_url)
        context ={'total':total,"response":response}
        print(amount)

        return render(request, 'core/pagar.html', context) 
    except TransbankError as e:
        print(e.message)
        print(e.message)
        error =e.message
        context ={'total':total,"error":error,}
        return render(request, 'core/pagar.html', context)
    

def terminar(request):
    token = request.GET.get("token_ws")
    try:
        response = Transaction().commit(token) 
        return render(request, 'core/terminar.html',{"token": token,"response": response})
    except TransbankError as e:
        error =e.message
        print(e.message)
        print(token)
        return render(request, 'core/terminar.html', {"error":error})
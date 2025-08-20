#include<iostream>
using namespace std;

bool checkPrime(int n)
{
    bool isPrime = true;
    if(n<2){
        return false;
    }
    for(int i=2;i*i<=n;i++)
    {
        if(n%i==0)
        {
            isPrime = false;
        }
    }
    return isPrime;

}
int main(){
    cout<<checkPrime(11);

}
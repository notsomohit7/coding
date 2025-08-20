#include<iostream>
using namespace std;
struct student{
    string name;
    int age;
    char grade;
};

int main(){
    student student1;
    student1.name="ram";
    student1.age= 15;
    student1.grade='A';
    cout << student1.name<<endl<<student1.age<<endl<<student1.grade;
    return 0;    
}
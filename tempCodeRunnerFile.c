
#include <stdio.h>

int main() {
    int skills;
    int ques;
    int qArr[ques];
    int tr = 0;
    
    scanf("%d",&skills);
    scanf("%d",&ques);
    for(int i=0; i<ques; i++) {
        scanf("%d", &qArr[i]);
    }
    
    for(int i=0; i<ques; i++) {
        if(skills > qArr[i]) {
            skills = skills + qArr[i]; 
            tr = tr + 1;
        }
    }
    if(tr == ques){
        printf("True");
    } else {
        printf("False");
    }


    return 0;
}
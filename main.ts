import{mkdirSync as A,readdirSync as B,readFileSync as C,writeFileSync as D}from"node:fs";
import{join as E}from"node:path";
const F=new TextEncoder;
function G(p,q){
let S=new Int32Array(256),T=new Int32Array(64),M=new Int32Array(256),o=new Uint8Array(65536),s=0,c=0,l=0,i=0,pc=0,n=0;
const R=x=>[o.subarray(0,l),x];
for(;;){
if(n==1e6)return R(10);
if(pc<0||pc>=p.length)return R(9);
let t=p[pc],m=0,u=0,v=0;
if(t==1){m=1;v=1}else if(t==2){m=4;v=1}else if(t==3)u=1;else if(t==4){u=1;v=2}else if(t==5){u=2;v=2}else if(t==6){u=2;v=3}else if(t==7){u=3;v=3}else if(t>15&&t<23){u=2;v=1}else if(t==23||t==27){u=1;v=1}else if(t>23&&t<31){u=2;v=1}else if(t>31&&t<35){u=2;v=1}else if(t==48)m=2;else if(t==49||t==50){m=2;u=1}else if(t==51)m=2;else if(t==64){u=1;v=1}else if(t==65)u=2;else if(t==80||t==81||t==83)u=1;else if(t==82)v=1;else if(t&&t!=52)return R(5);
if(pc+m>=p.length)return R(9);
n++;let k=pc+1+m;
if(s<u)return R(2);
if(s-u+v>256)return R(3);
pc=k;
switch(t){
case 0:return R(0);
case 1:S[s++]=(p[k-1]<<24)>>24;break;
case 2:S[s++]=p[k-4]|p[k-3]<<8|p[k-2]<<16|p[k-1]<<24;break;
case 3:s--;break;
case 4:S[s]=S[s-1];s++;break;
case 5:{let a=S[s-1];S[s-1]=S[s-2];S[s-2]=a;break;}
case 6:S[s]=S[s-2];s++;break;
case 7:{let a=S[s-3];S[s-3]=S[s-2];S[s-2]=S[s-1];S[s-1]=a;break;}
case 23:S[s-1]=-S[s-1]|0;break;
case 27:S[s-1]=~S[s-1];break;
case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:case 26:case 28:case 29:case 30:case 32:case 33:case 34:{
let b=S[s-1],a=S[s-2],r;
if(t==16)r=a+b|0;else if(t==17)r=a-b|0;else if(t==18)r=Math.imul(a,b);
else if(t==19){if(!b)return R(4);r=a==-2147483648&&b==-1?a:a/b|0;}
else if(t==20){if(!b)return R(4);r=b==-1?0:a%b|0;}
else if(t==21){if(!b)return R(4);r=(a>>>0)/(b>>>0)|0;}
else if(t==22){if(!b)return R(4);r=(a>>>0)%(b>>>0)|0;}
else if(t==24)r=a&b;else if(t==25)r=a|b;else if(t==26)r=a^b;
else if(t==28)r=a<<(b&31);else if(t==29)r=a>>(b&31);else if(t==30)r=(a>>>(b&31))|0;
else if(t==32)r=a==b?1:0;else if(t==33)r=a<b?1:0;else r=(a>>>0)<(b>>>0)?1:0;
s-=2;S[s++]=r;break;}
case 48:case 49:case 50:
if(t==48||(t==49)===(S[--s]==0))pc=k+(((p[k-2]|p[k-1]<<8)<<16)>>16);break;
case 51:if(c==64)return R(7);T[c++]=k;pc=p[k-2]|p[k-1]<<8;break;
case 52:if(!c)return R(8);pc=T[--c];break;
case 64:{let a=S[s-1];if(a<0||a>255)return R(6);S[s-1]=M[a];break;}
case 65:{let a=S[s-1],b=S[s-2];if(a<0||a>255)return R(6);s-=2;M[a]=b;break;}
case 80:{let b=F.encode(String(S[s-1]));if(l+b.length>65536)return R(11);s--;o.set(b,l);l+=b.length;break;}
case 81:if(l+1>65536)return R(11);o[l++]=S[--s]&255;break;
case 82:S[s++]=i<q.length?q[i++]:-1;break;
case 83:return R(S[--s]&255);
}}
}
const I=process.env.MAKEFUN_INPUT_DIR??"/input",O=process.env.MAKEFUN_OUTPUT_DIR??"/output";
for(const d of B(I).sort()){
let[x,y]=G(C(E(I,d,"program.bin")),C(E(I,d,"input.bin")));
A(E(O,d),{recursive:true});D(E(O,d,"stdout.bin"),x);D(E(O,d,"exit.txt"),y+"\n");}

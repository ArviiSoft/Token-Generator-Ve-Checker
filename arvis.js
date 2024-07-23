const fs = require('fs');
const readline = require('readline');
const axios = require('axios');
const chalk = require('chalk');

const controlTokensFile='control-tokens.txt';
const verifiedTokensFile='verified-tokens.txt';

const sampleTokens=['TOKEN OLUŞTURURKEN BAZ ALINACAK TKOENLERİ GİR', 'BU ŞEKİLDE', 'ÇOĞALTILABİLİR'];
function getRandomCharacter(_0xdfb4x7)

{
return _0xdfb4x7["charAt"](Math["floor"](Math["random"]()* _0xdfb4x7["length"]))
}

function generateSimilarToken(_0xdfb4x9) {
const _0xdfb4x7='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
let _0xdfb4xa='';
for(let _0xdfb4xb=0;_0xdfb4xb< _0xdfb4x9["length"];_0xdfb4xb++)
{

if(_0xdfb4xb< 7)
{
_0xdfb4xa+= _0xdfb4x9[_0xdfb4xb] } else 
{

if(_0xdfb4x9[_0xdfb4xb]=== '.')
{
_0xdfb4xa+= '.'
}
else 
{
if(_0xdfb4x9[_0xdfb4xb]=== '-')
{
_0xdfb4xa+= '-'
}
else 
{
if(_0xdfb4x9[_0xdfb4xb]=== '_')
{
_0xdfb4xa+= '_'
}
else 
{
_0xdfb4xa+= getRandomCharacter(_0xdfb4x7)
}
}
}
}
}
return _0xdfb4xa
}
function checkToken(_0xdfb4xa)
{
["catch"]((_0xdfb4xd)=>
{
return {isValid:false,error:_0xdfb4xd["message"]}
}
)
}{
if(fs["existsSync"](controlTokensFile))
{
const _0xdfb4x15=fs["readFileSync"](controlTokensFile,'utf8')["trim"]()["split"]('\x0A');
if(_0xdfb4x15["length"]> 0)
{
const _0xdfb4xa=_0xdfb4x15["shift"]()["trim"]();
fs["writeFileSync"](controlTokensFile,_0xdfb4x15["join"]('\x0A'));checkToken(_0xdfb4xa)["then"]((_0xdfb4x16)=>
{
if(_0xdfb4x16["isValid"])
{
const _0xdfb4x17=`${_0xdfb4xa}\n`;
fs["appendFileSync"](verifiedTokensFile,_0xdfb4x17);console["log"](_0xdfb4x16["html"])
}
else 
{
const _0xdfb4x17=`${_0xdfb4xa}\n`;
fs["appendFileSync"]('tokens.txt',_0xdfb4x17);console["log"](chalk.red`[GEÇERSİZ TOKEN]`, chalk.gray`${_0xdfb4xa}`);console["log"](chalk.green`[AKTİF TOKEN SAYISI]`, chalk.greenBright`( ${getNumberOfLines(verifiedTokensFile)} ) \n\n`)
}
generateAndCheckToken()
}
)["catch"]((_0xdfb4xd)=>
{
console["log"](chalk.red`[HATA] ${_0xdfb4xd["message"]}`);generateAndCheckToken()
}
)
}
else 
{
console["log"](chalk.red`[HATA - AKTİF TOKEN SAYISI] ( ${getNumberOfLines(verifiedTokensFile)} )`)
}
}
else 
{
const _0xdfb4x18=Math["floor"](Math["random"]()* sampleTokens["length"]);
const _0xdfb4x9=sampleTokens[_0xdfb4x18];
const _0xdfb4xa=generateSimilarToken(_0xdfb4x9);
checkToken(_0xdfb4xa)["then"]((_0xdfb4x16)=>
{
if(_0xdfb4x16["isValid"])
{
const _0xdfb4x17=`${_0xdfb4xa}\n`;
fs["appendFileSync"](verifiedTokensFile,_0xdfb4x17);console["log"](_0xdfb4x16["html"])
}
else 
{
const _0xdfb4x17=`${_0xdfb4xa}\n`;
fs["appendFileSync"]('tokens.txt',_0xdfb4x17);console["log"](chalk.red`[GEÇERSİZ TOKEN]`, chalk.gray`${_0xdfb4xa}`);console["log"](chalk.green`[AKTİF TOKEN SAYISI]`, chalk.greenBright`( ${getNumberOfLines(verifiedTokensFile)} ) \n\n`)
}
generateAndCheckToken()
}
)["catch"]((_0xdfb4xd)=>
{
console["log"](`[HATA] ${_0xdfb4xd["message"]}`);generateAndCheckToken()
}
)
}
}
function getNumberOfLines(_0xdfb4x1a)
{
const _0xdfb4x1b=fs["readFileSync"](_0xdfb4x1a,'utf8');
return _0xdfb4x1b["trim"]()["split"]('\x0A')["length"]
}
function promptUser()
{

const _0xdfb4x1d=readline["createInterface"]({input:process["stdin"],output:process["stdout"]});
_0xdfb4x1d["question"](chalk.whiteBright`Stranger Things + Twilight = `,(_0xdfb4x1e)=>
{
if(_0xdfb4x1e["toLowerCase"]()=== 'control') {
generateAndCheckToken()
} else 
{
if(_0xdfb4x1e["toLowerCase"]()=== 'fandom')
{

const _0xdfb4xa=generateSimilarToken(sampleTokens[0]);
checkToken(_0xdfb4xa)["then"]((_0xdfb4x16)=>
{
if(_0xdfb4x16["isValid"])
{
const _0xdfb4x17=`${_0xdfb4xa}\n`;
fs["appendFileSync"](verifiedTokensFile,_0xdfb4x17);console["log"](_0xdfb4x16["html"])
}
else 
{
const _0xdfb4x17=`${_0xdfb4xa}\n`;
fs["appendFileSync"]('tokens.txt',_0xdfb4x17);console["log"](chalk.red`[GEÇERSİZ TOKEN]`, chalk.gray`${_0xdfb4xa}`);console["log"](chalk.green`[AKTİF TOKEN SAYISI]`, chalk.greenBright`( ${getNumberOfLines(verifiedTokensFile)} ) \n\n`)
}
generateAndCheckToken()
}
)["catch"]((_0xdfb4xd)=>
{
console["log"](`[HATA] ${_0xdfb4xd["message"]}`);generateAndCheckToken()
}
)
}
else 
{
console["log"](chalk.red`Parolayı yanlış girdin!`);promptUser()
}
}
_0xdfb4x1d["close"]()
}
)
}
promptUser()
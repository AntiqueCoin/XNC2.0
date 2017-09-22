# AntiqueCoin

Release ver 2.0. new Feature is

- Support ERC-20 based Token Ecosystem.
- Distribute and Transfer your Antique Register Certificate integrates IPFS file hash.

## Version 2.0

Contract alredy deployed on etheruem network.

https://etherscan.io/address/0xd7f3fce21bcf0b082d4f0144bd8582cb190c5868

## Register token spec

### Function registerAntique

Antique Contract support some modules that AntiqueCoin Certificate file Hash. if you have file or file Identity, you can regster new Antique Registry.

params
-  **_filehash** byte32

```
function registerAntique(bytes32 _fileHash) returns (bool success){
    if (msg.sender != founder) throw;
    //  if (antiques[_fileHash] != 0x0) throw;
    antiques[_fileHash] = msg.sender;
    RegistrationAntique(_fileHash);
    return true;
}
```

### Function transfer Antique

params
-  **_to** address
-  **_filehash** byte32


```
function transferAntique(address _to, bytes32 _fileHash) returns (bool success){
      if (antiques[_fileHash] != msg.sender) throw;
      antiques[_fileHash] = _to;
      TransferAntique(_fileHash, msg.sender, _to);
      return true;
}
```

## getting started 

if not install nodejs and truffle platform, you can see follow this link.
http://truffle.readthedocs.io/en/beta/getting_started/installation/

https://nodejs.org/en/download/


```
$ npm install

```
## test


```
$ truffle migrate --network testrpc
```

## LICENCE

Copyright 2017 AntiqueRegistry team

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

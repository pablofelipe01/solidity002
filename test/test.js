const hello = artifacts.require('hello');

contract ("hello", accounts => {
    it ("1. Get Message", async () => {
        let instance = await hello.deployed();
        const message = await instance.getMessage.call({from: accounts[0]});
        assert.equal(message, "Hello Pablo Acebedo");

    });

    it("2. Change Message", async () => {
        let instance = await hello.deployed();
        const tx = await instance.setMessage("Pablo Felipe'", {from: accounts[2]});
        console.log(accounts[2]);
        console.log(tx);
        const msg = await instance.getMessage.call();
        assert.equal(msg, "Pablo Felipe'");
    });
}); 


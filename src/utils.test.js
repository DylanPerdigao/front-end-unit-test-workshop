import {findMax, removeAttributes, loadUserName} from "./utils";

describe("findMax",()=>{
    it("find the maximum",()=>{
        expect(findMax([3,2,1])).toEqual(3);
    });
});

describe("removeAttributes",()=>{
    let testObject;
    beforeEach(()=>{
        testObject = {
            name:"zé carlos",
            age:"123",
            adress:"coimbra"
        }
    });
    it("removes the passed keys",()=>{
        removeAttributes(testObject,["name"]);
        expect(testObject).toEqual({
            age:"123",
            adress:"coimbra"
        });
    });
    it("returns the same object",()=>{
        expect(removeAttributes(testObject,["name"])).toBe(testObject);
    });
});

describe("loadUserName",()=>{
    it("loads the user name if the user is logged in", async()=>{
        const name = await loadUserName({loggedIn:true});
        expect(name).toEqual("mary");
    });
});
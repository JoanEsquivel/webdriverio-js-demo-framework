describe('Spying an API request', ()=>{

    it('spying the existing to-dos', async ()=>{
        let spyGetToDos = await browser.mock('**/todos', {method: 'get'})
        let todo1, todo2, responseCode

        await browser.url(`http://localhost:3000/`);
        await browser.refresh()
        todo1 = spyGetToDos.matches[0].body[0]
        todo2 = spyGetToDos.matches[0].body[1]
        responseCode = spyGetToDos.matches[0].statusCode
        expect(todo1.title).toHaveTextContaining('buy milk')
        expect(todo1.id).toHaveTextContaining('1')
        expect(todo1.completed).toEqual(false)
        expect(todo2.title).toHaveTextContaining('wash dishes')
        expect(todo2.id).toHaveTextContaining('2')
        expect(todo2.completed).toEqual(false)
        expect(responseCode).toEqual(200)


        // console.log(spyGetToDos.matches[0].body)
        // console.log(spyGetToDos.matches[0].statusCode)
        // console.log(spyGetToDos.matches[0].body[0])
        // await browser.debug()
    })

})
describe('Mock an API request', ()=>{

    it('ui should display mocked to-dos', async ()=>{
        const todoListMock = await browser.mock('**/todos', {method: 'get'})
        await browser.url(`http://localhost:3000/`);

        todoListMock.respond([{
            title: 'Mocked item to complete',
            completed: false,
            id: 1
        },{
            title: 'Mocked item completed',
            completed: true,
            id: 2
        }])
        await browser.refresh()

        await expect($('li:nth-child(1) label')).toHaveTextContaining('Mocked item to complete')
        await expect($('li:nth-child(2) label')).toHaveTextContaining('Mocked item completed')
        await expect($('li:nth-child(2)')).toHaveAttrContaining('class', 'completed')
        // await browser.debug()
    })
})
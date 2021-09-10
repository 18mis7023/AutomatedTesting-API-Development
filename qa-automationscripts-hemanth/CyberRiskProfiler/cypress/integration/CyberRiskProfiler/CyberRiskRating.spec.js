Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

let appcount;
let scorecardlength;
const indexarr = [];

describe('Adding App_Id', () => {
    // const scorecardnames=[
    //     "NETWORK SECURITY",
    //     "DNS SECURITY",
    //     "WEB APP SECURITY",
    //     "EMAIL SECURITY",
    //     "ENDPOINT SECURITY",
    //     "IP REPUTATION",
    //     "CVE DETECTION",
    //     "DARK WEB WHISPERS",
    //     "INFORMATION LEAK",
    //     "DIGITAL REPUTATION",
    //     "API SECURITY",
    //     "CLOUD SECURITY",
    //     "RISK PROFILER SPECIALS",
    // ];
    it('Visit link', () => {
        cy.visit(Cypress.env('Link'))
        cy.get('.log-in > .table > .table-cell > form > :nth-child(1) > .form-control').type("admin@pwc.com")
        cy.get('.log-in > .table > .table-cell > form > :nth-child(2) > .form-control').type("Lu$CPqC9ciK@P")
        cy.get('.log-in > .table > .table-cell > form > .text-center > .btn').click()
        cy.wait(5000)
        cy.get(':nth-child(2) > .dropdown-toggle').click()
        cy.wait(2000)
        cy.get('#pageSubmenu > :nth-child(1) > a').click()
        cy.wait(4000)
        cy.get('.scorecard-pd-large').each((item,index,list)=>{
            scorecardlength=list.length;
            // cy.wrap(item).invoke('h5')
            // cy.get('.scorecard-pd-large >.scorecard-wrapper>.scorecard-name-info>.left>h5')   //for name n/s
            // cy.get('.scorecard-pd-large >.scorecard-wrapper>.scorecard-name-info') 
        })
        cy.get('.scorecard-pd-large >.scorecard-wrapper>.scorecard-name-info>.left>h5').each((item,index,list)=>{
            // try {
            //     expect(Cypress.$(item).text()).to.eq(scorecardnames[index],{matchCase: true});
            // } catch (error) {
            //     cy.log("Mismatched the text");
            // }
            

        })
        var Intialcount = {
            "NETWORK SECURITY":0,
            "WEB APP SECURITY":0,
            "RISK PROFILER SPECIALS":0,
            "API SECURITY":0,
            "CLOUD SECURITY":0,
            "EMAIL SECURITY":0,
            "DNS SECURITY":0,
            "ENDPOINT SECURITY":0,
            "IP REPUTATION":0,
            "CVE DETECTION":0,
            "INFORMATION LEAK":0,
            "DIGITAL REPUTATION":0,
            "DARK WEB WHISHPERS":0
        }
    
        var buttonSelector ={
            "Network"      : "cy.get('.center-box-wrapper > .scorecard-pd-large > .scorecard-wrapper > .scorecard-view-detail > a')",
            "web app"      :"cy.get(':nth-child(4) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')",
            "risk-profiler":"cy.get(':nth-child(5) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')",
            "API"          :"cy.get(':nth-child(6) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')",
            "cloud"        :"cy.get(':nth-child(6) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')",
            "Email"        :"cy.get(':nth-child(8) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')",
            "DNS"          :"cy.get(':nth-child(9) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')",
            "Endpoint"     :"cy.get(':nth-child(10) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')",
            "IP"           :"cy.get(':nth-child(11) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')",
            "CVE"          :"cy.get(':nth-child(12) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')",
            "Information"  :"cy.get(':nth-child(13) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')",
            "Digital reput":"cy.get(':nth-child(14) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')",
            "Dark web"     :"cy.get(':nth-child(15) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')"
        }


        cy.get("h5").each(($head)=>{
            var count = $head.text()
            cy.log(count)
            
            
    
            Intialcount = Intialcount+value;
            console.log(Intialcount)
        })


        
        var value;
  
        cy.get('[class = "organisation-chart"]').then(($div) => {
           
            $div.each((index,item,list)=>{
                // cy.log(index)
                indexarr.push(parseInt(index));
            })
            
            // $div.each((index,item,list)=>{
            //     cy.log(item.text())
            //     // expect(parseInt(item.text())).to.eq()
            //     // cy.wrap(item).contains('0')
            // })
            const co = [];
           var risk = $div.text();
           var k=parseInt(1);
           for (let num of risk) {
            //    cy.log(parseInt(num))
            if (parseInt(num)>=0 && k==0) {
                k=k+1;
                co.push(parseInt(num));
            }else{
                if(parseInt(num)>=0){
                    k=k+1;
                }else{
                    k=0;
                }
            }
           
            // cy.get(':nth-child(4) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')
            // cy.get(':nth-child(5) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')
            // cy.get(':nth-child(6) > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a')
        }
        for(let i=0;i<indexarr.length;i++)
        {
            if(co[i]>0){
                // cy.log("Hello count"+co[i])
                // cy.log(indexarr)
                // cy.log(i)
                // cy.log(co[i])
                cy.wait(3000);
                // if(i)
                if(parseInt(i)+parseInt(3)==3){
                    cy.get('.center-box-wrapper > .scorecard-pd-large > .scorecard-wrapper > .scorecard-view-detail > a').click()
                    cy.wait(5000)
                    cyber()
                    cy.go('back')
                    // cy.log("comming")
                }else{
                    cy.get(':nth-child('+(parseInt(i)+parseInt(3))+') > :nth-child(1) > .col-md-6 > .scorecard-wrapper > .scorecard-view-detail > a').click()
                    cy.wait(5000)
                    cyber()
                    
                    cy.go('back')
                    // cy.log("comming")
                }
                
            }

        }
        //    cy.log(co)
        //    value.each((item,index,list)=>{
        //        expect(item.contains(0).then())
        //    })
        //    cy.log(value)
            
        })
    

    })
    function validate(){
        cy.get('#high_severity > .severity-list-info > .second').then(($div)=>{
            var number=$div.text();
            cy.log(number)
            if(parseInt(number)>0){
                cy.get('#high_severity').click()
                var string="";
                cy.get('#high > :nth-child(1) > .col-md-5 > .severity-wrapper  > .highlighted').children().each(function($el,index,$listofElements){
                    cy.log($el)
                    let text=$el.text();
                    let newtext="";
                    const newarr=[];
                    let newadd=0;
                    newtext = text.replace(/\r?\n|\r/g, "").split(' ');
                        cy.log('risk' + newtext)
                        for (let num of newtext) {
                            if (parseInt(num)) {
                                newarr.push(parseInt(num));
                            }
                        }
                        for (let finding_count of newarr) {
                            newadd += finding_count
                        }
                        cy.wait(2000)
                         
                        if(parseInt(newadd)>0){
                            $el.click()
                            cy.wait(1000)
                            cy.get('.issue-heading').should('have.text',"\n      HIGH\n    ");
                            cy.get('.severity-findings-table > .dark-table').each(($el,index,$list)=>{
                                cy.log("Count of the high table data "+$list.length)
                                try {
                                    expect($list.length).to.be.at.least(1)
                                } catch (error) {
                                    cy.log(error)
                                }
                            })
                        }
                        if(index==0){
                            let sum=0;
                            cy.get("#high > :nth-child(1) > .col-md-5 > .severity-wrapper > .highlighted>li>a>.right").each(function($el,index,$listofElements){
                                sum=sum+parseInt($el.text());
                                if(parseInt(index)==(parseInt($listofElements.length)-1)){
                                    cy.log("Inside data count is checking")
                                    expect(parseInt(sum)).to.eq(parseInt(number))
                                }
                            })
                        }
                })
                
            }else{
                expect(parseInt(number)).to.eq(0)
            } 
        })
        cy.get('#medium_severity > .severity-list-info > .second').then(($div)=>{
            var number=$div.text();
            cy.log(number)
            if(parseInt(number)>0){
                cy.get('#medium_severity').click()
                var string="";
                cy.get('#medium > :nth-child(1) > .col-md-5 > .severity-wrapper > .highlighted').children().each(function($el,index,$listofElements){
                    cy.log($el)
                    $el.click()
                    let text=$el.text();
                    let newtext="";
                    const newarr=[];
                    let newadd=0;
                    newtext = text.replace(/\r?\n|\r/g, "").split(' ');
                        cy.log('risk' + newtext)
                        for (let num of newtext) {
                            if (parseInt(num)) {
                                newarr.push(parseInt(num));
                            }
                        }
                        for (let finding_count of newarr) {
                            newadd += finding_count
                        }
                        cy.wait(2000)
                         
                        if(parseInt(newadd)>0){
                            $el.click()
                            cy.wait(1000)
                            cy.get('.issue-heading').should('have.text',"\n      MEDIUM\n    ");
                            cy.get('.severity-findings-table > .dark-table').each(($el,index,$list)=>{
                                cy.log("Count of the Medium table data "+$list.length)
                                try {
                                    expect($list.length).to.be.at.least(1)
                                } catch (error) {
                                    cy.log(error)
                                }
                            })
                        }
                        if(index==0){
                            let sum=0;
                            cy.get("#medium > :nth-child(1) > .col-md-5 > .severity-wrapper > .highlighted>li>a>.right").each(function($el,index,$listofElements){
                                sum=sum+parseInt($el.text());
                                if(parseInt(index)==(parseInt($listofElements.length)-1)){
                                    cy.log("Inside data count is checking")
                                    expect(parseInt(sum)).to.eq(parseInt(number))
                                }
                            })
                        }
                    cy.log($el.text());
                })
            }else{
                expect(parseInt(number)).to.eq(0)
            } 
        })
        cy.get('#low_severity > .severity-list-info > .second').then(($div)=>{
            var number=$div.text();
            cy.log(number)
            if(parseInt(number)>0){
                cy.get('#low_severity').click()
                var string="";
                cy.get('#low > :nth-child(1) > .col-md-5 > .severity-wrapper > .highlighted').children().each(function($el,index,$listofElements){
                    cy.log($el)
                    $el.click()
                    // cy.log($el.get("#low > :nth-child(1) > .col-md-5 > .severity-wrapper > .highlighted>div.right"))
                    
                    if(index==0){
                        let sum=0;
                        cy.get("#low > :nth-child(1) > .col-md-5 > .severity-wrapper > .highlighted>li>a>.right").each(function($el,index,$listofElements){
                            sum=sum+parseInt($el.text());
                            if(parseInt(index)==(parseInt($listofElements.length)-1)){
                                cy.log("Inside data count is checking")
                                expect(parseInt(sum)).to.eq(parseInt(number))
                            }
                        })
                    }
                    cy.wait(2000)
                    $el.get("div.right")
                    let text=$el.text();
                    let newtext="";
                    const newarr=[];
                    let newadd=0;
                    newtext = text.replace(/\r?\n|\r/g, "").split(' ');
                        cy.log('risk' + newtext)
                        for (let num of newtext) {
                            if (parseInt(num)) {
                                newarr.push(parseInt(num));
                            }
                        }
                        for (let finding_count of newarr) {
                            newadd += finding_count
                        }
                        cy.wait(2000)
                         
                        if(parseInt(newadd)>0){
                            $el.click()
                            cy.wait(1000)
                            cy.get('.issue-heading').should('have.text',"\n      LOW\n    ");
                            cy.get('.severity-findings-table > .dark-table').each(($el,index,$list)=>{
                                cy.log("Count of the Low table data "+$list.length)
                                try {
                                    expect($list.length).to.be.at.least(1)
                                } catch (error) {
                                    cy.log(error)
                                }
                            })
                        }
                    cy.log($el.text());
                })
            }else{
                expect(parseInt(number)).to.eq(0)
            } 
        })
        cy.get('#info_severity > .severity-list-info > .second').then(($div)=>{
            var number=$div.text();
            cy.log(number)
            if(parseInt(number)>0){
                cy.get('#info_severity').click()
                var string="";
                cy.get('#info > :nth-child(1) > .col-md-5 > .severity-wrapper  > .highlighted').children().each(function($el,index,$listofElements){
                    cy.log("element-info"+$el)
                    $el.click()
                    let text=$el.text();
                    let newtext="";
                    const newarr=[];
                    let newadd=0;
                    newtext = text.replace(/\r?\n|\r/g, "").split(' ');
                        cy.log('risk' + newtext)
                        for (let num of newtext) {
                            if (parseInt(num)) {
                                newarr.push(parseInt(num));
                            }
                        }
                        for (let finding_count of newarr) {
                            newadd += finding_count
                        }
                        cy.wait(2000)
                        // cy.log("hemanth")
                        if(parseInt(newadd)>0){
                            $el.click()
                            cy.wait(1000)
                            cy.get('.issue-heading').should('have.text',"\n      INFORMATIONAL\n    ");
                            cy.get('.severity-findings-table > .dark-table').each(($el,index,$list)=>{
                                cy.log("Count of the Information table data "+$list.length)
                                try {
                                    expect($list.length).to.be.at.least(1)
                                } catch (error) {
                                    cy.log(error)
                                }
                            })
                        }
                        if(index==0){
                            let sum=0;
                            cy.get("#info > :nth-child(1) > .col-md-5 > .severity-wrapper > .highlighted>li>a>.right").each(function($el,index,$listofElements){
                                sum=sum+parseInt($el.text());
                                if(parseInt(index)==(parseInt($listofElements.length)-1)){
                                    cy.log("Inside data count is checking")
                                    expect(parseInt(sum)).to.eq(parseInt(number))
                                }
                            })
                        }
                })
            }else{
                expect(parseInt(number)).to.eq(0)
            }
        })
        cy.get('#positive_severity > .severity-list-info > .second').then(($div)=>{
            var number=$div.text();
            cy.log(number)
            if(parseInt(number)>0){
                cy.get('#positive_severity').click()
                var string="";
                cy.get('#positive > :nth-child(1) > .col-md-5 > .severity-wrapper  > .highlighted').children().each(function($el,index,$listofElements){
                    cy.log($el)
                    $el.click()
                    let text=$el.text();
                    let newtext="";
                    const newarr=[];
                    let newadd=0;
                    newtext = text.replace(/\r?\n|\r/g, "").split(' ');
                        // cy.log('risk' + newtext)
                        for (let num of newtext) {
                            if (parseInt(num)) {
                                newarr.push(parseInt(num));
                            }
                        }
                        for (let finding_count of newarr) {
                            newadd += finding_count
                        }
                        cy.wait(2000)
                        // cy.log("hemanth")
                        if(parseInt(newadd)>0){
                            $el.click()
                            cy.wait(1000)
                            cy.get('.issue-heading').should('have.text',"\n      POSITIVE\n    ");
                            cy.get('.severity-findings-table > .dark-table').each(($el,index,$list)=>{
                                cy.log("Count of the Positive table data "+$list.length)
                                try {
                                    expect($list.length).to.be.at.least(1)
                                } catch (error) {
                                    cy.log(error)
                                }
                                
                            })
                        }
                        if(index==0){
                            let sum=0;
                            cy.get("#positive > :nth-child(1) > .col-md-5 > .severity-wrapper > .highlighted>li>a>.right").each(function($el,index,$listofElements){
                                sum=sum+parseInt($el.text());
                                if(parseInt(index)==(parseInt($listofElements.length)-1)){
                                    cy.log("Inside data count is checking")
                                    expect(parseInt(sum)).to.eq(parseInt(number))
                                }
                            })
                        }
                })
            }else{
                expect(parseInt(number)).to.eq(0)
            } 
        })
    }
   
    function cyber() {
                
        cy.get('[class="nav nav-pills severity-pills"]').then(($div) => {
            const co = [];
            var add = 0;
            var risk = $div.text();
            risk = risk.replace(/\r?\n|\r/g, "").split(' ');
            cy.log('risk' + risk)
            for (let num of risk) {
                if (parseInt(num)) {
                    co.push(parseInt(num));
                }
            }
            for (let finding_count of co) {
                add += finding_count
            }

            cy.log(add);
            cy.get('[id= "chart-inner-text"]').then(($div) => {
                const sp = $div.text();
                expect(parseInt(sp)).to.eq(add)
                cy.log('Both are equal' + sp)
            })
            // cy.get('#typosquatting_domains_0 > a > .right').should('have.value',add);
        })
        validate();
    }
})




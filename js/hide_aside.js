{
    console.log('hide aside')
    let view = {
        el: 'main',
        init(){
            this.$el = $(this.el)
        },
        hideAside(){
            this.$el.find('aside').addClass('move')
            this.$el.find('.table-container').addClass('move')
            this.showAsideIcon()
        },
        showAside(){
            this.$el.find('aside').removeClass('move')
            this.$el.find('.table-container').removeClass('move')
            this.hideAsideIcon()
        },
        showAsideIcon(){
            this.$el.find('.showAsideIcon').addClass('active')
        },
        hideAsideIcon(){
            this.$el.find('.showAsideIcon').removeClass('active')
        }
    }

    let controller = {
        init(view){
            this.view = view
            this.view.init()
            this.bindEvents()
        },
        bindEvents(){
            this.view.$el.find('.hideIcon').on('click',()=>{
                this.view.hideAside()
            })
            this.view.$el.find('.showAsideIcon').on('click',()=>{
                this.view.showAside()
            })
        }
    }
    controller.init(view)
}

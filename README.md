# Project - Pricing Challenge

## Design Specification
Design was specified by the Mentor, see the links for more Details: 
- [Design Spezification](./design/README-Design.md)
- [Style Guide](./design/style-guide.md)
- [Desktop Design Annually](./design/desktop-design-annually.jpg)
- [Desktop Design Monthly](./design/desktop-design-monthly.jpg)
- [Mobile Design Annually](./design/mobile-design-annually.jpg)
- [Mobile Design Monthly](./design/mobile-design-monthly.jpg)
- [Active States](./design/active-states.jpg)

## Structural Analysis
According to the given design the following HTML structure was worked out. 
```
Body.............................Background Design     
    Wrapper......................Main Container
        Title
        Switch...................Switch Container
            Annually
            Toggle...............Toggle Container
                Basic
                Circle
            Monthly
        Box-Wrapper..............Boxes Container
            Box..................BoxDetails Container
                Title
                Price............Price Container
                    Currency 
                    Value
                Storage
                AllowedUser
                SendUpTo
                Button
    Attribution
```

## Definition Classnames 
With The following classes was tried to implement the BEM guidelines.
```
<body class="pricing">
    <div class="pricing__wrapper">
        <h1 class="pricing__title">Our Pricing</h1>
        <div class="pricing__switch">
            <div class="switch__annually">Annually</div>  
            <div class="switch__toggle">
                <label class="toggle__basic" for="toggle">
                    <input type="checkbox" name="toggle" id="toggle">
                    <div class="toggle__circle"></div>
                </label>
            </div>
            <div class="switch__monthly">Monthly</div>
        </div>  
        <div class="pricing__boxwrapper"> 
            <div class="pricing__box">
                <div class="box__title"><h2>Basic</h2></div>
                <div class="box__price">
                    <div class="price__currency">&dollar;</div>
                    <div class="price__value">
                        <span class="value" 
                        data-annually="199.99" 
                        data-monthly="19.99">199.99
                        </span>
                    </div>
                </div>
                <div class="box__storage">500 GB Storage</div>
                <div class="box__allowedUser">2 Users Allowed</div>
                <div class="box__sendUpto">Send up to 3 GB</div>
                <div class="box__btn" >
                    <button class="btn__learnMore">Learn More</button>
                </div>
            </div>
        </div>
    </div>
    <div class="pricing__attribution">
        Challenge by <a href="" target="_blank"></a>. 
        Coded by <a href="#"></a>.
    </div>
</body>
</html>
```
## Chosen Display depend on device (Mobile/Desktop)
According to the used sizes of devices different layouts are required.
The aim was to create the different layouts only by changing the display type.

### Level 1 
Default Display for Mobile  
Display Flex (Column, SpaceBetween for sticky Footer) for Desktop
- **Body** (.pricing)      
    * **Wrapper** (.pricing__wrapper)
    * **Attribution** (.pricing__attribution)


### Level 2 
Default Display for Mobile + Desktop

- **Wrapper** (.pricing__wrapper)
    * **Title** (.pricing__title)
    * **Switch** (.pricing__switch)
    *  **BoxWrapper** (.pricing__boxwrapper)


### Level 3 
Switch:  Display Flex (Default) for Mobile + Desktop  
BoxWrapper:  Default Display for Mobile + Desktop
- **Title**
- **Switch** (.pricing__switch)
    * **Annually** (.switch__annually)
    * **Toggle** (.switch__toggle)
    * **Monthly** (.switch__monthly)
- **BoxWrapper** (.pricing__boxwrapper)
    * **Box** (.pricing__box)


### Level 4 
Toggle:   
Display Flex (Default) for Mobile + Desktop  

Box:   
Default Display for Mobile,   
Display Inline-Block für Desktop  

- **Toggle** (.switch__toggle)
    * **Basic** (.toggle__basic)
    * **Circle** (.toggle__circle)
- **Box** (.pricing__box)
    * **Title** (.box__title)
    * **Price** (.box__price)
    * **Storage** (.box__storage)
    * **AllowedUser** (.box__allowedUser)
    * **SendUpTo** (.box__sendUpto)
    * **Button** (.box__btn)



### Level 5 
Price:  Display Flex (Default) for Mobile + Desktop

- **Price** (.box__price)
    * **Currency** (.price__currency)
    * **Value** (.price__value)



## Implementation
The toggling between ANNUALLY and MONTHLY - Price is implemented with JavaScript.



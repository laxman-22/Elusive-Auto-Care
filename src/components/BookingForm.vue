<template>
    <form @submit="onSubmit" class="form">
        <div class="form">
            <div> 
                <h2 style="font-size: 35px;">Vehicle Type</h2>
            </div>
            <div class="vehicletyperadio">
                <div class="vehicletypewrap">
                    <label class="vehicletypeslabel" id="sedanlabel">
                        <div class="details">
                            <img src="@/assets/sedan.jpg">
                            <input type="radio" name="vehicle" id="sedan" class="vehicle" @click="vehicleTypeClick" v-model="sedan"/>
                            <h3 class="carlabel">Sedan / Coupe / Hatchback</h3>
                        </div>
                    </label> 
                    <label class="vehicletypeslabel" id="suvlabel">
                        <div class="details">
                            <img src="@/assets/suv.jpg">
                            <input type="radio" name="vehicle" id="suv" class="vehicle" @click="vehicleTypeClick" v-model="suv"/>
                            <h3 class="carlabel">Suv / Pickup</h3>
                        </div>
                    </label>
                </div>
            </div>
            <div class="ext-int-choice"> 
                <label class="ext-or-int" id="ext">
                    <div class="ext-int-details">
                        <input type="checkbox" name="exterior" id="exterior" class="invisiblecheckbox" @click="extIntSelect" v-model="exterior"/>
                        <p style="font-size:18px">Exterior</p>
                    </div>
                </label>
                <label class="ext-or-int" id="int"> 
                    <div class="ext-int-details">
                        <input type="checkbox" name="interior" id="interior" class="invisiblecheckbox" @click="extIntSelect" v-model="interior"/>
                        <p style="font-size:18px">Interior</p>
                    </div>
                </label>
            </div>
            <div> 
                <h2 style="font-size: 35px;">Packages</h2>
            </div>
            <div class="packages-choice" id="packages"> 
                <label class="basic-or-premium" id="basiclabel"> 
                    <input type="radio" name="package" id="basic" class="package-choice" @click="packageSelect" v-model="basic"/>
                    <h2>Basic</h2>
                    <h3>Includes: </h3>
                    <div class="exterior-details"> 
                        <p>Exterior</p>
                        <ul style="list-style-type:disc"> 
                            <li>Full Exterior Decomtamination + Hydro Ceramic Suds Shampoo</li>
                            <li>Wheels Treated + Topped With Tire Shine</li>
                            <li>Rims Decontaminated + Protected From Brake Dust</li>
                        </ul>
                    </div>
                    <div class="interior-details"> 
                        <p>Interior</p>
                        <ul style="list-style-type:disc"> 
                            <li>General Vacuum + Decontamination</li>
                            <li>Leather / Cloth / Fabric Treatment</li>
                            <li>Interior Trims + Panels + Door Jams Decontaminated and Detailed</li>
                            <li>Windows Wiped Down Streak-Free</li>
                        </ul>
                    </div>
                </label>   
                <label class="basic-or-premium" id="premiumlabel"> 
                    <input type="radio" name="package" id="premium" class="package-choice" @click="packageSelect" v-model="premium"/>
                    <h2>Premium</h2>
                    <h3 style="margin:10px 10px">Includes: </h3>
                    <div class="exterior-details"> 
                        <p>Exterior</p>
                        <ul style="list-style-type:disc"> 
                            <li>Full Exterior Decontamination + Snow-Foam Shampoo with Hydro Ceramic Suds</li>
                            <li>Full Body Iron Fallout Treatment</li>
                            <li>Full Wheel Treatement (Tire + Rim Face + Barrel)</li>
                            <li>Headlights Protected with UV Ray Coating</li>
                            <li>Finished with Ceramic Wax</li>
                        </ul>
                    </div>
                    <div class="interior-details"> 
                        <p>Interior</p>
                        <ul style="list-style-type:disc"> 
                            <li>Full Shampoo + Extraction Vacuum and Decontamination</li>
                            <li>Floor Mats Treated + Cleaned</li>
                            <li>Leather / Cloth / Fabric Treatment</li>
                            <li>Interior Trims + Panels + Door Jams Decontaminated and Detailed</li>
                            <li>Windows Wiped Down Streak-Free</li>
                            <li>Steam Clean Ventilation System</li>
                        </ul>
                    </div>
                </label>
            </div>
            <div> 
                <h2 style="font-size: 35px;">Add-Ons</h2>
            </div>
            <div class="add-ons"> 
                <label class="add-on-options" id="Paint Correction Label"> 
                    <input type="checkbox" style="display:none" id="Paint Correction" @click="addOnSelect" v-model="paintCorrection"/>
                    <p>Paint Correction</p>
                </label>
                <label class="add-on-options" id="Powder Coating Label">
                    <input type="checkbox" style="display:none" id="Powder Coating" @click="addOnSelect" v-model="powderCoating"/> 
                    <p>Powder Coating</p>
                </label>
                <label class="add-on-options" id="Caliper Painting Label"> 
                    <input type="checkbox" style="display:none" id="Caliper Painting" @click="addOnSelect" v-model="caliperPainting"/> 
                    <p>Caliper Painting</p>
                </label>
                <label class="add-on-options" id="Engine Bay Detail Label"> 
                    <input type="checkbox" style="display:none" id="Engine Bay Detail" @click="addOnSelect" v-model="engineBayDetail"/> 
                    <p>Engine Bay Detail</p>
                </label>
                <label class="add-on-options" id="Headlight Restoration Label"> 
                    <input type="checkbox" style="display:none" id="Headlight Restoration" @click="addOnSelect" v-model="headlightRestoration"/> 
                    <p>Headlight Restoration</p>
                </label>
            </div>
            <div class="additional-info"> 
                <div> 
                    <h2 style="font-size: 35px;">Additional Info</h2>
                </div>
                <input type="text" placeholder="First Name" v-model="firstName"/>
                <input type="text" placeholder="Last Name" v-model="lastName"/>
                <input type="email" placeholder="Email" v-model="email"/>
                <input type="date" placeholder="Date" v-model="date"/>
                <input type="time" placeholder="Time" v-model="time"/>
            </div>
            <input type="submit" value="Book" class="submit"/>
        </div> 
    </form>
</template>

<script>

export default {
    name: 'BookingForm',
    data() {
        return {
            sedan: '',
            suv: '',
            exterior: false,
            interior: false,
            basic: '',
            premium: '',
            paintCorrection: false,
            powderCoating: false,
            caliperPainting: false,
            engineBayDetail: false,
            headlightRestoration: false,
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            time: ''
        }
    },
    methods: {
        vehicleTypeClick() {
            const sedan = document.getElementById('sedan')
            const sedanLabel = document.getElementById('sedanlabel')
            const suv = document.getElementById('suv')
            const suvLabel = document.getElementById('suvlabel')


            if (sedan.checked == true) {
                sedanLabel.style.outline = "solid lightgray"
            }
            if (suv.checked == true) {
                suvLabel.style.outline = "solid lightgray"
            }
            if (sedan.checked == false) {
                sedanLabel.style.outline = "none"
            }
            if (suv.checked == false) {
                suvLabel.style.outline = "none"
            }            
        },
        extIntSelect() {
            const extSelect = document.getElementById('exterior')
            const intSelect = document.getElementById('interior')
            const extLabel = document.getElementById('ext')
            const intLabel = document.getElementById('int')

            const extDetailsCollection = document.getElementsByClassName('exterior-details')
            const intDetailsCollection = document.getElementsByClassName('interior-details')

            if (extSelect.checked == true) {
                extLabel.style.outline = "solid lightgray"
                extDetailsCollection[0].style.display = "block"
                extDetailsCollection[1].style.display = "block"
            }
            if (intSelect.checked == true) {
                intLabel.style.outline = "solid lightgray"
                intDetailsCollection[0].style.display = "block"
                intDetailsCollection[1].style.display = "block"
            }
            if (extSelect.checked == false) {
                extLabel.style.outline = "none"
                extDetailsCollection[0].style.display = "none"
                extDetailsCollection[1].style.display = "none"
            }
            if (intSelect.checked == false) {
                intLabel.style.outline = "none"
                intDetailsCollection[0].style.display = "none"
                intDetailsCollection[1].style.display = "none"
            }

        },
        packageSelect() {
            const basic = document.getElementById('basic')
            const basicLabel = document.getElementById('basiclabel')
            const premium = document.getElementById('premium')
            const premiumLabel = document.getElementById('premiumlabel')

            if (basic.checked == true) {
                basicLabel.style.outline = "solid lightgray"
            }
            if (premium.checked == true) {
                premiumLabel.style.outline = "solid lightgray"
            }
            if (basic.checked == false) {
                basicLabel.style.outline = "none"
            }
            if (premium.checked == false) {
                premiumLabel.style.outline = "none"
            } 
        },
        addOnSelect() {
            const paintCorrectionLabel = document.getElementById('Paint Correction Label')
            const powderCoatingLabel = document.getElementById('Powder Coating Label')
            const caliperPaintingLabel = document.getElementById('Caliper Painting Label')
            const engineBayDetailLabel = document.getElementById('Engine Bay Detail Label')
            const headlightRestorationLabel = document.getElementById('Headlight Restoration Label')

            const paintCorrection = document.getElementById('Paint Correction')
            const powderCoating = document.getElementById('Powder Coating')
            const caliperPainting = document.getElementById('Caliper Painting')
            const engineBayDetail = document.getElementById('Engine Bay Detail')
            const headlightRestoration = document.getElementById('Headlight Restoration')

            if (paintCorrection.checked == true) {
                paintCorrectionLabel.style.outline = "solid lightgray"
            }
            if (powderCoating.checked == true) {
                powderCoatingLabel.style.outline = "solid lightgray"
            }
            if (caliperPainting.checked == true) {
                caliperPaintingLabel.style.outline = "solid lightgray"
            }
            if (engineBayDetail.checked == true) {
                engineBayDetailLabel.style.outline = "solid lightgray"
            }
            if (headlightRestoration.checked == true) {
                headlightRestorationLabel.style.outline = "solid lightgray"
            }


            if (paintCorrection.checked == false) {
                paintCorrectionLabel.style.outline = "none"
            }
            if (powderCoating.checked == false) {
                powderCoatingLabel.style.outline = "none"
            }
            if (caliperPainting.checked == false) {
                caliperPaintingLabel.style.outline = "none"
            }
            if (engineBayDetail.checked == false) {
                engineBayDetailLabel.style.outline = "none"
            }
            if (headlightRestoration.checked == false) {
                headlightRestorationLabel.style.outline = "none"
            }        

        },
        onSubmit(e) {
            e.preventDefault()
            confirm("Are you sure you want to submit?")

            if (this.sedan == "" && this.suv == "") {
                alert("Please select your vehicle type")
                return
            }
            else if (this.exterior == "" && this.interior == "") {
                alert("Please select Exterior or Interior for your detail")
                return
            }
            else if (this.basic == "" && this.premium == "") {
                alert("Please select a package")
            }
            else {
                const newBooking = {
                    sedan: this.sedan,
                    suv: this.suv,
                    exterior: this.exterior,
                    interior: this.interior,
                    basic: this.basic,
                    premium: this.premium,
                    paintCorrection: this.paintCorrection,
                    powderCoating: this.powderCoating,
                    caliperPainting: this.caliperPainting,
                    engineBayDetail: this.engineBayDetail,
                    headlightRestoration: this.headlightRestoration,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    date: this.date,
                    time: this.time
                }
                console.log(newBooking)
                this.$emit('new-booking', newBooking)
                console.log("Submitting")
            }

        }
    }
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    align-items: center;
}
.vehicletyperadio {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 32%;
}
.vehicletypewrap {
    width: 62%;
    height: 250px;
    display: flex;
    flex-direction: row;
}
.vehicletypewrap > div {
    background-color: white;
    margin: 0px;
    margin-right: 10px;
    padding: 0px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
}
img {
    width: 150px;
}
.vehicletypeslabel {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin-right: 5px;
    margin-left: 5px;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
}
.vehicletypeslabel:hover {
    outline: solid lightgray;
    box-shadow: 0px 8px 21px -5px #000000;
}
.vehicle {
    display: none;
}
.carlabel {
    text-align: center;
}
.details {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ext-int-choice {
    display: flex;
    flex-direction: row;
    width: 63%;
    height: 10%;
    align-content: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
.ext-or-int {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-right: 10px;
    margin-left: 10px;
    padding: 5px;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
}

.ext-or-int:hover {
    outline: solid lightgray;
    box-shadow: 0px 8px 21px -5px #000000;
}
.invisiblecheckbox {
    display: none;
}
.packages-choice {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 600px;
    align-content: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
.basic-or-premium {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
    height: 100%;
    margin-right: 10px;
    margin-left: 10px;
    padding: 5px;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
}
.basic-or-premium:hover {
    outline: solid lightgray;
    box-shadow: 0px 8px 21px -5px #000000;
}
.package-choice {
    display: none;
}
.exterior-details {
    display: none;
    padding: 10px;
}
.interior-details {
    display: none;
    padding: 10px;
}
.add-ons {
    display: flex;
    width: 62.5%;
    height: 20%;
}
.add-on-options {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 50%;
    padding: 5px;
    margin: 10px;
    background-color: white;
    border-radius: 10px;
    text-align: center;
}
.add-on-options:hover {
    cursor: pointer;
    outline: solid lightgray;
    box-shadow: 0px 8px 21px -5px #000000;
}

</style>
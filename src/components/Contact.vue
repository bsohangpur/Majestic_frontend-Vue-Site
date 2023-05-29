<template>
  <div class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="md:order-2">
          <!-- Address and Map section -->
          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-1">Address</h3>
            <p>123 Animal Street</p>
            <p>Dubai, UAE</p>
          </div>
          <div class="mb-6">
            <h3 class="text-xl font-semibold mb-1">Map</h3>
            <!-- Replace with your map embed code or component -->
            <iframe
              alt="Map"
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1989837768533!2d55.3125573!3d25.2320463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x952acaa0a4320b8!2sMajestic%20Veterinary%20Clinic!5e0!3m2!1sen!2s!4v1624536345738!5m2!1sen!2s"
              width="500"
              height="350"
              allowFullScreen="true"
              loading="lazy"
              class=""
            ></iframe>
          </div>
        </div>
        <div>
          <h2 class="text-3xl font-bold mb-8">Contact Us</h2>
          <div class="formbold-main-wrapper">
            <div class="formbold-form-wrapper">
              <form @submit.prevent="handleSubmit" class="w-full mx-auto md:order-1">
                <div class="formbold-input-flex">
                  <div>
                    <p v-if="errors.name" class="text-red-500 mt-1 text-xs">
                      {{ errors.name }}
                    </p>
                    <input
                      type="text"
                      v-model.trim="form.name"
                      name="name"
                      id="name"
                      placeholder="Jane"
                      class="formbold-form-input"
                    />
                    <label for="name" class="formbold-form-label">Name</label>
                  </div>
                  <div>
                    <p v-if="errors.email" class="text-red-500 mt-1 text-xs">
                      {{ errors.email }}
                    </p>
                    <input
                      type="email"
                      v-model.trim="form.email"
                      name="email"
                      id="email"
                      placeholder="john@mail.com"
                      class="formbold-form-input"
                    />
                    <label for="email" class="formbold-form-label">Email</label>
                  </div>
                </div>

                <div class="formbold-input-flex">
                  <div>
                    <p v-if="errors.phone" class="text-red-500 mt-1 text-xs">
                      {{ errors.phone }}
                    </p>
                    <input
                      type="text"
                      v-model.trim="form.phone"
                      name="phone"
                      id="phone"
                      placeholder="(319) 555-0115"
                      class="formbold-form-input"
                    />
                    <label for="phone" class="formbold-form-label">Phone</label>
                  </div>
                </div>

                <div class="formbold-textarea">
                  <p v-if="errors.message" class="text-red-500 mt-1 text-xs">
                    {{ errors.message }}
                  </p>
                  <textarea
                    rows="6"
                    v-model.trim="form.message"
                    name="message"
                    id="message"
                    placeholder="Write your message..."
                    class="formbold-form-input"
                  ></textarea>
                  <label for="message" class="formbold-form-label">Message</label>
                </div>
                <button type="submit" class="formbold-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Yup from "yup";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      errors: {},
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required("Name is required"),
          email: Yup.string().email("Invalid email").required("Email is required"),
          phone: Yup.string().required("Phone Number is required"),
          message: Yup.string().required("Message is required"),
        });

        await schema.validate(this.form, { abortEarly: false });

        // Form is valid, handle form submission logic here

        console.log("Form submitted successfully");
      } catch (error) {
        if (error.name === "ValidationError") {
          const errors = {};
          error.inner.forEach((err) => {
            errors[err.path] = err.message;
          });
          this.errors = errors;
        } else {
          console.error(error);
        }
      }
    },
  },
};
</script>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Inter", sans-serif;
}
.formbold-main-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.formbold-form-wrapper {
  margin: 0 auto;
  max-width: 550px;
  width: 100%;
  background: white;
  border-radius: 5px;
  border: gray 1px solid;
  padding: 20px;
}

.formbold-input-flex {
  display: flex;
  gap: 20px;
  margin-bottom: 22px;
}
.formbold-input-flex > div {
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
}
.formbold-textarea {
  display: flex;
  flex-direction: column-reverse;
}

.formbold-form-input {
  width: 100%;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid #dde3ec;
  background: #ffffff;
  font-weight: 500;
  font-size: 16px;
  color: #07074d;
  outline: none;
  resize: none;
}
.formbold-form-input::placeholder {
  color: #536387;
}
.formbold-form-input:focus {
  border-color: #6a64f1;
}
.formbold-form-label {
  color: #07074d;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  display: block;
  margin-bottom: 18px;
}
.formbold-form-input:focus + .formbold-form-label {
  color: #6a64f1;
}

.formbold-input-file {
  margin-top: 30px;
}
.formbold-input-file input[type="file"] {
  position: absolute;
  top: 6px;
  left: 0;
  z-index: -1;
}
.formbold-input-file .formbold-input-label {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
}

.formbold-filename-wrapper {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 22px;
}
.formbold-filename {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 24px;
  color: #536387;
}
.formbold-filename svg {
  cursor: pointer;
}

.formbold-btn {
  font-size: 16px;
  border-radius: 5px;
  padding: 12px 25px;
  border: none;
  font-weight: 500;
  background-color: #6a64f1;
  color: white;
  cursor: pointer;
  margin-top: 25px;
}
.formbold-btn:hover {
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
}
</style>

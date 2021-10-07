<script setup lang="ts">
    import { ref } from "vue"
    import { nanoid } from "nanoid"

    const emit = defineEmits({
        badValue: () => true
    })

    const students = ref([
        { name: "oscar", id: nanoid() },
        { name: "kral", id: nanoid() },
        { name: "alaca", id: nanoid() },
        { name: "tarçın", id: nanoid() },
        { name: "kaptan", id: nanoid() }
    ])

    const newStudent = ref("")

    const addStudent = () => {
        if (newStudent.value.trim()) {
            const id = nanoid()
            students.value = [{ name: newStudent.value, id }, ...students.value]
            newStudent.value = ""
        } else {
            emit("badValue")
        }
    }

    const deleteStudent = (id: string) => {
        students.value = students.value.filter((student) => student.id !== id)
    }
</script>

<template>
    <div class="students">
        <input
            type="text"
            v-model="newStudent"
            @keyup.enter="addStudent"
            placeholder="Add a new student..."
        />
        <transition name="switch" mode="out-in">
            <div v-if="students.length">
                <transition-group tag="ul" name="list" appear>
                    <li
                        v-for="student in students"
                        :key="student.id"
                        @click="deleteStudent(student.id)"
                    >
                        {{ student.name }}
                    </li>
                </transition-group>
            </div>
            <div v-else>Woohoo, no students left!</div>
        </transition>
    </div>
</template>

<style lang="scss">
    .students {
        max-width: 400px;
        margin: 20px auto;
        position: relative;

        input {
            width: 100%;
            padding: 12px;
            border: 1px solid #eee;
            border-radius: 10px;
            box-sizing: border-box;
            margin-bottom: 20px;
        }

        ul {
            position: relative;
            padding: 0;

            li {
                list-style-type: none;
                background-color: white;
                box-shadow: 1px 3px 5px rgba(black, 0.1);
                border-radius: 10px;
                box-sizing: border-box;
                display: block;
                margin-bottom: 10px;
                padding: 10px;
                width: 100%;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

    .list-enter-from {
        opacity: 0;
        transform: translateX(-100px);
    }
    .list-enter-to {
        opacity: 1;
        transform: translateX(0);
    }
    .list-enter-active {
        transition: all 300ms ease;
    }
    .list-leave-from {
        opacity: 1;
        transform: translateX(0);
    }
    .list-leave-to {
        opacity: 0;
        transform: translateX(-100px);
    }
    .list-leave-active {
        transition: all 300ms ease;
        position: absolute;
    }
    .list-move {
        transition: all 500ms ease;
    }

    .switch-enter-from,
    .switch-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }
    .switch-enter-active,
    .switch-leave-active {
        transition: all 300ms ease 300ms;
    }
</style>

//https://api.github.com/repos
//https://api.stackexchange.com/2.2/tags/vue.js/info?site=stackoverflow
import axios from "axios";

export function fetchAllData() {
    return Promise.all(repository_list.map(repo => axios.get("https://api.github.com/repos" + repo.github)
        .then(response => responseTransform(response.data))
        .catch(err => console.error(err))));
}

const repository_list = [
    {
        github: '/spring-projects/spring-boot',
    },
    {
        github: '/facebook/react'
    },
    {
        github: '/angular/angular.js'
    },
    {
        github: '/rails/rails'
    },
    {
        github: '/angular/angular'
    },
    {
        github: '/vuejs/vue'
    },
    {
        github: '/django/django'
    },
    {
        github: '/laravel/laravel'
    },
    {
        github: '/aspnet/AspNetCore'
    },
    {
        github: '/spring-projects/spring-framework'
    },
    {
        github: '/strongloop/express'
    },
    {
        github: '/spring-projects/spring-framework'
    },
    {
        github: '/meteor/meteor'
    },
    {
        github: '/ionic-team/ionic'
    },
    {
        github: '/gin-gonic/gin'
    },
    {
        github: '/nestjs/nest'
    },
    {
        github: '/nuxt/nuxt.js'
    },
    {
        github: '/symfony/symfony'
    },
    {
        github: '/laravel/framework'
    },
    {
        github: '/vapor/vapor'
    },
    {
        github: '/kataras/iris'
    }
]

function responseTransform(repo) {
    return {
        full_name: repo.full_name,
        stargazers_count: repo.stargazers_count
    }
}


/*stackoverflow_count: axios.get("https://api.stackexchange.com/2.2/tags/" + repo.full_name + "/info?site=stackoverflow")
    .then(response => console.log(response.data))
    .catch(err => console.error(err))*/
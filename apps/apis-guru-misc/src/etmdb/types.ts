declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/cinema-detail/search/:cinema_name': {
      $get: {
        input: { param: { cinema_name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/cinema-schedule/search/:movie_title': {
      $get: {
        input: { param: { movie_title: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/cinema-schedule/searchall/:param': {
      $get: { input: { param: { param: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/cinema-shedule-showtime/search/:movie_title': {
      $get: {
        input: { param: { movie_title: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/cinema-shedule-showtime/searchall/:param': {
      $get: { input: { param: { param: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/cinema/search/:id': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/company-credits/search/:movie_title': {
      $get: {
        input: { param: { movie_title: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/company-credits/searchall/:param': {
      $get: { input: { param: { param: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/company/search/:company_name': {
      $get: {
        input: { param: { company_name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/filmography-type/search/:filmography_description': {
      $get: {
        input: { param: { filmography_description: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/filmography/search/:movie_title': {
      $get: {
        input: { param: { movie_title: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/filmography/searchall/:param': {
      $get: { input: { param: { param: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/genre-type/search/:genre_description': {
      $get: {
        input: { param: { genre_description: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/genre/search/:movie_title': {
      $get: {
        input: { param: { movie_title: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/genre/searchall/:movie_genre_type': {
      $get: {
        input: { param: { movie_genre_type: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/job/search/:job_title': {
      $get: {
        input: { param: { job_title: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/job/searchall/:company_name': {
      $get: {
        input: { param: { company_name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/media/search/:movie_title': {
      $get: {
        input: { param: { movie_title: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/media/searchall/:user': {
      $get: { input: { param: { user: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/movie-cast/search/:movie_title': {
      $get: {
        input: { param: { movie_title: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/movie-cast/searchall/:param': {
      $get: { input: { param: { param: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/movie/search/:movie_title': {
      $get: {
        input: { param: { movie_title: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/news/search/:title': {
      $get: { input: { param: { title: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/people/search/:user': {
      $get: { input: { param: { user: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/showtime/searchall/:param': {
      $get: { input: { param: { param: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/watchlist/search/:movie_title': {
      $get: {
        input: { param: { movie_title: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/watchlist/searchall/:param': {
      $get: { input: { param: { param: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes

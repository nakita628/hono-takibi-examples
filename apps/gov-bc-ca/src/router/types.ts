declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/directions.:outputFormat': {
      $get: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/distance.:outputFormat': {
      $get: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/distance/betweenPairs.:outputFormat': {
      $get: {
        input: { param: { outputFormat: 'json' | 'html' } } & {
          query: {
            fromPoints: string
            toPoints: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
            maxPairs?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { outputFormat: 'json' | 'html' } } & {
          query: {
            fromPoints: string
            toPoints: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
            maxPairs?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/optimalDirections.:outputFormat': {
      $get: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/optimalRoute.:outputFormat': {
      $get: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/route.:outputFormat': {
      $get: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/truck/directions.:outputFormat': {
      $get: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            truckRouteMultiplier?: number | undefined
            partition?: string | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            truckRouteMultiplier?: number | undefined
            partition?: string | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/truck/distance.:outputFormat': {
      $get: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            truckRouteMultiplier?: number | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/truck/distance/betweenPairs.:outputFormat': {
      $get: {
        input: { param: { outputFormat: 'json' | 'html' } } & {
          query: {
            fromPoints: string
            toPoints: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
            maxPairs?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { outputFormat: 'json' | 'html' } } & {
          query: {
            fromPoints: string
            toPoints: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
            maxPairs?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/truck/optimalDirections.:outputFormat': {
      $get: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            truckRouteMultiplier?: number | undefined
            partition?: string | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            truckRouteMultiplier?: number | undefined
            partition?: string | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/truck/optimalRoute.:outputFormat': {
      $get: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            truckRouteMultiplier?: number | undefined
            partition?: string | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            truckRouteMultiplier?: number | undefined
            partition?: string | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/truck/route.:outputFormat': {
      $get: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            truckRouteMultiplier?: number | undefined
            partition?: string | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { outputFormat: 'json' | 'kml' | 'html' } } & {
          query: {
            points: string
            outputSRS?: 4326 | 4269 | 3005 | 26907 | 26908 | 26909 | 26910 | 26911 | undefined
            criteria?: 'shortest' | 'fastest' | undefined
            distanceUnit?: 'km' | 'mi' | undefined
            roundTrip?: boolean | undefined
            departure?: string | undefined
            correctSide?: boolean | undefined
            truckRouteMultiplier?: number | undefined
            partition?: string | undefined
            disable?: string | undefined
            routeDescription?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes

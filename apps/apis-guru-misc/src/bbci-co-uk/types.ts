type Ibl = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/atoz/:letter/programmes': {
      $get: {
        input: { param: { letter: string } } & {
          query: {
            rights: 'mobile' | 'tv' | 'web'
            page: bigint
            per_page: bigint
            initial_child_count: number
            sort: 'title'
            sort_direction: 'asc' | 'desc'
            availability: 'all' | 'available'
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories': {
      $get: {
        input: { query: { lang: 'en' | 'cy' | 'ga' | 'gd' | 'pi' } }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories/:category': {
      $get: {
        input: { param: { category: string } } & {
          query: { lang: 'en' | 'cy' | 'ga' | 'gd' | 'pi' }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories/:category/episodes': {
      $get: {
        input: { param: { category: string } } & {
          query: {
            lang: 'en' | 'cy' | 'ga' | 'gd' | 'pi'
            rights: 'mobile' | 'tv' | 'web'
            availability: 'all' | 'available'
            page: bigint
            per_page: bigint
            sort?: 'recent' | 'popular' | undefined
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories/:category/highlights': {
      $get: {
        input: { param: { category: string } } & {
          query: {
            lang: 'en' | 'cy' | 'ga' | 'gd' | 'pi'
            rights: 'mobile' | 'tv' | 'web'
            availability: 'all' | 'available'
            mixin?: 'live' | 'promotions' | undefined
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories/:category/programmes': {
      $get: {
        input: { param: { category: string } } & {
          query: {
            lang: 'en' | 'cy' | 'ga' | 'gd' | 'pi'
            rights: 'mobile' | 'tv' | 'web'
            availability: 'all' | 'available'
            page: bigint
            per_page: bigint
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels': {
      $get: {
        input: { query: { region?: string | undefined; lang: 'en' | 'cy' | 'ga' | 'gd' | 'pi' } }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channel/broadcasts': {
      $get: {
        input: { param: { channel: string } } & {
          query: {
            lang: 'en' | 'cy' | 'ga' | 'gd' | 'pi'
            rights: 'mobile' | 'tv' | 'web'
            availability: 'all' | 'available'
            mixin?: 'live' | 'promotions' | undefined
            per_page: bigint
            from?: string | undefined
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channel/highlights': {
      $get: {
        input: { param: { channel: string } } & {
          query: {
            lang: 'en' | 'cy' | 'ga' | 'gd' | 'pi'
            rights: 'mobile' | 'tv' | 'web'
            availability: 'all' | 'available'
            live?: boolean | undefined
            mixin?: 'live' | 'promotions' | undefined
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channel/programmes': {
      $get: {
        input: { param: { channel: string } } & {
          query: {
            lang: 'en' | 'cy' | 'ga' | 'gd' | 'pi'
            rights: 'mobile' | 'tv' | 'web'
            availability: 'all' | 'available'
            page: bigint
            per_page: bigint
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channel/schedule/:date': {
      $get: {
        input: { param: { channel: string; date: string } } & {
          query: {
            lang: 'en' | 'cy' | 'ga' | 'gd' | 'pi'
            rights: 'mobile' | 'tv' | 'web'
            availability: 'all' | 'available'
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/clips/:pid': {
      $get: {
        input: { param: { pid: string } } & {
          query: { rights: 'mobile' | 'tv' | 'web'; availability: 'all' | 'available' }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/episodes/:pid': {
      $get: {
        input: { param: { pid: string } } & {
          query: {
            rights: 'mobile' | 'tv' | 'web'
            availability: 'all' | 'available'
            mixin?: 'live' | 'promotions' | undefined
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/episodes/:pid/next': {
      $get: {
        input: { param: { pid: string } } & {
          query: { rights: 'mobile' | 'tv' | 'web'; availability: 'all' | 'available' }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/episodes/:pid/postrolls': {
      $get: {
        input: { param: { pid: string } } & {
          query: { rights: 'mobile' | 'tv' | 'web'; availability: 'all' | 'available' }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/episodes/:pid/prerolls': {
      $get: {
        input: { param: { pid: string } } & {
          query: { rights: 'mobile' | 'tv' | 'web'; availability: 'all' | 'available' }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/episodes/:pid/recommendations': {
      $get: {
        input: { param: { pid: string } } & {
          query: {
            rights: 'mobile' | 'tv' | 'web'
            availability: 'all' | 'available'
            page: bigint
            per_page: bigint
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/popular/episodes': {
      $get: {
        input: {
          query: {
            rights: 'mobile' | 'tv' | 'web'
            page: bigint
            per_page: bigint
            initial_child_count: number
            sort: string
            sort_direction: 'asc' | 'desc'
            availability: 'all' | 'available'
            mixin?: 'live' | 'promotions' | undefined
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:pid/episodes': {
      $get: {
        input: { param: { pid: string } } & {
          query: {
            rights: 'mobile' | 'tv' | 'web'
            page: bigint
            per_page: bigint
            initial_child_count: number
            sort: string
            sort_direction: 'asc' | 'desc'
            availability: 'all' | 'available'
            mixin?: 'live' | 'promotions' | undefined
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/home/highlights': {
      $get: {
        input: {
          query: {
            lang: 'en' | 'cy' | 'ga' | 'gd' | 'pi'
            rights: 'mobile' | 'tv' | 'web'
            availability: 'all' | 'available'
            mixin?: 'live' | 'promotions' | undefined
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/programmes/:pid': {
      $get: {
        input: { param: { pid: string } } & {
          query: {
            rights: 'mobile' | 'tv' | 'web'
            availability: 'all' | 'available'
            initial_child_count: number
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/programmes/:pid/episodes': {
      $get: {
        input: { param: { pid: string } } & {
          query: {
            rights: 'mobile' | 'tv' | 'web'
            availability: 'all' | 'available'
            initial_child_count: number
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/regions': {
      $get: {
        input: { query: { lang: 'en' | 'cy' | 'ga' | 'gd' | 'pi' } }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schema/ibl.json': { $get: { input: {}; output: Ibl; outputFormat: 'json'; status: 200 } }
  } & {
    '/search': {
      $get: {
        input: {
          query: {
            q: string
            lang: 'en' | 'cy' | 'ga' | 'gd' | 'pi'
            rights: 'mobile' | 'tv' | 'web'
            availability: 'all' | 'available'
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search-suggest': {
      $get: {
        input: {
          query: {
            q: string
            lang: 'en' | 'cy' | 'ga' | 'gd' | 'pi'
            rights: 'mobile' | 'tv' | 'web'
            availability: 'all' | 'available'
          }
        }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & { '/status': { $get: { input: {}; output: Ibl; outputFormat: 'json'; status: 200 } } } & {
    '/user/purchases': {
      $get: {
        input: { query: { identity_cookie: number } }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/recommendations': {
      $get: {
        input: { query: { identity_cookie: number } }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/watching': {
      $get: {
        input: { query: { identity_cookie: number } }
        output: Ibl
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

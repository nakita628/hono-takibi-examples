type Antenna = {
  ant?: number | undefined
  azi?: number | undefined
  hbw?: number | undefined
  pol?: 'h' | 'v' | undefined
  tlt?: number | undefined
  txg?: number | undefined
  txl?: number | undefined
  vbw?: number | undefined
}
type Environment = { cll?: number | undefined; clm?: number | undefined; mat?: number | undefined }
type Model = {
  cli?: number | undefined
  ked?: number | undefined
  pe?: number | undefined
  pm?: number | undefined
  rel?: number | undefined
  ter?: number | undefined
}
type Output = {
  ber?: number | undefined
  col?: string | undefined
  mod?: number | undefined
  nf?: number | undefined
  out?: number | undefined
  rad?: number | undefined
  res?: number | undefined
  units?: 'metric' | 'imperial' | undefined
}
type Receiver = {
  alt?: number | undefined
  lat?: number | undefined
  lon?: number | undefined
  rxg?: number | undefined
  rxs?: number | undefined
}
type Transmitter = {
  alt?: number | undefined
  bwi?: number | undefined
  frq?: number | undefined
  lat?: number | undefined
  lon?: number | undefined
  txw?: number | undefined
}
type Feature = {
  geometry?: string | undefined
  properties?: string | undefined
  type?: string | undefined
}
type Point = { alt?: number | undefined; lat?: number | undefined; lon?: number | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/archive/delete': {
      $get: { input: { query: { cid: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/archive/delete/network': {
      $get: { input: { query: { nid: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/archive/export': {
      $get: {
        input: { query: { file: string; fmt: 'kml' | 'kml' | 'kmzppa' | 'shp' | 'tiff' } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/archive/list': {
      $get: {
        input: {
          query: {
            n?: number | undefined
            e?: number | undefined
            s?: number | undefined
            w?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/area': {
      $post: {
        input: {
          json: {
            antenna?: Antenna | undefined
            environment?: Environment | undefined
            model?: Model | undefined
            network?: string | undefined
            output?: Output | undefined
            receiver?: Receiver | undefined
            site?: string | undefined
            transmitter?: Transmitter | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/clutter/add': {
      $post: {
        input: {
          json: {
            features?: Feature[] | undefined
            name?: string | undefined
            type?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/interference': {
      $get: {
        input: { query: { network: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/mesh': {
      $get: {
        input: { query: { network: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/network': {
      $get: {
        input: {
          query: {
            net: string
            nam: string
            lat: number
            lon: number
            alt: number
            rxg?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/path': {
      $post: {
        input: {
          json: {
            antenna?: Antenna | undefined
            environment?: Environment | undefined
            model?: Model | undefined
            network?: string | undefined
            output?: Output | undefined
            receiver?: Receiver | undefined
            site?: string | undefined
            transmitter?: Transmitter | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/points': {
      $post: {
        input: {
          json: {
            antenna?: Antenna | undefined
            environment?: Environment | undefined
            model?: Model | undefined
            network?: string | undefined
            output?: Output | undefined
            points?: Point[] | undefined
            receiver?: Receiver | undefined
            site?: string | undefined
            transmitter?: Transmitter | undefined
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

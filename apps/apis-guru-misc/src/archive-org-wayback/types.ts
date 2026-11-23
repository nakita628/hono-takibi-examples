type Snapshot = {
  status?: number | undefined
  timestamp?: string | undefined
  url?: string | undefined
}
type ArchivedResult = {
  snapshot: Snapshot
  tag?: string | undefined
  timestamp: string
  url: string
}
type AvailabilityResults = { results: ArchivedResult[] }
type Error = { code?: number | undefined; message?: string | undefined }
type AvailabilityRequest = {
  closest?: 'either' | 'after' | 'before' | undefined
  tag?: string | undefined
  timestamp?: string | undefined
  url: string
}
type AvailabilityRequests = AvailabilityRequest[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/wayback/v1/available': {
      $get:
        | {
            input: {
              query: {
                url: string
                timestamp?: string | undefined
                callback?: string | undefined
                timeout?: number | undefined
                closest?: 'either' | 'before' | 'after' | undefined
                status_code?:
                  | 200
                  | 201
                  | 202
                  | 203
                  | 204
                  | 205
                  | 206
                  | 300
                  | 301
                  | 302
                  | 303
                  | 304
                  | 305
                  | 306
                  | 307
                  | 308
                  | 400
                  | 401
                  | 402
                  | 403
                  | 404
                  | 405
                  | 406
                  | 407
                  | 408
                  | 409
                  | 410
                  | 411
                  | 412
                  | 413
                  | 414
                  | 415
                  | 416
                  | 417
                  | 418
                  | 421
                  | 426
                  | 428
                  | 429
                  | 431
                  | 500
                  | 501
                  | 502
                  | 503
                  | 504
                  | 505
                  | 506
                  | 507
                  | 511
                  | undefined
                tag?: string | undefined
              }
            }
            output: AvailabilityResults
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                url: string
                timestamp?: string | undefined
                callback?: string | undefined
                timeout?: number | undefined
                closest?: 'either' | 'before' | 'after' | undefined
                status_code?:
                  | 200
                  | 201
                  | 202
                  | 203
                  | 204
                  | 205
                  | 206
                  | 300
                  | 301
                  | 302
                  | 303
                  | 304
                  | 305
                  | 306
                  | 307
                  | 308
                  | 400
                  | 401
                  | 402
                  | 403
                  | 404
                  | 405
                  | 406
                  | 407
                  | 408
                  | 409
                  | 410
                  | 411
                  | 412
                  | 413
                  | 414
                  | 415
                  | 416
                  | 417
                  | 418
                  | 421
                  | 426
                  | 428
                  | 429
                  | 431
                  | 500
                  | 501
                  | 502
                  | 503
                  | 504
                  | 505
                  | 506
                  | 507
                  | 511
                  | undefined
                tag?: string | undefined
              }
            }
            output: AvailabilityResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                url: string
                timestamp?: string | undefined
                callback?: string | undefined
                timeout?: number | undefined
                closest?: 'either' | 'before' | 'after' | undefined
                status_code?:
                  | 200
                  | 201
                  | 202
                  | 203
                  | 204
                  | 205
                  | 206
                  | 300
                  | 301
                  | 302
                  | 303
                  | 304
                  | 305
                  | 306
                  | 307
                  | 308
                  | 400
                  | 401
                  | 402
                  | 403
                  | 404
                  | 405
                  | 406
                  | 407
                  | 408
                  | 409
                  | 410
                  | 411
                  | 412
                  | 413
                  | 414
                  | 415
                  | 416
                  | 417
                  | 418
                  | 421
                  | 426
                  | 428
                  | 429
                  | 431
                  | 500
                  | 501
                  | 502
                  | 503
                  | 504
                  | 505
                  | 506
                  | 507
                  | 511
                  | undefined
                tag?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                url: string
                timestamp?: string | undefined
                callback?: string | undefined
                timeout?: number | undefined
                closest?: 'either' | 'before' | 'after' | undefined
                status_code?:
                  | 200
                  | 201
                  | 202
                  | 203
                  | 204
                  | 205
                  | 206
                  | 300
                  | 301
                  | 302
                  | 303
                  | 304
                  | 305
                  | 306
                  | 307
                  | 308
                  | 400
                  | 401
                  | 402
                  | 403
                  | 404
                  | 405
                  | 406
                  | 407
                  | 408
                  | 409
                  | 410
                  | 411
                  | 412
                  | 413
                  | 414
                  | 415
                  | 416
                  | 417
                  | 418
                  | 421
                  | 426
                  | 428
                  | 429
                  | 431
                  | 500
                  | 501
                  | 502
                  | 503
                  | 504
                  | 505
                  | 506
                  | 507
                  | 511
                  | undefined
                tag?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                url: string
                timestamp?: string | undefined
                callback?: string | undefined
                timeout?: number | undefined
                closest?: 'either' | 'before' | 'after' | undefined
                status_code?:
                  | 200
                  | 201
                  | 202
                  | 203
                  | 204
                  | 205
                  | 206
                  | 300
                  | 301
                  | 302
                  | 303
                  | 304
                  | 305
                  | 306
                  | 307
                  | 308
                  | 400
                  | 401
                  | 402
                  | 403
                  | 404
                  | 405
                  | 406
                  | 407
                  | 408
                  | 409
                  | 410
                  | 411
                  | 412
                  | 413
                  | 414
                  | 415
                  | 416
                  | 417
                  | 418
                  | 421
                  | 426
                  | 428
                  | 429
                  | 431
                  | 500
                  | 501
                  | 502
                  | 503
                  | 504
                  | 505
                  | 506
                  | 507
                  | 511
                  | undefined
                tag?: string | undefined
              }
            } & { json: AvailabilityRequests } & { form: AvailabilityRequests }
            output: AvailabilityResults
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                url: string
                timestamp?: string | undefined
                callback?: string | undefined
                timeout?: number | undefined
                closest?: 'either' | 'before' | 'after' | undefined
                status_code?:
                  | 200
                  | 201
                  | 202
                  | 203
                  | 204
                  | 205
                  | 206
                  | 300
                  | 301
                  | 302
                  | 303
                  | 304
                  | 305
                  | 306
                  | 307
                  | 308
                  | 400
                  | 401
                  | 402
                  | 403
                  | 404
                  | 405
                  | 406
                  | 407
                  | 408
                  | 409
                  | 410
                  | 411
                  | 412
                  | 413
                  | 414
                  | 415
                  | 416
                  | 417
                  | 418
                  | 421
                  | 426
                  | 428
                  | 429
                  | 431
                  | 500
                  | 501
                  | 502
                  | 503
                  | 504
                  | 505
                  | 506
                  | 507
                  | 511
                  | undefined
                tag?: string | undefined
              }
            } & { json: AvailabilityRequests } & { form: AvailabilityRequests }
            output: AvailabilityResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                url: string
                timestamp?: string | undefined
                callback?: string | undefined
                timeout?: number | undefined
                closest?: 'either' | 'before' | 'after' | undefined
                status_code?:
                  | 200
                  | 201
                  | 202
                  | 203
                  | 204
                  | 205
                  | 206
                  | 300
                  | 301
                  | 302
                  | 303
                  | 304
                  | 305
                  | 306
                  | 307
                  | 308
                  | 400
                  | 401
                  | 402
                  | 403
                  | 404
                  | 405
                  | 406
                  | 407
                  | 408
                  | 409
                  | 410
                  | 411
                  | 412
                  | 413
                  | 414
                  | 415
                  | 416
                  | 417
                  | 418
                  | 421
                  | 426
                  | 428
                  | 429
                  | 431
                  | 500
                  | 501
                  | 502
                  | 503
                  | 504
                  | 505
                  | 506
                  | 507
                  | 511
                  | undefined
                tag?: string | undefined
              }
            } & { json: AvailabilityRequests } & { form: AvailabilityRequests }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                url: string
                timestamp?: string | undefined
                callback?: string | undefined
                timeout?: number | undefined
                closest?: 'either' | 'before' | 'after' | undefined
                status_code?:
                  | 200
                  | 201
                  | 202
                  | 203
                  | 204
                  | 205
                  | 206
                  | 300
                  | 301
                  | 302
                  | 303
                  | 304
                  | 305
                  | 306
                  | 307
                  | 308
                  | 400
                  | 401
                  | 402
                  | 403
                  | 404
                  | 405
                  | 406
                  | 407
                  | 408
                  | 409
                  | 410
                  | 411
                  | 412
                  | 413
                  | 414
                  | 415
                  | 416
                  | 417
                  | 418
                  | 421
                  | 426
                  | 428
                  | 429
                  | 431
                  | 500
                  | 501
                  | 502
                  | 503
                  | 504
                  | 505
                  | 506
                  | 507
                  | 511
                  | undefined
                tag?: string | undefined
              }
            } & { json: AvailabilityRequests } & { form: AvailabilityRequests }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes

type Infos = { [x: string]: unknown }
type Items = { [x: string]: unknown }
type Netlicensing = { infos?: Infos | undefined; items?: Items | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/license': {
      $get:
        | { input: {}; output: Netlicensing[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Netlicensing[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: {
              json: {
                active: boolean
                currency?: string | undefined
                hidden?: boolean | undefined
                licenseTemplateNumber: string
                licenseeNumber: string
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            } & {
              form: {
                active: boolean
                currency?: string | undefined
                hidden?: boolean | undefined
                licenseTemplateNumber: string
                licenseeNumber: string
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                active: boolean
                currency?: string | undefined
                hidden?: boolean | undefined
                licenseTemplateNumber: string
                licenseeNumber: string
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            } & {
              form: {
                active: boolean
                currency?: string | undefined
                hidden?: boolean | undefined
                licenseTemplateNumber: string
                licenseeNumber: string
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                active: boolean
                currency?: string | undefined
                hidden?: boolean | undefined
                licenseTemplateNumber: string
                licenseeNumber: string
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            } & {
              form: {
                active: boolean
                currency?: string | undefined
                hidden?: boolean | undefined
                licenseTemplateNumber: string
                licenseeNumber: string
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                active: boolean
                currency?: string | undefined
                hidden?: boolean | undefined
                licenseTemplateNumber: string
                licenseeNumber: string
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            } & {
              form: {
                active: boolean
                currency?: string | undefined
                hidden?: boolean | undefined
                licenseTemplateNumber: string
                licenseeNumber: string
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                active: boolean
                currency?: string | undefined
                hidden?: boolean | undefined
                licenseTemplateNumber: string
                licenseeNumber: string
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            } & {
              form: {
                active: boolean
                currency?: string | undefined
                hidden?: boolean | undefined
                licenseTemplateNumber: string
                licenseeNumber: string
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              json: {
                active: boolean
                currency?: string | undefined
                hidden?: boolean | undefined
                licenseTemplateNumber: string
                licenseeNumber: string
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            } & {
              form: {
                active: boolean
                currency?: string | undefined
                hidden?: boolean | undefined
                licenseTemplateNumber: string
                licenseeNumber: string
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/license/:licenseNumber': {
      $delete:
        | {
            input: { param: { licenseNumber: string } }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { licenseNumber: string } }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { licenseNumber: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { licenseNumber: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { licenseNumber: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { licenseNumber: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { licenseNumber: string } }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { licenseNumber: string } }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { licenseNumber: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { licenseNumber: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { licenseNumber: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { licenseNumber: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { licenseNumber: string } } & {
              json: {
                active?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { licenseNumber: string } } & {
              json: {
                active?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { licenseNumber: string } } & {
              json: {
                active?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { licenseNumber: string } } & {
              json: {
                active?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { licenseNumber: string } } & {
              json: {
                active?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { licenseNumber: string } } & {
              json: {
                active?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                parentfeature?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                startDate?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
                usedQuantity?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/licensee': {
      $get:
        | { input: {}; output: Netlicensing[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Netlicensing[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: {
              json: {
                active: boolean
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                productNumber: string
              }
            } & {
              form: {
                active: boolean
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                productNumber: string
              }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                active: boolean
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                productNumber: string
              }
            } & {
              form: {
                active: boolean
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                productNumber: string
              }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                active: boolean
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                productNumber: string
              }
            } & {
              form: {
                active: boolean
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                productNumber: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                active: boolean
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                productNumber: string
              }
            } & {
              form: {
                active: boolean
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                productNumber: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              json: {
                active: boolean
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                productNumber: string
              }
            } & {
              form: {
                active: boolean
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                productNumber: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                active: boolean
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                productNumber: string
              }
            } & {
              form: {
                active: boolean
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                productNumber: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              json: {
                active: boolean
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                productNumber: string
              }
            } & {
              form: {
                active: boolean
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
                productNumber: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/licensee/:licenseeNumber': {
      $delete:
        | {
            input: { param: { licenseeNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { licenseeNumber: string } }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { licenseeNumber: string } }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { licenseeNumber: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { licenseeNumber: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { licenseeNumber: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { licenseeNumber: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { licenseeNumber: string } } & {
              json: {
                active?: boolean | undefined
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: {
                active?: boolean | undefined
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: {
                active?: boolean | undefined
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: {
                active?: boolean | undefined
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: {
                active?: boolean | undefined
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: {
                active?: boolean | undefined
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: {
                active?: boolean | undefined
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                markedForTransfer?: boolean | undefined
                name?: string | undefined
                number?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/licensee/:licenseeNumber/transfer': {
      $post:
        | {
            input: { param: { licenseeNumber: string } } & {
              json: { sourceLicenseeNumber: string }
            } & { form: { sourceLicenseeNumber: string } }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: { sourceLicenseeNumber: string }
            } & { form: { sourceLicenseeNumber: string } }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: { sourceLicenseeNumber: string }
            } & { form: { sourceLicenseeNumber: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: { sourceLicenseeNumber: string }
            } & { form: { sourceLicenseeNumber: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: { sourceLicenseeNumber: string }
            } & { form: { sourceLicenseeNumber: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: { sourceLicenseeNumber: string }
            } & { form: { sourceLicenseeNumber: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/licensee/:licenseeNumber/validate': {
      $post:
        | {
            input: { param: { licenseeNumber: string } } & {
              json: {
                action?: 'checkOut' | 'checkIn' | undefined
                licenseeName?: string | undefined
                nodeSecret?: string | undefined
                productModuleNumber?: string | undefined
                productNumber?: string | undefined
                sessionId?: string | undefined
              }
            } & {
              form: {
                action?: 'checkOut' | 'checkIn' | undefined
                licenseeName?: string | undefined
                nodeSecret?: string | undefined
                productModuleNumber?: string | undefined
                productNumber?: string | undefined
                sessionId?: string | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: {
                action?: 'checkOut' | 'checkIn' | undefined
                licenseeName?: string | undefined
                nodeSecret?: string | undefined
                productModuleNumber?: string | undefined
                productNumber?: string | undefined
                sessionId?: string | undefined
              }
            } & {
              form: {
                action?: 'checkOut' | 'checkIn' | undefined
                licenseeName?: string | undefined
                nodeSecret?: string | undefined
                productModuleNumber?: string | undefined
                productNumber?: string | undefined
                sessionId?: string | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: {
                action?: 'checkOut' | 'checkIn' | undefined
                licenseeName?: string | undefined
                nodeSecret?: string | undefined
                productModuleNumber?: string | undefined
                productNumber?: string | undefined
                sessionId?: string | undefined
              }
            } & {
              form: {
                action?: 'checkOut' | 'checkIn' | undefined
                licenseeName?: string | undefined
                nodeSecret?: string | undefined
                productModuleNumber?: string | undefined
                productNumber?: string | undefined
                sessionId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: {
                action?: 'checkOut' | 'checkIn' | undefined
                licenseeName?: string | undefined
                nodeSecret?: string | undefined
                productModuleNumber?: string | undefined
                productNumber?: string | undefined
                sessionId?: string | undefined
              }
            } & {
              form: {
                action?: 'checkOut' | 'checkIn' | undefined
                licenseeName?: string | undefined
                nodeSecret?: string | undefined
                productModuleNumber?: string | undefined
                productNumber?: string | undefined
                sessionId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: {
                action?: 'checkOut' | 'checkIn' | undefined
                licenseeName?: string | undefined
                nodeSecret?: string | undefined
                productModuleNumber?: string | undefined
                productNumber?: string | undefined
                sessionId?: string | undefined
              }
            } & {
              form: {
                action?: 'checkOut' | 'checkIn' | undefined
                licenseeName?: string | undefined
                nodeSecret?: string | undefined
                productModuleNumber?: string | undefined
                productNumber?: string | undefined
                sessionId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { licenseeNumber: string } } & {
              json: {
                action?: 'checkOut' | 'checkIn' | undefined
                licenseeName?: string | undefined
                nodeSecret?: string | undefined
                productModuleNumber?: string | undefined
                productNumber?: string | undefined
                sessionId?: string | undefined
              }
            } & {
              form: {
                action?: 'checkOut' | 'checkIn' | undefined
                licenseeName?: string | undefined
                nodeSecret?: string | undefined
                productModuleNumber?: string | undefined
                productNumber?: string | undefined
                sessionId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/licensetemplate': {
      $get:
        | { input: {}; output: Netlicensing[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Netlicensing[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: {
              json: {
                active: boolean
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType: string
                maxSessions?: string | undefined
                name: string
                number?: string | undefined
                price?: number | undefined
                productModuleNumber: string
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            } & {
              form: {
                active: boolean
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType: string
                maxSessions?: string | undefined
                name: string
                number?: string | undefined
                price?: number | undefined
                productModuleNumber: string
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                active: boolean
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType: string
                maxSessions?: string | undefined
                name: string
                number?: string | undefined
                price?: number | undefined
                productModuleNumber: string
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            } & {
              form: {
                active: boolean
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType: string
                maxSessions?: string | undefined
                name: string
                number?: string | undefined
                price?: number | undefined
                productModuleNumber: string
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                active: boolean
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType: string
                maxSessions?: string | undefined
                name: string
                number?: string | undefined
                price?: number | undefined
                productModuleNumber: string
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            } & {
              form: {
                active: boolean
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType: string
                maxSessions?: string | undefined
                name: string
                number?: string | undefined
                price?: number | undefined
                productModuleNumber: string
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                active: boolean
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType: string
                maxSessions?: string | undefined
                name: string
                number?: string | undefined
                price?: number | undefined
                productModuleNumber: string
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            } & {
              form: {
                active: boolean
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType: string
                maxSessions?: string | undefined
                name: string
                number?: string | undefined
                price?: number | undefined
                productModuleNumber: string
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                active: boolean
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType: string
                maxSessions?: string | undefined
                name: string
                number?: string | undefined
                price?: number | undefined
                productModuleNumber: string
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            } & {
              form: {
                active: boolean
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType: string
                maxSessions?: string | undefined
                name: string
                number?: string | undefined
                price?: number | undefined
                productModuleNumber: string
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              json: {
                active: boolean
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType: string
                maxSessions?: string | undefined
                name: string
                number?: string | undefined
                price?: number | undefined
                productModuleNumber: string
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            } & {
              form: {
                active: boolean
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType: string
                maxSessions?: string | undefined
                name: string
                number?: string | undefined
                price?: number | undefined
                productModuleNumber: string
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/licensetemplate/:licenseTemplateNumber': {
      $delete:
        | {
            input: { param: { licenseTemplateNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { licenseTemplateNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { licenseTemplateNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { licenseTemplateNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { licenseTemplateNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { licenseTemplateNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { licenseTemplateNumber: string } }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { licenseTemplateNumber: string } }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { licenseTemplateNumber: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { licenseTemplateNumber: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { licenseTemplateNumber: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { licenseTemplateNumber: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { licenseTemplateNumber: string } } & {
              json: {
                active?: boolean | undefined
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType?: string | undefined
                maxSessions?: string | undefined
                name?: string | undefined
                number?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType?: string | undefined
                maxSessions?: string | undefined
                name?: string | undefined
                number?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { licenseTemplateNumber: string } } & {
              json: {
                active?: boolean | undefined
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType?: string | undefined
                maxSessions?: string | undefined
                name?: string | undefined
                number?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType?: string | undefined
                maxSessions?: string | undefined
                name?: string | undefined
                number?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { licenseTemplateNumber: string } } & {
              json: {
                active?: boolean | undefined
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType?: string | undefined
                maxSessions?: string | undefined
                name?: string | undefined
                number?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType?: string | undefined
                maxSessions?: string | undefined
                name?: string | undefined
                number?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { licenseTemplateNumber: string } } & {
              json: {
                active?: boolean | undefined
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType?: string | undefined
                maxSessions?: string | undefined
                name?: string | undefined
                number?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType?: string | undefined
                maxSessions?: string | undefined
                name?: string | undefined
                number?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { licenseTemplateNumber: string } } & {
              json: {
                active?: boolean | undefined
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType?: string | undefined
                maxSessions?: string | undefined
                name?: string | undefined
                number?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType?: string | undefined
                maxSessions?: string | undefined
                name?: string | undefined
                number?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { licenseTemplateNumber: string } } & {
              json: {
                active?: boolean | undefined
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType?: string | undefined
                maxSessions?: string | undefined
                name?: string | undefined
                number?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                automatic?: boolean | undefined
                currency?: string | undefined
                hidden?: boolean | undefined
                hideLicenses?: boolean | undefined
                licenseType?: string | undefined
                maxSessions?: string | undefined
                name?: string | undefined
                number?: string | undefined
                price?: number | undefined
                quantity?: string | undefined
                quota?: string | undefined
                timeVolume?: string | undefined
                timeVolumePeriod?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/paymentmethod': {
      $get:
        | { input: {}; output: Netlicensing[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Netlicensing[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/paymentmethod/:paymentMethodNumber': {
      $get:
        | {
            input: { param: { paymentMethodNumber: string } }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentMethodNumber: string } }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { paymentMethodNumber: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { paymentMethodNumber: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { paymentMethodNumber: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { paymentMethodNumber: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { paymentMethodNumber: string } } & {
              json: { active?: boolean | undefined; 'paypal.subject'?: string | undefined }
            } & { form: { active?: boolean | undefined; 'paypal.subject'?: string | undefined } }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentMethodNumber: string } } & {
              json: { active?: boolean | undefined; 'paypal.subject'?: string | undefined }
            } & { form: { active?: boolean | undefined; 'paypal.subject'?: string | undefined } }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { paymentMethodNumber: string } } & {
              json: { active?: boolean | undefined; 'paypal.subject'?: string | undefined }
            } & { form: { active?: boolean | undefined; 'paypal.subject'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { paymentMethodNumber: string } } & {
              json: { active?: boolean | undefined; 'paypal.subject'?: string | undefined }
            } & { form: { active?: boolean | undefined; 'paypal.subject'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { paymentMethodNumber: string } } & {
              json: { active?: boolean | undefined; 'paypal.subject'?: string | undefined }
            } & { form: { active?: boolean | undefined; 'paypal.subject'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { paymentMethodNumber: string } } & {
              json: { active?: boolean | undefined; 'paypal.subject'?: string | undefined }
            } & { form: { active?: boolean | undefined; 'paypal.subject'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/product': {
      $get:
        | { input: {}; output: Netlicensing[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Netlicensing[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: {
              json: {
                active: boolean
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name: string
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version: string
              }
            } & {
              form: {
                active: boolean
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name: string
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version: string
              }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                active: boolean
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name: string
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version: string
              }
            } & {
              form: {
                active: boolean
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name: string
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version: string
              }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                active: boolean
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name: string
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version: string
              }
            } & {
              form: {
                active: boolean
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name: string
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                active: boolean
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name: string
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version: string
              }
            } & {
              form: {
                active: boolean
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name: string
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version: string
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              json: {
                active: boolean
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name: string
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version: string
              }
            } & {
              form: {
                active: boolean
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name: string
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                active: boolean
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name: string
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version: string
              }
            } & {
              form: {
                active: boolean
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name: string
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              json: {
                active: boolean
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name: string
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version: string
              }
            } & {
              form: {
                active: boolean
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name: string
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/product/:productNumber': {
      $delete:
        | {
            input: { param: { productNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { productNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { productNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { productNumber: string } }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productNumber: string } }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { productNumber: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productNumber: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { productNumber: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productNumber: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { productNumber: string } } & {
              json: {
                active?: boolean | undefined
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name?: string | undefined
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name?: string | undefined
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version?: string | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productNumber: string } } & {
              json: {
                active?: boolean | undefined
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name?: string | undefined
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name?: string | undefined
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version?: string | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { productNumber: string } } & {
              json: {
                active?: boolean | undefined
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name?: string | undefined
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name?: string | undefined
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productNumber: string } } & {
              json: {
                active?: boolean | undefined
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name?: string | undefined
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name?: string | undefined
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { productNumber: string } } & {
              json: {
                active?: boolean | undefined
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name?: string | undefined
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name?: string | undefined
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { productNumber: string } } & {
              json: {
                active?: boolean | undefined
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name?: string | undefined
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name?: string | undefined
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productNumber: string } } & {
              json: {
                active?: boolean | undefined
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name?: string | undefined
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version?: string | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                description?: string | undefined
                licenseeAutoCreate?: boolean | undefined
                licensingInfo?: string | undefined
                name?: string | undefined
                number?: string | undefined
                vatMode?: 'GROSS' | 'NET' | undefined
                version?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/productmodule': {
      $get:
        | { input: {}; output: Netlicensing[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Netlicensing[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: {
              json: {
                active: boolean
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel: string
                maxCheckoutValidity?: number | undefined
                name: string
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                productNumber: string
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            } & {
              form: {
                active: boolean
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel: string
                maxCheckoutValidity?: number | undefined
                name: string
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                productNumber: string
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                active: boolean
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel: string
                maxCheckoutValidity?: number | undefined
                name: string
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                productNumber: string
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            } & {
              form: {
                active: boolean
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel: string
                maxCheckoutValidity?: number | undefined
                name: string
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                productNumber: string
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                active: boolean
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel: string
                maxCheckoutValidity?: number | undefined
                name: string
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                productNumber: string
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            } & {
              form: {
                active: boolean
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel: string
                maxCheckoutValidity?: number | undefined
                name: string
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                productNumber: string
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                active: boolean
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel: string
                maxCheckoutValidity?: number | undefined
                name: string
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                productNumber: string
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            } & {
              form: {
                active: boolean
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel: string
                maxCheckoutValidity?: number | undefined
                name: string
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                productNumber: string
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: {
              json: {
                active: boolean
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel: string
                maxCheckoutValidity?: number | undefined
                name: string
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                productNumber: string
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            } & {
              form: {
                active: boolean
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel: string
                maxCheckoutValidity?: number | undefined
                name: string
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                productNumber: string
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                active: boolean
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel: string
                maxCheckoutValidity?: number | undefined
                name: string
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                productNumber: string
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            } & {
              form: {
                active: boolean
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel: string
                maxCheckoutValidity?: number | undefined
                name: string
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                productNumber: string
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              json: {
                active: boolean
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel: string
                maxCheckoutValidity?: number | undefined
                name: string
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                productNumber: string
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            } & {
              form: {
                active: boolean
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel: string
                maxCheckoutValidity?: number | undefined
                name: string
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                productNumber: string
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/productmodule/:productModuleNumber': {
      $delete:
        | {
            input: { param: { productModuleNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productModuleNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { productModuleNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productModuleNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { productModuleNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productModuleNumber: string } } & {
              query: { forceCascade?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { productModuleNumber: string } }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productModuleNumber: string } }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { productModuleNumber: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productModuleNumber: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { productModuleNumber: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productModuleNumber: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { productModuleNumber: string } } & {
              json: {
                active?: boolean | undefined
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel?: string | undefined
                maxCheckoutValidity?: number | undefined
                name?: string | undefined
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel?: string | undefined
                maxCheckoutValidity?: number | undefined
                name?: string | undefined
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { productModuleNumber: string } } & {
              json: {
                active?: boolean | undefined
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel?: string | undefined
                maxCheckoutValidity?: number | undefined
                name?: string | undefined
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel?: string | undefined
                maxCheckoutValidity?: number | undefined
                name?: string | undefined
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { productModuleNumber: string } } & {
              json: {
                active?: boolean | undefined
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel?: string | undefined
                maxCheckoutValidity?: number | undefined
                name?: string | undefined
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel?: string | undefined
                maxCheckoutValidity?: number | undefined
                name?: string | undefined
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { productModuleNumber: string } } & {
              json: {
                active?: boolean | undefined
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel?: string | undefined
                maxCheckoutValidity?: number | undefined
                name?: string | undefined
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel?: string | undefined
                maxCheckoutValidity?: number | undefined
                name?: string | undefined
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 402
          }
        | {
            input: { param: { productModuleNumber: string } } & {
              json: {
                active?: boolean | undefined
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel?: string | undefined
                maxCheckoutValidity?: number | undefined
                name?: string | undefined
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel?: string | undefined
                maxCheckoutValidity?: number | undefined
                name?: string | undefined
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { productModuleNumber: string } } & {
              json: {
                active?: boolean | undefined
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel?: string | undefined
                maxCheckoutValidity?: number | undefined
                name?: string | undefined
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel?: string | undefined
                maxCheckoutValidity?: number | undefined
                name?: string | undefined
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { productModuleNumber: string } } & {
              json: {
                active?: boolean | undefined
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel?: string | undefined
                maxCheckoutValidity?: number | undefined
                name?: string | undefined
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                licenseTemplate?: ('TIMEVOLUME' | 'FEATURE')[] | undefined
                licensingModel?: string | undefined
                maxCheckoutValidity?: number | undefined
                name?: string | undefined
                nodeSecretMode?: ('PREDEFINED' | 'CLIENT')[] | undefined
                number?: string | undefined
                redThreshold?: number | undefined
                yellowThreshold?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/token': {
      $get:
        | { input: {}; output: Netlicensing[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Netlicensing[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: {
              json: {
                action?: 'licenseeLogin' | undefined
                apiKeyRole?:
                  | 'ROLE_APIKEY_LICENSEE'
                  | 'ROLE_APIKEY_ANALYTICS'
                  | 'ROLE_APIKEY_OPERATION'
                  | 'ROLE_APIKEY_MAINTENANCE'
                  | 'ROLE_APIKEY_ADMIN'
                  | undefined
                cancelURL?: string | undefined
                cancelURLTitle?: string | undefined
                licenseTemplateNumber?: string | undefined
                licenseeNumber?: string | undefined
                predefinedShoppingItem?: string | undefined
                privateKey?: string | undefined
                productNumber?: string | undefined
                successURL?: string | undefined
                successURLTitle?: string | undefined
                tokenType: 'DEFAULT' | 'SHOP' | 'APIKEY'
                type?: 'ACTION' | undefined
              }
            } & {
              form: {
                action?: 'licenseeLogin' | undefined
                apiKeyRole?:
                  | 'ROLE_APIKEY_LICENSEE'
                  | 'ROLE_APIKEY_ANALYTICS'
                  | 'ROLE_APIKEY_OPERATION'
                  | 'ROLE_APIKEY_MAINTENANCE'
                  | 'ROLE_APIKEY_ADMIN'
                  | undefined
                cancelURL?: string | undefined
                cancelURLTitle?: string | undefined
                licenseTemplateNumber?: string | undefined
                licenseeNumber?: string | undefined
                predefinedShoppingItem?: string | undefined
                privateKey?: string | undefined
                productNumber?: string | undefined
                successURL?: string | undefined
                successURLTitle?: string | undefined
                tokenType: 'DEFAULT' | 'SHOP' | 'APIKEY'
                type?: 'ACTION' | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                action?: 'licenseeLogin' | undefined
                apiKeyRole?:
                  | 'ROLE_APIKEY_LICENSEE'
                  | 'ROLE_APIKEY_ANALYTICS'
                  | 'ROLE_APIKEY_OPERATION'
                  | 'ROLE_APIKEY_MAINTENANCE'
                  | 'ROLE_APIKEY_ADMIN'
                  | undefined
                cancelURL?: string | undefined
                cancelURLTitle?: string | undefined
                licenseTemplateNumber?: string | undefined
                licenseeNumber?: string | undefined
                predefinedShoppingItem?: string | undefined
                privateKey?: string | undefined
                productNumber?: string | undefined
                successURL?: string | undefined
                successURLTitle?: string | undefined
                tokenType: 'DEFAULT' | 'SHOP' | 'APIKEY'
                type?: 'ACTION' | undefined
              }
            } & {
              form: {
                action?: 'licenseeLogin' | undefined
                apiKeyRole?:
                  | 'ROLE_APIKEY_LICENSEE'
                  | 'ROLE_APIKEY_ANALYTICS'
                  | 'ROLE_APIKEY_OPERATION'
                  | 'ROLE_APIKEY_MAINTENANCE'
                  | 'ROLE_APIKEY_ADMIN'
                  | undefined
                cancelURL?: string | undefined
                cancelURLTitle?: string | undefined
                licenseTemplateNumber?: string | undefined
                licenseeNumber?: string | undefined
                predefinedShoppingItem?: string | undefined
                privateKey?: string | undefined
                productNumber?: string | undefined
                successURL?: string | undefined
                successURLTitle?: string | undefined
                tokenType: 'DEFAULT' | 'SHOP' | 'APIKEY'
                type?: 'ACTION' | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                action?: 'licenseeLogin' | undefined
                apiKeyRole?:
                  | 'ROLE_APIKEY_LICENSEE'
                  | 'ROLE_APIKEY_ANALYTICS'
                  | 'ROLE_APIKEY_OPERATION'
                  | 'ROLE_APIKEY_MAINTENANCE'
                  | 'ROLE_APIKEY_ADMIN'
                  | undefined
                cancelURL?: string | undefined
                cancelURLTitle?: string | undefined
                licenseTemplateNumber?: string | undefined
                licenseeNumber?: string | undefined
                predefinedShoppingItem?: string | undefined
                privateKey?: string | undefined
                productNumber?: string | undefined
                successURL?: string | undefined
                successURLTitle?: string | undefined
                tokenType: 'DEFAULT' | 'SHOP' | 'APIKEY'
                type?: 'ACTION' | undefined
              }
            } & {
              form: {
                action?: 'licenseeLogin' | undefined
                apiKeyRole?:
                  | 'ROLE_APIKEY_LICENSEE'
                  | 'ROLE_APIKEY_ANALYTICS'
                  | 'ROLE_APIKEY_OPERATION'
                  | 'ROLE_APIKEY_MAINTENANCE'
                  | 'ROLE_APIKEY_ADMIN'
                  | undefined
                cancelURL?: string | undefined
                cancelURLTitle?: string | undefined
                licenseTemplateNumber?: string | undefined
                licenseeNumber?: string | undefined
                predefinedShoppingItem?: string | undefined
                privateKey?: string | undefined
                productNumber?: string | undefined
                successURL?: string | undefined
                successURLTitle?: string | undefined
                tokenType: 'DEFAULT' | 'SHOP' | 'APIKEY'
                type?: 'ACTION' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                action?: 'licenseeLogin' | undefined
                apiKeyRole?:
                  | 'ROLE_APIKEY_LICENSEE'
                  | 'ROLE_APIKEY_ANALYTICS'
                  | 'ROLE_APIKEY_OPERATION'
                  | 'ROLE_APIKEY_MAINTENANCE'
                  | 'ROLE_APIKEY_ADMIN'
                  | undefined
                cancelURL?: string | undefined
                cancelURLTitle?: string | undefined
                licenseTemplateNumber?: string | undefined
                licenseeNumber?: string | undefined
                predefinedShoppingItem?: string | undefined
                privateKey?: string | undefined
                productNumber?: string | undefined
                successURL?: string | undefined
                successURLTitle?: string | undefined
                tokenType: 'DEFAULT' | 'SHOP' | 'APIKEY'
                type?: 'ACTION' | undefined
              }
            } & {
              form: {
                action?: 'licenseeLogin' | undefined
                apiKeyRole?:
                  | 'ROLE_APIKEY_LICENSEE'
                  | 'ROLE_APIKEY_ANALYTICS'
                  | 'ROLE_APIKEY_OPERATION'
                  | 'ROLE_APIKEY_MAINTENANCE'
                  | 'ROLE_APIKEY_ADMIN'
                  | undefined
                cancelURL?: string | undefined
                cancelURLTitle?: string | undefined
                licenseTemplateNumber?: string | undefined
                licenseeNumber?: string | undefined
                predefinedShoppingItem?: string | undefined
                privateKey?: string | undefined
                productNumber?: string | undefined
                successURL?: string | undefined
                successURLTitle?: string | undefined
                tokenType: 'DEFAULT' | 'SHOP' | 'APIKEY'
                type?: 'ACTION' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                action?: 'licenseeLogin' | undefined
                apiKeyRole?:
                  | 'ROLE_APIKEY_LICENSEE'
                  | 'ROLE_APIKEY_ANALYTICS'
                  | 'ROLE_APIKEY_OPERATION'
                  | 'ROLE_APIKEY_MAINTENANCE'
                  | 'ROLE_APIKEY_ADMIN'
                  | undefined
                cancelURL?: string | undefined
                cancelURLTitle?: string | undefined
                licenseTemplateNumber?: string | undefined
                licenseeNumber?: string | undefined
                predefinedShoppingItem?: string | undefined
                privateKey?: string | undefined
                productNumber?: string | undefined
                successURL?: string | undefined
                successURLTitle?: string | undefined
                tokenType: 'DEFAULT' | 'SHOP' | 'APIKEY'
                type?: 'ACTION' | undefined
              }
            } & {
              form: {
                action?: 'licenseeLogin' | undefined
                apiKeyRole?:
                  | 'ROLE_APIKEY_LICENSEE'
                  | 'ROLE_APIKEY_ANALYTICS'
                  | 'ROLE_APIKEY_OPERATION'
                  | 'ROLE_APIKEY_MAINTENANCE'
                  | 'ROLE_APIKEY_ADMIN'
                  | undefined
                cancelURL?: string | undefined
                cancelURLTitle?: string | undefined
                licenseTemplateNumber?: string | undefined
                licenseeNumber?: string | undefined
                predefinedShoppingItem?: string | undefined
                privateKey?: string | undefined
                productNumber?: string | undefined
                successURL?: string | undefined
                successURLTitle?: string | undefined
                tokenType: 'DEFAULT' | 'SHOP' | 'APIKEY'
                type?: 'ACTION' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              json: {
                action?: 'licenseeLogin' | undefined
                apiKeyRole?:
                  | 'ROLE_APIKEY_LICENSEE'
                  | 'ROLE_APIKEY_ANALYTICS'
                  | 'ROLE_APIKEY_OPERATION'
                  | 'ROLE_APIKEY_MAINTENANCE'
                  | 'ROLE_APIKEY_ADMIN'
                  | undefined
                cancelURL?: string | undefined
                cancelURLTitle?: string | undefined
                licenseTemplateNumber?: string | undefined
                licenseeNumber?: string | undefined
                predefinedShoppingItem?: string | undefined
                privateKey?: string | undefined
                productNumber?: string | undefined
                successURL?: string | undefined
                successURLTitle?: string | undefined
                tokenType: 'DEFAULT' | 'SHOP' | 'APIKEY'
                type?: 'ACTION' | undefined
              }
            } & {
              form: {
                action?: 'licenseeLogin' | undefined
                apiKeyRole?:
                  | 'ROLE_APIKEY_LICENSEE'
                  | 'ROLE_APIKEY_ANALYTICS'
                  | 'ROLE_APIKEY_OPERATION'
                  | 'ROLE_APIKEY_MAINTENANCE'
                  | 'ROLE_APIKEY_ADMIN'
                  | undefined
                cancelURL?: string | undefined
                cancelURLTitle?: string | undefined
                licenseTemplateNumber?: string | undefined
                licenseeNumber?: string | undefined
                predefinedShoppingItem?: string | undefined
                privateKey?: string | undefined
                productNumber?: string | undefined
                successURL?: string | undefined
                successURLTitle?: string | undefined
                tokenType: 'DEFAULT' | 'SHOP' | 'APIKEY'
                type?: 'ACTION' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/token/:tokenNumber': {
      $delete:
        | {
            input: { param: { tokenNumber: string } }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenNumber: string } }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tokenNumber: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tokenNumber: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tokenNumber: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tokenNumber: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { tokenNumber: string } }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenNumber: string } }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { tokenNumber: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tokenNumber: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tokenNumber: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tokenNumber: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/transaction': {
      $get:
        | { input: {}; output: Netlicensing[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Netlicensing[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: {
              json: {
                active: boolean
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                licenseeNumber?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source: 'SHOP'
                status: 'CANCELLED' | 'CLOSED' | 'PENDING'
              }
            } & {
              form: {
                active: boolean
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                licenseeNumber?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source: 'SHOP'
                status: 'CANCELLED' | 'CLOSED' | 'PENDING'
              }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                active: boolean
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                licenseeNumber?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source: 'SHOP'
                status: 'CANCELLED' | 'CLOSED' | 'PENDING'
              }
            } & {
              form: {
                active: boolean
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                licenseeNumber?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source: 'SHOP'
                status: 'CANCELLED' | 'CLOSED' | 'PENDING'
              }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                active: boolean
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                licenseeNumber?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source: 'SHOP'
                status: 'CANCELLED' | 'CLOSED' | 'PENDING'
              }
            } & {
              form: {
                active: boolean
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                licenseeNumber?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source: 'SHOP'
                status: 'CANCELLED' | 'CLOSED' | 'PENDING'
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                active: boolean
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                licenseeNumber?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source: 'SHOP'
                status: 'CANCELLED' | 'CLOSED' | 'PENDING'
              }
            } & {
              form: {
                active: boolean
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                licenseeNumber?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source: 'SHOP'
                status: 'CANCELLED' | 'CLOSED' | 'PENDING'
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                active: boolean
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                licenseeNumber?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source: 'SHOP'
                status: 'CANCELLED' | 'CLOSED' | 'PENDING'
              }
            } & {
              form: {
                active: boolean
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                licenseeNumber?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source: 'SHOP'
                status: 'CANCELLED' | 'CLOSED' | 'PENDING'
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              json: {
                active: boolean
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                licenseeNumber?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source: 'SHOP'
                status: 'CANCELLED' | 'CLOSED' | 'PENDING'
              }
            } & {
              form: {
                active: boolean
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                licenseeNumber?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source: 'SHOP'
                status: 'CANCELLED' | 'CLOSED' | 'PENDING'
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/transaction/:transactionNumber': {
      $get:
        | {
            input: { param: { transactionNumber: string } }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transactionNumber: string } }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { transactionNumber: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { transactionNumber: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { transactionNumber: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { transactionNumber: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { transactionNumber: string } } & {
              json: {
                active?: boolean | undefined
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source?: 'SHOP' | undefined
                status?: 'CANCELLED' | 'CLOSED' | 'PENDING' | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source?: 'SHOP' | undefined
                status?: 'CANCELLED' | 'CLOSED' | 'PENDING' | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transactionNumber: string } } & {
              json: {
                active?: boolean | undefined
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source?: 'SHOP' | undefined
                status?: 'CANCELLED' | 'CLOSED' | 'PENDING' | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source?: 'SHOP' | undefined
                status?: 'CANCELLED' | 'CLOSED' | 'PENDING' | undefined
              }
            }
            output: Netlicensing
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { transactionNumber: string } } & {
              json: {
                active?: boolean | undefined
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source?: 'SHOP' | undefined
                status?: 'CANCELLED' | 'CLOSED' | 'PENDING' | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source?: 'SHOP' | undefined
                status?: 'CANCELLED' | 'CLOSED' | 'PENDING' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { transactionNumber: string } } & {
              json: {
                active?: boolean | undefined
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source?: 'SHOP' | undefined
                status?: 'CANCELLED' | 'CLOSED' | 'PENDING' | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source?: 'SHOP' | undefined
                status?: 'CANCELLED' | 'CLOSED' | 'PENDING' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { transactionNumber: string } } & {
              json: {
                active?: boolean | undefined
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source?: 'SHOP' | undefined
                status?: 'CANCELLED' | 'CLOSED' | 'PENDING' | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source?: 'SHOP' | undefined
                status?: 'CANCELLED' | 'CLOSED' | 'PENDING' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { transactionNumber: string } } & {
              json: {
                active?: boolean | undefined
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source?: 'SHOP' | undefined
                status?: 'CANCELLED' | 'CLOSED' | 'PENDING' | undefined
              }
            } & {
              form: {
                active?: boolean | undefined
                dateClosed?: string | undefined
                dateCreated?: string | undefined
                number?: string | undefined
                paymentMethod?: string | undefined
                source?: 'SHOP' | undefined
                status?: 'CANCELLED' | 'CLOSED' | 'PENDING' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/utility/licenseTypes': {
      $get:
        | { input: {}; output: Netlicensing; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Netlicensing; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/utility/licensingModels': {
      $get:
        | { input: {}; output: Netlicensing; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Netlicensing; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  },
  '/'
>
export default routes

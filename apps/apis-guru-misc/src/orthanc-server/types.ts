declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/changes': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { query: { limit?: number | undefined; since?: number | undefined } }
        output: {
          Changes?: { [x: string]: unknown }[] | undefined
          Done?: boolean | undefined
          Last?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/exports': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { query: { limit?: number | undefined; since?: number | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances': {
      $get: {
        input: {
          query: {
            expand?: string | undefined
            full?: boolean | undefined
            limit?: number | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
            since?: number | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {
          ID?: string | undefined
          ParentPatient?: string | undefined
          ParentSeries?: string | undefined
          ParentStudy?: string | undefined
          Path?: string | undefined
          Status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/anonymize': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            DicomVersion?: string | undefined
            Force?: boolean | undefined
            Keep?: string[] | undefined
            KeepPrivateTags?: boolean | undefined
            KeepSource?: boolean | undefined
            PrivateCreator?: string | undefined
            Remove?: string[] | undefined
            Replace?: { [x: string]: unknown } | undefined
            Transcode?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/attachments': {
      $get: {
        input: { param: { id: string } } & { query: { full?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/attachments/:name': {
      $delete: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/attachments/:name/compress': {
      $post: {
        input: { param: { id: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/instances/:id/attachments/:name/compressed-data': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/attachments/:name/compressed-md5': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/attachments/:name/compressed-size': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/attachments/:name/data': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/attachments/:name/info': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/attachments/:name/is-compressed': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/attachments/:name/md5': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/attachments/:name/size': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/attachments/:name/uncompress': {
      $post: {
        input: { param: { id: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/instances/:id/attachments/:name/verify-md5': {
      $post: {
        input: { param: { id: string; name: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/content': {
      $get: {
        input: { param: { id: string } } & { query: { '...': string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/export': {
      $post: {
        input: { param: { id: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/instances/:id/file': {
      $get:
        | {
            input: { param: { id: string } } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/instances/:id/frames': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/frames/:frame': {
      $get: {
        input: { param: { frame: string; id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/frames/:frame/image-int16': {
      $get:
        | {
            input: { param: { frame: number; id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { frame: number; id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { frame: number; id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/instances/:id/frames/:frame/image-uint16': {
      $get:
        | {
            input: { param: { frame: number; id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { frame: number; id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { frame: number; id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/instances/:id/frames/:frame/image-uint8': {
      $get:
        | {
            input: { param: { frame: number; id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { frame: number; id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { frame: number; id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/instances/:id/frames/:frame/matlab': {
      $get: {
        input: { param: { frame: number; id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/frames/:frame/numpy': {
      $get: {
        input: { param: { frame: number; id: string } } & {
          query: { compress?: boolean | undefined; rescale?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/frames/:frame/preview': {
      $get:
        | {
            input: { param: { frame: number; id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { frame: number; id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { frame: number; id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/instances/:id/frames/:frame/raw': {
      $get: {
        input: { param: { frame: number; id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/frames/:frame/raw.gz': {
      $get: {
        input: { param: { frame: number; id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/frames/:frame/rendered': {
      $get:
        | {
            input: { param: { frame: number; id: string } } & {
              query: {
                height?: number | undefined
                quality?: number | undefined
                returnUnsupportedImage?: boolean | undefined
                smooth?: boolean | undefined
                width?: number | undefined
                'window-center'?: number | undefined
                'window-width'?: number | undefined
              }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { frame: number; id: string } } & {
              query: {
                height?: number | undefined
                quality?: number | undefined
                returnUnsupportedImage?: boolean | undefined
                smooth?: boolean | undefined
                width?: number | undefined
                'window-center'?: number | undefined
                'window-width'?: number | undefined
              }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { frame: number; id: string } } & {
              query: {
                height?: number | undefined
                quality?: number | undefined
                returnUnsupportedImage?: boolean | undefined
                smooth?: boolean | undefined
                width?: number | undefined
                'window-center'?: number | undefined
                'window-width'?: number | undefined
              }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/instances/:id/header': {
      $get: {
        input: { param: { id: string } } & {
          query: { short?: boolean | undefined; simplify?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/image-int16': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/instances/:id/image-uint16': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/instances/:id/image-uint8': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/instances/:id/matlab': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/metadata': {
      $get: {
        input: { param: { id: string } } & { query: { expand?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/metadata/:name': {
      $delete: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/instances/:id/modify': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            Force?: boolean | undefined
            Keep?: string[] | undefined
            KeepSource?: boolean | undefined
            PrivateCreator?: string | undefined
            Remove?: string[] | undefined
            RemovePrivateTags?: boolean | undefined
            Replace?: { [x: string]: unknown } | undefined
            Transcode?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/module': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            'ignore-length'?: string[] | undefined
            short?: boolean | undefined
            simplify?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/numpy': {
      $get: {
        input: { param: { id: string } } & {
          query: { compress?: boolean | undefined; rescale?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/patient': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/pdf': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/instances/:id/preview': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { quality?: number | undefined; returnUnsupportedImage?: boolean | undefined }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/instances/:id/reconstruct': {
      $post: {
        input: { param: { id: string } } & { json: { ReconstructFiles?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/instances/:id/rendered': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                height?: number | undefined
                quality?: number | undefined
                returnUnsupportedImage?: boolean | undefined
                smooth?: boolean | undefined
                width?: number | undefined
                'window-center'?: number | undefined
                'window-width'?: number | undefined
              }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                height?: number | undefined
                quality?: number | undefined
                returnUnsupportedImage?: boolean | undefined
                smooth?: boolean | undefined
                width?: number | undefined
                'window-center'?: number | undefined
                'window-width'?: number | undefined
              }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                height?: number | undefined
                quality?: number | undefined
                returnUnsupportedImage?: boolean | undefined
                smooth?: boolean | undefined
                width?: number | undefined
                'window-center'?: number | undefined
                'window-width'?: number | undefined
              }
            } & { header: { Accept?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/instances/:id/series': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/simplified-tags': {
      $get: {
        input: { param: { id: string } } & { query: { 'ignore-length'?: string[] | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/statistics': {
      $get: {
        input: { param: { id: string } }
        output: {
          DicomDiskSize?: string | undefined
          DicomDiskSizeMB?: number | undefined
          DicomUncompressedSize?: string | undefined
          DicomUncompressedSizeMB?: number | undefined
          DiskSize?: string | undefined
          DiskSizeMB?: number | undefined
          UncompressedSize?: string | undefined
          UncompressedSizeMB?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/study': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instances/:id/tags': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            'ignore-length'?: string[] | undefined
            short?: boolean | undefined
            simplify?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs': {
      $get: {
        input: { query: { expand?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:id': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:id/cancel': {
      $post: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:id/pause': {
      $post: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:id/resubmit': {
      $post: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:id/resume': {
      $post: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:id/:key': {
      $get: {
        input: { param: { id: string; key: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/modalities': {
      $get: {
        input: { query: { expand?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/modalities/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          json: {
            AET?: string | undefined
            AllowEcho?: boolean | undefined
            AllowFind?: boolean | undefined
            AllowFindWorklist?: boolean | undefined
            AllowGet?: boolean | undefined
            AllowMove?: boolean | undefined
            AllowStorageCommitment?: boolean | undefined
            AllowStore?: boolean | undefined
            AllowTranscoding?: boolean | undefined
            Host?: string | undefined
            Manufacturer?: string | undefined
            Port?: number | undefined
            UseDicomTls?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/modalities/:id/configuration': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/modalities/:id/echo': {
      $post: {
        input: { param: { id: string } } & {
          json: { CheckFind?: boolean | undefined; Timeout?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/modalities/:id/find': {
      $post: {
        input: { param: { id: string } } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/modalities/:id/find-instance': {
      $post: {
        input: { param: { id: string } } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/modalities/:id/find-patient': {
      $post: {
        input: { param: { id: string } } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/modalities/:id/find-series': {
      $post: {
        input: { param: { id: string } } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/modalities/:id/find-study': {
      $post: {
        input: { param: { id: string } } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/modalities/:id/find-worklist': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            Full?: boolean | undefined
            Query?: { [x: string]: unknown } | undefined
            Short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/modalities/:id/move': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            Asynchronous?: boolean | undefined
            Level?: string | undefined
            LocalAet?: string | undefined
            Permissive?: boolean | undefined
            Priority?: number | undefined
            Resources?: { [x: string]: unknown }[] | undefined
            Synchronous?: boolean | undefined
            TargetAet?: string | undefined
            Timeout?: number | undefined
          }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/modalities/:id/query': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            Level?: string | undefined
            LocalAet?: string | undefined
            Normalize?: boolean | undefined
            Query?: { [x: string]: unknown } | undefined
            Timeout?: number | undefined
          }
        }
        output: {
          ID?: { [x: string]: unknown } | undefined
          Path?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/modalities/:id/storage-commitment': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            DicomInstances?: { [x: string]: unknown }[] | undefined
            Resources?: string[] | undefined
            Timeout?: number | undefined
          }
        }
        output: {
          ID?: { [x: string]: unknown } | undefined
          Path?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/modalities/:id/store': {
      $post: {
        input: { param: { id: string } } & {
          json:
            | {
                Asynchronous?: boolean | undefined
                CalledAet?: string | undefined
                Host?: string | undefined
                LocalAet?: string | undefined
                MoveOriginatorAet?: string | undefined
                MoveOriginatorID?: number | undefined
                Permissive?: boolean | undefined
                Port?: number | undefined
                Priority?: number | undefined
                Resources?: string[] | undefined
                StorageCommitment?: boolean | undefined
                Synchronous?: boolean | undefined
                Timeout?: number | undefined
              }
            | { [x: string]: unknown }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/modalities/:id/store-straight': {
      $post: {
        input: { param: { id: string } } & { json: { [x: string]: unknown } }
        output: { SOPClassUID?: string | undefined; SOPInstanceUID?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients': {
      $get: {
        input: {
          query: {
            expand?: string | undefined
            full?: boolean | undefined
            limit?: number | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
            since?: number | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id/anonymize': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            Asynchronous?: boolean | undefined
            DicomVersion?: string | undefined
            Force?: boolean | undefined
            Keep?: string[] | undefined
            KeepPrivateTags?: boolean | undefined
            KeepSource?: boolean | undefined
            Permissive?: boolean | undefined
            Priority?: number | undefined
            PrivateCreator?: string | undefined
            Remove?: string[] | undefined
            Replace?: { [x: string]: unknown } | undefined
            Synchronous?: boolean | undefined
            Transcode?: string | undefined
          }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id/archive': {
      $get: {
        input: { param: { id: string } } & {
          query: { filename?: string | undefined; transcode?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { id: string } } & {
              json: {
                Asynchronous?: boolean | undefined
                Priority?: number | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { ID?: string | undefined; Path?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                Asynchronous?: boolean | undefined
                Priority?: number | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/patients/:id/attachments': {
      $get: {
        input: { param: { id: string } } & { query: { full?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id/attachments/:name': {
      $delete: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id/attachments/:name/compress': {
      $post: {
        input: { param: { id: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/patients/:id/attachments/:name/compressed-data': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/patients/:id/attachments/:name/compressed-md5': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/patients/:id/attachments/:name/compressed-size': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/patients/:id/attachments/:name/data': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/patients/:id/attachments/:name/info': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id/attachments/:name/is-compressed': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/patients/:id/attachments/:name/md5': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/patients/:id/attachments/:name/size': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/patients/:id/attachments/:name/uncompress': {
      $post: {
        input: { param: { id: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/patients/:id/attachments/:name/verify-md5': {
      $post: {
        input: { param: { id: string; name: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id/instances': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id/instances-tags': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            'ignore-length'?: string[] | undefined
            short?: boolean | undefined
            simplify?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id/media': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            extended?: string | undefined
            filename?: string | undefined
            transcode?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { id: string } } & {
              json: {
                Asynchronous?: boolean | undefined
                Extended?: boolean | undefined
                Priority?: number | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { ID?: string | undefined; Path?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                Asynchronous?: boolean | undefined
                Extended?: boolean | undefined
                Priority?: number | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/patients/:id/metadata': {
      $get: {
        input: { param: { id: string } } & { query: { expand?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id/metadata/:name': {
      $delete: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/patients/:id/modify': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            Asynchronous?: boolean | undefined
            Force?: boolean | undefined
            Keep?: string[] | undefined
            KeepSource?: boolean | undefined
            Permissive?: boolean | undefined
            Priority?: number | undefined
            PrivateCreator?: string | undefined
            Remove?: string[] | undefined
            RemovePrivateTags?: boolean | undefined
            Replace?: { [x: string]: unknown } | undefined
            Synchronous?: boolean | undefined
            Transcode?: string | undefined
          }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id/module': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            'ignore-length'?: string[] | undefined
            short?: boolean | undefined
            simplify?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id/protected': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $put: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/patients/:id/reconstruct': {
      $post: {
        input: { param: { id: string } } & { json: { ReconstructFiles?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/patients/:id/series': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id/shared-tags': {
      $get: {
        input: { param: { id: string } } & {
          query: { short?: boolean | undefined; simplify?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id/statistics': {
      $get: {
        input: { param: { id: string } }
        output: {
          CountInstances?: number | undefined
          CountSeries?: number | undefined
          CountStudies?: number | undefined
          DicomDiskSize?: string | undefined
          DicomDiskSizeMB?: number | undefined
          DicomUncompressedSize?: string | undefined
          DicomUncompressedSizeMB?: number | undefined
          DiskSize?: string | undefined
          DiskSizeMB?: number | undefined
          UncompressedSize?: string | undefined
          UncompressedSizeMB?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/patients/:id/studies': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/peers': {
      $get: {
        input: { query: { expand?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/peers/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          json: {
            CertificateFile?: string | undefined
            CertificateKeyFile?: string | undefined
            CertificateKeyPassword?: string | undefined
            HttpHeaders?: { [x: string]: unknown } | undefined
            Password?: string | undefined
            URL?: string | undefined
            Username?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/peers/:id/configuration': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/peers/:id/store': {
      $post: {
        input: { param: { id: string } } & {
          json:
            | {
                Asynchronous?: boolean | undefined
                Compress?: boolean | undefined
                Permissive?: boolean | undefined
                Priority?: number | undefined
                Resources?: string[] | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            | { [x: string]: unknown }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/peers/:id/store-straight': {
      $post: {
        input: { param: { id: string } } & { json: { [x: string]: unknown } }
        output: {
          ID?: string | undefined
          ParentPatient?: string | undefined
          ParentSeries?: string | undefined
          ParentStudy?: string | undefined
          Path?: string | undefined
          Status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/peers/:id/system': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/plugins': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/plugins/explorer.js': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/plugins/:id': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queries': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/queries/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queries/:id/answers': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            expand?: string | undefined
            short?: boolean | undefined
            simplify?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queries/:id/answers/:index': {
      $get: {
        input: { param: { id: string; index: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queries/:id/answers/:index/content': {
      $get: {
        input: { param: { id: string; index: string } } & {
          query: { short?: boolean | undefined; simplify?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queries/:id/answers/:index/query-instances': {
      $post: {
        input: { param: { id: string; index: string } } & {
          json: { Query?: { [x: string]: unknown } | undefined; Timeout?: number | undefined }
        }
        output: {
          ID?: { [x: string]: unknown } | undefined
          Path?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queries/:id/answers/:index/query-series': {
      $post: {
        input: { param: { id: string; index: string } } & {
          json: { Query?: { [x: string]: unknown } | undefined; Timeout?: number | undefined }
        }
        output: {
          ID?: { [x: string]: unknown } | undefined
          Path?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queries/:id/answers/:index/query-studies': {
      $post: {
        input: { param: { id: string; index: string } } & {
          json: { Query?: { [x: string]: unknown } | undefined; Timeout?: number | undefined }
        }
        output: {
          ID?: { [x: string]: unknown } | undefined
          Path?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queries/:id/answers/:index/retrieve': {
      $post: {
        input: { param: { id: string; index: string } } & {
          json:
            | {
                Asynchronous?: boolean | undefined
                Full?: boolean | undefined
                Permissive?: boolean | undefined
                Priority?: number | undefined
                Simplify?: boolean | undefined
                Synchronous?: boolean | undefined
                TargetAet?: string | undefined
                Timeout?: number | undefined
              }
            | { [x: string]: unknown }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queries/:id/level': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/queries/:id/modality': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/queries/:id/query': {
      $get: {
        input: { param: { id: string } } & {
          query: { short?: boolean | undefined; simplify?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queries/:id/retrieve': {
      $post: {
        input: { param: { id: string } } & {
          json:
            | {
                Asynchronous?: boolean | undefined
                Full?: boolean | undefined
                Permissive?: boolean | undefined
                Priority?: number | undefined
                Simplify?: boolean | undefined
                Synchronous?: boolean | undefined
                TargetAet?: string | undefined
                Timeout?: number | undefined
              }
            | { [x: string]: unknown }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series': {
      $get: {
        input: {
          query: {
            expand?: string | undefined
            full?: boolean | undefined
            limit?: number | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
            since?: number | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/anonymize': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            Asynchronous?: boolean | undefined
            DicomVersion?: string | undefined
            Force?: boolean | undefined
            Keep?: string[] | undefined
            KeepPrivateTags?: boolean | undefined
            KeepSource?: boolean | undefined
            Permissive?: boolean | undefined
            Priority?: number | undefined
            PrivateCreator?: string | undefined
            Remove?: string[] | undefined
            Replace?: { [x: string]: unknown } | undefined
            Synchronous?: boolean | undefined
            Transcode?: string | undefined
          }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/archive': {
      $get: {
        input: { param: { id: string } } & {
          query: { filename?: string | undefined; transcode?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { id: string } } & {
              json: {
                Asynchronous?: boolean | undefined
                Priority?: number | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { ID?: string | undefined; Path?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                Asynchronous?: boolean | undefined
                Priority?: number | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/series/:id/attachments': {
      $get: {
        input: { param: { id: string } } & { query: { full?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/attachments/:name': {
      $delete: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/attachments/:name/compress': {
      $post: {
        input: { param: { id: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/series/:id/attachments/:name/compressed-data': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/series/:id/attachments/:name/compressed-md5': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/series/:id/attachments/:name/compressed-size': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/series/:id/attachments/:name/data': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/series/:id/attachments/:name/info': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/attachments/:name/is-compressed': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/series/:id/attachments/:name/md5': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/series/:id/attachments/:name/size': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/series/:id/attachments/:name/uncompress': {
      $post: {
        input: { param: { id: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/series/:id/attachments/:name/verify-md5': {
      $post: {
        input: { param: { id: string; name: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/instances': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/instances-tags': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            'ignore-length'?: string[] | undefined
            short?: boolean | undefined
            simplify?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/media': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            extended?: string | undefined
            filename?: string | undefined
            transcode?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { id: string } } & {
              json: {
                Asynchronous?: boolean | undefined
                Extended?: boolean | undefined
                Priority?: number | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { ID?: string | undefined; Path?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                Asynchronous?: boolean | undefined
                Extended?: boolean | undefined
                Priority?: number | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/series/:id/metadata': {
      $get: {
        input: { param: { id: string } } & { query: { expand?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/metadata/:name': {
      $delete: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/series/:id/modify': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            Asynchronous?: boolean | undefined
            Force?: boolean | undefined
            Keep?: string[] | undefined
            KeepSource?: boolean | undefined
            Permissive?: boolean | undefined
            Priority?: number | undefined
            PrivateCreator?: string | undefined
            Remove?: string[] | undefined
            RemovePrivateTags?: boolean | undefined
            Replace?: { [x: string]: unknown } | undefined
            Synchronous?: boolean | undefined
            Transcode?: string | undefined
          }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/module': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            'ignore-length'?: string[] | undefined
            short?: boolean | undefined
            simplify?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/numpy': {
      $get: {
        input: { param: { id: string } } & {
          query: { compress?: boolean | undefined; rescale?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/series/:id/ordered-slices': {
      $get: {
        input: { param: { id: string } }
        output: {
          Dicom?: string[] | undefined
          Slices?: string[] | undefined
          SlicesShort?: { [x: string]: unknown }[] | undefined
          Type?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/patient': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/reconstruct': {
      $post: {
        input: { param: { id: string } } & { json: { ReconstructFiles?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/series/:id/shared-tags': {
      $get: {
        input: { param: { id: string } } & {
          query: { short?: boolean | undefined; simplify?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/statistics': {
      $get: {
        input: { param: { id: string } }
        output: {
          CountInstances?: number | undefined
          DicomDiskSize?: string | undefined
          DicomDiskSizeMB?: number | undefined
          DicomUncompressedSize?: string | undefined
          DicomUncompressedSizeMB?: number | undefined
          DiskSize?: string | undefined
          DiskSizeMB?: number | undefined
          UncompressedSize?: string | undefined
          UncompressedSizeMB?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/series/:id/study': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/statistics': {
      $get: {
        input: {}
        output: {
          CountInstances?: number | undefined
          CountPatients?: number | undefined
          CountSeries?: number | undefined
          CountStudies?: number | undefined
          TotalDiskSize?: string | undefined
          TotalDiskSizeMB?: number | undefined
          TotalUncompressedSize?: string | undefined
          TotalUncompressedSizeMB?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/storage-commitment/:id': {
      $get: {
        input: { param: { id: string } }
        output: {
          Failures?: { [x: string]: unknown }[] | undefined
          RemoteAET?: string | undefined
          Status?: string | undefined
          Success?: { [x: string]: unknown }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/storage-commitment/:id/remove': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/studies': {
      $get: {
        input: {
          query: {
            expand?: string | undefined
            full?: boolean | undefined
            limit?: number | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
            since?: number | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/anonymize': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            Asynchronous?: boolean | undefined
            DicomVersion?: string | undefined
            Force?: boolean | undefined
            Keep?: string[] | undefined
            KeepPrivateTags?: boolean | undefined
            KeepSource?: boolean | undefined
            Permissive?: boolean | undefined
            Priority?: number | undefined
            PrivateCreator?: string | undefined
            Remove?: string[] | undefined
            Replace?: { [x: string]: unknown } | undefined
            Synchronous?: boolean | undefined
            Transcode?: string | undefined
          }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/archive': {
      $get: {
        input: { param: { id: string } } & {
          query: { filename?: string | undefined; transcode?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { id: string } } & {
              json: {
                Asynchronous?: boolean | undefined
                Priority?: number | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { ID?: string | undefined; Path?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                Asynchronous?: boolean | undefined
                Priority?: number | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/studies/:id/attachments': {
      $get: {
        input: { param: { id: string } } & { query: { full?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/attachments/:name': {
      $delete: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/attachments/:name/compress': {
      $post: {
        input: { param: { id: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/studies/:id/attachments/:name/compressed-data': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/studies/:id/attachments/:name/compressed-md5': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/studies/:id/attachments/:name/compressed-size': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/studies/:id/attachments/:name/data': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/studies/:id/attachments/:name/info': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/attachments/:name/is-compressed': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/studies/:id/attachments/:name/md5': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/studies/:id/attachments/:name/size': {
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/studies/:id/attachments/:name/uncompress': {
      $post: {
        input: { param: { id: string; name: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/studies/:id/attachments/:name/verify-md5': {
      $post: {
        input: { param: { id: string; name: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/instances': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/instances-tags': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            'ignore-length'?: string[] | undefined
            short?: boolean | undefined
            simplify?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/media': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            extended?: string | undefined
            filename?: string | undefined
            transcode?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $post:
        | {
            input: { param: { id: string } } & {
              json: {
                Asynchronous?: boolean | undefined
                Extended?: boolean | undefined
                Priority?: number | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { ID?: string | undefined; Path?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                Asynchronous?: boolean | undefined
                Extended?: boolean | undefined
                Priority?: number | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/studies/:id/merge': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            Asynchronous?: boolean | undefined
            KeepSource?: boolean | undefined
            Permissive?: boolean | undefined
            Priority?: number | undefined
            Resources?: string[] | undefined
            Synchronous?: boolean | undefined
          }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/metadata': {
      $get: {
        input: { param: { id: string } } & { query: { expand?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/metadata/:name': {
      $delete: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-None-Match'?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { id: string; name: string } } & {
          header: { 'If-Match'?: string | undefined }
        } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/studies/:id/modify': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            Asynchronous?: boolean | undefined
            Force?: boolean | undefined
            Keep?: string[] | undefined
            KeepSource?: boolean | undefined
            Permissive?: boolean | undefined
            Priority?: number | undefined
            PrivateCreator?: string | undefined
            Remove?: string[] | undefined
            RemovePrivateTags?: boolean | undefined
            Replace?: { [x: string]: unknown } | undefined
            Synchronous?: boolean | undefined
            Transcode?: string | undefined
          }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/module': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            'ignore-length'?: string[] | undefined
            short?: boolean | undefined
            simplify?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/module-patient': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            'ignore-length'?: string[] | undefined
            short?: boolean | undefined
            simplify?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/patient': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/reconstruct': {
      $post: {
        input: { param: { id: string } } & { json: { ReconstructFiles?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/studies/:id/series': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            full?: boolean | undefined
            requestedTags?: string | undefined
            short?: boolean | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/shared-tags': {
      $get: {
        input: { param: { id: string } } & {
          query: { short?: boolean | undefined; simplify?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/split': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            Asynchronous?: boolean | undefined
            Instances?: string[] | undefined
            KeepSource?: boolean | undefined
            Permissive?: boolean | undefined
            Priority?: number | undefined
            Remove?: string[] | undefined
            Replace?: { [x: string]: unknown } | undefined
            Series?: string[] | undefined
            Synchronous?: boolean | undefined
          }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/studies/:id/statistics': {
      $get: {
        input: { param: { id: string } }
        output: {
          CountInstances?: number | undefined
          CountSeries?: number | undefined
          DicomDiskSize?: string | undefined
          DicomDiskSizeMB?: number | undefined
          DicomUncompressedSize?: string | undefined
          DicomUncompressedSizeMB?: number | undefined
          DiskSize?: string | undefined
          DiskSizeMB?: number | undefined
          UncompressedSize?: string | undefined
          UncompressedSizeMB?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system': {
      $get: {
        input: {}
        output: {
          ApiVersion?: number | undefined
          CheckRevisions?: boolean | undefined
          DatabaseBackendPlugin?: string | undefined
          DatabaseServerIdentifier?: string | undefined
          DatabaseVersion?: number | undefined
          DicomAet?: string | undefined
          DicomPort?: number | undefined
          HttpPort?: number | undefined
          IngestTranscoding?: string | undefined
          IsHttpServerSecure?: boolean | undefined
          MainDicomTags?: { [x: string]: unknown } | undefined
          MaximumStorageMode?: string | undefined
          MaximumStorageSize?: number | undefined
          Name?: string | undefined
          OverwriteInstances?: boolean | undefined
          PluginsEnabled?: boolean | undefined
          StorageAreaPlugin?: string | undefined
          StorageCompression?: boolean | undefined
          Version?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tools': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/tools/accepted-transfer-syntaxes': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
      $put: {
        input: { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tools/bulk-anonymize': {
      $post: {
        input: {
          json: {
            Asynchronous?: boolean | undefined
            DicomVersion?: string | undefined
            Force?: boolean | undefined
            Keep?: string[] | undefined
            KeepPrivateTags?: boolean | undefined
            KeepSource?: boolean | undefined
            Permissive?: boolean | undefined
            Priority?: number | undefined
            PrivateCreator?: string | undefined
            Remove?: string[] | undefined
            Replace?: { [x: string]: unknown } | undefined
            Resources?: string[] | undefined
            Synchronous?: boolean | undefined
            Transcode?: string | undefined
          }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tools/bulk-content': {
      $post: {
        input: {
          json: {
            Full?: boolean | undefined
            Level?: string | undefined
            Metadata?: boolean | undefined
            Resources?: string[] | undefined
            Short?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tools/bulk-delete': {
      $post: {
        input: { json: { Resources?: string[] | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tools/bulk-modify': {
      $post: {
        input: {
          json: {
            Asynchronous?: boolean | undefined
            Force?: boolean | undefined
            Keep?: string[] | undefined
            KeepSource?: boolean | undefined
            Level?: string | undefined
            Permissive?: boolean | undefined
            Priority?: number | undefined
            PrivateCreator?: string | undefined
            Remove?: string[] | undefined
            RemovePrivateTags?: boolean | undefined
            Replace?: { [x: string]: unknown } | undefined
            Resources?: string[] | undefined
            Synchronous?: boolean | undefined
            Transcode?: string | undefined
          }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tools/create-archive': {
      $post:
        | {
            input: {
              json: {
                Asynchronous?: boolean | undefined
                Priority?: number | undefined
                Resources?: string[] | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { ID?: string | undefined; Path?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                Asynchronous?: boolean | undefined
                Priority?: number | undefined
                Resources?: string[] | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tools/create-dicom': {
      $post: {
        input: {
          json: {
            Content?: string | undefined
            Force?: boolean | undefined
            InterpretBinaryTags?: boolean | undefined
            Parent?: string | undefined
            PrivateCreator?: string | undefined
            Tags?: { [x: string]: unknown } | undefined
          }
        }
        output: { ID?: string | undefined; Path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tools/create-media': {
      $post:
        | {
            input: {
              json: {
                Asynchronous?: boolean | undefined
                Extended?: boolean | undefined
                Priority?: number | undefined
                Resources?: string[] | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { ID?: string | undefined; Path?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                Asynchronous?: boolean | undefined
                Extended?: boolean | undefined
                Priority?: number | undefined
                Resources?: string[] | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tools/create-media-extended': {
      $post:
        | {
            input: {
              json: {
                Asynchronous?: boolean | undefined
                Extended?: boolean | undefined
                Priority?: number | undefined
                Resources?: string[] | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { ID?: string | undefined; Path?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                Asynchronous?: boolean | undefined
                Extended?: boolean | undefined
                Priority?: number | undefined
                Resources?: string[] | undefined
                Synchronous?: boolean | undefined
                Transcode?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/tools/default-encoding': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
      $put: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tools/dicom-conformance': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/tools/dicom-echo': {
      $post: {
        input: {
          json: {
            AET?: string | undefined
            CheckFind?: boolean | undefined
            Host?: string | undefined
            Manufacturer?: string | undefined
            Port?: number | undefined
            Timeout?: number | undefined
            UseDicomTls?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tools/execute-script': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/tools/find': {
      $post: {
        input: {
          json: {
            CaseSensitive?: boolean | undefined
            Expand?: boolean | undefined
            Full?: boolean | undefined
            Level?: string | undefined
            Limit?: number | undefined
            Query?: { [x: string]: unknown } | undefined
            RequestedTags?: string[] | undefined
            Short?: boolean | undefined
            Since?: number | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tools/generate-uid': {
      $get: {
        input: { query: { level: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/tools/invalidate-tags': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/tools/log-level': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
      $put: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tools/log-level-dicom': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
      $put: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tools/log-level-generic': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
      $put: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tools/log-level-http': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
      $put: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tools/log-level-jobs': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
      $put: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tools/log-level-lua': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
      $put: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tools/log-level-plugins': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
      $put: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tools/log-level-sqlite': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
      $put: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tools/lookup': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tools/metrics': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
      $put: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tools/metrics-prometheus': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/tools/now': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/tools/now-local': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/tools/reconstruct': {
      $post: {
        input: { json: { ReconstructFiles?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/tools/reset': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/tools/shutdown': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/tools/unknown-sop-class-accepted': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
      $put: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes

declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/appendChatMessage': {
      $get:
        | {
            input: {
              query: {
                padID?: string | undefined
                text?: string | undefined
                authorID?: string | undefined
                time?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                text?: string | undefined
                authorID?: string | undefined
                time?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                text?: string | undefined
                authorID?: string | undefined
                time?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                text?: string | undefined
                authorID?: string | undefined
                time?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                padID?: string | undefined
                text?: string | undefined
                authorID?: string | undefined
                time?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                text?: string | undefined
                authorID?: string | undefined
                time?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                text?: string | undefined
                authorID?: string | undefined
                time?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                text?: string | undefined
                authorID?: string | undefined
                time?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/appendText': {
      $get:
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/checkToken': {
      $get:
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/copyPad': {
      $get:
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/copyPadWithoutHistory': {
      $get:
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/createAuthor': {
      $get:
        | {
            input: { query: { name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { authorID?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { authorID?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/createAuthorIfNotExistsFor': {
      $get:
        | {
            input: { query: { authorMapper?: string | undefined; name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { authorID?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { authorMapper?: string | undefined; name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { authorMapper?: string | undefined; name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { authorMapper?: string | undefined; name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { authorMapper?: string | undefined; name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { authorID?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { authorMapper?: string | undefined; name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { authorMapper?: string | undefined; name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { authorMapper?: string | undefined; name?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/createDiffHTML': {
      $get:
        | {
            input: {
              query: {
                padID?: string | undefined
                startRev?: string | undefined
                endRev?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                startRev?: string | undefined
                endRev?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                startRev?: string | undefined
                endRev?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                startRev?: string | undefined
                endRev?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                padID?: string | undefined
                startRev?: string | undefined
                endRev?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                startRev?: string | undefined
                endRev?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                startRev?: string | undefined
                endRev?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                startRev?: string | undefined
                endRev?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/createGroup': {
      $get:
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { groupID?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { groupID?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/createGroupIfNotExistsFor': {
      $get:
        | {
            input: { query: { groupMapper?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { groupID?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { groupMapper?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { groupMapper?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { groupMapper?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { groupMapper?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { groupID?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { groupMapper?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { groupMapper?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { groupMapper?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/createGroupPad': {
      $get:
        | {
            input: {
              query: {
                groupID?: string | undefined
                padName?: string | undefined
                text?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                groupID?: string | undefined
                padName?: string | undefined
                text?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                groupID?: string | undefined
                padName?: string | undefined
                text?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                groupID?: string | undefined
                padName?: string | undefined
                text?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                groupID?: string | undefined
                padName?: string | undefined
                text?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                groupID?: string | undefined
                padName?: string | undefined
                text?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                groupID?: string | undefined
                padName?: string | undefined
                text?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                groupID?: string | undefined
                padName?: string | undefined
                text?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/createPad': {
      $get:
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/createSession': {
      $get:
        | {
            input: {
              query: {
                groupID?: string | undefined
                authorID?: string | undefined
                validUntil?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { sessionID?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                groupID?: string | undefined
                authorID?: string | undefined
                validUntil?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                groupID?: string | undefined
                authorID?: string | undefined
                validUntil?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                groupID?: string | undefined
                authorID?: string | undefined
                validUntil?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                groupID?: string | undefined
                authorID?: string | undefined
                validUntil?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { sessionID?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                groupID?: string | undefined
                authorID?: string | undefined
                validUntil?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                groupID?: string | undefined
                authorID?: string | undefined
                validUntil?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                groupID?: string | undefined
                authorID?: string | undefined
                validUntil?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deleteGroup': {
      $get:
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deletePad': {
      $get:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deleteSession': {
      $get:
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getAttributePool': {
      $get:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getAuthorName': {
      $get:
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?:
                | {
                    info?:
                      | {
                          colorId?: string | undefined
                          id?: string | undefined
                          name?: string | undefined
                          timestamp?: number | undefined
                        }
                      | undefined
                  }
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?:
                | {
                    info?:
                      | {
                          colorId?: string | undefined
                          id?: string | undefined
                          name?: string | undefined
                          timestamp?: number | undefined
                        }
                      | undefined
                  }
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getChatHead': {
      $get:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?:
                | {
                    chatHead?:
                      | {
                          text?: string | undefined
                          time?: number | undefined
                          userId?: string | undefined
                          userName?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?:
                | {
                    chatHead?:
                      | {
                          text?: string | undefined
                          time?: number | undefined
                          userId?: string | undefined
                          userName?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getChatHistory': {
      $get:
        | {
            input: {
              query: {
                padID?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?:
                | {
                    messages?:
                      | {
                          text?: string | undefined
                          time?: number | undefined
                          userId?: string | undefined
                          userName?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                padID?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?:
                | {
                    messages?:
                      | {
                          text?: string | undefined
                          time?: number | undefined
                          userId?: string | undefined
                          userName?: string | undefined
                        }[]
                      | undefined
                  }
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                padID?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getHTML': {
      $get:
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { html?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { html?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getLastEdited': {
      $get:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { lastEdited?: number | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { lastEdited?: number | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getPadID': {
      $get:
        | {
            input: { query: { roID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { roID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { roID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { roID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { roID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { roID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { roID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { roID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getPublicStatus': {
      $get:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { publicStatus?: boolean | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { publicStatus?: boolean | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getReadOnlyID': {
      $get:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { readOnlyID?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { readOnlyID?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getRevisionChangeset': {
      $get:
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getRevisionsCount': {
      $get:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { revisions?: number | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { revisions?: number | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getSavedRevisionsCount': {
      $get:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getSessionInfo': {
      $get:
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?:
                | {
                    info?:
                      | {
                          authorID?: string | undefined
                          groupID?: string | undefined
                          id?: string | undefined
                          validUntil?: number | undefined
                        }
                      | undefined
                  }
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?:
                | {
                    info?:
                      | {
                          authorID?: string | undefined
                          groupID?: string | undefined
                          id?: string | undefined
                          validUntil?: number | undefined
                        }
                      | undefined
                  }
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { sessionID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getStats': {
      $get:
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getText': {
      $get:
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { text?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { text?: string | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/listAllGroups': {
      $get:
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { groupIDs?: string[] | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { groupIDs?: string[] | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/listAllPads': {
      $get:
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { padIDs?: string[] | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { padIDs?: string[] | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/listAuthorsOfPad': {
      $get:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { authorIDs?: string[] | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { authorIDs?: string[] | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/listPads': {
      $get:
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { padIDs?: string[] | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { padIDs?: string[] | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/listPadsOfAuthor': {
      $get:
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { padIDs?: string[] | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { padIDs?: string[] | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/listSavedRevisions': {
      $get:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/listSessionsOfAuthor': {
      $get:
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?:
                | {
                    sessions?:
                      | {
                          authorID?: string | undefined
                          groupID?: string | undefined
                          id?: string | undefined
                          validUntil?: number | undefined
                        }[]
                      | undefined
                  }
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?:
                | {
                    sessions?:
                      | {
                          authorID?: string | undefined
                          groupID?: string | undefined
                          id?: string | undefined
                          validUntil?: number | undefined
                        }[]
                      | undefined
                  }
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { authorID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/listSessionsOfGroup': {
      $get:
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?:
                | {
                    sessions?:
                      | {
                          authorID?: string | undefined
                          groupID?: string | undefined
                          id?: string | undefined
                          validUntil?: number | undefined
                        }[]
                      | undefined
                  }
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?:
                | {
                    sessions?:
                      | {
                          authorID?: string | undefined
                          groupID?: string | undefined
                          id?: string | undefined
                          validUntil?: number | undefined
                        }[]
                      | undefined
                  }
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { groupID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/movePad': {
      $get:
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                sourceID?: string | undefined
                destinationID?: string | undefined
                force?: string | undefined
              }
            }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/padUsers': {
      $get:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?:
                | {
                    padUsers?:
                      | {
                          colorId?: string | undefined
                          id?: string | undefined
                          name?: string | undefined
                          timestamp?: number | undefined
                        }[]
                      | undefined
                  }
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?:
                | {
                    padUsers?:
                      | {
                          colorId?: string | undefined
                          id?: string | undefined
                          name?: string | undefined
                          timestamp?: number | undefined
                        }[]
                      | undefined
                  }
                | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/padUsersCount': {
      $get:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { padUsersCount?: number | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { padUsersCount?: number | undefined } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/restoreRevision': {
      $get:
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/saveRevision': {
      $get:
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; rev?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sendClientsMessage': {
      $get:
        | {
            input: { query: { padID?: string | undefined; msg?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; msg?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; msg?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; msg?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined; msg?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; msg?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; msg?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; msg?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/setHTML': {
      $get:
        | {
            input: { query: { padID?: string | undefined; html?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; html?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; html?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; html?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined; html?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; html?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; html?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; html?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/setPublicStatus': {
      $get:
        | {
            input: { query: { padID?: string | undefined; publicStatus?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; publicStatus?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; publicStatus?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; publicStatus?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined; publicStatus?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; publicStatus?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; publicStatus?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; publicStatus?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/setText': {
      $get:
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { padID?: string | undefined; text?: string | undefined } }
            output: {
              code?: number | undefined
              data?: { [x: string]: unknown } | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes

declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/createPathway': {
      $post: {
        input: {
          query: {
            gpml: string
            auth: string
            username: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/findInteractions': {
      $get: {
        input: {
          query: {
            query: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/findPathwaysByLiterature': {
      $get: {
        input: {
          query: {
            query: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/findPathwaysByText': {
      $get: {
        input: {
          query: {
            query: string
            species?: string | undefined
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/findPathwaysByXref': {
      $get: {
        input: {
          query: {
            ids: { [x: string]: unknown }[]
            codes?: { [x: string]: unknown }[] | undefined
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/getColoredPathway': {
      $get: {
        input: {
          query: {
            pwId: string
            revision: string
            graphId: { [x: string]: unknown }[]
            color: { [x: string]: unknown }[]
            fileType: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/getCurationTagHistory': {
      $get: {
        input: {
          query: {
            pwId: string
            timestamp?: string | undefined
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/getCurationTags': {
      $get: {
        input: {
          query: {
            pwId: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/getCurationTagsByName': {
      $get: {
        input: {
          query: {
            tagName: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/getOntologyTermsByPathway': {
      $get: {
        input: {
          query: {
            pwId: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/getPathway': {
      $get: {
        input: {
          query: {
            pwId: string
            revision?: number | undefined
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/getPathwayAs': {
      $get: {
        input: {
          query: {
            fileType: string
            pwId: string
            revision?: number | undefined
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/getPathwayHistory': {
      $get: {
        input: {
          query: {
            pwId: string
            timestamp: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/getPathwayInfo': {
      $get: {
        input: {
          query: {
            pwId: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/getPathwaysByOntologyTerm': {
      $get: {
        input: {
          query: {
            term: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/getPathwaysByParentOntologyTerm': {
      $get: {
        input: {
          query: {
            term: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/getRecentChanges': {
      $get: {
        input: {
          query: {
            timestamp: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/getUserByOrcid': {
      $get: {
        input: {
          query: {
            orcid: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/getXrefList': {
      $get: {
        input: {
          query: {
            pwId: string
            code: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/listOrganisms': {
      $get: {
        input: { query: { format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/listPathways': {
      $get: {
        input: {
          query: {
            organism?: string | undefined
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/login': {
      $get: {
        input: {
          query: {
            name: string
            pass: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/removeCurationTag': {
      $get: {
        input: {
          query: {
            pwId: string
            tagName: string
            auth: string
            username: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/removeOntologyTag': {
      $get: {
        input: {
          query: {
            pwId: string
            termId: string
            auth: string
            user: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/saveCurationTag': {
      $get: {
        input: {
          query: {
            pwId: string
            tagName: string
            text: string
            revision: number
            auth: string
            username: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/saveOntologyTag': {
      $get: {
        input: {
          query: {
            pwId: string
            term: string
            termId: string
            auth: string
            user: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/updatePathway': {
      $get: {
        input: {
          query: {
            pwId: string
            description: string
            gpml: string
            revision: number
            auth: string
            username: string
            format?: 'json' | 'xml' | 'html' | 'dump' | 'jpg' | 'pdf' | undefined
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

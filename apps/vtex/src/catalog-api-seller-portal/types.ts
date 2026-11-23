declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/catalog-seller-portal/brands': {
      $get: {
        input: {
          query: {
            q?: string | undefined
            from?: string | undefined
            to?: string | undefined
            orderBy?: string | undefined
            name?: string | undefined
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          _metadata: { from: number; orderBy: string; to: number; total: number }
          data: {
            createdAt: string
            id: string
            isActive: boolean
            name: string
            updatedAt: string
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: { isActive: boolean; name: string }
        }
        output: {
          createdAt?: string | undefined
          id?: string | undefined
          isActive?: boolean | undefined
          name?: string | undefined
          updatedAt?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog-seller-portal/brands/:brandId': {
      $get: {
        input: { param: { brandId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          createdAt?: string | undefined
          id?: string | undefined
          isActive?: boolean | undefined
          name?: string | undefined
          updatedAt?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { brandId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { id: string; isActive: boolean; name: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/catalog-seller-portal/category-tree': {
      $get: {
        input: { query: { depth?: number | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          createdAt?: string | undefined
          roots: {
            children: { value: { id: string; isActive: boolean; name: string } }[]
            value: { id: string; isActive: boolean; name: string }
          }[]
          updatedAt?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            roots: {
              children: { value: { id: string; isActive: boolean; name: string } }[]
              value: { id: string; isActive: boolean; name: string }
            }[]
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/catalog-seller-portal/category-tree/categories': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: { Name: string; parentId: string }
        }
        output: {
          children: { value: { id: string; isActive: boolean; name: string } }[]
          value: { id: string; isActive: boolean; name: string }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog-seller-portal/category-tree/categories/:categoryId': {
      $get: {
        input: { param: { categoryId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          children: { value: { id: string; isActive: boolean; name: string } }[]
          value: { id: string; isActive: boolean; name: string }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog-seller-portal/products': {
      $post:
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & {
              json: {
                attributes: { name: string; value: string }[]
                brandId: string
                categoryIds: string[]
                description?: string | undefined
                externalId?: string | undefined
                images: { alt?: string | undefined; id: string; url: string }[]
                name: string
                origin: string
                skus: {
                  dimensions: { height: number; length: number; width: number }
                  ean?: string | undefined
                  externalId?: string | undefined
                  images: { [x: string]: unknown }[]
                  isActive: boolean
                  manufacturerCode?: string | undefined
                  name: string
                  specs: { name: string; value: string }[] | null
                  weight: number
                }[]
                slug: string
                specs: { name: string; values: string[] }[]
                status: string
                taxCode?: (string | null) | undefined
                transportModal?: (string | null) | undefined
              }
            }
            output: {
              attributes: { name: string; value: string }[]
              brandId: string
              brandName: string
              categoryIds: string[]
              categoryNames: string[]
              createdAt: string
              externalId?: string | undefined
              id?: string | undefined
              images: { alt?: string | undefined; id: string; url: string }[]
              name: string
              origin: string
              skus: {
                dimensions: { height: number; length: number; width: number }
                ean?: string | undefined
                externalId?: string | undefined
                id: string
                images: { [x: string]: unknown }[]
                isActive: boolean
                manufacturerCode?: string | undefined
                name?: string | undefined
                specs: { name: string; value: string }[] | null
                weight: number
              }[]
              slug: string
              specs: { name: string; values: string[] }[]
              status: string
              taxCode?: (string | null) | undefined
              transportModal?: (string | null) | undefined
              updatedAt: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & {
              json: {
                attributes: { name: string; value: string }[]
                brandId: string
                categoryIds: string[]
                description?: string | undefined
                externalId?: string | undefined
                images: { alt?: string | undefined; id: string; url: string }[]
                name: string
                origin: string
                skus: {
                  dimensions: { height: number; length: number; width: number }
                  ean?: string | undefined
                  externalId?: string | undefined
                  images: { [x: string]: unknown }[]
                  isActive: boolean
                  manufacturerCode?: string | undefined
                  name: string
                  specs: { name: string; value: string }[] | null
                  weight: number
                }[]
                slug: string
                specs: { name: string; values: string[] }[]
                status: string
                taxCode?: (string | null) | undefined
                transportModal?: (string | null) | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
    }
  } & {
    '/api/catalog-seller-portal/products/:param': {
      $get: {
        input: { param: { param: string } } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          attributes: { name: string; value: string }[]
          brandId: string
          brandName: string
          categoryIds: string[]
          categoryNames: string[]
          createdAt: string
          externalId?: string | undefined
          id?: string | undefined
          images: { alt?: string | undefined; id: string; url: string }[]
          name: string
          origin: string
          skus: {
            dimensions: { height: number; length: number; width: number }
            ean?: string | undefined
            externalId?: string | undefined
            id: string
            images: { [x: string]: unknown }[]
            isActive: boolean
            manufacturerCode?: string | undefined
            specs: { name: string; value: string }[] | null
            weight: number
          }[]
          slug: string
          specs: { name: string; values: string[] }[]
          status: string
          taxCode?: string | undefined
          transportModal?: string | undefined
          updatedAt: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog-seller-portal/products/:productId': {
      $get: {
        input: { param: { productId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          attributes: { name: string; value: string }[]
          brandId: string
          brandName: string
          categoryIds: string[]
          categoryNames: string[]
          createdAt: string
          externalId?: string | undefined
          id?: string | undefined
          images: { alt?: string | undefined; id: string; url: string }[]
          name: string
          origin: string
          skus: {
            dimensions: { height: number; length: number; width: number }
            ean?: string | undefined
            externalId?: string | undefined
            id: string
            images: { [x: string]: unknown }[]
            isActive: boolean
            manufacturerCode?: string | undefined
            specs: { name: string; value: string }[] | null
            weight: number
          }[]
          slug: string
          specs: { name: string; values: string[] }[]
          status: string
          taxCode?: (string | null) | undefined
          transportModal?: (string | null) | undefined
          updatedAt: string
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { productId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            attributes: { name: string; value: string }[]
            brandId: string
            categoryIds: string[]
            externalId?: string | undefined
            id?: string | undefined
            images: { alt?: string | undefined; id: string; url: string }[]
            name: string
            origin: string
            skus: {
              dimensions: { height: number; length: number; width: number }
              ean?: string | undefined
              externalId?: string | undefined
              id?: string | undefined
              images: { [x: string]: unknown }[]
              isActive: boolean
              manufacturerCode?: string | undefined
              name?: string | undefined
              specs: { name: string; value: string }[] | null
              weight: number
            }[]
            slug: string
            specs: { name: string; values: string[] }[]
            status: string
            taxCode?: (string | null) | undefined
            transportModal?: (string | null) | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/catalog-seller-portal/products/:productId/description': {
      $get: {
        input: { param: { productId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: { createdAt: string; productId: string; updatedAt: string }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { productId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { description: string; productId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/catalog-seller-portal/skus/_search': {
      $get: {
        input: {
          query: {
            from?: string | undefined
            to?: string | undefined
            id?: number | undefined
            externalid?: number | undefined
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          _metadata?:
            | { from?: number | undefined; to?: number | undefined; total?: number | undefined }
            | undefined
          data?:
            | {
                externalId?: string | undefined
                id?: string | undefined
                productId?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog-seller-portal/skus/ids': {
      $get: {
        input: { query: { from?: string | undefined; to?: string | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          _metadata?:
            | { from?: number | undefined; to?: number | undefined; total?: number | undefined }
            | undefined
          data?: string[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

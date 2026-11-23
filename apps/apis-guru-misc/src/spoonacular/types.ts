declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/food/converse': {
      $get:
        | {
            input: { query: { text: string; contextId?: string | undefined } }
            output: { answerText: string; media: { [x: string]: unknown }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { text: string; contextId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { text: string; contextId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { text: string; contextId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/converse/suggest': {
      $get:
        | {
            input: { query: { query: string; number?: number | undefined } }
            output: { suggests: { _: { name: string }[] }; words: { [x: string]: unknown }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string; number?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { query: string; number?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { query: string; number?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/customFoods/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                username: string
                hash: string
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {
              customFoods: {
                id: number
                imageUrl: string
                price: number
                servings: number
                title: string
              }[]
              number: number
              offset: number
              type: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username: string
                hash: string
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username: string
                hash: string
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                username: string
                hash: string
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/detect': {
      $post:
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: { annotations: { annotation: string; image: string; tag: string }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/images/analyze': {
      $get:
        | {
            input: { query: { imageUrl: string } }
            output: {
              category: { name: string; probability: number }
              nutrition: {
                calories: {
                  confidenceRange95Percent: { max: number; min: number }
                  standardDeviation: number
                  unit: string
                  value: number
                }
                carbs: {
                  confidenceRange95Percent: { max: number; min: number }
                  standardDeviation: number
                  unit: string
                  value: number
                }
                fat: {
                  confidenceRange95Percent: { max: number; min: number }
                  standardDeviation: number
                  unit: string
                  value: number
                }
                protein: {
                  confidenceRange95Percent: { max: number; min: number }
                  standardDeviation: number
                  unit: string
                  value: number
                }
                recipesUsed: number
              }
              recipes: { id: number; imageType: string; title: string; url: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { imageUrl: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { imageUrl: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { imageUrl: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/food/images/classify': {
      $get:
        | {
            input: { query: { imageUrl: string } }
            output: { category: string; probability: number }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { imageUrl: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { imageUrl: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { imageUrl: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/food/ingredients/autocomplete': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                number?: number | undefined
                metaInformation?: boolean | undefined
                intolerances?: string | undefined
                language?: 'en' | 'de' | undefined
              }
            }
            output: {
              aisle?: string | undefined
              id?: number | undefined
              image: string
              name: string
              possibleUnits?: string[] | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                number?: number | undefined
                metaInformation?: boolean | undefined
                intolerances?: string | undefined
                language?: 'en' | 'de' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                number?: number | undefined
                metaInformation?: boolean | undefined
                intolerances?: string | undefined
                language?: 'en' | 'de' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                number?: number | undefined
                metaInformation?: boolean | undefined
                intolerances?: string | undefined
                language?: 'en' | 'de' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/ingredients/glycemicLoad': {
      $post:
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              json: { ingredients: string[] }
            }
            output: {
              ingredients: {
                glycemicIndex: number
                glycemicLoad: number
                id: number
                original: string
              }[]
              totalGlycemicLoad: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              json: { ingredients: string[] }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              json: { ingredients: string[] }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              json: { ingredients: string[] }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/ingredients/map': {
      $post:
        | {
            input: { json: { ingredients: string[]; servings: number } }
            output: {
              ingredientImage: string
              meta: string[]
              original: string
              originalName: string
              products: { id: number; title: string; upc: string }[]
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { ingredients: string[]; servings: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: { ingredients: string[]; servings: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: { ingredients: string[]; servings: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/ingredients/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                addChildren?: boolean | undefined
                minProteinPercent?: number | undefined
                maxProteinPercent?: number | undefined
                minFatPercent?: number | undefined
                maxFatPercent?: number | undefined
                minCarbsPercent?: number | undefined
                maxCarbsPercent?: number | undefined
                metaInformation?: boolean | undefined
                intolerances?: string | undefined
                sort?: string | undefined
                sortDirection?: string | undefined
                offset?: number | undefined
                number?: number | undefined
                language?: 'en' | 'de' | undefined
              }
            }
            output: {
              number: number
              offset: number
              results: { id: number; image: string; name: string }[]
              totalResults: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                addChildren?: boolean | undefined
                minProteinPercent?: number | undefined
                maxProteinPercent?: number | undefined
                minFatPercent?: number | undefined
                maxFatPercent?: number | undefined
                minCarbsPercent?: number | undefined
                maxCarbsPercent?: number | undefined
                metaInformation?: boolean | undefined
                intolerances?: string | undefined
                sort?: string | undefined
                sortDirection?: string | undefined
                offset?: number | undefined
                number?: number | undefined
                language?: 'en' | 'de' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                addChildren?: boolean | undefined
                minProteinPercent?: number | undefined
                maxProteinPercent?: number | undefined
                minFatPercent?: number | undefined
                maxFatPercent?: number | undefined
                minCarbsPercent?: number | undefined
                maxCarbsPercent?: number | undefined
                metaInformation?: boolean | undefined
                intolerances?: string | undefined
                sort?: string | undefined
                sortDirection?: string | undefined
                offset?: number | undefined
                number?: number | undefined
                language?: 'en' | 'de' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                addChildren?: boolean | undefined
                minProteinPercent?: number | undefined
                maxProteinPercent?: number | undefined
                minFatPercent?: number | undefined
                maxFatPercent?: number | undefined
                minCarbsPercent?: number | undefined
                maxCarbsPercent?: number | undefined
                metaInformation?: boolean | undefined
                intolerances?: string | undefined
                sort?: string | undefined
                sortDirection?: string | undefined
                offset?: number | undefined
                number?: number | undefined
                language?: 'en' | 'de' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/ingredients/substitutes': {
      $get:
        | {
            input: { query: { ingredientName: string } }
            output: { ingredient: string; message: string; substitutes: string[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ingredientName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { ingredientName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { ingredientName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/ingredients/:id/amount': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { nutrient: string; target: number; unit?: string | undefined }
            }
            output: { amount: number; unit: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { nutrient: string; target: number; unit?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { nutrient: string; target: number; unit?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { nutrient: string; target: number; unit?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/ingredients/:id/information': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { amount?: number | undefined; unit?: string | undefined }
            }
            output: {
              aisle: string
              amount: number
              categoryPath: string[]
              consistency: string
              estimatedCost: { unit: string; value: number }
              id: number
              image: string
              meta: { [x: string]: unknown }[]
              name: string
              nameClean: string
              nutrition: {
                caloricBreakdown: {
                  percentCarbs: number
                  percentFat: number
                  percentProtein: number
                }
                nutrients: {
                  amount: number
                  name: string
                  percentOfDailyNeeds: number
                  unit: string
                }[]
                properties: { amount: number; name: string; unit: string }[]
                weightPerServing: { amount: number; unit: string }
              }
              original: string
              originalName: string
              possibleUnits: string[]
              shoppingListUnits: string[]
              unit: string
              unitLong: string
              unitShort: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { amount?: number | undefined; unit?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { amount?: number | undefined; unit?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { amount?: number | undefined; unit?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/ingredients/:id/substitutes': {
      $get:
        | {
            input: { param: { id: number } }
            output: { ingredient: string; message: string; substitutes: string[] }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/food/jokes/random': {
      $get:
        | { input: {}; output: { text: string }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/food/menuItems/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                addMenuItemInformation?: false | true | undefined
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {
              menuItems: {
                id: number
                image: string
                imageType: string
                restaurantChain: string
                servings?: { number: number; size: number; unit: string } | undefined
                title: string
              }[]
              number: number
              offset: number
              totalMenuItems: number
              type: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                addMenuItemInformation?: false | true | undefined
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                addMenuItemInformation?: false | true | undefined
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                addMenuItemInformation?: false | true | undefined
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/menuItems/suggest': {
      $get:
        | {
            input: { query: { query: string; number?: number | undefined } }
            output: { results: { id: number; title: string }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string; number?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { query: string; number?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { query: string; number?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/menuItems/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: {
              badges: string[]
              breadcrumbs: string[]
              generatedText?: string | undefined
              id: number
              imageType: string
              likes: number
              nutrition: {
                caloricBreakdown: {
                  percentCarbs: number
                  percentFat: number
                  percentProtein: number
                }
                nutrients: {
                  amount: number
                  name: string
                  percentOfDailyNeeds: number
                  unit: string
                }[]
              }
              price?: number | undefined
              restaurantChain: string
              servings: { number: number; size: number; unit: string }
              spoonacularScore?: number | undefined
              title: string
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/food/menuItems/:id/nutritionLabel': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                defaultCss?: boolean | undefined
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                defaultCss?: boolean | undefined
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                defaultCss?: boolean | undefined
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                defaultCss?: boolean | undefined
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/menuItems/:id/nutritionLabel.png': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/menuItems/:id/nutritionWidget': {
      $get:
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } } & {
              header: { Accept?: 'application/json' | 'text/html' | 'media/*' | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } } & {
              header: { Accept?: 'application/json' | 'text/html' | 'media/*' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } } & {
              header: { Accept?: 'application/json' | 'text/html' | 'media/*' | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } } & {
              header: { Accept?: 'application/json' | 'text/html' | 'media/*' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/menuItems/:id/nutritionWidget.png': {
      $get:
        | {
            input: { param: { id: number } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/food/products/classify': {
      $post:
        | {
            input: { query: { locale?: 'en_US' | 'en_GB' | undefined } } & {
              json: { plu_code: string; title: string; upc: string }
            }
            output: {
              breadcrumbs: string[]
              category: string
              cleanTitle: string
              image: string
              usdaCode: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { locale?: 'en_US' | 'en_GB' | undefined } } & {
              json: { plu_code: string; title: string; upc: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { locale?: 'en_US' | 'en_GB' | undefined } } & {
              json: { plu_code: string; title: string; upc: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { locale?: 'en_US' | 'en_GB' | undefined } } & {
              json: { plu_code: string; title: string; upc: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/products/classifyBatch': {
      $post:
        | {
            input: { query: { locale?: string | undefined } } & {
              json: { plu_code: string; title: string; upc: string }[]
            }
            output: {
              breadcrumbs: string[]
              category: string
              cleanTitle: string
              image: string
              usdaCode: number
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              json: { plu_code: string; title: string; upc: string }[]
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              json: { plu_code: string; title: string; upc: string }[]
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { locale?: string | undefined } } & {
              json: { plu_code: string; title: string; upc: string }[]
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/products/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                addProductInformation?: false | true | undefined
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {
              number: number
              offset: number
              products: { id: number; imageType: string; title: string }[]
              totalProducts: number
              type: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                addProductInformation?: false | true | undefined
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                addProductInformation?: false | true | undefined
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                addProductInformation?: false | true | undefined
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/products/suggest': {
      $get:
        | {
            input: { query: { query: string; number?: number | undefined } }
            output: { results: { id: number; title: string }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query: string; number?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { query: string; number?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { query: string; number?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/products/upc/:upc': {
      $get:
        | {
            input: { param: { upc: number } }
            output: {
              badges: string[]
              breadcrumbs: string[]
              generatedText: string
              id: number
              imageType: string
              importantBadges: string[]
              ingredientCount?: number | undefined
              ingredientList: string
              ingredients: {
                description?: { [x: string]: unknown } | undefined
                name: string
                safety_level?: { [x: string]: unknown } | undefined
              }[]
              likes: number
              nutrition: {
                caloricBreakdown: {
                  percentCarbs: number
                  percentFat: number
                  percentProtein: number
                }
                nutrients: {
                  amount: number
                  name: string
                  percentOfDailyNeeds: number
                  unit: string
                }[]
              }
              price: number
              servings: { number: number; size: number; unit: string }
              spoonacularScore: number
              title: string
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { upc: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { upc: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { upc: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/food/products/upc/:upc/comparable': {
      $get:
        | {
            input: { param: { upc: number } }
            output: {
              comparableProducts: {
                calories: { [x: string]: unknown }[]
                likes: { [x: string]: unknown }[]
                price: { [x: string]: unknown }[]
                protein: { difference: number; id: number; image: string; title: string }[]
                spoonacularScore: { difference: number; id: number; image: string; title: string }[]
                sugar: { [x: string]: unknown }[]
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { upc: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { upc: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { upc: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/food/products/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: {
              aisle: string
              badges: string[]
              breadcrumbs: string[]
              generatedText?: { [x: string]: unknown } | undefined
              id: number
              imageType: string
              importantBadges: string[]
              ingredientCount: number
              ingredientList: string
              ingredients: {
                description?: { [x: string]: unknown } | undefined
                name: string
                safety_level?: { [x: string]: unknown } | undefined
              }[]
              likes: number
              nutrition: {
                caloricBreakdown: {
                  percentCarbs: number
                  percentFat: number
                  percentProtein: number
                }
                nutrients: {
                  amount: number
                  name: string
                  percentOfDailyNeeds: number
                  unit: string
                }[]
              }
              price: number
              servings: { number: number; size: number; unit: string }
              spoonacularScore: number
              title: string
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/food/products/:id/nutritionLabel': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                defaultCss?: boolean | undefined
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                defaultCss?: boolean | undefined
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                defaultCss?: boolean | undefined
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                defaultCss?: boolean | undefined
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/products/:id/nutritionLabel.png': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/products/:id/nutritionWidget': {
      $get:
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } } & {
              header: { Accept?: 'application/json' | 'text/html' | 'media/*' | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } } & {
              header: { Accept?: 'application/json' | 'text/html' | 'media/*' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } } & {
              header: { Accept?: 'application/json' | 'text/html' | 'media/*' | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } } & {
              header: { Accept?: 'application/json' | 'text/html' | 'media/*' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/products/:id/nutritionWidget.png': {
      $get:
        | {
            input: { param: { id: number } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/food/restaurants/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
                distance?: number | undefined
                budget?: number | undefined
                cuisine?: string | undefined
                'min-rating'?: number | undefined
                'is-open'?: boolean | undefined
                sort?: string | undefined
                page?: number | undefined
              }
            }
            output: {
              restaurants?:
                | {
                    _id?: string | undefined
                    address?:
                      | {
                          city?: string | undefined
                          country?: string | undefined
                          lat?: number | undefined
                          latitude?: number | undefined
                          lon?: number | undefined
                          longitude?: number | undefined
                          state?: string | undefined
                          street_addr?: string | undefined
                          street_addr_2?: string | undefined
                          zipcode?: string | undefined
                        }
                      | undefined
                    aggregated_rating_count?: number | undefined
                    cuisines?: string[] | undefined
                    delivery_enabled?: boolean | undefined
                    description?: string | undefined
                    dollar_signs?: number | undefined
                    food_photos?: string[] | undefined
                    is_open?: boolean | undefined
                    local_hours?:
                      | {
                          delivery?:
                            | {
                                Friday?: string | undefined
                                Monday?: string | undefined
                                Saturday?: string | undefined
                                Sunday?: string | undefined
                                Thursday?: string | undefined
                                Tuesday?: string | undefined
                                Wednesday?: string | undefined
                              }
                            | undefined
                          dine_in?:
                            | {
                                Friday?: string | undefined
                                Monday?: string | undefined
                                Saturday?: string | undefined
                                Sunday?: string | undefined
                                Thursday?: string | undefined
                                Tuesday?: string | undefined
                                Wednesday?: string | undefined
                              }
                            | undefined
                          operational?:
                            | {
                                Friday?: string | undefined
                                Monday?: string | undefined
                                Saturday?: string | undefined
                                Sunday?: string | undefined
                                Thursday?: string | undefined
                                Tuesday?: string | undefined
                                Wednesday?: string | undefined
                              }
                            | undefined
                          pickup?:
                            | {
                                Friday?: string | undefined
                                Monday?: string | undefined
                                Saturday?: string | undefined
                                Sunday?: string | undefined
                                Thursday?: string | undefined
                                Tuesday?: string | undefined
                                Wednesday?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    logo_photos?: string[] | undefined
                    miles?: number | undefined
                    name?: string | undefined
                    offers_first_party_delivery?: boolean | undefined
                    offers_third_party_delivery?: boolean | undefined
                    phone_number?: number | undefined
                    pickup_enabled?: boolean | undefined
                    store_photos?: { [x: string]: unknown }[] | undefined
                    type?: string | undefined
                    weighted_rating_value?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
                distance?: number | undefined
                budget?: number | undefined
                cuisine?: string | undefined
                'min-rating'?: number | undefined
                'is-open'?: boolean | undefined
                sort?: string | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
                distance?: number | undefined
                budget?: number | undefined
                cuisine?: string | undefined
                'min-rating'?: number | undefined
                'is-open'?: boolean | undefined
                sort?: string | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                lat?: number | undefined
                lng?: number | undefined
                distance?: number | undefined
                budget?: number | undefined
                cuisine?: string | undefined
                'min-rating'?: number | undefined
                'is-open'?: boolean | undefined
                sort?: string | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/search': {
      $get:
        | {
            input: {
              query: { query: string; offset?: number | undefined; number?: number | undefined }
            }
            output: {
              limit: number
              offset: number
              query: string
              searchResults: {
                name: string
                results?:
                  | {
                      content: string | null
                      id: string
                      image: string | null
                      link: string | null
                      name: string
                      relevance: number
                      type: string
                    }[]
                  | undefined
                totalResults: number
              }[]
              totalResults: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { query: string; offset?: number | undefined; number?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { query: string; offset?: number | undefined; number?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: { query: string; offset?: number | undefined; number?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/site/search': {
      $get:
        | {
            input: { query: { query: string } }
            output: {
              Articles: {
                dataPoints?: { [x: string]: unknown }[] | undefined
                image: string
                link: string
                name: string
              }[]
              'Grocery Products': {
                dataPoints?: { key: string; value: string }[] | undefined
                image: string
                link: string
                name: string
              }[]
              'Menu Items': {
                dataPoints?: { key: string; value: string }[] | undefined
                image: string
                link: string
                name: string
              }[]
              Recipes: {
                dataPoints?: { key: string; value: string }[] | undefined
                image: string
                link: string
                name: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { query: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { query: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { query: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/food/trivia/random': {
      $get:
        | { input: {}; output: { text: string }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/food/videos/search': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                type?: string | undefined
                cuisine?: string | undefined
                diet?: string | undefined
                includeIngredients?: string | undefined
                excludeIngredients?: string | undefined
                minLength?: number | undefined
                maxLength?: number | undefined
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {
              totalResults: number
              videos: {
                length: number
                rating: number
                shortTitle: string
                thumbnail: string
                title: string
                views: number
                youTubeId: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                type?: string | undefined
                cuisine?: string | undefined
                diet?: string | undefined
                includeIngredients?: string | undefined
                excludeIngredients?: string | undefined
                minLength?: number | undefined
                maxLength?: number | undefined
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                type?: string | undefined
                cuisine?: string | undefined
                diet?: string | undefined
                includeIngredients?: string | undefined
                excludeIngredients?: string | undefined
                minLength?: number | undefined
                maxLength?: number | undefined
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                type?: string | undefined
                cuisine?: string | undefined
                diet?: string | undefined
                includeIngredients?: string | undefined
                excludeIngredients?: string | undefined
                minLength?: number | undefined
                maxLength?: number | undefined
                offset?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/wine/description': {
      $get:
        | {
            input: { query: { wine: string } }
            output: { wineDescription: string }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { wine: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { wine: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { wine: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/food/wine/dishes': {
      $get:
        | {
            input: { query: { wine: string } }
            output: { pairings: string[]; text: string }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { wine: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { wine: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { wine: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/food/wine/pairing': {
      $get:
        | {
            input: { query: { food: string; maxPrice?: number | undefined } }
            output: {
              pairedWines: string[]
              pairingText: string
              productMatches: {
                averageRating: number
                description?: { [x: string]: unknown } | undefined
                id: number
                imageUrl: string
                link: string
                price: string
                ratingCount: number
                score: number
                title: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { food: string; maxPrice?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { food: string; maxPrice?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { food: string; maxPrice?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/food/wine/recommendation': {
      $get:
        | {
            input: {
              query: {
                wine: string
                maxPrice?: number | undefined
                minRating?: number | undefined
                number?: number | undefined
              }
            }
            output: {
              recommendedWines: {
                averageRating: number
                description: string
                id: number
                imageUrl: string
                link: string
                price: string
                ratingCount: number
                score: number
                title: string
              }[]
              totalFound: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                wine: string
                maxPrice?: number | undefined
                minRating?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                wine: string
                maxPrice?: number | undefined
                minRating?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                wine: string
                maxPrice?: number | undefined
                minRating?: number | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/mealplanner/generate': {
      $get:
        | {
            input: {
              query: {
                timeFrame?: string | undefined
                targetCalories?: number | undefined
                diet?: string | undefined
                exclude?: string | undefined
              }
            }
            output: {
              meals: {
                id: number
                imageType: string
                readyInMinutes: number
                servings: number
                sourceUrl: string
                title: string
              }[]
              nutrients: { calories: number; carbohydrates: number; fat: number; protein: number }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                timeFrame?: string | undefined
                targetCalories?: number | undefined
                diet?: string | undefined
                exclude?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                timeFrame?: string | undefined
                targetCalories?: number | undefined
                diet?: string | undefined
                exclude?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                timeFrame?: string | undefined
                targetCalories?: number | undefined
                diet?: string | undefined
                exclude?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/mealplanner/:username/day/:date': {
      $delete:
        | {
            input: { param: { username: string; date: string } } & { query: { hash: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; date: string } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { username: string; date: string } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { username: string; date: string } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/mealplanner/:username/items': {
      $post:
        | {
            input: { param: { username: string } } & { query: { hash: string } } & {
              json: {
                date: number
                position: number
                slot: number
                type: string
                value: { ingredients: { name: string }[] }
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } } & {
              json: {
                date: number
                position: number
                slot: number
                type: string
                value: { ingredients: { name: string }[] }
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } } & {
              json: {
                date: number
                position: number
                slot: number
                type: string
                value: { ingredients: { name: string }[] }
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } } & {
              json: {
                date: number
                position: number
                slot: number
                type: string
                value: { ingredients: { name: string }[] }
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/mealplanner/:username/items/:id': {
      $delete:
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/mealplanner/:username/shopping-list': {
      $get:
        | {
            input: { param: { username: string } } & { query: { hash: string } }
            output: {
              aisles: {
                aisle: string
                items?:
                  | {
                      aisle: string
                      cost: number
                      id: number
                      ingredientId: number
                      measures?:
                        | {
                            metric: { amount: number; unit: string }
                            original: { amount: number; unit: string }
                            us: { amount: number; unit: string }
                          }
                        | undefined
                      name: string
                      pantryItem: boolean
                    }[]
                  | undefined
              }[]
              cost: number
              endDate: number
              startDate: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/mealplanner/:username/shopping-list/items': {
      $post:
        | {
            input: { param: { username: string } } & { query: { hash: string } } & {
              json: { aisle: string; item: string; parse: boolean }
            }
            output: {
              aisles: {
                aisle: string
                items?:
                  | {
                      aisle: string
                      cost: number
                      id: number
                      ingredientId: number
                      measures?:
                        | {
                            metric: { amount: number; unit: string }
                            original: { amount: number; unit: string }
                            us: { amount: number; unit: string }
                          }
                        | undefined
                      name: string
                      pantryItem: boolean
                    }[]
                  | undefined
              }[]
              cost: number
              endDate: number
              startDate: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } } & {
              json: { aisle: string; item: string; parse: boolean }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } } & {
              json: { aisle: string; item: string; parse: boolean }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } } & {
              json: { aisle: string; item: string; parse: boolean }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/mealplanner/:username/shopping-list/items/:id': {
      $delete:
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/mealplanner/:username/shopping-list/:start-date/:end-date': {
      $post:
        | {
            input: { param: { username: string; 'start-date': string; 'end-date': string } } & {
              query: { hash: string }
            }
            output: {
              aisles: {
                aisle: string
                items?:
                  | {
                      aisle: string
                      cost: number
                      id: number
                      ingredientId: number
                      measures?:
                        | {
                            metric: { amount: number; unit: string }
                            original: { amount: number; unit: string }
                            us: { amount: number; unit: string }
                          }
                        | undefined
                      name: string
                      pantryItem: boolean
                    }[]
                  | undefined
              }[]
              cost: number
              endDate: number
              startDate: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; 'start-date': string; 'end-date': string } } & {
              query: { hash: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { username: string; 'start-date': string; 'end-date': string } } & {
              query: { hash: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { username: string; 'start-date': string; 'end-date': string } } & {
              query: { hash: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/mealplanner/:username/templates': {
      $get:
        | {
            input: { param: { username: string } } & { query: { hash: string } }
            output: { templates: { id: number; name: string }[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { username: string } } & { query: { hash: string } }
            output: {
              items: {
                day: number
                position: number
                slot: number
                type: string
                value?:
                  | {
                      id?: number | undefined
                      imageType?: string | undefined
                      servings?: number | undefined
                      title?: string | undefined
                    }
                  | undefined
              }[]
              name: string
              publishAsPublic: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { username: string } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/mealplanner/:username/templates/:id': {
      $delete:
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: {
              days: {
                day: string
                items?:
                  | {
                      id: number
                      position: number
                      slot: number
                      type: string
                      value?: { id: number; imageType: string; title: string } | undefined
                    }[]
                  | undefined
                nutritionSummary?:
                  | {
                      nutrients: {
                        amount: number
                        name: string
                        percentDailyNeeds: number
                        unit: string
                      }[]
                    }
                  | undefined
                nutritionSummaryBreakfast?:
                  | {
                      nutrients: {
                        amount: number
                        name: string
                        percentDailyNeeds: number
                        unit: string
                      }[]
                    }
                  | undefined
                nutritionSummaryDinner?:
                  | {
                      nutrients: {
                        amount: number
                        name: string
                        percentDailyNeeds: number
                        unit: string
                      }[]
                    }
                  | undefined
                nutritionSummaryLunch?:
                  | {
                      nutrients: {
                        amount: number
                        name: string
                        percentDailyNeeds: number
                        unit: string
                      }[]
                    }
                  | undefined
              }[]
              id: number
              name: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { username: string; id: number } } & { query: { hash: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/mealplanner/:username/week/:start-date': {
      $get:
        | {
            input: { param: { username: string; 'start-date': string } } & {
              query: { hash: string }
            }
            output: {
              days: {
                date: number
                day: string
                items?:
                  | {
                      id: number
                      position: number
                      slot: number
                      type: string
                      value?:
                        | { id: number; imageType: string; servings: number; title: string }
                        | undefined
                    }[]
                  | undefined
                nutritionSummary?:
                  | {
                      nutrients: {
                        amount: number
                        name: string
                        percentDailyNeeds: number
                        unit: string
                      }[]
                    }
                  | undefined
                nutritionSummaryBreakfast?:
                  | {
                      nutrients: {
                        amount: number
                        name: string
                        percentDailyNeeds: number
                        unit: string
                      }[]
                    }
                  | undefined
                nutritionSummaryDinner?:
                  | {
                      nutrients: {
                        amount: number
                        name: string
                        percentDailyNeeds: number
                        unit: string
                      }[]
                    }
                  | undefined
                nutritionSummaryLunch?:
                  | {
                      nutrients: {
                        amount: number
                        name: string
                        percentDailyNeeds: number
                        unit: string
                      }[]
                    }
                  | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string; 'start-date': string } } & {
              query: { hash: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { username: string; 'start-date': string } } & {
              query: { hash: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { username: string; 'start-date': string } } & {
              query: { hash: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/analyze': {
      $post:
        | {
            input: {
              query: {
                language?: string | undefined
                includeNutrition?: boolean | undefined
                includeTaste?: boolean | undefined
              }
            } & {
              json: {
                ingredients?: string[] | undefined
                instructions?: string | undefined
                servings?: number | undefined
                title?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                language?: string | undefined
                includeNutrition?: boolean | undefined
                includeTaste?: boolean | undefined
              }
            } & {
              json: {
                ingredients?: string[] | undefined
                instructions?: string | undefined
                servings?: number | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                language?: string | undefined
                includeNutrition?: boolean | undefined
                includeTaste?: boolean | undefined
              }
            } & {
              json: {
                ingredients?: string[] | undefined
                instructions?: string | undefined
                servings?: number | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                language?: string | undefined
                includeNutrition?: boolean | undefined
                includeTaste?: boolean | undefined
              }
            } & {
              json: {
                ingredients?: string[] | undefined
                instructions?: string | undefined
                servings?: number | undefined
                title?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/analyzeInstructions': {
      $post:
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: {
              equipment: { id: number; name: string }[]
              ingredients: { id: number; name: string }[]
              parsedInstructions: {
                name: string
                steps?:
                  | {
                      equipment?:
                        | { id: number; image: string; localizedName: string; name: string }[]
                        | undefined
                      ingredients?:
                        | { id: number; image: string; localizedName: string; name: string }[]
                        | undefined
                      number: number
                      step: string
                    }[]
                  | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/autocomplete': {
      $get:
        | {
            input: { query: { query?: string | undefined; number?: number | undefined } }
            output: { id: number; imageType: string; title: string }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { query?: string | undefined; number?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { query?: string | undefined; number?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { query?: string | undefined; number?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/complexSearch': {
      $get:
        | {
            input: {
              query: {
                query?: string | undefined
                cuisine?: string | undefined
                excludeCuisine?: string | undefined
                diet?: string | undefined
                intolerances?: string | undefined
                equipment?: string | undefined
                includeIngredients?: string | undefined
                excludeIngredients?: string | undefined
                type?: string | undefined
                instructionsRequired?: boolean | undefined
                fillIngredients?: boolean | undefined
                addRecipeInformation?: boolean | undefined
                addRecipeNutrition?: boolean | undefined
                author?: string | undefined
                tags?: string | undefined
                recipeBoxId?: number | undefined
                titleMatch?: string | undefined
                maxReadyTime?: number | undefined
                ignorePantry?: boolean | undefined
                sort?: string | undefined
                sortDirection?: string | undefined
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                minAlcohol?: number | undefined
                maxAlcohol?: number | undefined
                minCaffeine?: number | undefined
                maxCaffeine?: number | undefined
                minCopper?: number | undefined
                maxCopper?: number | undefined
                minCalcium?: number | undefined
                maxCalcium?: number | undefined
                minCholine?: number | undefined
                maxCholine?: number | undefined
                minCholesterol?: number | undefined
                maxCholesterol?: number | undefined
                minFluoride?: number | undefined
                maxFluoride?: number | undefined
                minSaturatedFat?: number | undefined
                maxSaturatedFat?: number | undefined
                minVitaminA?: number | undefined
                maxVitaminA?: number | undefined
                minVitaminC?: number | undefined
                maxVitaminC?: number | undefined
                minVitaminD?: number | undefined
                maxVitaminD?: number | undefined
                minVitaminE?: number | undefined
                maxVitaminE?: number | undefined
                minVitaminK?: number | undefined
                maxVitaminK?: number | undefined
                minVitaminB1?: number | undefined
                maxVitaminB1?: number | undefined
                minVitaminB2?: number | undefined
                maxVitaminB2?: number | undefined
                minVitaminB5?: number | undefined
                maxVitaminB5?: number | undefined
                minVitaminB3?: number | undefined
                maxVitaminB3?: number | undefined
                minVitaminB6?: number | undefined
                maxVitaminB6?: number | undefined
                minVitaminB12?: number | undefined
                maxVitaminB12?: number | undefined
                minFiber?: number | undefined
                maxFiber?: number | undefined
                minFolate?: number | undefined
                maxFolate?: number | undefined
                minFolicAcid?: number | undefined
                maxFolicAcid?: number | undefined
                minIodine?: number | undefined
                maxIodine?: number | undefined
                minIron?: number | undefined
                maxIron?: number | undefined
                minMagnesium?: number | undefined
                maxMagnesium?: number | undefined
                minManganese?: number | undefined
                maxManganese?: number | undefined
                minPhosphorus?: number | undefined
                maxPhosphorus?: number | undefined
                minPotassium?: number | undefined
                maxPotassium?: number | undefined
                minSelenium?: number | undefined
                maxSelenium?: number | undefined
                minSodium?: number | undefined
                maxSodium?: number | undefined
                minSugar?: number | undefined
                maxSugar?: number | undefined
                minZinc?: number | undefined
                maxZinc?: number | undefined
                offset?: number | undefined
                number?: number | undefined
                limitLicense?: boolean | undefined
              }
            }
            output: {
              number: number
              offset: number
              results: {
                calories: number
                carbs: string
                fat: string
                id: number
                image: string
                imageType: string
                protein: string
                title: string
              }[]
              totalResults: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?: string | undefined
                cuisine?: string | undefined
                excludeCuisine?: string | undefined
                diet?: string | undefined
                intolerances?: string | undefined
                equipment?: string | undefined
                includeIngredients?: string | undefined
                excludeIngredients?: string | undefined
                type?: string | undefined
                instructionsRequired?: boolean | undefined
                fillIngredients?: boolean | undefined
                addRecipeInformation?: boolean | undefined
                addRecipeNutrition?: boolean | undefined
                author?: string | undefined
                tags?: string | undefined
                recipeBoxId?: number | undefined
                titleMatch?: string | undefined
                maxReadyTime?: number | undefined
                ignorePantry?: boolean | undefined
                sort?: string | undefined
                sortDirection?: string | undefined
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                minAlcohol?: number | undefined
                maxAlcohol?: number | undefined
                minCaffeine?: number | undefined
                maxCaffeine?: number | undefined
                minCopper?: number | undefined
                maxCopper?: number | undefined
                minCalcium?: number | undefined
                maxCalcium?: number | undefined
                minCholine?: number | undefined
                maxCholine?: number | undefined
                minCholesterol?: number | undefined
                maxCholesterol?: number | undefined
                minFluoride?: number | undefined
                maxFluoride?: number | undefined
                minSaturatedFat?: number | undefined
                maxSaturatedFat?: number | undefined
                minVitaminA?: number | undefined
                maxVitaminA?: number | undefined
                minVitaminC?: number | undefined
                maxVitaminC?: number | undefined
                minVitaminD?: number | undefined
                maxVitaminD?: number | undefined
                minVitaminE?: number | undefined
                maxVitaminE?: number | undefined
                minVitaminK?: number | undefined
                maxVitaminK?: number | undefined
                minVitaminB1?: number | undefined
                maxVitaminB1?: number | undefined
                minVitaminB2?: number | undefined
                maxVitaminB2?: number | undefined
                minVitaminB5?: number | undefined
                maxVitaminB5?: number | undefined
                minVitaminB3?: number | undefined
                maxVitaminB3?: number | undefined
                minVitaminB6?: number | undefined
                maxVitaminB6?: number | undefined
                minVitaminB12?: number | undefined
                maxVitaminB12?: number | undefined
                minFiber?: number | undefined
                maxFiber?: number | undefined
                minFolate?: number | undefined
                maxFolate?: number | undefined
                minFolicAcid?: number | undefined
                maxFolicAcid?: number | undefined
                minIodine?: number | undefined
                maxIodine?: number | undefined
                minIron?: number | undefined
                maxIron?: number | undefined
                minMagnesium?: number | undefined
                maxMagnesium?: number | undefined
                minManganese?: number | undefined
                maxManganese?: number | undefined
                minPhosphorus?: number | undefined
                maxPhosphorus?: number | undefined
                minPotassium?: number | undefined
                maxPotassium?: number | undefined
                minSelenium?: number | undefined
                maxSelenium?: number | undefined
                minSodium?: number | undefined
                maxSodium?: number | undefined
                minSugar?: number | undefined
                maxSugar?: number | undefined
                minZinc?: number | undefined
                maxZinc?: number | undefined
                offset?: number | undefined
                number?: number | undefined
                limitLicense?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                query?: string | undefined
                cuisine?: string | undefined
                excludeCuisine?: string | undefined
                diet?: string | undefined
                intolerances?: string | undefined
                equipment?: string | undefined
                includeIngredients?: string | undefined
                excludeIngredients?: string | undefined
                type?: string | undefined
                instructionsRequired?: boolean | undefined
                fillIngredients?: boolean | undefined
                addRecipeInformation?: boolean | undefined
                addRecipeNutrition?: boolean | undefined
                author?: string | undefined
                tags?: string | undefined
                recipeBoxId?: number | undefined
                titleMatch?: string | undefined
                maxReadyTime?: number | undefined
                ignorePantry?: boolean | undefined
                sort?: string | undefined
                sortDirection?: string | undefined
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                minAlcohol?: number | undefined
                maxAlcohol?: number | undefined
                minCaffeine?: number | undefined
                maxCaffeine?: number | undefined
                minCopper?: number | undefined
                maxCopper?: number | undefined
                minCalcium?: number | undefined
                maxCalcium?: number | undefined
                minCholine?: number | undefined
                maxCholine?: number | undefined
                minCholesterol?: number | undefined
                maxCholesterol?: number | undefined
                minFluoride?: number | undefined
                maxFluoride?: number | undefined
                minSaturatedFat?: number | undefined
                maxSaturatedFat?: number | undefined
                minVitaminA?: number | undefined
                maxVitaminA?: number | undefined
                minVitaminC?: number | undefined
                maxVitaminC?: number | undefined
                minVitaminD?: number | undefined
                maxVitaminD?: number | undefined
                minVitaminE?: number | undefined
                maxVitaminE?: number | undefined
                minVitaminK?: number | undefined
                maxVitaminK?: number | undefined
                minVitaminB1?: number | undefined
                maxVitaminB1?: number | undefined
                minVitaminB2?: number | undefined
                maxVitaminB2?: number | undefined
                minVitaminB5?: number | undefined
                maxVitaminB5?: number | undefined
                minVitaminB3?: number | undefined
                maxVitaminB3?: number | undefined
                minVitaminB6?: number | undefined
                maxVitaminB6?: number | undefined
                minVitaminB12?: number | undefined
                maxVitaminB12?: number | undefined
                minFiber?: number | undefined
                maxFiber?: number | undefined
                minFolate?: number | undefined
                maxFolate?: number | undefined
                minFolicAcid?: number | undefined
                maxFolicAcid?: number | undefined
                minIodine?: number | undefined
                maxIodine?: number | undefined
                minIron?: number | undefined
                maxIron?: number | undefined
                minMagnesium?: number | undefined
                maxMagnesium?: number | undefined
                minManganese?: number | undefined
                maxManganese?: number | undefined
                minPhosphorus?: number | undefined
                maxPhosphorus?: number | undefined
                minPotassium?: number | undefined
                maxPotassium?: number | undefined
                minSelenium?: number | undefined
                maxSelenium?: number | undefined
                minSodium?: number | undefined
                maxSodium?: number | undefined
                minSugar?: number | undefined
                maxSugar?: number | undefined
                minZinc?: number | undefined
                maxZinc?: number | undefined
                offset?: number | undefined
                number?: number | undefined
                limitLicense?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                query?: string | undefined
                cuisine?: string | undefined
                excludeCuisine?: string | undefined
                diet?: string | undefined
                intolerances?: string | undefined
                equipment?: string | undefined
                includeIngredients?: string | undefined
                excludeIngredients?: string | undefined
                type?: string | undefined
                instructionsRequired?: boolean | undefined
                fillIngredients?: boolean | undefined
                addRecipeInformation?: boolean | undefined
                addRecipeNutrition?: boolean | undefined
                author?: string | undefined
                tags?: string | undefined
                recipeBoxId?: number | undefined
                titleMatch?: string | undefined
                maxReadyTime?: number | undefined
                ignorePantry?: boolean | undefined
                sort?: string | undefined
                sortDirection?: string | undefined
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                minAlcohol?: number | undefined
                maxAlcohol?: number | undefined
                minCaffeine?: number | undefined
                maxCaffeine?: number | undefined
                minCopper?: number | undefined
                maxCopper?: number | undefined
                minCalcium?: number | undefined
                maxCalcium?: number | undefined
                minCholine?: number | undefined
                maxCholine?: number | undefined
                minCholesterol?: number | undefined
                maxCholesterol?: number | undefined
                minFluoride?: number | undefined
                maxFluoride?: number | undefined
                minSaturatedFat?: number | undefined
                maxSaturatedFat?: number | undefined
                minVitaminA?: number | undefined
                maxVitaminA?: number | undefined
                minVitaminC?: number | undefined
                maxVitaminC?: number | undefined
                minVitaminD?: number | undefined
                maxVitaminD?: number | undefined
                minVitaminE?: number | undefined
                maxVitaminE?: number | undefined
                minVitaminK?: number | undefined
                maxVitaminK?: number | undefined
                minVitaminB1?: number | undefined
                maxVitaminB1?: number | undefined
                minVitaminB2?: number | undefined
                maxVitaminB2?: number | undefined
                minVitaminB5?: number | undefined
                maxVitaminB5?: number | undefined
                minVitaminB3?: number | undefined
                maxVitaminB3?: number | undefined
                minVitaminB6?: number | undefined
                maxVitaminB6?: number | undefined
                minVitaminB12?: number | undefined
                maxVitaminB12?: number | undefined
                minFiber?: number | undefined
                maxFiber?: number | undefined
                minFolate?: number | undefined
                maxFolate?: number | undefined
                minFolicAcid?: number | undefined
                maxFolicAcid?: number | undefined
                minIodine?: number | undefined
                maxIodine?: number | undefined
                minIron?: number | undefined
                maxIron?: number | undefined
                minMagnesium?: number | undefined
                maxMagnesium?: number | undefined
                minManganese?: number | undefined
                maxManganese?: number | undefined
                minPhosphorus?: number | undefined
                maxPhosphorus?: number | undefined
                minPotassium?: number | undefined
                maxPotassium?: number | undefined
                minSelenium?: number | undefined
                maxSelenium?: number | undefined
                minSodium?: number | undefined
                maxSodium?: number | undefined
                minSugar?: number | undefined
                maxSugar?: number | undefined
                minZinc?: number | undefined
                maxZinc?: number | undefined
                offset?: number | undefined
                number?: number | undefined
                limitLicense?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/convert': {
      $get:
        | {
            input: {
              query: {
                ingredientName: string
                sourceAmount: number
                sourceUnit: string
                targetUnit: string
              }
            }
            output: {
              answer: string
              sourceAmount: number
              sourceUnit: string
              targetAmount: number
              targetUnit: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ingredientName: string
                sourceAmount: number
                sourceUnit: string
                targetUnit: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                ingredientName: string
                sourceAmount: number
                sourceUnit: string
                targetUnit: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                ingredientName: string
                sourceAmount: number
                sourceUnit: string
                targetUnit: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/cuisine': {
      $post:
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: { confidence: number; cuisine: string; cuisines: string[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/extract': {
      $get:
        | {
            input: {
              query: {
                url: string
                forceExtraction?: boolean | undefined
                analyze?: boolean | undefined
                includeNutrition?: boolean | undefined
                includeTaste?: boolean | undefined
              }
            }
            output: {
              aggregateLikes: number
              analyzedInstructions: { [x: string]: unknown }[]
              cheap: boolean
              creditsText: string
              cuisines: string[]
              dairyFree: boolean
              diets: string[]
              dishTypes: string[]
              extendedIngredients: {
                aisle: string
                amount: number
                consitency: string
                id: number
                image: string
                measures?:
                  | {
                      metric: { amount: number; unitLong: string; unitShort: string }
                      us: { amount: number; unitLong: string; unitShort: string }
                    }
                  | undefined
                meta?: string[] | undefined
                name: string
                original: string
                originalName: string
                unit: string
              }[]
              gaps: string
              glutenFree: boolean
              healthScore: number
              id: number
              image: string
              imageType: string
              instructions: string
              ketogenic: boolean
              license: string
              lowFodmap: boolean
              occasions: string[]
              pricePerServing: number
              readyInMinutes: number
              servings: number
              sourceName: string
              sourceUrl: string
              spoonacularScore: number
              spoonacularSourceUrl: string
              summary: string
              sustainable: boolean
              title: string
              vegan: boolean
              vegetarian: boolean
              veryHealthy: boolean
              veryPopular: boolean
              weightWatcherSmartPoints: number
              whole30: boolean
              winePairing: {
                pairedWines: string[]
                pairingText: string
                productMatches: {
                  averageRating: number
                  description: string
                  id: number
                  imageUrl: string
                  link: string
                  price: string
                  ratingCount: number
                  score: number
                  title: string
                }[]
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                url: string
                forceExtraction?: boolean | undefined
                analyze?: boolean | undefined
                includeNutrition?: boolean | undefined
                includeTaste?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                url: string
                forceExtraction?: boolean | undefined
                analyze?: boolean | undefined
                includeNutrition?: boolean | undefined
                includeTaste?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                url: string
                forceExtraction?: boolean | undefined
                analyze?: boolean | undefined
                includeNutrition?: boolean | undefined
                includeTaste?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/findByIngredients': {
      $get:
        | {
            input: {
              query: {
                ingredients?: string | undefined
                number?: number | undefined
                limitLicense?: boolean | undefined
                ranking?: number | undefined
                ignorePantry?: boolean | undefined
              }
            }
            output: {
              id: number
              image: string
              imageType: string
              likes: number
              missedIngredientCount: number
              missedIngredients: {
                aisle: string
                amount: number
                id: number
                image: string
                meta?: string[] | undefined
                name: string
                original: string
                originalName: string
                unit: string
                unitLong: string
                unitShort: string
              }[]
              title: string
              unusedIngredients: { [x: string]: unknown }[]
              usedIngredientCount: number
              usedIngredients: {
                aisle: string
                amount: number
                id: number
                image: string
                meta?: string[] | undefined
                name: string
                original: string
                originalName: string
                unit: string
                unitLong: string
                unitShort: string
              }[]
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ingredients?: string | undefined
                number?: number | undefined
                limitLicense?: boolean | undefined
                ranking?: number | undefined
                ignorePantry?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                ingredients?: string | undefined
                number?: number | undefined
                limitLicense?: boolean | undefined
                ranking?: number | undefined
                ignorePantry?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                ingredients?: string | undefined
                number?: number | undefined
                limitLicense?: boolean | undefined
                ranking?: number | undefined
                ignorePantry?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/findByNutrients': {
      $get:
        | {
            input: {
              query: {
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                minAlcohol?: number | undefined
                maxAlcohol?: number | undefined
                minCaffeine?: number | undefined
                maxCaffeine?: number | undefined
                minCopper?: number | undefined
                maxCopper?: number | undefined
                minCalcium?: number | undefined
                maxCalcium?: number | undefined
                minCholine?: number | undefined
                maxCholine?: number | undefined
                minCholesterol?: number | undefined
                maxCholesterol?: number | undefined
                minFluoride?: number | undefined
                maxFluoride?: number | undefined
                minSaturatedFat?: number | undefined
                maxSaturatedFat?: number | undefined
                minVitaminA?: number | undefined
                maxVitaminA?: number | undefined
                minVitaminC?: number | undefined
                maxVitaminC?: number | undefined
                minVitaminD?: number | undefined
                maxVitaminD?: number | undefined
                minVitaminE?: number | undefined
                maxVitaminE?: number | undefined
                minVitaminK?: number | undefined
                maxVitaminK?: number | undefined
                minVitaminB1?: number | undefined
                maxVitaminB1?: number | undefined
                minVitaminB2?: number | undefined
                maxVitaminB2?: number | undefined
                minVitaminB5?: number | undefined
                maxVitaminB5?: number | undefined
                minVitaminB3?: number | undefined
                maxVitaminB3?: number | undefined
                minVitaminB6?: number | undefined
                maxVitaminB6?: number | undefined
                minVitaminB12?: number | undefined
                maxVitaminB12?: number | undefined
                minFiber?: number | undefined
                maxFiber?: number | undefined
                minFolate?: number | undefined
                maxFolate?: number | undefined
                minFolicAcid?: number | undefined
                maxFolicAcid?: number | undefined
                minIodine?: number | undefined
                maxIodine?: number | undefined
                minIron?: number | undefined
                maxIron?: number | undefined
                minMagnesium?: number | undefined
                maxMagnesium?: number | undefined
                minManganese?: number | undefined
                maxManganese?: number | undefined
                minPhosphorus?: number | undefined
                maxPhosphorus?: number | undefined
                minPotassium?: number | undefined
                maxPotassium?: number | undefined
                minSelenium?: number | undefined
                maxSelenium?: number | undefined
                minSodium?: number | undefined
                maxSodium?: number | undefined
                minSugar?: number | undefined
                maxSugar?: number | undefined
                minZinc?: number | undefined
                maxZinc?: number | undefined
                offset?: number | undefined
                number?: number | undefined
                random?: boolean | undefined
                limitLicense?: boolean | undefined
              }
            }
            output: {
              calories: number
              carbs: string
              fat: string
              id: number
              image: string
              imageType: string
              protein: string
              title: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                minAlcohol?: number | undefined
                maxAlcohol?: number | undefined
                minCaffeine?: number | undefined
                maxCaffeine?: number | undefined
                minCopper?: number | undefined
                maxCopper?: number | undefined
                minCalcium?: number | undefined
                maxCalcium?: number | undefined
                minCholine?: number | undefined
                maxCholine?: number | undefined
                minCholesterol?: number | undefined
                maxCholesterol?: number | undefined
                minFluoride?: number | undefined
                maxFluoride?: number | undefined
                minSaturatedFat?: number | undefined
                maxSaturatedFat?: number | undefined
                minVitaminA?: number | undefined
                maxVitaminA?: number | undefined
                minVitaminC?: number | undefined
                maxVitaminC?: number | undefined
                minVitaminD?: number | undefined
                maxVitaminD?: number | undefined
                minVitaminE?: number | undefined
                maxVitaminE?: number | undefined
                minVitaminK?: number | undefined
                maxVitaminK?: number | undefined
                minVitaminB1?: number | undefined
                maxVitaminB1?: number | undefined
                minVitaminB2?: number | undefined
                maxVitaminB2?: number | undefined
                minVitaminB5?: number | undefined
                maxVitaminB5?: number | undefined
                minVitaminB3?: number | undefined
                maxVitaminB3?: number | undefined
                minVitaminB6?: number | undefined
                maxVitaminB6?: number | undefined
                minVitaminB12?: number | undefined
                maxVitaminB12?: number | undefined
                minFiber?: number | undefined
                maxFiber?: number | undefined
                minFolate?: number | undefined
                maxFolate?: number | undefined
                minFolicAcid?: number | undefined
                maxFolicAcid?: number | undefined
                minIodine?: number | undefined
                maxIodine?: number | undefined
                minIron?: number | undefined
                maxIron?: number | undefined
                minMagnesium?: number | undefined
                maxMagnesium?: number | undefined
                minManganese?: number | undefined
                maxManganese?: number | undefined
                minPhosphorus?: number | undefined
                maxPhosphorus?: number | undefined
                minPotassium?: number | undefined
                maxPotassium?: number | undefined
                minSelenium?: number | undefined
                maxSelenium?: number | undefined
                minSodium?: number | undefined
                maxSodium?: number | undefined
                minSugar?: number | undefined
                maxSugar?: number | undefined
                minZinc?: number | undefined
                maxZinc?: number | undefined
                offset?: number | undefined
                number?: number | undefined
                random?: boolean | undefined
                limitLicense?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                minAlcohol?: number | undefined
                maxAlcohol?: number | undefined
                minCaffeine?: number | undefined
                maxCaffeine?: number | undefined
                minCopper?: number | undefined
                maxCopper?: number | undefined
                minCalcium?: number | undefined
                maxCalcium?: number | undefined
                minCholine?: number | undefined
                maxCholine?: number | undefined
                minCholesterol?: number | undefined
                maxCholesterol?: number | undefined
                minFluoride?: number | undefined
                maxFluoride?: number | undefined
                minSaturatedFat?: number | undefined
                maxSaturatedFat?: number | undefined
                minVitaminA?: number | undefined
                maxVitaminA?: number | undefined
                minVitaminC?: number | undefined
                maxVitaminC?: number | undefined
                minVitaminD?: number | undefined
                maxVitaminD?: number | undefined
                minVitaminE?: number | undefined
                maxVitaminE?: number | undefined
                minVitaminK?: number | undefined
                maxVitaminK?: number | undefined
                minVitaminB1?: number | undefined
                maxVitaminB1?: number | undefined
                minVitaminB2?: number | undefined
                maxVitaminB2?: number | undefined
                minVitaminB5?: number | undefined
                maxVitaminB5?: number | undefined
                minVitaminB3?: number | undefined
                maxVitaminB3?: number | undefined
                minVitaminB6?: number | undefined
                maxVitaminB6?: number | undefined
                minVitaminB12?: number | undefined
                maxVitaminB12?: number | undefined
                minFiber?: number | undefined
                maxFiber?: number | undefined
                minFolate?: number | undefined
                maxFolate?: number | undefined
                minFolicAcid?: number | undefined
                maxFolicAcid?: number | undefined
                minIodine?: number | undefined
                maxIodine?: number | undefined
                minIron?: number | undefined
                maxIron?: number | undefined
                minMagnesium?: number | undefined
                maxMagnesium?: number | undefined
                minManganese?: number | undefined
                maxManganese?: number | undefined
                minPhosphorus?: number | undefined
                maxPhosphorus?: number | undefined
                minPotassium?: number | undefined
                maxPotassium?: number | undefined
                minSelenium?: number | undefined
                maxSelenium?: number | undefined
                minSodium?: number | undefined
                maxSodium?: number | undefined
                minSugar?: number | undefined
                maxSugar?: number | undefined
                minZinc?: number | undefined
                maxZinc?: number | undefined
                offset?: number | undefined
                number?: number | undefined
                random?: boolean | undefined
                limitLicense?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                minCarbs?: number | undefined
                maxCarbs?: number | undefined
                minProtein?: number | undefined
                maxProtein?: number | undefined
                minCalories?: number | undefined
                maxCalories?: number | undefined
                minFat?: number | undefined
                maxFat?: number | undefined
                minAlcohol?: number | undefined
                maxAlcohol?: number | undefined
                minCaffeine?: number | undefined
                maxCaffeine?: number | undefined
                minCopper?: number | undefined
                maxCopper?: number | undefined
                minCalcium?: number | undefined
                maxCalcium?: number | undefined
                minCholine?: number | undefined
                maxCholine?: number | undefined
                minCholesterol?: number | undefined
                maxCholesterol?: number | undefined
                minFluoride?: number | undefined
                maxFluoride?: number | undefined
                minSaturatedFat?: number | undefined
                maxSaturatedFat?: number | undefined
                minVitaminA?: number | undefined
                maxVitaminA?: number | undefined
                minVitaminC?: number | undefined
                maxVitaminC?: number | undefined
                minVitaminD?: number | undefined
                maxVitaminD?: number | undefined
                minVitaminE?: number | undefined
                maxVitaminE?: number | undefined
                minVitaminK?: number | undefined
                maxVitaminK?: number | undefined
                minVitaminB1?: number | undefined
                maxVitaminB1?: number | undefined
                minVitaminB2?: number | undefined
                maxVitaminB2?: number | undefined
                minVitaminB5?: number | undefined
                maxVitaminB5?: number | undefined
                minVitaminB3?: number | undefined
                maxVitaminB3?: number | undefined
                minVitaminB6?: number | undefined
                maxVitaminB6?: number | undefined
                minVitaminB12?: number | undefined
                maxVitaminB12?: number | undefined
                minFiber?: number | undefined
                maxFiber?: number | undefined
                minFolate?: number | undefined
                maxFolate?: number | undefined
                minFolicAcid?: number | undefined
                maxFolicAcid?: number | undefined
                minIodine?: number | undefined
                maxIodine?: number | undefined
                minIron?: number | undefined
                maxIron?: number | undefined
                minMagnesium?: number | undefined
                maxMagnesium?: number | undefined
                minManganese?: number | undefined
                maxManganese?: number | undefined
                minPhosphorus?: number | undefined
                maxPhosphorus?: number | undefined
                minPotassium?: number | undefined
                maxPotassium?: number | undefined
                minSelenium?: number | undefined
                maxSelenium?: number | undefined
                minSodium?: number | undefined
                maxSodium?: number | undefined
                minSugar?: number | undefined
                maxSugar?: number | undefined
                minZinc?: number | undefined
                maxZinc?: number | undefined
                offset?: number | undefined
                number?: number | undefined
                random?: boolean | undefined
                limitLicense?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/guessNutrition': {
      $get:
        | {
            input: { query: { title: string } }
            output: {
              calories: {
                confidenceRange95Percent: { max: number; min: number }
                standardDeviation: number
                unit: string
                value: number
              }
              carbs: {
                confidenceRange95Percent: { max: number; min: number }
                standardDeviation: number
                unit: string
                value: number
              }
              fat: {
                confidenceRange95Percent: { max: number; min: number }
                standardDeviation: number
                unit: string
                value: number
              }
              protein: {
                confidenceRange95Percent: { max: number; min: number }
                standardDeviation: number
                unit: string
                value: number
              }
              recipesUsed: number
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { title: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { title: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { title: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/recipes/informationBulk': {
      $get:
        | {
            input: { query: { ids: string; includeNutrition?: boolean | undefined } }
            output: {
              aggregateLikes: number
              analyzedInstructions: string[]
              cheap: boolean
              creditsText: string
              cuisines: string[]
              dairyFree: boolean
              diets: string[]
              dishTypes: string[]
              extendedIngredients: {
                aisle: string
                amount: number
                consitency: string
                id: number
                image: string
                measures?:
                  | {
                      metric: { amount: number; unitLong: string; unitShort: string }
                      us: { amount: number; unitLong: string; unitShort: string }
                    }
                  | undefined
                meta?: string[] | undefined
                name: string
                original: string
                originalName: string
                unit: string
              }[]
              gaps: string
              glutenFree: boolean
              healthScore: number
              id: number
              image: string
              imageType: string
              instructions: string
              ketogenic: boolean
              license: string
              lowFodmap: boolean
              occasions: string[]
              pricePerServing: number
              readyInMinutes: number
              servings: number
              sourceName: string
              sourceUrl: string
              spoonacularScore: number
              spoonacularSourceUrl: string
              summary: string
              sustainable: boolean
              title: string
              vegan: boolean
              vegetarian: boolean
              veryHealthy: boolean
              veryPopular: boolean
              weightWatcherSmartPoints: number
              whole30: boolean
              winePairing: {
                pairedWines: string[]
                pairingText: string
                productMatches: {
                  averageRating: number
                  description: string
                  id: number
                  imageUrl: string
                  link: string
                  price: string
                  ratingCount: number
                  score: number
                  title: string
                }[]
              }
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string; includeNutrition?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { ids: string; includeNutrition?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { ids: string; includeNutrition?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/parseIngredients': {
      $post:
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: {
              aisle: string
              amount: number
              consistency: string
              estimatedCost: { unit: string; value: number }
              id: number
              image: string
              meta: string[]
              name: string
              nameClean: string
              nutrition: {
                caloricBreakdown: {
                  percentCarbs: number
                  percentFat: number
                  percentProtein: number
                }
                flavonoids: { amount: number; name: string; unit: string }[]
                nutrients: {
                  amount: number
                  name: string
                  percentOfDailyNeeds: number
                  unit: string
                }[]
                properties: { amount: number; name: string; unit: string }[]
                weightPerServing: { amount: number; unit: string }
              }
              original: string
              originalName: string
              possibleUnits: string[]
              unit: string
              unitLong: string
              unitShort: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/queries/analyze': {
      $get:
        | {
            input: { query: { q: string } }
            output: {
              cuisines: string[]
              dishes: { image: string; name: string }[]
              ingredients: { image: string; include: boolean; name: string }[]
              modifiers: string[]
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { q: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { q: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { q: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/recipes/quickAnswer': {
      $get:
        | {
            input: { query: { q: string } }
            output: { answer: string; image: string }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { q: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { q: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { q: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/recipes/random': {
      $get:
        | {
            input: {
              query: {
                limitLicense?: boolean | undefined
                tags?: string | undefined
                number?: number | undefined
              }
            }
            output: {
              recipes: {
                aggregateLikes: number
                analyzedInstructions?: { [x: string]: unknown }[] | undefined
                cheap: boolean
                creditsText: string
                cuisines?: string[] | undefined
                dairyFree: boolean
                diets?: string[] | undefined
                dishTypes?: string[] | undefined
                extendedIngredients?:
                  | {
                      aisle: string
                      amount: number
                      consitency: string
                      id: number
                      image: string
                      measures?:
                        | {
                            metric: { amount: number; unitLong: string; unitShort: string }
                            us: { amount: number; unitLong: string; unitShort: string }
                          }
                        | undefined
                      meta?: string[] | undefined
                      name: string
                      original: string
                      originalName: string
                      unit: string
                    }[]
                  | undefined
                gaps: string
                glutenFree: boolean
                healthScore: number
                id: number
                image: string
                imageType: string
                instructions: string
                ketogenic: boolean
                license: string
                lowFodmap: boolean
                occasions?: string[] | undefined
                pricePerServing: number
                readyInMinutes: number
                servings: number
                sourceName: string
                sourceUrl: string
                spoonacularScore: number
                spoonacularSourceUrl: string
                summary: string
                sustainable: boolean
                title: string
                vegan: boolean
                vegetarian: boolean
                veryHealthy: boolean
                veryPopular: boolean
                weightWatcherSmartPoints: number
                whole30: boolean
                winePairing?:
                  | {
                      pairedWines: string[]
                      pairingText: string
                      productMatches: {
                        averageRating: number
                        description: string
                        id: number
                        imageUrl: string
                        link: string
                        price: string
                        ratingCount: number
                        score: number
                        title: string
                      }[]
                    }
                  | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limitLicense?: boolean | undefined
                tags?: string | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                limitLicense?: boolean | undefined
                tags?: string | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                limitLicense?: boolean | undefined
                tags?: string | undefined
                number?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/visualizeEquipment': {
      $post:
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/visualizeIngredients': {
      $post:
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/visualizeNutrition': {
      $post:
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/visualizePriceEstimator': {
      $post:
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { language?: 'en' | 'de' | undefined } } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/visualizeRecipe': {
      $post:
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { form: string }
            output: { url: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { form: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { form: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
              }
            } & { form: string }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/visualizeTaste': {
      $post:
        | {
            input: {
              query: {
                language?: 'en' | 'de' | undefined
                normalize?: boolean | undefined
                rgb?: string | undefined
              }
            } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                language?: 'en' | 'de' | undefined
                normalize?: boolean | undefined
                rgb?: string | undefined
              }
            } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                language?: 'en' | 'de' | undefined
                normalize?: boolean | undefined
                rgb?: string | undefined
              }
            } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                language?: 'en' | 'de' | undefined
                normalize?: boolean | undefined
                rgb?: string | undefined
              }
            } & {
              header: {
                'Content-Type'?:
                  | 'application/x-www-form-urlencoded'
                  | 'application/json'
                  | 'multipart/form-data'
                  | undefined
                Accept?: 'application/json' | 'text/html' | 'media/*' | undefined
              }
            } & { json: string } & { form: string }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/:id/analyzedInstructions': {
      $get:
        | {
            input: { param: { id: number } } & { query: { stepBreakdown?: boolean | undefined } }
            output: {
              equipment: { id: number; name: string }[]
              ingredients: { id: number; name: string }[]
              parsedInstructions: {
                name: string
                steps?:
                  | {
                      equipment?:
                        | { id: number; image: string; localizedName: string; name: string }[]
                        | undefined
                      ingredients?:
                        | { id: number; image: string; localizedName: string; name: string }[]
                        | undefined
                      number: number
                      step: string
                    }[]
                  | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { stepBreakdown?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { stepBreakdown?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { stepBreakdown?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/:id/card': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                mask?: string | undefined
                backgroundImage?: string | undefined
                backgroundColor?: string | undefined
                fontColor?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                mask?: string | undefined
                backgroundImage?: string | undefined
                backgroundColor?: string | undefined
                fontColor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                mask?: string | undefined
                backgroundImage?: string | undefined
                backgroundColor?: string | undefined
                fontColor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                mask?: string | undefined
                backgroundImage?: string | undefined
                backgroundColor?: string | undefined
                fontColor?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/:id/equipmentWidget': {
      $get:
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/:id/equipmentWidget.json': {
      $get:
        | {
            input: { param: { id: number } }
            output: { equipment: { image: string; name: string }[] }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/recipes/:id/equipmentWidget.png': {
      $get:
        | {
            input: { param: { id: number } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/recipes/:id/information': {
      $get:
        | {
            input: { param: { id: number } } & { query: { includeNutrition?: boolean | undefined } }
            output: {
              aggregateLikes: number
              analyzedInstructions: { [x: string]: unknown }[]
              cheap: boolean
              creditsText: string
              cuisines: string[]
              dairyFree: boolean
              diets: string[]
              dishTypes: string[]
              extendedIngredients: {
                aisle: string
                amount: number
                consitency: string
                id: number
                image: string
                measures?:
                  | {
                      metric: { amount: number; unitLong: string; unitShort: string }
                      us: { amount: number; unitLong: string; unitShort: string }
                    }
                  | undefined
                meta?: string[] | undefined
                name: string
                original: string
                originalName: string
                unit: string
              }[]
              gaps: string
              glutenFree: boolean
              healthScore: number
              id: number
              image: string
              imageType: string
              instructions: string
              ketogenic: boolean
              license: string
              lowFodmap: boolean
              occasions: string[]
              pricePerServing: number
              readyInMinutes: number
              servings: number
              sourceName: string
              sourceUrl: string
              spoonacularScore: number
              spoonacularSourceUrl: string
              summary: string
              sustainable: boolean
              title: string
              vegan: boolean
              vegetarian: boolean
              veryHealthy: boolean
              veryPopular: boolean
              weightWatcherSmartPoints: number
              whole30: boolean
              winePairing: {
                pairedWines: string[]
                pairingText: string
                productMatches: {
                  averageRating: number
                  description: string
                  id: number
                  imageUrl: string
                  link: string
                  price: string
                  ratingCount: number
                  score: number
                  title: string
                }[]
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { includeNutrition?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { includeNutrition?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { includeNutrition?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/:id/ingredientWidget': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { defaultCss?: boolean | undefined; measure?: 'us' | 'metric' | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { defaultCss?: boolean | undefined; measure?: 'us' | 'metric' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { defaultCss?: boolean | undefined; measure?: 'us' | 'metric' | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { defaultCss?: boolean | undefined; measure?: 'us' | 'metric' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/:id/ingredientWidget.json': {
      $get:
        | {
            input: { param: { id: number } }
            output: {
              ingredients: {
                amount?:
                  | { metric: { unit: string; value: number }; us: { unit: string; value: number } }
                  | undefined
                image: string
                name: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/recipes/:id/ingredientWidget.png': {
      $get:
        | {
            input: { param: { id: number } } & { query: { measure?: 'us' | 'metric' | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { measure?: 'us' | 'metric' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { measure?: 'us' | 'metric' | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { measure?: 'us' | 'metric' | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/:id/nutritionLabel': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                defaultCss?: boolean | undefined
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                defaultCss?: boolean | undefined
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                defaultCss?: boolean | undefined
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                defaultCss?: boolean | undefined
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/:id/nutritionLabel.png': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                showOptionalNutrients?: boolean | undefined
                showZeroValues?: boolean | undefined
                showIngredients?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/:id/nutritionWidget': {
      $get:
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } } & {
              header: { Accept?: 'application/json' | 'text/html' | 'media/*' | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } } & {
              header: { Accept?: 'application/json' | 'text/html' | 'media/*' | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } } & {
              header: { Accept?: 'application/json' | 'text/html' | 'media/*' | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } } & {
              header: { Accept?: 'application/json' | 'text/html' | 'media/*' | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/:id/nutritionWidget.json': {
      $get:
        | {
            input: { param: { id: number } }
            output: {
              bad: {
                amount: string
                indented: boolean
                name: string
                percentOfDailyNeeds: number
              }[]
              calories: string
              carbs: string
              fat: string
              good: {
                amount: string
                indented: boolean
                name: string
                percentOfDailyNeeds: number
              }[]
              protein: string
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/recipes/:id/nutritionWidget.png': {
      $get:
        | {
            input: { param: { id: number } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/recipes/:id/priceBreakdownWidget': {
      $get:
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { defaultCss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/:id/priceBreakdownWidget.json': {
      $get:
        | {
            input: { param: { id: number } }
            output: {
              ingredients: {
                amount?:
                  | { metric: { unit: string; value: number }; us: { unit: string; value: number } }
                  | undefined
                image: string
                name: string
                price: number
              }[]
              totalCost: number
              totalCostPerServing: number
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/recipes/:id/priceBreakdownWidget.png': {
      $get:
        | {
            input: { param: { id: number } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/recipes/:id/similar': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { number?: number | undefined; limitLicense?: boolean | undefined }
            }
            output: {
              id: number
              imageType: string
              readyInMinutes: number
              servings: number
              sourceUrl: string
              title: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { number?: number | undefined; limitLicense?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { number?: number | undefined; limitLicense?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { number?: number | undefined; limitLicense?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/:id/summary': {
      $get:
        | {
            input: { param: { id: number } }
            output: { id: number; summary: string; title: string }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/recipes/:id/tasteWidget': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { normalize?: true | false | undefined; rgb?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { normalize?: true | false | undefined; rgb?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { normalize?: true | false | undefined; rgb?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { normalize?: true | false | undefined; rgb?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/:id/tasteWidget.json': {
      $get:
        | {
            input: { param: { id: number } } & { query: { normalize?: false | true | undefined } }
            output: {
              bitterness: number
              fattiness: number
              saltiness: number
              savoriness: number
              sourness: number
              spiciness: number
              sweetness: number
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { normalize?: false | true | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { normalize?: false | true | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { normalize?: false | true | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/recipes/:id/tasteWidget.png': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { normalize?: boolean | undefined; rgb?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { normalize?: boolean | undefined; rgb?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { normalize?: boolean | undefined; rgb?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { normalize?: boolean | undefined; rgb?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/users/connect': {
      $post:
        | {
            input: {
              json: { email: string; firstName: string; lastName: string; username: string }
            }
            output: { hash: string; username: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { email: string; firstName: string; lastName: string; username: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: { email: string; firstName: string; lastName: string; username: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: { email: string; firstName: string; lastName: string; username: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes

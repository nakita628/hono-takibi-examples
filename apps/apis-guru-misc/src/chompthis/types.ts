type BrandedFoodObject = {
  items?:
    | {
        allergens?: string[] | undefined
        barcode?: string | undefined
        brand?: string | undefined
        brand_list?: string[] | undefined
        categories?: string[] | undefined
        countries?: string[] | undefined
        country_details?:
          | { english_speaking?: number | undefined; non_english_speaking?: number | undefined }
          | undefined
        description?: string | undefined
        diet_flags?:
          | {
              compatibility_description?: string | undefined
              compatibility_level?: number | undefined
              diet_label?: string | undefined
              ingredient?: string | undefined
              ingredient_description?: string | undefined
              is_allergen?: boolean | undefined
              is_compatible?: string | undefined
            }[]
          | undefined
        diet_labels?:
          | {
              gluten_free?:
                | {
                    compatibility_level?: number | undefined
                    confidence?: number | undefined
                    confidence_description?: string | undefined
                    is_compatible?: boolean | undefined
                    name?: string | undefined
                  }
                | undefined
              vegan?:
                | {
                    compatibility_level?: number | undefined
                    confidence?: number | undefined
                    confidence_description?: string | undefined
                    is_compatible?: boolean | undefined
                    name?: string | undefined
                  }
                | undefined
              vegetarian?:
                | {
                    compatibility_level?: number | undefined
                    confidence?: number | undefined
                    confidence_description?: string | undefined
                    is_compatible?: boolean | undefined
                    name?: string | undefined
                  }
                | undefined
            }
          | undefined
        has_english_ingredients?: boolean | undefined
        ingredient_list?: string[] | undefined
        ingredients?: string | undefined
        keywords?: string[] | undefined
        minerals?: string[] | undefined
        name?: string | undefined
        nutrients?:
          | {
              data_points?: number | undefined
              description?: string | undefined
              measurement_unit?: string | undefined
              name?: string | undefined
              per_100g?: number | undefined
              rank?: number | undefined
            }[]
          | undefined
        package?: { quantity?: number | undefined; size?: string | undefined } | undefined
        packaging_photos?:
          | {
              front?:
                | {
                    display?: string | undefined
                    small?: string | undefined
                    thumb?: string | undefined
                  }
                | undefined
              ingredients?:
                | {
                    display?: string | undefined
                    small?: string | undefined
                    thumb?: string | undefined
                  }
                | undefined
              nutrition?:
                | {
                    display?: string | undefined
                    small?: string | undefined
                    thumb?: string | undefined
                  }
                | undefined
            }
          | undefined
        palm_oil_ingredients?: string[] | undefined
        serving?:
          | {
              measurement_unit?: string | undefined
              size?: string | undefined
              size_fulltext?: string | undefined
            }
          | undefined
        traces?: string[] | undefined
        vitamins?: string[] | undefined
      }[]
    | undefined
}
type IngredientObject = {
  items?:
    | {
        calorie_conversion_factor?:
          | {
              carbohydrate_value?: number | undefined
              fat_value?: number | undefined
              protein_value?: number | undefined
            }
          | undefined
        categories?: string[] | undefined
        common_name?: string | undefined
        components?:
          | {
              data_points?: number | undefined
              gram_weight?: number | undefined
              is_refuse?: boolean | undefined
              name?: string | undefined
              pct_weight?: number | undefined
            }[]
          | undefined
        footnote?: string | undefined
        name?: string | undefined
        nutrients?:
          | {
              data_points?: number | undefined
              description?: string | undefined
              footnote?: string | undefined
              max?: number | undefined
              measurement_unit?: string | undefined
              median?: number | undefined
              min?: number | undefined
              name?: string | undefined
              per_100g?: number | undefined
              rank?: number | undefined
            }[]
          | undefined
        portions?:
          | {
              data_points?: number | undefined
              description?: string | undefined
              footnote?: string | undefined
              gram_weight?: number | undefined
              measurement_unit?: string | undefined
              modifier?: string | undefined
            }[]
          | undefined
        protein_conversion_factor?: number | undefined
        score?: string | undefined
        search_term?: string | undefined
      }[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/food/branded/barcode.php': {
      $get:
        | {
            input: { query: { code: string } }
            output: BrandedFoodObject
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { code: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { code: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { code: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { code: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/food/branded/name.php': {
      $get:
        | {
            input: {
              query: {
                name: string
                limit?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined
                page?: number | undefined
              }
            }
            output: BrandedFoodObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                limit?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                name: string
                limit?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined
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
                name: string
                limit?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                name: string
                limit?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/food/branded/search.php': {
      $get:
        | {
            input: {
              query: {
                allergen?: string | undefined
                brand?: string | undefined
                category?: string | undefined
                country?: string | undefined
                diet?: 'Vegan' | 'Vegetarian' | 'Gluten Free' | undefined
                ingredient?: string | undefined
                keyword?: string | undefined
                mineral?: string | undefined
                nutrient?: string | undefined
                palm_oil?: string | undefined
                trace?: string | undefined
                vitamin?: string | undefined
                limit?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined
                page?: number | undefined
              }
            }
            output: BrandedFoodObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                allergen?: string | undefined
                brand?: string | undefined
                category?: string | undefined
                country?: string | undefined
                diet?: 'Vegan' | 'Vegetarian' | 'Gluten Free' | undefined
                ingredient?: string | undefined
                keyword?: string | undefined
                mineral?: string | undefined
                nutrient?: string | undefined
                palm_oil?: string | undefined
                trace?: string | undefined
                vitamin?: string | undefined
                limit?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                allergen?: string | undefined
                brand?: string | undefined
                category?: string | undefined
                country?: string | undefined
                diet?: 'Vegan' | 'Vegetarian' | 'Gluten Free' | undefined
                ingredient?: string | undefined
                keyword?: string | undefined
                mineral?: string | undefined
                nutrient?: string | undefined
                palm_oil?: string | undefined
                trace?: string | undefined
                vitamin?: string | undefined
                limit?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined
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
                allergen?: string | undefined
                brand?: string | undefined
                category?: string | undefined
                country?: string | undefined
                diet?: 'Vegan' | 'Vegetarian' | 'Gluten Free' | undefined
                ingredient?: string | undefined
                keyword?: string | undefined
                mineral?: string | undefined
                nutrient?: string | undefined
                palm_oil?: string | undefined
                trace?: string | undefined
                vitamin?: string | undefined
                limit?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                allergen?: string | undefined
                brand?: string | undefined
                category?: string | undefined
                country?: string | undefined
                diet?: 'Vegan' | 'Vegetarian' | 'Gluten Free' | undefined
                ingredient?: string | undefined
                keyword?: string | undefined
                mineral?: string | undefined
                nutrient?: string | undefined
                palm_oil?: string | undefined
                trace?: string | undefined
                vitamin?: string | undefined
                limit?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/food/ingredient/search.php': {
      $get:
        | {
            input: { query: { find: string; limit?: 1 | 2 | 3 | undefined } }
            output: IngredientObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { find: string; limit?: 1 | 2 | 3 | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { find: string; limit?: 1 | 2 | 3 | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { find: string; limit?: 1 | 2 | 3 | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { find: string; limit?: 1 | 2 | 3 | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes

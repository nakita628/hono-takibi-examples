declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/3/authentication': {
      $get:
        | {
            input: {}
            output: {
              success?: boolean | undefined
              status_code?: number | undefined
              status_message?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              status_code?: number | undefined
              status_message?: string | undefined
              success?: boolean | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/3/account/:account_id': {
      $get: {
        input: { param: { account_id: number } } & { query: { session_id?: string | undefined } }
        output: {
          avatar?:
            | {
                gravatar?: { hash?: string | undefined } | undefined
                tmdb?: { avatar_path?: string | undefined } | undefined
              }
            | undefined
          id?: number | undefined
          iso_639_1?: string | undefined
          iso_3166_1?: string | undefined
          name?: string | undefined
          include_adult?: boolean | undefined
          username?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/account/:account_id/favorite': {
      $post: {
        input: { param: { account_id: number } } & {
          query: { session_id?: string | undefined }
        } & { json: { RAW_BODY: string } }
        output: { status_code?: number | undefined; status_message?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/account/:account_id/watchlist': {
      $post: {
        input: { param: { account_id: number } } & {
          query: { session_id?: string | undefined }
        } & { json: { RAW_BODY: string } }
        output: { status_code?: number | undefined; status_message?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/account/:account_id/favorite/movies': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            language?: string | undefined
            page?: number | undefined
            session_id?: string | undefined
            sort_by?: 'created_at.asc' | 'created_at.desc' | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/account/:account_id/favorite/tv': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            language?: string | undefined
            page?: number | undefined
            session_id?: string | undefined
            sort_by?: 'created_at.asc' | 'created_at.desc' | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                origin_country?: string[] | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                first_air_date?: string | undefined
                name?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/account/:account_id/lists': {
      $get: {
        input: { param: { account_id: number } } & {
          query: { page?: number | undefined; session_id?: string | undefined }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                description?: string | undefined
                favorite_count?: number | undefined
                id?: number | undefined
                item_count?: number | undefined
                iso_639_1?: string | undefined
                list_type?: string | undefined
                name?: string | undefined
                poster_path?: { [x: string]: unknown } | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/account/:account_id/rated/movies': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            language?: string | undefined
            page?: number | undefined
            session_id?: string | undefined
            sort_by?: 'created_at.asc' | 'created_at.desc' | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                rating?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/account/:account_id/rated/tv': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            language?: string | undefined
            page?: number | undefined
            session_id?: string | undefined
            sort_by?: 'created_at.asc' | 'created_at.desc' | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                origin_country?: string[] | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                first_air_date?: string | undefined
                name?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                rating?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/account/:account_id/rated/tv/episodes': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            language?: string | undefined
            page?: number | undefined
            session_id?: string | undefined
            sort_by?: 'created_at.asc' | 'created_at.desc' | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                air_date?: string | undefined
                episode_number?: number | undefined
                id?: number | undefined
                name?: string | undefined
                overview?: string | undefined
                production_code?: string | undefined
                runtime?: number | undefined
                season_number?: number | undefined
                show_id?: number | undefined
                still_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                rating?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/account/:account_id/watchlist/movies': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            language?: string | undefined
            page?: number | undefined
            session_id?: string | undefined
            sort_by?: 'created_at.asc' | 'created_at.desc' | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/account/:account_id/watchlist/tv': {
      $get: {
        input: { param: { account_id: number } } & {
          query: {
            language?: string | undefined
            page?: number | undefined
            session_id?: string | undefined
            sort_by?: 'created_at.asc' | 'created_at.desc' | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                origin_country?: string[] | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                first_air_date?: string | undefined
                name?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/authentication/guest_session/new': {
      $get: {
        input: {}
        output: {
          success?: boolean | undefined
          guest_session_id?: string | undefined
          expires_at?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/authentication/token/new': {
      $get: {
        input: {}
        output: {
          success?: boolean | undefined
          expires_at?: string | undefined
          request_token?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/authentication/session/new': {
      $post: {
        input: { json: { RAW_BODY: string } }
        output: { success?: boolean | undefined; session_id?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/authentication/session/convert/4': {
      $post: {
        input: { json: { RAW_BODY: string } }
        output: { success?: boolean | undefined; session_id?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/authentication/token/validate_with_login': {
      $post: {
        input: { json: { RAW_BODY: string } }
        output: {
          success?: boolean | undefined
          expires_at?: string | undefined
          request_token?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/authentication/session': {
      $delete: {
        input: { json: { RAW_BODY: string } }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/certification/movie/list': {
      $get: {
        input: {}
        output: {
          certifications?:
            | {
                AU?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                BG?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                BR?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                CA?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                'CA-QC'?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                DE?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                DK?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                ES?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                FI?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                FR?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                GB?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                HU?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                IN?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                IT?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                LT?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                MY?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                NL?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                NO?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                NZ?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                PH?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                PT?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                RU?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                SE?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                US?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                KR?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                SK?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                TH?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                MX?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                ID?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                TR?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                AR?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                GR?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                TW?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                ZA?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                SG?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                IE?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                PR?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                JP?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                VI?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                CH?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                IL?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                HK?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                MO?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                LV?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                LU?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/certification/tv/list': {
      $get: {
        input: {}
        output: {
          certifications?:
            | {
                AU?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                BR?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                CA?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                'CA-QC'?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                DE?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                ES?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                FR?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                GB?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                HU?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                KR?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                LT?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                NL?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                PH?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                PT?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                RU?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                SK?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                TH?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                US?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                IT?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                FI?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                MY?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                NZ?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                NO?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                BG?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                MX?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                IN?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                DK?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                SE?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                ID?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                TR?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                AR?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                PL?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                MA?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                GR?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                IL?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                TW?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                ZA?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                SG?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                PR?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                VI?:
                  | {
                      certification?: string | undefined
                      meaning?: string | undefined
                      order?: number | undefined
                    }[]
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/changes': {
      $get: {
        input: {
          query: {
            end_date?: string | undefined
            page?: number | undefined
            start_date?: string | undefined
          }
        }
        output: {
          results?: { id?: number | undefined; adult?: boolean | undefined }[] | undefined
          page?: number | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/person/changes': {
      $get: {
        input: {
          query: {
            end_date?: string | undefined
            page?: number | undefined
            start_date?: string | undefined
          }
        }
        output: {
          results?: { id?: number | undefined; adult?: boolean | undefined }[] | undefined
          page?: number | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/changes': {
      $get: {
        input: {
          query: {
            end_date?: string | undefined
            page?: number | undefined
            start_date?: string | undefined
          }
        }
        output: {
          results?: { id?: number | undefined; adult?: boolean | undefined }[] | undefined
          page?: number | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/collection/:collection_id': {
      $get: {
        input: { param: { collection_id: number } } & { query: { language?: string | undefined } }
        output: {
          id?: number | undefined
          name?: string | undefined
          original_language?: string | undefined
          original_name?: string | undefined
          overview?: string | undefined
          poster_path?: string | undefined
          backdrop_path?: string | undefined
          parts?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                id?: number | undefined
                name?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                poster_path?: string | undefined
                media_type?: string | undefined
                original_language?: string | undefined
                genre_ids?: number[] | undefined
                popularity?: number | undefined
                release_date?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/collection/:collection_id/images': {
      $get: {
        input: { param: { collection_id: number } } & {
          query: { include_image_language?: string | undefined; language?: string | undefined }
        }
        output: {
          id?: number | undefined
          backdrops?:
            | {
                aspect_ratio?: number | undefined
                height?: number | undefined
                iso_639_1?: { [x: string]: unknown } | undefined
                file_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                width?: number | undefined
              }[]
            | undefined
          posters?:
            | {
                aspect_ratio?: number | undefined
                height?: number | undefined
                iso_639_1?: string | undefined
                file_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                width?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/collection/:collection_id/translations': {
      $get: {
        input: { param: { collection_id: number } }
        output: {
          id?: number | undefined
          translations?:
            | {
                iso_3166_1?: string | undefined
                iso_639_1?: string | undefined
                name?: string | undefined
                english_name?: string | undefined
                data?:
                  | {
                      title?: string | undefined
                      overview?: string | undefined
                      homepage?: string | undefined
                    }
                  | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/company/:company_id': {
      $get: {
        input: { param: { company_id: number } }
        output: {
          description?: string | undefined
          headquarters?: string | undefined
          homepage?: string | undefined
          id?: number | undefined
          logo_path?: string | undefined
          name?: string | undefined
          origin_country?: string | undefined
          parent_company?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/company/:company_id/alternative_names': {
      $get: {
        input: { param: { company_id: number } }
        output: {
          id?: number | undefined
          results?: { name?: string | undefined; type?: string | undefined }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/company/:company_id/images': {
      $get: {
        input: { param: { company_id: number } }
        output: {
          id?: number | undefined
          logos?:
            | {
                aspect_ratio?: number | undefined
                file_path?: string | undefined
                height?: number | undefined
                id?: string | undefined
                file_type?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                width?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/configuration': {
      $get: {
        input: {}
        output: {
          images?:
            | {
                base_url?: string | undefined
                secure_base_url?: string | undefined
                backdrop_sizes?: string[] | undefined
                logo_sizes?: string[] | undefined
                poster_sizes?: string[] | undefined
                profile_sizes?: string[] | undefined
                still_sizes?: string[] | undefined
              }
            | undefined
          change_keys?: string[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/configuration/countries': {
      $get: {
        input: { query: { language?: string | undefined } }
        output: {
          iso_3166_1?: string | undefined
          english_name?: string | undefined
          native_name?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/configuration/jobs': {
      $get: {
        input: {}
        output: { department?: string | undefined; jobs?: string[] | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/configuration/languages': {
      $get: {
        input: {}
        output: {
          iso_639_1?: string | undefined
          english_name?: string | undefined
          name?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/configuration/primary_translations': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/3/configuration/timezones': {
      $get: {
        input: {}
        output: { iso_3166_1?: string | undefined; zones?: string[] | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/credit/:credit_id': {
      $get: {
        input: { param: { credit_id: string } } & { query: { language?: string | undefined } }
        output: {
          credit_type?: string | undefined
          department?: string | undefined
          job?: string | undefined
          media?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                id?: number | undefined
                name?: string | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                poster_path?: string | undefined
                media_type?: string | undefined
                genre_ids?: number[] | undefined
                popularity?: number | undefined
                first_air_date?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                origin_country?: string[] | undefined
                character?: string | undefined
                episodes?: unknown[] | undefined
                seasons?:
                  | {
                      air_date?: string | undefined
                      episode_count?: number | undefined
                      id?: number | undefined
                      name?: string | undefined
                      overview?: string | undefined
                      poster_path?: string | undefined
                      season_number?: number | undefined
                      show_id?: number | undefined
                    }[]
                  | undefined
              }
            | undefined
          media_type?: string | undefined
          id?: string | undefined
          person?:
            | {
                adult?: boolean | undefined
                id?: number | undefined
                name?: string | undefined
                original_name?: string | undefined
                media_type?: string | undefined
                popularity?: number | undefined
                gender?: number | undefined
                known_for_department?: string | undefined
                profile_path?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/discover/movie': {
      $get: {
        input: {
          query: {
            certification?: string | undefined
            'certification.gte'?: string | undefined
            'certification.lte'?: string | undefined
            certification_country?: string | undefined
            include_adult?: boolean | undefined
            include_video?: boolean | undefined
            language?: string | undefined
            page?: number | undefined
            primary_release_year?: number | undefined
            'primary_release_date.gte'?: string | undefined
            'primary_release_date.lte'?: string | undefined
            region?: string | undefined
            'release_date.gte'?: string | undefined
            'release_date.lte'?: string | undefined
            sort_by?:
              | 'original_title.asc'
              | 'original_title.desc'
              | 'popularity.asc'
              | 'popularity.desc'
              | 'revenue.asc'
              | 'revenue.desc'
              | 'primary_release_date.asc'
              | 'title.asc'
              | 'title.desc'
              | 'primary_release_date.desc'
              | 'vote_average.asc'
              | 'vote_average.desc'
              | 'vote_count.asc'
              | 'vote_count.desc'
              | undefined
            'vote_average.gte'?: number | undefined
            'vote_average.lte'?: number | undefined
            'vote_count.gte'?: number | undefined
            'vote_count.lte'?: number | undefined
            watch_region?: string | undefined
            with_cast?: string | undefined
            with_companies?: string | undefined
            with_crew?: string | undefined
            with_genres?: string | undefined
            with_keywords?: string | undefined
            with_origin_country?: string | undefined
            with_original_language?: string | undefined
            with_people?: string | undefined
            with_release_type?: number | undefined
            'with_runtime.gte'?: number | undefined
            'with_runtime.lte'?: number | undefined
            with_watch_monetization_types?: string | undefined
            with_watch_providers?: string | undefined
            without_companies?: string | undefined
            without_genres?: string | undefined
            without_keywords?: string | undefined
            without_watch_providers?: string | undefined
            year?: number | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/discover/tv': {
      $get: {
        input: {
          query: {
            'air_date.gte'?: string | undefined
            'air_date.lte'?: string | undefined
            first_air_date_year?: number | undefined
            'first_air_date.gte'?: string | undefined
            'first_air_date.lte'?: string | undefined
            include_adult?: boolean | undefined
            include_null_first_air_dates?: boolean | undefined
            language?: string | undefined
            page?: number | undefined
            screened_theatrically?: boolean | undefined
            sort_by?:
              | 'first_air_date.asc'
              | 'first_air_date.desc'
              | 'name.asc'
              | 'name.desc'
              | 'original_name.asc'
              | 'original_name.desc'
              | 'popularity.asc'
              | 'popularity.desc'
              | 'vote_average.asc'
              | 'vote_average.desc'
              | 'vote_count.asc'
              | 'vote_count.desc'
              | undefined
            timezone?: string | undefined
            'vote_average.gte'?: number | undefined
            'vote_average.lte'?: number | undefined
            'vote_count.gte'?: number | undefined
            'vote_count.lte'?: number | undefined
            watch_region?: string | undefined
            with_companies?: string | undefined
            with_genres?: string | undefined
            with_keywords?: string | undefined
            with_networks?: number | undefined
            with_origin_country?: string | undefined
            with_original_language?: string | undefined
            'with_runtime.gte'?: number | undefined
            'with_runtime.lte'?: number | undefined
            with_status?: string | undefined
            with_watch_monetization_types?: string | undefined
            with_watch_providers?: string | undefined
            without_companies?: string | undefined
            without_genres?: string | undefined
            without_keywords?: string | undefined
            without_watch_providers?: string | undefined
            with_type?: string | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                backdrop_path?: string | undefined
                first_air_date?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                name?: string | undefined
                origin_country?: string[] | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/find/:external_id': {
      $get: {
        input: { param: { external_id: string } } & {
          query: {
            external_source:
              | 'imdb_id'
              | 'facebook_id'
              | 'instagram_id'
              | 'tvdb_id'
              | 'tiktok_id'
              | 'twitter_id'
              | 'wikidata_id'
              | 'youtube_id'
            language?: string | undefined
          }
        }
        output: {
          movie_results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                id?: number | undefined
                title?: string | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                poster_path?: string | undefined
                media_type?: string | undefined
                genre_ids?: number[] | undefined
                popularity?: number | undefined
                release_date?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          person_results?: unknown[] | undefined
          tv_results?: unknown[] | undefined
          tv_episode_results?: unknown[] | undefined
          tv_season_results?: unknown[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/genre/movie/list': {
      $get: {
        input: { query: { language?: string | undefined } }
        output: { genres?: { id?: number | undefined; name?: string | undefined }[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/genre/tv/list': {
      $get: {
        input: { query: { language?: string | undefined } }
        output: { genres?: { id?: number | undefined; name?: string | undefined }[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/guest_session/:guest_session_id/rated/movies': {
      $get: {
        input: { param: { guest_session_id: string } } & {
          query: {
            language?: string | undefined
            page?: number | undefined
            sort_by?: 'created_at.asc' | 'created_at.desc' | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                rating?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/guest_session/:guest_session_id/rated/tv': {
      $get: {
        input: { param: { guest_session_id: string } } & {
          query: {
            language?: string | undefined
            page?: number | undefined
            sort_by?: 'created_at.asc' | 'created_at.desc' | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                origin_country?: string[] | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                first_air_date?: string | undefined
                name?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                rating?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/guest_session/:guest_session_id/rated/tv/episodes': {
      $get: {
        input: { param: { guest_session_id: string } } & {
          query: {
            language?: string | undefined
            page?: number | undefined
            sort_by?: 'created_at.asc' | 'created_at.desc' | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                air_date?: string | undefined
                episode_number?: number | undefined
                id?: number | undefined
                name?: string | undefined
                overview?: string | undefined
                production_code?: string | undefined
                runtime?: number | undefined
                season_number?: number | undefined
                show_id?: number | undefined
                still_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                rating?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/keyword/:keyword_id': {
      $get: {
        input: { param: { keyword_id: number } }
        output: { id?: number | undefined; name?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/keyword/:keyword_id/movies': {
      $get: {
        input: { param: { keyword_id: string } } & {
          query: {
            include_adult?: boolean | undefined
            language?: string | undefined
            page?: number | undefined
          }
        }
        output: {
          id?: number | undefined
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/list/:list_id/add_item': {
      $post: {
        input: { param: { list_id: number } } & { query: { session_id: string } } & {
          json: { RAW_BODY?: string | undefined }
        }
        output: { status_code?: number | undefined; status_message?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/list/:list_id/item_status': {
      $get: {
        input: { param: { list_id: number } } & {
          query: { language?: string | undefined; movie_id?: number | undefined }
        }
        output: { id?: number | undefined; item_present?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/list/:list_id/clear': {
      $post: {
        input: { param: { list_id: number } } & { query: { session_id: string; confirm: boolean } }
        output: { status_code?: number | undefined; status_message?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/list': {
      $post: {
        input: { query: { session_id: string } } & { json: { RAW_BODY: string } }
        output: {
          status_message?: string | undefined
          success?: boolean | undefined
          status_code?: number | undefined
          list_id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/list/:list_id': {
      $delete: {
        input: { param: { list_id: number } } & { query: { session_id: string } }
        output: { status_code?: number | undefined; status_message?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { list_id: number } } & {
          query: { language?: string | undefined; page?: number | undefined }
        }
        output: {
          created_by?: string | undefined
          description?: string | undefined
          favorite_count?: number | undefined
          id?: string | undefined
          items?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                media_type?: string | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          item_count?: number | undefined
          iso_639_1?: string | undefined
          name?: string | undefined
          poster_path?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/list/:list_id/remove_item': {
      $post: {
        input: { param: { list_id: number } } & { query: { session_id: string } } & {
          json: { RAW_BODY: string }
        }
        output: { status_code?: number | undefined; status_message?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/now_playing': {
      $get: {
        input: {
          query: {
            language?: string | undefined
            page?: number | undefined
            region?: string | undefined
          }
        }
        output: {
          dates?: { maximum?: string | undefined; minimum?: string | undefined } | undefined
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/popular': {
      $get: {
        input: {
          query: {
            language?: string | undefined
            page?: number | undefined
            region?: string | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/top_rated': {
      $get: {
        input: {
          query: {
            language?: string | undefined
            page?: number | undefined
            region?: string | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/upcoming': {
      $get: {
        input: {
          query: {
            language?: string | undefined
            page?: number | undefined
            region?: string | undefined
          }
        }
        output: {
          dates?: { maximum?: string | undefined; minimum?: string | undefined } | undefined
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id': {
      $get: {
        input: { param: { movie_id: number } } & {
          query: { append_to_response?: string | undefined; language?: string | undefined }
        }
        output: {
          adult?: boolean | undefined
          backdrop_path?: string | undefined
          belongs_to_collection?:
            | {
                id?: number | undefined
                name?: string | undefined
                poster_path?: string | undefined
                backdrop_path?: string | undefined
              }
            | undefined
          budget?: number | undefined
          genres?: { id?: number | undefined; name?: string | undefined }[] | undefined
          homepage?: string | undefined
          id?: number | undefined
          imdb_id?: string | undefined
          origin_country?: string[] | undefined
          original_language?: string | undefined
          original_title?: string | undefined
          overview?: string | undefined
          popularity?: number | undefined
          poster_path?: string | undefined
          production_companies?:
            | {
                id?: number | undefined
                logo_path?: string | undefined
                name?: string | undefined
                origin_country?: string | undefined
              }[]
            | undefined
          production_countries?:
            | { iso_3166_1?: string | undefined; name?: string | undefined }[]
            | undefined
          release_date?: string | undefined
          revenue?: number | undefined
          runtime?: number | undefined
          spoken_languages?:
            | {
                english_name?: string | undefined
                iso_639_1?: string | undefined
                name?: string | undefined
              }[]
            | undefined
          status?: string | undefined
          tagline?: string | undefined
          title?: string | undefined
          video?: boolean | undefined
          vote_average?: number | undefined
          vote_count?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/account_states': {
      $get: {
        input: { param: { movie_id: number } } & {
          query: { session_id?: string | undefined; guest_session_id?: string | undefined }
        }
        output: {
          id?: number | undefined
          favorite?: boolean | undefined
          rated?: { value?: number | undefined } | undefined
          watchlist?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/alternative_titles': {
      $get: {
        input: { param: { movie_id: number } } & { query: { country?: string | undefined } }
        output: {
          id?: number | undefined
          titles?:
            | {
                iso_3166_1?: string | undefined
                title?: string | undefined
                type?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/changes': {
      $get: {
        input: { param: { movie_id: number } } & {
          query: {
            end_date?: string | undefined
            page?: number | undefined
            start_date?: string | undefined
          }
        }
        output: {
          changes?:
            | {
                key?: string | undefined
                items?:
                  | {
                      id?: string | undefined
                      action?: string | undefined
                      time?: string | undefined
                      iso_639_1?: string | undefined
                      iso_3166_1?: string | undefined
                      value?:
                        | { poster?: { file_path?: string | undefined } | undefined }
                        | undefined
                    }[]
                  | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/credits': {
      $get: {
        input: { param: { movie_id: number } } & { query: { language?: string | undefined } }
        output: {
          id?: number | undefined
          cast?:
            | {
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
                cast_id?: number | undefined
                character?: string | undefined
                credit_id?: string | undefined
                order?: number | undefined
              }[]
            | undefined
          crew?:
            | {
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
                credit_id?: string | undefined
                department?: string | undefined
                job?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/external_ids': {
      $get: {
        input: { param: { movie_id: number } }
        output: {
          id?: number | undefined
          imdb_id?: string | undefined
          wikidata_id?: { [x: string]: unknown } | undefined
          facebook_id?: string | undefined
          instagram_id?: { [x: string]: unknown } | undefined
          twitter_id?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/images': {
      $get: {
        input: { param: { movie_id: number } } & {
          query: { include_image_language?: string | undefined; language?: string | undefined }
        }
        output: {
          backdrops?:
            | {
                aspect_ratio?: number | undefined
                height?: number | undefined
                iso_639_1?: { [x: string]: unknown } | undefined
                file_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                width?: number | undefined
              }[]
            | undefined
          id?: number | undefined
          logos?:
            | {
                aspect_ratio?: number | undefined
                height?: number | undefined
                iso_639_1?: string | undefined
                file_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                width?: number | undefined
              }[]
            | undefined
          posters?:
            | {
                aspect_ratio?: number | undefined
                height?: number | undefined
                iso_639_1?: string | undefined
                file_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                width?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/keywords': {
      $get: {
        input: { param: { movie_id: string } }
        output: {
          id?: number | undefined
          keywords?: { id?: number | undefined; name?: string | undefined }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/latest': {
      $get: {
        input: {}
        output: {
          adult?: boolean | undefined
          backdrop_path?: { [x: string]: unknown } | undefined
          belongs_to_collection?: { [x: string]: unknown } | undefined
          budget?: number | undefined
          genres?: unknown[] | undefined
          homepage?: string | undefined
          id?: number | undefined
          imdb_id?: { [x: string]: unknown } | undefined
          original_language?: string | undefined
          original_title?: string | undefined
          overview?: string | undefined
          popularity?: number | undefined
          poster_path?: { [x: string]: unknown } | undefined
          production_companies?: unknown[] | undefined
          production_countries?: unknown[] | undefined
          release_date?: string | undefined
          revenue?: number | undefined
          runtime?: number | undefined
          spoken_languages?: unknown[] | undefined
          status?: string | undefined
          tagline?: string | undefined
          title?: string | undefined
          video?: boolean | undefined
          vote_average?: number | undefined
          vote_count?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/lists': {
      $get: {
        input: { param: { movie_id: number } } & {
          query: { language?: string | undefined; page?: number | undefined }
        }
        output: {
          id?: number | undefined
          page?: number | undefined
          results?:
            | {
                description?: string | undefined
                favorite_count?: number | undefined
                id?: number | undefined
                item_count?: number | undefined
                iso_639_1?: string | undefined
                list_type?: string | undefined
                name?: string | undefined
                poster_path?: { [x: string]: unknown } | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/recommendations': {
      $get: {
        input: { param: { movie_id: number } } & {
          query: { language?: string | undefined; page?: number | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/release_dates': {
      $get: {
        input: { param: { movie_id: number } }
        output: {
          id?: number | undefined
          results?:
            | {
                iso_3166_1?: string | undefined
                release_dates?:
                  | {
                      certification?: string | undefined
                      descriptors?: unknown[] | undefined
                      iso_639_1?: string | undefined
                      note?: string | undefined
                      release_date?: string | undefined
                      type?: number | undefined
                    }[]
                  | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/reviews': {
      $get: {
        input: { param: { movie_id: number } } & {
          query: { language?: string | undefined; page?: number | undefined }
        }
        output: {
          id?: number | undefined
          page?: number | undefined
          results?:
            | {
                author?: string | undefined
                author_details?:
                  | {
                      name?: string | undefined
                      username?: string | undefined
                      avatar_path?: string | undefined
                      rating?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                content?: string | undefined
                created_at?: string | undefined
                id?: string | undefined
                updated_at?: string | undefined
                url?: string | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/similar': {
      $get: {
        input: { param: { movie_id: number } } & {
          query: { language?: string | undefined; page?: number | undefined }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/translations': {
      $get: {
        input: { param: { movie_id: number } }
        output: {
          id?: number | undefined
          translations?:
            | {
                iso_3166_1?: string | undefined
                iso_639_1?: string | undefined
                name?: string | undefined
                english_name?: string | undefined
                data?:
                  | {
                      homepage?: string | undefined
                      overview?: string | undefined
                      runtime?: number | undefined
                      tagline?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/videos': {
      $get: {
        input: { param: { movie_id: number } } & { query: { language?: string | undefined } }
        output: {
          id?: number | undefined
          results?:
            | {
                iso_639_1?: string | undefined
                iso_3166_1?: string | undefined
                name?: string | undefined
                key?: string | undefined
                site?: string | undefined
                size?: number | undefined
                type?: string | undefined
                official?: boolean | undefined
                published_at?: string | undefined
                id?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/watch/providers': {
      $get: {
        input: { param: { movie_id: number } }
        output: {
          id?: number | undefined
          results?:
            | {
                AE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                AL?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                AR?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                AT?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                AU?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BA?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BB?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BE?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BG?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BH?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BS?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CA?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CH?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CL?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CO?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CV?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CZ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                DE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                DK?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                DO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                EC?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                EE?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                EG?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ES?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      ads?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                FI?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                FJ?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                FR?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GB?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GF?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GI?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GT?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                HK?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                HN?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                HR?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      ads?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                HU?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ID?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                IE?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                IL?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                IN?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                IQ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                IS?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                IT?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                JM?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                JO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                JP?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                KR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                KW?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                LB?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                LI?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                LT?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                LV?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MD?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MK?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MT?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MU?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MX?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MY?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MZ?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                NL?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                NO?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                NZ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                OM?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PA?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PE?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PH?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PK?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PL?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PS?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PT?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PY?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                QA?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                RO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                RS?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                RU?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SA?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SE?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SG?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SI?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SK?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SM?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SV?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TH?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TR?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TT?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TW?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                UG?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                US?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                UY?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                VE?:
                  | {
                      link?: string | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                YE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ZA?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/movie/:movie_id/rating': {
      $post: {
        input: { param: { movie_id: number } } & {
          query: { guest_session_id?: string | undefined; session_id?: string | undefined }
        } & { header: { 'Content-Type': string } } & { json: { RAW_BODY: string } }
        output: { status_code?: number | undefined; status_message?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { movie_id: number } } & {
          query: { guest_session_id?: string | undefined; session_id?: string | undefined }
        } & { header: { 'Content-Type'?: string | undefined } }
        output: { status_code?: number | undefined; status_message?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/network/:network_id': {
      $get: {
        input: { param: { network_id: number } }
        output: {
          headquarters?: string | undefined
          homepage?: string | undefined
          id?: number | undefined
          logo_path?: string | undefined
          name?: string | undefined
          origin_country?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/network/:network_id/alternative_names': {
      $get: {
        input: { param: { network_id: number } }
        output: {
          id?: number | undefined
          results?: { name?: string | undefined; type?: string | undefined }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/network/:network_id/images': {
      $get: {
        input: { param: { network_id: number } }
        output: {
          id?: number | undefined
          logos?:
            | {
                aspect_ratio?: number | undefined
                file_path?: string | undefined
                height?: number | undefined
                id?: string | undefined
                file_type?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                width?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/person/popular': {
      $get: {
        input: { query: { language?: string | undefined; page?: number | undefined } }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for?:
                  | {
                      adult?: boolean | undefined
                      backdrop_path?: string | undefined
                      genre_ids?: number[] | undefined
                      id?: number | undefined
                      media_type?: string | undefined
                      original_language?: string | undefined
                      original_title?: string | undefined
                      overview?: string | undefined
                      poster_path?: string | undefined
                      release_date?: string | undefined
                      title?: string | undefined
                      video?: boolean | undefined
                      vote_average?: number | undefined
                      vote_count?: number | undefined
                    }[]
                  | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/person/:person_id': {
      $get: {
        input: { param: { person_id: number } } & {
          query: { append_to_response?: string | undefined; language?: string | undefined }
        }
        output: {
          adult?: boolean | undefined
          also_known_as?: string[] | undefined
          biography?: string | undefined
          birthday?: string | undefined
          deathday?: { [x: string]: unknown } | undefined
          gender?: number | undefined
          homepage?: { [x: string]: unknown } | undefined
          id?: number | undefined
          imdb_id?: string | undefined
          known_for_department?: string | undefined
          name?: string | undefined
          place_of_birth?: string | undefined
          popularity?: number | undefined
          profile_path?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/person/:person_id/changes': {
      $get: {
        input: { param: { person_id: number } } & {
          query: {
            end_date?: string | undefined
            page?: number | undefined
            start_date?: string | undefined
          }
        }
        output: {
          changes?:
            | {
                key?: string | undefined
                items?:
                  | {
                      id?: string | undefined
                      action?: string | undefined
                      time?: string | undefined
                      iso_639_1?: string | undefined
                      iso_3166_1?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/person/:person_id/combined_credits': {
      $get: {
        input: { param: { person_id: string } } & { query: { language?: string | undefined } }
        output: {
          cast?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                character?: string | undefined
                credit_id?: string | undefined
                order?: number | undefined
                media_type?: string | undefined
              }[]
            | undefined
          crew?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                credit_id?: string | undefined
                department?: string | undefined
                job?: string | undefined
                media_type?: string | undefined
              }[]
            | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/person/:person_id/external_ids': {
      $get: {
        input: { param: { person_id: number } }
        output: {
          id?: number | undefined
          freebase_mid?: string | undefined
          freebase_id?: string | undefined
          imdb_id?: string | undefined
          tvrage_id?: number | undefined
          wikidata_id?: string | undefined
          facebook_id?: string | undefined
          instagram_id?: string | undefined
          tiktok_id?: string | undefined
          twitter_id?: string | undefined
          youtube_id?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/person/:person_id/images': {
      $get: {
        input: { param: { person_id: number } }
        output: {
          id?: number | undefined
          profiles?:
            | {
                aspect_ratio?: number | undefined
                height?: number | undefined
                iso_639_1?: { [x: string]: unknown } | undefined
                file_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                width?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/person/latest': {
      $get: {
        input: {}
        output: {
          adult?: boolean | undefined
          also_known_as?: unknown[] | undefined
          biography?: string | undefined
          birthday?: { [x: string]: unknown } | undefined
          deathday?: { [x: string]: unknown } | undefined
          gender?: number | undefined
          homepage?: { [x: string]: unknown } | undefined
          id?: number | undefined
          imdb_id?: { [x: string]: unknown } | undefined
          known_for_department?: { [x: string]: unknown } | undefined
          name?: string | undefined
          place_of_birth?: { [x: string]: unknown } | undefined
          popularity?: number | undefined
          profile_path?: { [x: string]: unknown } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/person/:person_id/movie_credits': {
      $get: {
        input: { param: { person_id: number } } & { query: { language?: string | undefined } }
        output: {
          cast?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                character?: string | undefined
                credit_id?: string | undefined
                order?: number | undefined
              }[]
            | undefined
          crew?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                credit_id?: string | undefined
                department?: string | undefined
                job?: string | undefined
              }[]
            | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/person/:person_id/tv_credits': {
      $get: {
        input: { param: { person_id: number } } & { query: { language?: string | undefined } }
        output: {
          cast?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                origin_country?: string[] | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                first_air_date?: string | undefined
                name?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                character?: string | undefined
                credit_id?: string | undefined
                episode_count?: number | undefined
              }[]
            | undefined
          crew?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                origin_country?: string[] | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                first_air_date?: string | undefined
                name?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                credit_id?: string | undefined
                department?: string | undefined
                episode_count?: number | undefined
                job?: string | undefined
              }[]
            | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/person/:person_id/tagged_images': {
      $get: {
        input: { param: { person_id: number } } & { query: { page?: number | undefined } }
        output: {
          id?: number | undefined
          page?: number | undefined
          results?:
            | {
                aspect_ratio?: number | undefined
                file_path?: string | undefined
                height?: number | undefined
                id?: string | undefined
                iso_639_1?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                width?: number | undefined
                image_type?: string | undefined
                media?:
                  | {
                      adult?: boolean | undefined
                      backdrop_path?: string | undefined
                      id?: number | undefined
                      title?: string | undefined
                      original_language?: string | undefined
                      original_title?: string | undefined
                      overview?: string | undefined
                      poster_path?: string | undefined
                      media_type?: string | undefined
                      genre_ids?: number[] | undefined
                      popularity?: number | undefined
                      release_date?: string | undefined
                      video?: boolean | undefined
                      vote_average?: number | undefined
                      vote_count?: number | undefined
                    }
                  | undefined
                media_type?: string | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/person/:person_id/translations': {
      $get: {
        input: { param: { person_id: number } }
        output: {
          id?: number | undefined
          translations?:
            | {
                iso_3166_1?: string | undefined
                iso_639_1?: string | undefined
                name?: string | undefined
                english_name?: string | undefined
                data?: { biography?: string | undefined; name?: string | undefined } | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/review/:review_id': {
      $get: {
        input: { param: { review_id: string } }
        output: {
          id?: string | undefined
          author?: string | undefined
          author_details?:
            | {
                name?: string | undefined
                username?: string | undefined
                avatar_path?: string | undefined
                rating?: number | undefined
              }
            | undefined
          content?: string | undefined
          created_at?: string | undefined
          iso_639_1?: string | undefined
          media_id?: number | undefined
          media_title?: string | undefined
          media_type?: string | undefined
          updated_at?: string | undefined
          url?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/search/collection': {
      $get: {
        input: {
          query: {
            query: string
            include_adult?: boolean | undefined
            language?: string | undefined
            page?: number | undefined
            region?: string | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                id?: number | undefined
                name?: string | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                poster_path?: string | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/search/company': {
      $get: {
        input: { query: { query: string; page?: number | undefined } }
        output: {
          page?: number | undefined
          results?:
            | {
                id?: number | undefined
                logo_path?: string | undefined
                name?: string | undefined
                origin_country?: string | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/search/keyword': {
      $get: {
        input: { query: { query: string; page?: number | undefined } }
        output: {
          page?: number | undefined
          results?: { id?: number | undefined; name?: string | undefined }[] | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/search/movie': {
      $get: {
        input: {
          query: {
            query: string
            include_adult?: boolean | undefined
            language?: string | undefined
            primary_release_year?: string | undefined
            page?: number | undefined
            region?: string | undefined
            year?: string | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                release_date?: string | undefined
                title?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/search/multi': {
      $get: {
        input: {
          query: {
            query: string
            include_adult?: boolean | undefined
            language?: string | undefined
            page?: number | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                id?: number | undefined
                title?: string | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                poster_path?: string | undefined
                media_type?: string | undefined
                genre_ids?: number[] | undefined
                popularity?: number | undefined
                release_date?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                name?: string | undefined
                original_name?: string | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/search/person': {
      $get: {
        input: {
          query: {
            query: string
            include_adult?: boolean | undefined
            language?: string | undefined
            page?: number | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
                known_for?:
                  | {
                      adult?: boolean | undefined
                      backdrop_path?: string | undefined
                      id?: number | undefined
                      title?: string | undefined
                      original_language?: string | undefined
                      original_title?: string | undefined
                      overview?: string | undefined
                      poster_path?: string | undefined
                      media_type?: string | undefined
                      genre_ids?: number[] | undefined
                      popularity?: number | undefined
                      release_date?: string | undefined
                      video?: boolean | undefined
                      vote_average?: number | undefined
                      vote_count?: number | undefined
                    }[]
                  | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/search/tv': {
      $get: {
        input: {
          query: {
            query: string
            first_air_date_year?: number | undefined
            include_adult?: boolean | undefined
            language?: string | undefined
            page?: number | undefined
            year?: number | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                origin_country?: string[] | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                first_air_date?: string | undefined
                name?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/trending/all/:time_window': {
      $get: {
        input: { param: { time_window: 'day' | 'week' } } & {
          query: { language?: string | undefined }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                id?: number | undefined
                title?: string | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                poster_path?: string | undefined
                media_type?: string | undefined
                genre_ids?: number[] | undefined
                popularity?: number | undefined
                release_date?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/trending/movie/:time_window': {
      $get: {
        input: { param: { time_window: 'day' | 'week' } } & {
          query: { language?: string | undefined }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                id?: number | undefined
                title?: string | undefined
                original_language?: string | undefined
                original_title?: string | undefined
                overview?: string | undefined
                poster_path?: string | undefined
                media_type?: string | undefined
                genre_ids?: number[] | undefined
                popularity?: number | undefined
                release_date?: string | undefined
                video?: boolean | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/trending/person/:time_window': {
      $get: {
        input: { param: { time_window: 'day' | 'week' } } & {
          query: { language?: string | undefined }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                id?: number | undefined
                name?: string | undefined
                original_name?: string | undefined
                media_type?: string | undefined
                popularity?: number | undefined
                gender?: number | undefined
                known_for_department?: string | undefined
                profile_path?: string | undefined
                known_for?:
                  | {
                      adult?: boolean | undefined
                      backdrop_path?: string | undefined
                      id?: number | undefined
                      title?: string | undefined
                      original_language?: string | undefined
                      original_title?: string | undefined
                      overview?: string | undefined
                      poster_path?: string | undefined
                      media_type?: string | undefined
                      genre_ids?: number[] | undefined
                      popularity?: number | undefined
                      release_date?: string | undefined
                      video?: boolean | undefined
                      vote_average?: number | undefined
                      vote_count?: number | undefined
                    }[]
                  | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/trending/tv/:time_window': {
      $get: {
        input: { param: { time_window: 'day' | 'week' } } & {
          query: { language?: string | undefined }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                id?: number | undefined
                name?: string | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                poster_path?: string | undefined
                media_type?: string | undefined
                genre_ids?: number[] | undefined
                popularity?: number | undefined
                first_air_date?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                origin_country?: string[] | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/airing_today': {
      $get: {
        input: {
          query: {
            language?: string | undefined
            page?: number | undefined
            timezone?: string | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                backdrop_path?: string | undefined
                first_air_date?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                name?: string | undefined
                origin_country?: string[] | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/on_the_air': {
      $get: {
        input: {
          query: {
            language?: string | undefined
            page?: number | undefined
            timezone?: string | undefined
          }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                backdrop_path?: string | undefined
                first_air_date?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                name?: string | undefined
                origin_country?: string[] | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/popular': {
      $get: {
        input: { query: { language?: string | undefined; page?: number | undefined } }
        output: {
          page?: number | undefined
          results?:
            | {
                backdrop_path?: string | undefined
                first_air_date?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                name?: string | undefined
                origin_country?: string[] | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/top_rated': {
      $get: {
        input: { query: { language?: string | undefined; page?: number | undefined } }
        output: {
          page?: number | undefined
          results?:
            | {
                backdrop_path?: string | undefined
                first_air_date?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                name?: string | undefined
                origin_country?: string[] | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id': {
      $get: {
        input: { param: { series_id: number } } & {
          query: { append_to_response?: string | undefined; language?: string | undefined }
        }
        output: {
          adult?: boolean | undefined
          backdrop_path?: string | undefined
          created_by?:
            | {
                id?: number | undefined
                credit_id?: string | undefined
                name?: string | undefined
                gender?: number | undefined
                profile_path?: string | undefined
              }[]
            | undefined
          episode_run_time?: number[] | undefined
          first_air_date?: string | undefined
          genres?: { id?: number | undefined; name?: string | undefined }[] | undefined
          homepage?: string | undefined
          id?: number | undefined
          in_production?: boolean | undefined
          languages?: string[] | undefined
          last_air_date?: string | undefined
          last_episode_to_air?:
            | {
                id?: number | undefined
                name?: string | undefined
                overview?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                air_date?: string | undefined
                episode_number?: number | undefined
                production_code?: string | undefined
                runtime?: number | undefined
                season_number?: number | undefined
                show_id?: number | undefined
                still_path?: string | undefined
              }
            | undefined
          name?: string | undefined
          next_episode_to_air?: { [x: string]: unknown } | undefined
          networks?:
            | {
                id?: number | undefined
                logo_path?: string | undefined
                name?: string | undefined
                origin_country?: string | undefined
              }[]
            | undefined
          number_of_episodes?: number | undefined
          number_of_seasons?: number | undefined
          origin_country?: string[] | undefined
          original_language?: string | undefined
          original_name?: string | undefined
          overview?: string | undefined
          popularity?: number | undefined
          poster_path?: string | undefined
          production_companies?:
            | {
                id?: number | undefined
                logo_path?: string | undefined
                name?: string | undefined
                origin_country?: string | undefined
              }[]
            | undefined
          production_countries?:
            | { iso_3166_1?: string | undefined; name?: string | undefined }[]
            | undefined
          seasons?:
            | {
                air_date?: string | undefined
                episode_count?: number | undefined
                id?: number | undefined
                name?: string | undefined
                overview?: string | undefined
                poster_path?: string | undefined
                season_number?: number | undefined
                vote_average?: number | undefined
              }[]
            | undefined
          spoken_languages?:
            | {
                english_name?: string | undefined
                iso_639_1?: string | undefined
                name?: string | undefined
              }[]
            | undefined
          status?: string | undefined
          tagline?: string | undefined
          type?: string | undefined
          vote_average?: number | undefined
          vote_count?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/account_states': {
      $get: {
        input: { param: { series_id: number } } & {
          query: { session_id?: string | undefined; guest_session_id?: string | undefined }
        }
        output: {
          id?: number | undefined
          favorite?: boolean | undefined
          rated?: { value?: number | undefined } | undefined
          watchlist?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/aggregate_credits': {
      $get: {
        input: { param: { series_id: number } } & { query: { language?: string | undefined } }
        output: {
          cast?:
            | {
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
                roles?:
                  | {
                      credit_id?: string | undefined
                      character?: string | undefined
                      episode_count?: number | undefined
                    }[]
                  | undefined
                total_episode_count?: number | undefined
                order?: number | undefined
              }[]
            | undefined
          crew?:
            | {
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
                jobs?:
                  | {
                      credit_id?: string | undefined
                      job?: string | undefined
                      episode_count?: number | undefined
                    }[]
                  | undefined
                department?: string | undefined
                total_episode_count?: number | undefined
              }[]
            | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/alternative_titles': {
      $get: {
        input: { param: { series_id: number } }
        output: {
          id?: number | undefined
          results?:
            | {
                iso_3166_1?: string | undefined
                title?: string | undefined
                type?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/changes': {
      $get: {
        input: { param: { series_id: number } } & {
          query: {
            end_date?: string | undefined
            page?: number | undefined
            start_date?: string | undefined
          }
        }
        output: {
          changes?:
            | {
                key?: string | undefined
                items?:
                  | {
                      id?: string | undefined
                      action?: string | undefined
                      time?: string | undefined
                      iso_639_1?: string | undefined
                      iso_3166_1?: string | undefined
                      value?:
                        | {
                            poster?:
                              | { file_path?: string | undefined; iso_639_1?: string | undefined }
                              | undefined
                          }
                        | undefined
                      original_value?:
                        | {
                            poster?:
                              | { file_path?: string | undefined; iso_639_1?: string | undefined }
                              | undefined
                          }
                        | undefined
                    }[]
                  | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/content_ratings': {
      $get: {
        input: { param: { series_id: number } }
        output: {
          results?:
            | {
                descriptors?: unknown[] | undefined
                iso_3166_1?: string | undefined
                rating?: string | undefined
              }[]
            | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/credits': {
      $get: {
        input: { param: { series_id: number } } & { query: { language?: string | undefined } }
        output: {
          cast?:
            | {
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
                character?: string | undefined
                credit_id?: string | undefined
                order?: number | undefined
              }[]
            | undefined
          crew?:
            | {
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
                credit_id?: string | undefined
                department?: string | undefined
                job?: string | undefined
              }[]
            | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/episode_groups': {
      $get: {
        input: { param: { series_id: number } }
        output: {
          results?:
            | {
                description?: string | undefined
                episode_count?: number | undefined
                group_count?: number | undefined
                id?: string | undefined
                name?: string | undefined
                network?:
                  | {
                      id?: number | undefined
                      logo_path?: string | undefined
                      name?: string | undefined
                      origin_country?: string | undefined
                    }
                  | undefined
                type?: number | undefined
              }[]
            | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/external_ids': {
      $get: {
        input: { param: { series_id: number } }
        output: {
          id?: number | undefined
          imdb_id?: string | undefined
          freebase_mid?: string | undefined
          freebase_id?: string | undefined
          tvdb_id?: number | undefined
          tvrage_id?: number | undefined
          wikidata_id?: string | undefined
          facebook_id?: string | undefined
          instagram_id?: string | undefined
          twitter_id?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/images': {
      $get: {
        input: { param: { series_id: number } } & {
          query: { include_image_language?: string | undefined; language?: string | undefined }
        }
        output: {
          backdrops?:
            | {
                aspect_ratio?: number | undefined
                height?: number | undefined
                iso_639_1?: { [x: string]: unknown } | undefined
                file_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                width?: number | undefined
              }[]
            | undefined
          id?: number | undefined
          logos?:
            | {
                aspect_ratio?: number | undefined
                height?: number | undefined
                iso_639_1?: string | undefined
                file_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                width?: number | undefined
              }[]
            | undefined
          posters?:
            | {
                aspect_ratio?: number | undefined
                height?: number | undefined
                iso_639_1?: string | undefined
                file_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                width?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/keywords': {
      $get: {
        input: { param: { series_id: number } }
        output: {
          id?: number | undefined
          results?: { name?: string | undefined; id?: number | undefined }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/latest': {
      $get: {
        input: {}
        output: {
          adult?: boolean | undefined
          backdrop_path?: { [x: string]: unknown } | undefined
          created_by?: unknown[] | undefined
          episode_run_time?: unknown[] | undefined
          first_air_date?: string | undefined
          genres?: unknown[] | undefined
          homepage?: string | undefined
          id?: number | undefined
          in_production?: boolean | undefined
          languages?: unknown[] | undefined
          last_air_date?: string | undefined
          last_episode_to_air?:
            | {
                id?: number | undefined
                name?: string | undefined
                overview?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                air_date?: string | undefined
                episode_number?: number | undefined
                production_code?: string | undefined
                runtime?: { [x: string]: unknown } | undefined
                season_number?: number | undefined
                show_id?: number | undefined
                still_path?: { [x: string]: unknown } | undefined
              }
            | undefined
          name?: string | undefined
          next_episode_to_air?: { [x: string]: unknown } | undefined
          networks?: unknown[] | undefined
          number_of_episodes?: number | undefined
          number_of_seasons?: number | undefined
          origin_country?: string[] | undefined
          original_language?: string | undefined
          original_name?: string | undefined
          overview?: string | undefined
          popularity?: number | undefined
          poster_path?: { [x: string]: unknown } | undefined
          production_companies?: unknown[] | undefined
          production_countries?: unknown[] | undefined
          seasons?:
            | {
                air_date?: { [x: string]: unknown } | undefined
                episode_count?: number | undefined
                id?: number | undefined
                name?: string | undefined
                overview?: string | undefined
                poster_path?: { [x: string]: unknown } | undefined
                season_number?: number | undefined
              }[]
            | undefined
          spoken_languages?: unknown[] | undefined
          status?: string | undefined
          tagline?: string | undefined
          type?: string | undefined
          vote_average?: number | undefined
          vote_count?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/lists': {
      $get: {
        input: { param: { series_id: number } } & {
          query: { language?: string | undefined; page?: number | undefined }
        }
        output: {
          id?: number | undefined
          page?: number | undefined
          results?:
            | {
                description?: string | undefined
                favorite_count?: number | undefined
                id?: number | undefined
                item_count?: number | undefined
                iso_639_1?: string | undefined
                iso_3166_1?: string | undefined
                name?: string | undefined
                poster_path?: { [x: string]: unknown } | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/recommendations': {
      $get: {
        input: { param: { series_id: number } } & {
          query: { language?: string | undefined; page?: number | undefined }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                id?: number | undefined
                name?: string | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                poster_path?: string | undefined
                media_type?: string | undefined
                genre_ids?: number[] | undefined
                popularity?: number | undefined
                first_air_date?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                origin_country?: string[] | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/reviews': {
      $get: {
        input: { param: { series_id: number } } & {
          query: { language?: string | undefined; page?: number | undefined }
        }
        output: {
          id?: number | undefined
          page?: number | undefined
          results?:
            | {
                author?: string | undefined
                author_details?:
                  | {
                      name?: string | undefined
                      username?: string | undefined
                      avatar_path?: string | undefined
                      rating?: number | undefined
                    }
                  | undefined
                content?: string | undefined
                created_at?: string | undefined
                id?: string | undefined
                updated_at?: string | undefined
                url?: string | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/screened_theatrically': {
      $get: {
        input: { param: { series_id: number } }
        output: {
          id?: number | undefined
          results?:
            | {
                id?: number | undefined
                episode_number?: number | undefined
                season_number?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/similar': {
      $get: {
        input: { param: { series_id: string } } & {
          query: { language?: string | undefined; page?: number | undefined }
        }
        output: {
          page?: number | undefined
          results?:
            | {
                adult?: boolean | undefined
                backdrop_path?: string | undefined
                genre_ids?: number[] | undefined
                id?: number | undefined
                origin_country?: string[] | undefined
                original_language?: string | undefined
                original_name?: string | undefined
                overview?: string | undefined
                popularity?: number | undefined
                poster_path?: string | undefined
                first_air_date?: string | undefined
                name?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
              }[]
            | undefined
          total_pages?: number | undefined
          total_results?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/translations': {
      $get: {
        input: { param: { series_id: number } }
        output: {
          id?: number | undefined
          translations?:
            | {
                iso_3166_1?: string | undefined
                iso_639_1?: string | undefined
                name?: string | undefined
                english_name?: string | undefined
                data?:
                  | {
                      name?: string | undefined
                      overview?: string | undefined
                      homepage?: string | undefined
                      tagline?: string | undefined
                    }
                  | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/videos': {
      $get: {
        input: { param: { series_id: number } } & {
          query: { include_video_language?: string | undefined; language?: string | undefined }
        }
        output: {
          id?: number | undefined
          results?:
            | {
                iso_639_1?: string | undefined
                iso_3166_1?: string | undefined
                name?: string | undefined
                key?: string | undefined
                site?: string | undefined
                size?: number | undefined
                type?: string | undefined
                official?: boolean | undefined
                published_at?: string | undefined
                id?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/watch/providers': {
      $get: {
        input: { param: { series_id: number } }
        output: {
          id?: number | undefined
          results?:
            | {
                AE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                AR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                AT?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                AU?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BA?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BB?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BG?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BS?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CA?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CH?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CI?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CL?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CZ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                DE?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                DK?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                DO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                DZ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                EC?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                EG?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ES?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                FI?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                FR?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GB?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GF?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GH?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GQ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GT?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                HK?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                HN?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                HR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                HU?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ID?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                IE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                IL?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                IQ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                IT?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                JM?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                JP?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                KE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                KR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                LB?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                LT?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                LY?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MD?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MK?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MU?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MX?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MY?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MZ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                NE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                NG?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                NL?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                NO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                NZ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PA?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PH?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PL?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PS?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PT?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PY?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                RO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                RS?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                RU?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      ads?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SA?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SC?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SG?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SI?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SK?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SN?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SV?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TH?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TT?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TW?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TZ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                UG?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                US?:
                  | {
                      link?: string | undefined
                      free?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                UY?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                VE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ZA?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ZM?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/rating': {
      $post: {
        input: { param: { series_id: number } } & {
          query: { guest_session_id?: string | undefined; session_id?: string | undefined }
        } & { header: { 'Content-Type': string } } & { json: { RAW_BODY: string } }
        output: { status_code?: number | undefined; status_message?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { series_id: number } } & {
          query: { guest_session_id?: string | undefined; session_id?: string | undefined }
        } & { header: { 'Content-Type'?: string | undefined } }
        output: { status_code?: number | undefined; status_message?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number': {
      $get: {
        input: { param: { series_id: number; season_number: number } } & {
          query: { append_to_response?: string | undefined; language?: string | undefined }
        }
        output: {
          _id?: string | undefined
          air_date?: string | undefined
          episodes?:
            | {
                air_date?: string | undefined
                episode_number?: number | undefined
                episode_type?: string | undefined
                id?: number | undefined
                name?: string | undefined
                overview?: string | undefined
                production_code?: string | undefined
                runtime?: number | undefined
                season_number?: number | undefined
                show_id?: number | undefined
                still_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                crew?:
                  | {
                      department?: string | undefined
                      job?: string | undefined
                      credit_id?: string | undefined
                      adult?: boolean | undefined
                      gender?: number | undefined
                      id?: number | undefined
                      known_for_department?: string | undefined
                      name?: string | undefined
                      original_name?: string | undefined
                      popularity?: number | undefined
                      profile_path?: string | undefined
                    }[]
                  | undefined
                guest_stars?:
                  | {
                      character?: string | undefined
                      credit_id?: string | undefined
                      order?: number | undefined
                      adult?: boolean | undefined
                      gender?: number | undefined
                      id?: number | undefined
                      known_for_department?: string | undefined
                      name?: string | undefined
                      original_name?: string | undefined
                      popularity?: number | undefined
                      profile_path?: string | undefined
                    }[]
                  | undefined
              }[]
            | undefined
          name?: string | undefined
          networks?:
            | {
                id?: number | undefined
                logo_path?: string | undefined
                name?: string | undefined
                origin_country?: string | undefined
              }[]
            | undefined
          overview?: string | undefined
          id?: number | undefined
          poster_path?: string | undefined
          season_number?: number | undefined
          vote_average?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/account_states': {
      $get: {
        input: { param: { series_id: number; season_number: number } } & {
          query: { session_id?: string | undefined; guest_session_id?: string | undefined }
        }
        output: {
          id?: number | undefined
          results?:
            | {
                id?: number | undefined
                episode_number?: number | undefined
                rated?: { value?: number | undefined } | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/aggregate_credits': {
      $get: {
        input: { param: { series_id: number; season_number: number } } & {
          query: { language?: string | undefined }
        }
        output: {
          cast?:
            | {
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
                roles?:
                  | {
                      credit_id?: string | undefined
                      character?: string | undefined
                      episode_count?: number | undefined
                    }[]
                  | undefined
                total_episode_count?: number | undefined
                order?: number | undefined
              }[]
            | undefined
          crew?:
            | {
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: { [x: string]: unknown } | undefined
                jobs?:
                  | {
                      credit_id?: string | undefined
                      job?: string | undefined
                      episode_count?: number | undefined
                    }[]
                  | undefined
                department?: string | undefined
                total_episode_count?: number | undefined
              }[]
            | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/season/:season_id/changes': {
      $get: {
        input: { param: { season_id: number } } & {
          query: {
            end_date?: string | undefined
            page?: number | undefined
            start_date?: string | undefined
          }
        }
        output: {
          changes?:
            | {
                key?: string | undefined
                items?:
                  | {
                      id?: string | undefined
                      action?: string | undefined
                      time?: string | undefined
                      value?:
                        | { episode_id?: number | undefined; episode_number?: number | undefined }
                        | undefined
                    }[]
                  | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/credits': {
      $get: {
        input: { param: { series_id: number; season_number: number } } & {
          query: { language?: string | undefined }
        }
        output: {
          cast?:
            | {
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
                character?: string | undefined
                credit_id?: string | undefined
                order?: number | undefined
              }[]
            | undefined
          crew?:
            | {
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: { [x: string]: unknown } | undefined
                credit_id?: string | undefined
                department?: string | undefined
                job?: string | undefined
              }[]
            | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/external_ids': {
      $get: {
        input: { param: { series_id: number; season_number: number } }
        output: {
          id?: number | undefined
          freebase_mid?: string | undefined
          freebase_id?: string | undefined
          tvdb_id?: number | undefined
          tvrage_id?: { [x: string]: unknown } | undefined
          wikidata_id?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/images': {
      $get: {
        input: { param: { series_id: number; season_number: number } } & {
          query: { include_image_language?: string | undefined; language?: string | undefined }
        }
        output: {
          id?: number | undefined
          posters?:
            | {
                aspect_ratio?: number | undefined
                height?: number | undefined
                iso_639_1?: string | undefined
                file_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                width?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/translations': {
      $get: {
        input: { param: { series_id: number; season_number: number } }
        output: {
          id?: number | undefined
          translations?:
            | {
                iso_3166_1?: string | undefined
                iso_639_1?: string | undefined
                name?: string | undefined
                english_name?: string | undefined
                data?: { name?: string | undefined; overview?: string | undefined } | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/videos': {
      $get: {
        input: { param: { series_id: number; season_number: number } } & {
          query: { include_video_language?: string | undefined; language?: string | undefined }
        }
        output: {
          id?: number | undefined
          results?:
            | {
                iso_639_1?: string | undefined
                iso_3166_1?: string | undefined
                name?: string | undefined
                key?: string | undefined
                site?: string | undefined
                size?: number | undefined
                type?: string | undefined
                official?: boolean | undefined
                published_at?: string | undefined
                id?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/watch/providers': {
      $get: {
        input: { param: { series_id: number; season_number: number } } & {
          query: { language?: string | undefined }
        }
        output: {
          id?: number | undefined
          results?:
            | {
                AD?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                AE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                AG?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                AR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                AT?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                AU?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BA?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BB?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BE?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BG?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BH?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BS?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                BZ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CA?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CH?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CI?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CL?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CM?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                CZ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                DE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                DK?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                DO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                EC?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                EG?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ES?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                FI?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                FR?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GB?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GG?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GQ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GT?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                GY?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                HK?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                HN?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                HR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                HU?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ID?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                IE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                IN?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                IQ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                IT?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                JM?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                JO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                JP?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      rent?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                KE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                LB?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                LC?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MC?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MD?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ME?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MG?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MK?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ML?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MU?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MX?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MY?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                MZ?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                NE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                NG?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                NI?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                NL?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                NO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                NZ?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                OM?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PA?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PH?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PL?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PT?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                PY?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                QA?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                RO?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                RS?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                RU?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SA?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SC?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SE?:
                  | {
                      link?: string | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SG?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SI?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SK?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SN?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                SV?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TC?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TD?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TH?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TR?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TT?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                TW?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                US?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                      buy?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                UY?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                VE?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ZA?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ZM?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                ZW?:
                  | {
                      link?: string | undefined
                      flatrate?:
                        | {
                            logo_path?: string | undefined
                            provider_id?: number | undefined
                            provider_name?: string | undefined
                            display_priority?: number | undefined
                          }[]
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/episode/:episode_number': {
      $get: {
        input: { param: { series_id: number; season_number: number; episode_number: number } } & {
          query: { append_to_response?: string | undefined; language?: string | undefined }
        }
        output: {
          air_date?: string | undefined
          crew?:
            | {
                department?: string | undefined
                job?: string | undefined
                credit_id?: string | undefined
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
              }[]
            | undefined
          episode_number?: number | undefined
          guest_stars?:
            | {
                character?: string | undefined
                credit_id?: string | undefined
                order?: number | undefined
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
              }[]
            | undefined
          name?: string | undefined
          overview?: string | undefined
          id?: number | undefined
          production_code?: string | undefined
          runtime?: number | undefined
          season_number?: number | undefined
          still_path?: string | undefined
          vote_average?: number | undefined
          vote_count?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/account_states': {
      $get: {
        input: { param: { series_id: number; season_number: number; episode_number: number } } & {
          query: { session_id?: string | undefined; guest_session_id?: string | undefined }
        }
        output: {
          id?: number | undefined
          favorite?: boolean | undefined
          rated?: { value?: number | undefined } | undefined
          watchlist?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/episode/:episode_id/changes': {
      $get: {
        input: { param: { episode_id: number } }
        output: {
          changes?:
            | {
                key?: string | undefined
                items?:
                  | {
                      id?: string | undefined
                      action?: string | undefined
                      time?: string | undefined
                      value?: string | undefined
                    }[]
                  | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/credits': {
      $get: {
        input: { param: { series_id: number; season_number: number; episode_number: number } } & {
          query: { language?: string | undefined }
        }
        output: {
          cast?:
            | {
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
                character?: string | undefined
                credit_id?: string | undefined
                order?: number | undefined
              }[]
            | undefined
          crew?:
            | {
                department?: string | undefined
                job?: string | undefined
                credit_id?: string | undefined
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
              }[]
            | undefined
          guest_stars?:
            | {
                character?: string | undefined
                credit_id?: string | undefined
                order?: number | undefined
                adult?: boolean | undefined
                gender?: number | undefined
                id?: number | undefined
                known_for_department?: string | undefined
                name?: string | undefined
                original_name?: string | undefined
                popularity?: number | undefined
                profile_path?: string | undefined
              }[]
            | undefined
          id?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/external_ids': {
      $get: {
        input: { param: { series_id: number; season_number: number; episode_number: string } }
        output: {
          id?: number | undefined
          imdb_id?: string | undefined
          freebase_mid?: string | undefined
          freebase_id?: string | undefined
          tvdb_id?: number | undefined
          tvrage_id?: number | undefined
          wikidata_id?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/images': {
      $get: {
        input: { param: { series_id: number; season_number: number; episode_number: number } } & {
          query: { include_image_language?: string | undefined; language?: string | undefined }
        }
        output: {
          id?: number | undefined
          stills?:
            | {
                aspect_ratio?: number | undefined
                height?: number | undefined
                iso_639_1?: { [x: string]: unknown } | undefined
                file_path?: string | undefined
                vote_average?: number | undefined
                vote_count?: number | undefined
                width?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/translations': {
      $get: {
        input: { param: { series_id: number; season_number: number; episode_number: number } }
        output: {
          id?: number | undefined
          translations?:
            | {
                iso_3166_1?: string | undefined
                iso_639_1?: string | undefined
                name?: string | undefined
                english_name?: string | undefined
                data?: { name?: string | undefined; overview?: string | undefined } | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/videos': {
      $get: {
        input: { param: { series_id: number; season_number: number; episode_number: number } } & {
          query: { include_video_language?: string | undefined; language?: string | undefined }
        }
        output: {
          id?: number | undefined
          results?:
            | {
                iso_639_1?: string | undefined
                iso_3166_1?: string | undefined
                name?: string | undefined
                key?: string | undefined
                site?: string | undefined
                size?: number | undefined
                type?: string | undefined
                official?: boolean | undefined
                published_at?: string | undefined
                id?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/:series_id/season/:season_number/episode/:episode_number/rating': {
      $post: {
        input: { param: { series_id: number; season_number: number; episode_number: number } } & {
          query: { guest_session_id?: string | undefined; session_id?: string | undefined }
        } & { header: { 'Content-Type': string } } & { json: { RAW_BODY: string } }
        output: { status_code?: number | undefined; status_message?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { series_id: number; season_number: number; episode_number: number } } & {
          query: { guest_session_id?: string | undefined; session_id?: string | undefined }
        } & { header: { 'Content-Type'?: string | undefined } }
        output: { status_code?: number | undefined; status_message?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/tv/episode_group/:tv_episode_group_id': {
      $get: {
        input: { param: { tv_episode_group_id: string } }
        output: {
          description?: string | undefined
          episode_count?: number | undefined
          group_count?: number | undefined
          groups?:
            | {
                id?: string | undefined
                name?: string | undefined
                order?: number | undefined
                episodes?:
                  | {
                      air_date?: string | undefined
                      episode_number?: number | undefined
                      id?: number | undefined
                      name?: string | undefined
                      overview?: string | undefined
                      production_code?: string | undefined
                      runtime?: { [x: string]: unknown } | undefined
                      season_number?: number | undefined
                      show_id?: number | undefined
                      still_path?: string | undefined
                      vote_average?: number | undefined
                      vote_count?: number | undefined
                      order?: number | undefined
                    }[]
                  | undefined
                locked?: boolean | undefined
              }[]
            | undefined
          id?: string | undefined
          name?: string | undefined
          network?:
            | {
                id?: number | undefined
                logo_path?: string | undefined
                name?: string | undefined
                origin_country?: string | undefined
              }
            | undefined
          type?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/watch/providers/regions': {
      $get: {
        input: { query: { language?: string | undefined } }
        output: {
          results?:
            | {
                iso_3166_1?: string | undefined
                english_name?: string | undefined
                native_name?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/watch/providers/movie': {
      $get: {
        input: { query: { language?: string | undefined; watch_region?: string | undefined } }
        output: {
          results?:
            | {
                display_priorities?:
                  | {
                      CA?: number | undefined
                      AE?: number | undefined
                      AR?: number | undefined
                      AT?: number | undefined
                      AU?: number | undefined
                      BE?: number | undefined
                      BO?: number | undefined
                      BR?: number | undefined
                      BG?: number | undefined
                      CH?: number | undefined
                      CL?: number | undefined
                      CO?: number | undefined
                      CR?: number | undefined
                      CZ?: number | undefined
                      DE?: number | undefined
                      DK?: number | undefined
                      EC?: number | undefined
                      EE?: number | undefined
                      EG?: number | undefined
                      ES?: number | undefined
                      FI?: number | undefined
                      FR?: number | undefined
                      GB?: number | undefined
                      GR?: number | undefined
                      GT?: number | undefined
                      HK?: number | undefined
                      HN?: number | undefined
                      HU?: number | undefined
                      ID?: number | undefined
                      IE?: number | undefined
                      IN?: number | undefined
                      IT?: number | undefined
                      JP?: number | undefined
                      LT?: number | undefined
                      LV?: number | undefined
                      MX?: number | undefined
                      MY?: number | undefined
                      NL?: number | undefined
                      NO?: number | undefined
                      NZ?: number | undefined
                      PE?: number | undefined
                      PH?: number | undefined
                      PL?: number | undefined
                      PT?: number | undefined
                      PY?: number | undefined
                      RU?: number | undefined
                      SA?: number | undefined
                      SE?: number | undefined
                      SG?: number | undefined
                      SK?: number | undefined
                      TH?: number | undefined
                      TR?: number | undefined
                      TW?: number | undefined
                      US?: number | undefined
                      VE?: number | undefined
                      ZA?: number | undefined
                      SI?: number | undefined
                      CV?: number | undefined
                      GH?: number | undefined
                      MU?: number | undefined
                      MZ?: number | undefined
                      UG?: number | undefined
                      IL?: number | undefined
                    }
                  | undefined
                display_priority?: number | undefined
                logo_path?: string | undefined
                provider_name?: string | undefined
                provider_id?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/3/watch/providers/tv': {
      $get: {
        input: { query: { language?: string | undefined; watch_region?: string | undefined } }
        output: {
          results?:
            | {
                display_priorities?:
                  | {
                      CA?: number | undefined
                      AE?: number | undefined
                      AR?: number | undefined
                      AT?: number | undefined
                      AU?: number | undefined
                      BE?: number | undefined
                      BO?: number | undefined
                      BR?: number | undefined
                      BG?: number | undefined
                      CH?: number | undefined
                      CL?: number | undefined
                      CO?: number | undefined
                      CR?: number | undefined
                      CZ?: number | undefined
                      DE?: number | undefined
                      DK?: number | undefined
                      EC?: number | undefined
                      EE?: number | undefined
                      EG?: number | undefined
                      ES?: number | undefined
                      FI?: number | undefined
                      FR?: number | undefined
                      GB?: number | undefined
                      GR?: number | undefined
                      GT?: number | undefined
                      HK?: number | undefined
                      HN?: number | undefined
                      HU?: number | undefined
                      ID?: number | undefined
                      IE?: number | undefined
                      IN?: number | undefined
                      IT?: number | undefined
                      JP?: number | undefined
                      LT?: number | undefined
                      LV?: number | undefined
                      MX?: number | undefined
                      MY?: number | undefined
                      NL?: number | undefined
                      NO?: number | undefined
                      NZ?: number | undefined
                      PE?: number | undefined
                      PH?: number | undefined
                      PL?: number | undefined
                      PT?: number | undefined
                      PY?: number | undefined
                      RU?: number | undefined
                      SA?: number | undefined
                      SE?: number | undefined
                      SG?: number | undefined
                      SK?: number | undefined
                      TH?: number | undefined
                      TR?: number | undefined
                      TW?: number | undefined
                      US?: number | undefined
                      VE?: number | undefined
                      ZA?: number | undefined
                      SI?: number | undefined
                      CV?: number | undefined
                      GH?: number | undefined
                      MU?: number | undefined
                      MZ?: number | undefined
                      UG?: number | undefined
                      IL?: number | undefined
                    }
                  | undefined
                display_priority?: number | undefined
                logo_path?: string | undefined
                provider_name?: string | undefined
                provider_id?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

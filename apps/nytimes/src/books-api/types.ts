declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/lists.{format}': {
      $get: {
        input: { param: { format: 'json' | 'jsonp' } } & {
          query: {
            list?: string | undefined
            'weeks-on-list'?: number | undefined
            'bestsellers-date'?: string | undefined
            date?: string | undefined
            isbn?: string | undefined
            'published-date'?: string | undefined
            rank?: number | undefined
            'rank-last-week'?: number | undefined
            offset?: number | undefined
            'sort-order'?: 'ASC' | 'DESC' | undefined
          }
        }
        output: {
          copyright?: string | undefined
          last_modified?: string | undefined
          num_results?: number | undefined
          results?:
            | {
                amazon_product_url?: string | undefined
                asterisk?: number | undefined
                bestsellers_date?: string | undefined
                book_details?:
                  | {
                      age_group?: string | undefined
                      author?: string | undefined
                      contributor?: string | undefined
                      contributor_note?: string | undefined
                      description?: string | undefined
                      price?: number | undefined
                      primary_isbn10?: string | undefined
                      primary_isbn13?: string | undefined
                      publisher?: string | undefined
                      title?: string | undefined
                    }[]
                  | undefined
                dagger?: number | undefined
                display_name?: string | undefined
                isbns?: { isbn10?: string | undefined; isbn13?: string | undefined }[] | undefined
                list_name?: string | undefined
                published_date?: string | undefined
                rank?: number | undefined
                rank_last_week?: number | undefined
                reviews?:
                  | {
                      article_chapter_link?: string | undefined
                      book_review_link?: string | undefined
                      first_chapter_link?: string | undefined
                      sunday_review_link?: string | undefined
                    }[]
                  | undefined
                weeks_on_list?: number | undefined
              }[]
            | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lists/best-sellers/history.json': {
      $get: {
        input: {
          query: {
            'age-group'?: string | undefined
            author?: string | undefined
            contributor?: string | undefined
            isbn?: string | undefined
            price?: string | undefined
            publisher?: string | undefined
            title?: string | undefined
          }
        }
        output: {
          copyright?: string | undefined
          num_results?: number | undefined
          results?:
            | {
                age_group?: string | undefined
                author?: string | undefined
                contributor?: string | undefined
                contributor_note?: string | undefined
                description?: string | undefined
                isbns?: { isbn10?: string | undefined; isbn13?: string | undefined }[] | undefined
                price?: number | undefined
                publisher?: string | undefined
                ranks_history?:
                  | {
                      asterisk?: number | undefined
                      bestsellers_date?: string | undefined
                      dagger?: number | undefined
                      display_name?: string | undefined
                      list_name?: string | undefined
                      primary_isbn10?: string | undefined
                      primary_isbn13?: string | undefined
                      published_date?: string | undefined
                      rank?: number | undefined
                      ranks_last_week?: ({ [x: string]: unknown } | null) | undefined
                      weeks_on_list?: number | undefined
                    }[]
                  | undefined
                reviews?:
                  | {
                      article_chapter_link?: string | undefined
                      book_review_link?: string | undefined
                      first_chapter_link?: string | undefined
                      sunday_review_link?: string | undefined
                    }[]
                  | undefined
                title?: string | undefined
              }[]
            | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lists/names.{format}': {
      $get: {
        input: { param: { format: 'json' | 'jsonp' } } & {
          query: { 'api-key'?: string | undefined }
        }
        output: {
          copyright?: string | undefined
          num_results?: number | undefined
          results?:
            | {
                display_name?: string | undefined
                list_name?: string | undefined
                list_name_encoded?: string | undefined
                newest_published_date?: string | undefined
                oldest_published_date?: string | undefined
                updated?: string | undefined
              }[]
            | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lists/overview.{format}': {
      $get: {
        input: { param: { format: 'json' | 'jsonp' } } & {
          query: { published_date?: string | undefined; 'api-key'?: string | undefined }
        }
        output: {
          copyright?: string | undefined
          num_results?: number | undefined
          results?:
            | {
                bestsellers_date?: string | undefined
                lists?:
                  | {
                      books?:
                        | {
                            age_group?: string | undefined
                            author?: string | undefined
                            contributor?: string | undefined
                            contributor_note?: string | undefined
                            created_date?: string | undefined
                            description?: string | undefined
                            price?: number | undefined
                            primary_isbn10?: string | undefined
                            primary_isbn13?: string | undefined
                            publisher?: string | undefined
                            rank?: number | undefined
                            title?: string | undefined
                            updated_date?: string | undefined
                          }[]
                        | undefined
                      display_name?: string | undefined
                      list_id?: number | undefined
                      list_image?: string | undefined
                      list_name?: string | undefined
                      updated?: string | undefined
                    }[]
                  | undefined
                published_date?: string | undefined
              }
            | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lists/:date/:list.json': {
      $get: {
        input: { param: { date: string; list: string } } & {
          query: {
            isbn?: number | undefined
            'list-name'?: string | undefined
            'published-date'?: string | undefined
            'bestsellers-date'?: string | undefined
            'weeks-on-list'?: number | undefined
            rank?: string | undefined
            'rank-last-week'?: number | undefined
            offset?: number | undefined
            'sort-order'?: 'ASC' | 'DESC' | undefined
          }
        }
        output: {
          copyright?: string | undefined
          last_modified?: string | undefined
          num_results?: number | undefined
          results?:
            | {
                bestsellers_date?: string | undefined
                books?:
                  | {
                      age_group?: string | undefined
                      amazon_product_url?: string | undefined
                      article_chapter_link?: string | undefined
                      asterisk?: number | undefined
                      author?: string | undefined
                      book_image?: string | undefined
                      book_review_link?: string | undefined
                      contributor?: string | undefined
                      contributor_note?: string | undefined
                      dagger?: number | undefined
                      description?: string | undefined
                      first_chapter_link?: string | undefined
                      isbns?:
                        | { isbn10?: string | undefined; isbn13?: string | undefined }[]
                        | undefined
                      price?: number | undefined
                      primary_isbn10?: string | undefined
                      primary_isbn13?: string | undefined
                      publisher?: string | undefined
                      rank?: number | undefined
                      rank_last_week?: number | undefined
                      sunday_review_link?: string | undefined
                      title?: string | undefined
                      weeks_on_list?: number | undefined
                    }[]
                  | undefined
                corrections?: { [x: string]: unknown }[] | undefined
                display_name?: string | undefined
                list_name?: string | undefined
                normal_list_ends_at?: number | undefined
                published_date?: string | undefined
                updated?: string | undefined
              }
            | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reviews.{format}': {
      $get: {
        input: { param: { format: 'json' | 'jsonp' } } & {
          query: {
            isbn?: number | undefined
            title?: string | undefined
            author?: string | undefined
            'api-key'?: string | undefined
          }
        }
        output: {
          copyright?: string | undefined
          num_results?: number | undefined
          results?:
            | {
                book_author?: string | undefined
                book_title?: string | undefined
                byline?: string | undefined
                isbn13?: string[] | undefined
                publication_dt?: string | undefined
                summary?: string | undefined
                url?: string | undefined
              }[]
            | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

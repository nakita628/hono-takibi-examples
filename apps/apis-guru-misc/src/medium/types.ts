declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get: {
        input: {}
        output: {
          developer?: string | undefined
          documentation?: string | undefined
          email?: string | undefined
          linkedin?: string | undefined
          name?: string | undefined
          twitter?: string | undefined
          website?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/article/:article_id': {
      $get: {
        input: { param: { article_id: string } }
        output: {
          author?: string | undefined
          claps?: number | undefined
          id?: string | undefined
          image_url?: string | undefined
          is_locked?: boolean | undefined
          is_series?: boolean | undefined
          lang?: string | undefined
          last_modified_at?: string | undefined
          publication_id?: string | undefined
          published_at?: string | undefined
          reading_time?: number | undefined
          responses_count?: number | undefined
          subtitle?: string | undefined
          tags?: string[] | undefined
          title?: string | undefined
          topics?: string[] | undefined
          url?: string | undefined
          voters?: number | undefined
          word_count?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/article/:article_id/content': {
      $get: {
        input: { param: { article_id: string } }
        output: { content?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/article/:article_id/fans': {
      $get: {
        input: { param: { article_id: string } }
        output: {
          article_id?: string | undefined
          count?: number | undefined
          voters?: string[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/article/:article_id/markdown': {
      $get: {
        input: { param: { article_id: string } }
        output: { markdown?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/article/:article_id/related': {
      $get: {
        input: { param: { article_id: string } }
        output: { id?: string | undefined; related_articles?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/article/:article_id/responses': {
      $get: {
        input: { param: { article_id: string } }
        output: { id?: string | undefined; responses?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/latestposts/:topic_slug': {
      $get: {
        input: { param: { topic_slug: string } }
        output: { latestposts?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/list/:list_id': {
      $get: {
        input: { param: { list_id: string } }
        output: {
          author?: string | undefined
          claps?: number | undefined
          count?: number | undefined
          created_at?: string | undefined
          description?: string | undefined
          id?: string | undefined
          last_item_inserted_at?: string | undefined
          name?: string | undefined
          responses_count?: number | undefined
          thumbnail?: string | undefined
          voters?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/list/:list_id/articles': {
      $get: {
        input: { param: { list_id: string } }
        output: { id?: string | undefined; list_articles?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/list/:list_id/responses': {
      $get: {
        input: { param: { list_id: string } }
        output: { id?: string | undefined; responses?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/publication/id_for/:publication_slug': {
      $get: {
        input: { param: { publication_slug: string } }
        output: { publication_id?: string | undefined; publication_slug?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/publication/:publication_id': {
      $get: {
        input: { param: { publication_id: string } }
        output: {
          creator?: string | undefined
          description?: string | undefined
          editors?: string[] | undefined
          facebook_pagename?: string | undefined
          followers?: number | undefined
          id?: string | undefined
          instagram_username?: string | undefined
          name?: string | undefined
          slug?: string | undefined
          tagline?: string | undefined
          tags?: string[] | undefined
          twitter_username?: string | undefined
          url?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/publication/:publication_id/articles': {
      $get: {
        input: { param: { publication_id: string } } & { query: { from?: string | undefined } }
        output: { publication_articles?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/publication/:publication_id/newsletter': {
      $get: {
        input: { param: { publication_id: string } }
        output: {
          creator_id?: string | undefined
          description?: string | undefined
          id?: string | undefined
          image?: string | undefined
          name?: string | undefined
          slug?: string | undefined
          subscribers?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/related_tags/:tag': {
      $get: {
        input: { param: { tag: string } }
        output: { given_tag?: string | undefined; related_tags?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/articles?query=:query': {
      $get: {
        input: { query: { query: string } }
        output: { articles?: string[] | undefined; search_query?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/lists?query=:query': {
      $get: {
        input: { query: { query: string } }
        output: { lists?: string[] | undefined; search_query?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/publications?query=:query': {
      $get: {
        input: { query: { query: string } }
        output: { publications?: string[] | undefined; search_query?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/tags?query=:query': {
      $get: {
        input: { query: { query: string } }
        output: { search_query?: string | undefined; tags?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/users?query=:query': {
      $get: {
        input: { query: { query: string } }
        output: { search_query?: string | undefined; users?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/top_writer/:topic_slug': {
      $get: {
        input: { param: { topic_slug: string } } & { query: { count?: number | undefined } }
        output: { top_writers?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/topfeeds/:tag/:mode': {
      $get: {
        input: { param: { tag: string; mode: string } } & {
          query: { after?: number | undefined; count?: number | undefined }
        }
        output: { topfeeds?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/id_for/:username': {
      $get: {
        input: { param: { username: string } }
        output: { id?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:user_id': {
      $get: {
        input: { param: { user_id: string } }
        output: {
          allow_notes?: boolean | undefined
          bio?: string | undefined
          followers_count?: number | undefined
          following_count?: number | undefined
          fullname?: string | undefined
          has_list?: boolean | undefined
          id?: string | undefined
          image_url?: string | undefined
          is_book_author?: boolean | undefined
          is_suspended?: boolean | undefined
          is_writer_program_enrolled?: boolean | undefined
          medium_member_at?: string | undefined
          top_writer_in?: string[] | undefined
          twitter_username?: string | undefined
          username?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:user_id/articles': {
      $get: {
        input: { param: { user_id: string } }
        output: { associated_articles?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:user_id/followers': {
      $get: {
        input: { param: { user_id: string } } & { query: { count?: number | undefined } }
        output: { followers?: string[] | undefined; id?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:user_id/following': {
      $get: {
        input: { param: { user_id: string } } & { query: { count?: number | undefined } }
        output: { following?: string[] | undefined; id?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:user_id/interests': {
      $get: {
        input: { param: { user_id: string } }
        output: { tags_followed?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:user_id/lists': {
      $get: {
        input: { param: { user_id: string } }
        output: { lists?: string[] | undefined; user_id?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:user_id/publications': {
      $get: {
        input: { param: { user_id: string } }
        output: { publications?: string[] | undefined; user_id?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:user_id/top_articles': {
      $get: {
        input: { param: { user_id: string } }
        output: { associated_articles?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

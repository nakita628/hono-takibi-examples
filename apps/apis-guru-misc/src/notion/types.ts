declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/blocks/:id': {
      $delete: {
        input: { param: { id: string } } & { header: { 'Notion-Version'?: string | undefined } }
        output: {
          archived?: boolean | undefined
          created_by?: { id?: string | undefined; object?: string | undefined } | undefined
          created_time?: string | undefined
          has_children?: boolean | undefined
          id?: string | undefined
          last_edited_by?: { id?: string | undefined; object?: string | undefined } | undefined
          last_edited_time?: string | undefined
          object?: string | undefined
          paragraph?:
            | {
                text?:
                  | {
                      annotations?:
                        | {
                            bold?: boolean | undefined
                            code?: boolean | undefined
                            color?: string | undefined
                            italic?: boolean | undefined
                            strikethrough?: boolean | undefined
                            underline?: boolean | undefined
                          }
                        | undefined
                      href?: ({ [x: string]: unknown } | null) | undefined
                      plain_text?: string | undefined
                      text?:
                        | {
                            content?: string | undefined
                            link?: ({ [x: string]: unknown } | null) | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          type?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } } & { header: { 'Notion-Version'?: string | undefined } }
        output: {
          created_time?: string | undefined
          has_children?: boolean | undefined
          id?: string | undefined
          last_edited_time?: string | undefined
          object?: string | undefined
          paragraph?:
            | {
                text?:
                  | {
                      annotations?:
                        | {
                            bold?: boolean | undefined
                            code?: boolean | undefined
                            color?: string | undefined
                            italic?: boolean | undefined
                            strikethrough?: boolean | undefined
                            underline?: boolean | undefined
                          }
                        | undefined
                      href?: ({ [x: string]: unknown } | null) | undefined
                      plain_text?: string | undefined
                      text?:
                        | {
                            content?: string | undefined
                            link?: ({ [x: string]: unknown } | null) | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          type?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { header: { 'Notion-Version'?: string | undefined } } & {
          json: {
            paragraph?:
              | {
                  rich_text?:
                    | {
                        text?: { content?: string | undefined } | undefined
                        type?: string | undefined
                      }[]
                    | undefined
                }
              | undefined
          }
        }
        output: {
          created_time?: string | undefined
          has_children?: boolean | undefined
          id?: string | undefined
          last_edited_time?: string | undefined
          object?: string | undefined
          paragraph?:
            | {
                text?:
                  | {
                      annotations?:
                        | {
                            bold?: boolean | undefined
                            code?: boolean | undefined
                            color?: string | undefined
                            italic?: boolean | undefined
                            strikethrough?: boolean | undefined
                            underline?: boolean | undefined
                          }
                        | undefined
                      href?: ({ [x: string]: unknown } | null) | undefined
                      plain_text?: string | undefined
                      text?:
                        | {
                            content?: string | undefined
                            link?: ({ [x: string]: unknown } | null) | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }[]
                  | undefined
              }
            | undefined
          type?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/blocks/:id/children': {
      $get: {
        input: { param: { id: string } } & { query: { page_size?: string | undefined } } & {
          header: { 'Notion-Version'?: string | undefined }
        }
        output: {
          has_more?: boolean | undefined
          next_cursor?: ({ [x: string]: unknown } | null) | undefined
          object?: string | undefined
          results?:
            | {
                created_time?: string | undefined
                has_children?: boolean | undefined
                id?: string | undefined
                last_edited_time?: string | undefined
                object?: string | undefined
                paragraph?:
                  | {
                      text?:
                        | {
                            annotations?:
                              | {
                                  bold?: boolean | undefined
                                  code?: boolean | undefined
                                  color?: string | undefined
                                  italic?: boolean | undefined
                                  strikethrough?: boolean | undefined
                                  underline?: boolean | undefined
                                }
                              | undefined
                            href?: ({ [x: string]: unknown } | null) | undefined
                            plain_text?: string | undefined
                            text?:
                              | {
                                  content?: string | undefined
                                  link?: ({ [x: string]: unknown } | null) | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                type?: string | undefined
                unsupported?: { [x: string]: unknown } | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { header: { 'Notion-Version'?: string | undefined } } & {
          json: {
            children?:
              | {
                  heading_2?:
                    | {
                        text?:
                          | {
                              text?: { content?: string | undefined } | undefined
                              type?: string | undefined
                            }[]
                          | undefined
                      }
                    | undefined
                  object?: string | undefined
                  paragraph?:
                    | {
                        rich_text?:
                          | {
                              text?:
                                | {
                                    content?: string | undefined
                                    link?: { url?: string | undefined } | undefined
                                  }
                                | undefined
                              type?: string | undefined
                            }[]
                          | undefined
                      }
                    | undefined
                  type?: string | undefined
                }[]
              | undefined
          }
        }
        output: {
          child_page?: { title?: string | undefined } | undefined
          created_time?: string | undefined
          has_children?: boolean | undefined
          id?: string | undefined
          last_edited_time?: string | undefined
          object?: string | undefined
          type?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/comments': {
      $get: {
        input: { query: { block_id?: string | undefined; page_size?: string | undefined } } & {
          header: { 'Notion-Version'?: string | undefined }
        } & { json: { [x: string]: unknown } } & { form: { [x: string]: unknown } }
        output: {
          comment?: { [x: string]: unknown } | undefined
          has_more?: boolean | undefined
          next_cursor?: ({ [x: string]: unknown } | null) | undefined
          object?: string | undefined
          results?:
            | {
                created_by?: { id?: string | undefined; object?: string | undefined } | undefined
                created_time?: string | undefined
                discussion_id?: string | undefined
                id?: string | undefined
                last_edited_time?: string | undefined
                object?: string | undefined
                parent?: { block_id?: string | undefined; type?: string | undefined } | undefined
                rich_text?:
                  | {
                      annotations?:
                        | {
                            bold?: boolean | undefined
                            code?: boolean | undefined
                            color?: string | undefined
                            italic?: boolean | undefined
                            strikethrough?: boolean | undefined
                            underline?: boolean | undefined
                          }
                        | undefined
                      href?: ({ [x: string]: unknown } | null) | undefined
                      plain_text?: string | undefined
                      text?:
                        | {
                            content?: string | undefined
                            link?: ({ [x: string]: unknown } | null) | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }[]
                  | undefined
              }[]
            | undefined
          type?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/databases/:id': {
      $get: {
        input: { param: { id: string } } & { header: { 'Notion-Version'?: string | undefined } }
        output: {
          archived?: boolean | undefined
          cover?: ({ [x: string]: unknown } | null) | undefined
          created_by?: { id?: string | undefined; object?: string | undefined } | undefined
          created_time?: string | undefined
          icon?: ({ [x: string]: unknown } | null) | undefined
          id?: string | undefined
          last_edited_by?: { id?: string | undefined; object?: string | undefined } | undefined
          last_edited_time?: string | undefined
          object?: string | undefined
          parent?: { page_id?: string | undefined; type?: string | undefined } | undefined
          properties?:
            | {
                Author?:
                  | {
                      id?: string | undefined
                      multi_select?:
                        | {
                            options?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }[]
                              | undefined
                          }
                        | undefined
                      name?: string | undefined
                      type?: string | undefined
                    }
                  | undefined
                Link?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      type?: string | undefined
                      url?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                Name?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      title?: { [x: string]: unknown } | undefined
                      type?: string | undefined
                    }
                  | undefined
                Publisher?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      select?:
                        | {
                            options?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }[]
                              | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                'Publishing/Release Date'?:
                  | {
                      date?: { [x: string]: unknown } | undefined
                      id?: string | undefined
                      name?: string | undefined
                      type?: string | undefined
                    }
                  | undefined
                Read?:
                  | {
                      checkbox?: { [x: string]: unknown } | undefined
                      id?: string | undefined
                      name?: string | undefined
                      type?: string | undefined
                    }
                  | undefined
                'Score /5'?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      select?:
                        | {
                            options?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }[]
                              | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                Status?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      select?:
                        | {
                            options?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }[]
                              | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                Summary?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      rich_text?: { [x: string]: unknown } | undefined
                      type?: string | undefined
                    }
                  | undefined
                Type?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      select?:
                        | {
                            options?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }[]
                              | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
              }
            | undefined
          title?:
            | {
                annotations?:
                  | {
                      bold?: boolean | undefined
                      code?: boolean | undefined
                      color?: string | undefined
                      italic?: boolean | undefined
                      strikethrough?: boolean | undefined
                      underline?: boolean | undefined
                    }
                  | undefined
                href?: ({ [x: string]: unknown } | null) | undefined
                plain_text?: string | undefined
                text?:
                  | {
                      content?: string | undefined
                      link?: ({ [x: string]: unknown } | null) | undefined
                    }
                  | undefined
                type?: string | undefined
              }[]
            | undefined
          url?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { header: { 'Notion-Version'?: string | undefined } } & {
          json: {
            properties?:
              | {
                  'Wine Pairing'?: { rich_text?: { [x: string]: unknown } | undefined } | undefined
                }
              | undefined
            title?: { text?: { content?: string | undefined } | undefined }[] | undefined
          }
        }
        output: {
          archived?: boolean | undefined
          cover?: ({ [x: string]: unknown } | null) | undefined
          created_by?: { id?: string | undefined; object?: string | undefined } | undefined
          created_time?: string | undefined
          icon?: ({ [x: string]: unknown } | null) | undefined
          id?: string | undefined
          last_edited_by?: { id?: string | undefined; object?: string | undefined } | undefined
          last_edited_time?: string | undefined
          object?: string | undefined
          parent?: { page_id?: string | undefined; type?: string | undefined } | undefined
          properties?:
            | {
                Author?:
                  | {
                      id?: string | undefined
                      multi_select?:
                        | {
                            options?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }[]
                              | undefined
                          }
                        | undefined
                      name?: string | undefined
                      type?: string | undefined
                    }
                  | undefined
                Link?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      type?: string | undefined
                      url?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                Name?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      title?: { [x: string]: unknown } | undefined
                      type?: string | undefined
                    }
                  | undefined
                Publisher?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      select?:
                        | {
                            options?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }[]
                              | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                'Publishing/Release Date'?:
                  | {
                      date?: { [x: string]: unknown } | undefined
                      id?: string | undefined
                      name?: string | undefined
                      type?: string | undefined
                    }
                  | undefined
                Read?:
                  | {
                      checkbox?: { [x: string]: unknown } | undefined
                      id?: string | undefined
                      name?: string | undefined
                      type?: string | undefined
                    }
                  | undefined
                'Score /5'?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      select?:
                        | {
                            options?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }[]
                              | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                Status?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      select?:
                        | {
                            options?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }[]
                              | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                Summary?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      rich_text?: { [x: string]: unknown } | undefined
                      type?: string | undefined
                    }
                  | undefined
                Type?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      select?:
                        | {
                            options?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }[]
                              | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                'Wine Pairing'?:
                  | {
                      id?: string | undefined
                      name?: string | undefined
                      rich_text?: { [x: string]: unknown } | undefined
                      type?: string | undefined
                    }
                  | undefined
              }
            | undefined
          title?:
            | {
                annotations?:
                  | {
                      bold?: boolean | undefined
                      code?: boolean | undefined
                      color?: string | undefined
                      italic?: boolean | undefined
                      strikethrough?: boolean | undefined
                      underline?: boolean | undefined
                    }
                  | undefined
                href?: ({ [x: string]: unknown } | null) | undefined
                plain_text?: string | undefined
                text?:
                  | {
                      content?: string | undefined
                      link?: ({ [x: string]: unknown } | null) | undefined
                    }
                  | undefined
                type?: string | undefined
              }[]
            | undefined
          url?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/databases/:id/query': {
      $post: {
        input: { param: { id: string } } & { header: { 'Notion-Version'?: string | undefined } } & {
          json: {
            filter?:
              | {
                  property?: string | undefined
                  select?: { equals?: string | undefined } | undefined
                }
              | undefined
          }
        }
        output: {
          has_more?: boolean | undefined
          next_cursor?: ({ [x: string]: unknown } | null) | undefined
          object?: string | undefined
          results?:
            | {
                archived?: boolean | undefined
                cover?: ({ [x: string]: unknown } | null) | undefined
                created_by?: { id?: string | undefined; object?: string | undefined } | undefined
                created_time?: string | undefined
                icon?: ({ [x: string]: unknown } | null) | undefined
                id?: string | undefined
                last_edited_by?:
                  | { id?: string | undefined; object?: string | undefined }
                  | undefined
                last_edited_time?: string | undefined
                object?: string | undefined
                parent?: { database_id?: string | undefined; type?: string | undefined } | undefined
                properties?:
                  | {
                      Author?:
                        | {
                            id?: string | undefined
                            multi_select?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }[]
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                      Link?:
                        | {
                            id?: string | undefined
                            type?: string | undefined
                            url?: string | undefined
                          }
                        | undefined
                      Name?:
                        | {
                            id?: string | undefined
                            title?:
                              | {
                                  annotations?:
                                    | {
                                        bold?: boolean | undefined
                                        code?: boolean | undefined
                                        color?: string | undefined
                                        italic?: boolean | undefined
                                        strikethrough?: boolean | undefined
                                        underline?: boolean | undefined
                                      }
                                    | undefined
                                  href?: ({ [x: string]: unknown } | null) | undefined
                                  plain_text?: string | undefined
                                  text?:
                                    | {
                                        content?: string | undefined
                                        link?: ({ [x: string]: unknown } | null) | undefined
                                      }
                                    | undefined
                                  type?: string | undefined
                                }[]
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                      Publisher?:
                        | {
                            id?: string | undefined
                            select?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                      'Publishing/Release Date'?:
                        | {
                            date?:
                              | {
                                  end?: ({ [x: string]: unknown } | null) | undefined
                                  start?: string | undefined
                                  time_zone?: ({ [x: string]: unknown } | null) | undefined
                                }
                              | undefined
                            id?: string | undefined
                            type?: string | undefined
                          }
                        | undefined
                      Read?:
                        | {
                            checkbox?: boolean | undefined
                            id?: string | undefined
                            type?: string | undefined
                          }
                        | undefined
                      'Score /5'?:
                        | {
                            id?: string | undefined
                            select?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                      Status?:
                        | {
                            id?: string | undefined
                            select?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                      Summary?:
                        | {
                            id?: string | undefined
                            rich_text?: { [x: string]: unknown }[] | undefined
                            type?: string | undefined
                          }
                        | undefined
                      Type?:
                        | {
                            id?: string | undefined
                            select?:
                              | {
                                  color?: string | undefined
                                  id?: string | undefined
                                  name?: string | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }
                        | undefined
                    }
                  | undefined
                url?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/pages/:id': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'Notion-Version'?: string | undefined; ''?: string | undefined }
        }
        output: {
          archived?: boolean | undefined
          cover?: ({ [x: string]: unknown } | null) | undefined
          created_by?: { id?: string | undefined; object?: string | undefined } | undefined
          created_time?: string | undefined
          icon?: { emoji?: string | undefined; type?: string | undefined } | undefined
          id?: string | undefined
          last_edited_by?: { id?: string | undefined; object?: string | undefined } | undefined
          last_edited_time?: string | undefined
          object?: string | undefined
          parent?: { page_id?: string | undefined; type?: string | undefined } | undefined
          properties?:
            | {
                title?:
                  | {
                      id?: string | undefined
                      title?:
                        | {
                            annotations?:
                              | {
                                  bold?: boolean | undefined
                                  code?: boolean | undefined
                                  color?: string | undefined
                                  italic?: boolean | undefined
                                  strikethrough?: boolean | undefined
                                  underline?: boolean | undefined
                                }
                              | undefined
                            href?: ({ [x: string]: unknown } | null) | undefined
                            plain_text?: string | undefined
                            text?:
                              | {
                                  content?: string | undefined
                                  link?: ({ [x: string]: unknown } | null) | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }[]
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
              }
            | undefined
          url?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { header: { 'Notion-Version'?: string | undefined } } & {
          json: {
            properties?:
              | { Status?: { select?: { name?: string | undefined } | undefined } | undefined }
              | undefined
          }
        }
        output: {
          archived?: boolean | undefined
          created_time?: string | undefined
          id?: string | undefined
          last_edited_time?: string | undefined
          object?: string | undefined
          parent?: { database_id?: string | undefined; type?: string | undefined } | undefined
          properties?:
            | {
                Author?:
                  | {
                      id?: string | undefined
                      multi_select?:
                        | {
                            color?: string | undefined
                            id?: string | undefined
                            name?: string | undefined
                          }[]
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                Link?:
                  | { id?: string | undefined; type?: string | undefined; url?: string | undefined }
                  | undefined
                Name?:
                  | {
                      id?: string | undefined
                      title?:
                        | {
                            annotations?:
                              | {
                                  bold?: boolean | undefined
                                  code?: boolean | undefined
                                  color?: string | undefined
                                  italic?: boolean | undefined
                                  strikethrough?: boolean | undefined
                                  underline?: boolean | undefined
                                }
                              | undefined
                            href?: ({ [x: string]: unknown } | null) | undefined
                            plain_text?: string | undefined
                            text?:
                              | {
                                  content?: string | undefined
                                  link?: ({ [x: string]: unknown } | null) | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }[]
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                Publisher?:
                  | {
                      id?: string | undefined
                      select?:
                        | {
                            color?: string | undefined
                            id?: string | undefined
                            name?: string | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                'Publishing/Release Date'?:
                  | {
                      date?:
                        | {
                            end?: ({ [x: string]: unknown } | null) | undefined
                            start?: string | undefined
                          }
                        | undefined
                      id?: string | undefined
                      type?: string | undefined
                    }
                  | undefined
                Read?:
                  | {
                      checkbox?: boolean | undefined
                      id?: string | undefined
                      type?: string | undefined
                    }
                  | undefined
                'Score /5'?:
                  | {
                      id?: string | undefined
                      select?:
                        | {
                            color?: string | undefined
                            id?: string | undefined
                            name?: string | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                Status?:
                  | {
                      id?: string | undefined
                      select?:
                        | {
                            color?: string | undefined
                            id?: string | undefined
                            name?: string | undefined
                          }
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                Summary?:
                  | {
                      id?: string | undefined
                      rich_text?:
                        | {
                            annotations?:
                              | {
                                  bold?: boolean | undefined
                                  code?: boolean | undefined
                                  color?: string | undefined
                                  italic?: boolean | undefined
                                  strikethrough?: boolean | undefined
                                  underline?: boolean | undefined
                                }
                              | undefined
                            href?: ({ [x: string]: unknown } | null) | undefined
                            plain_text?: string | undefined
                            text?:
                              | {
                                  content?: string | undefined
                                  link?: ({ [x: string]: unknown } | null) | undefined
                                }
                              | undefined
                            type?: string | undefined
                          }[]
                        | undefined
                      type?: string | undefined
                    }
                  | undefined
                Type?:
                  | {
                      id?: string | undefined
                      select?:
                        | {
                            color?: string | undefined
                            id?: string | undefined
                            name?: string | undefined
                          }
                        | undefined
                      type?: string | undefined
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
    '/v1/pages/:page_id/properties/:property_id': {
      $get: {
        input: { param: { page_id: string; property_id: string } }
        output: {
          object?: string | undefined
          select?:
            | { color?: string | undefined; id?: string | undefined; name?: string | undefined }
            | undefined
          type?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/:id': {
      $get: {
        input: { param: { id: string } } & { header: { 'Notion-Version'?: string | undefined } } & {
          json: { [x: string]: unknown }
        } & { form: { [x: string]: unknown } }
        output: {
          avatar_url?: ({ [x: string]: unknown } | null) | undefined
          id?: string | undefined
          name?: string | undefined
          object?: string | undefined
          person?: { email?: string | undefined } | undefined
          type?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

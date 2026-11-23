declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/almaws/v1/task-lists/printouts': {
      $get:
        | {
            input: {
              query: {
                letter?: string | undefined
                status?: string | undefined
                printer_id?: string | undefined
                printout_id?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              printout?:
                | {
                    date?: string | undefined
                    id?: string | undefined
                    letter?: string | undefined
                    link?: string | undefined
                    printer?: { desc?: string | undefined; value?: string | undefined } | undefined
                    printout?: string | undefined
                    size?: string | undefined
                    source?: string | undefined
                    status?: { desc?: string | undefined; value?: string | undefined } | undefined
                  }[]
                | undefined
              total_record_count?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                letter?: string | undefined
                status?: string | undefined
                printer_id?: string | undefined
                printout_id?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              printout?:
                | {
                    date?: string | undefined
                    id?: string | undefined
                    letter?: string | undefined
                    link?: string | undefined
                    printer?: { desc?: string | undefined; value?: string | undefined } | undefined
                    printout?: string | undefined
                    size?: string | undefined
                    source?: string | undefined
                    status?: { desc?: string | undefined; value?: string | undefined } | undefined
                  }[]
                | undefined
              total_record_count?: number | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                letter?: string | undefined
                status?: string | undefined
                printer_id?: string | undefined
                printout_id?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                letter?: string | undefined
                status?: string | undefined
                printer_id?: string | undefined
                printout_id?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                letter?: string | undefined
                status?: string | undefined
                printer_id?: string | undefined
                printout_id?: string | undefined
                op: string
              }
            }
            output: {
              printout?:
                | {
                    date?: string | undefined
                    id?: string | undefined
                    letter?: string | undefined
                    link?: string | undefined
                    printer?: { desc?: string | undefined; value?: string | undefined } | undefined
                    printout?: string | undefined
                    size?: string | undefined
                    source?: string | undefined
                    status?: { desc?: string | undefined; value?: string | undefined } | undefined
                  }[]
                | undefined
              total_record_count?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                letter?: string | undefined
                status?: string | undefined
                printer_id?: string | undefined
                printout_id?: string | undefined
                op: string
              }
            }
            output: {
              printout?:
                | {
                    date?: string | undefined
                    id?: string | undefined
                    letter?: string | undefined
                    link?: string | undefined
                    printer?: { desc?: string | undefined; value?: string | undefined } | undefined
                    printout?: string | undefined
                    size?: string | undefined
                    source?: string | undefined
                    status?: { desc?: string | undefined; value?: string | undefined } | undefined
                  }[]
                | undefined
              total_record_count?: number | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                letter?: string | undefined
                status?: string | undefined
                printer_id?: string | undefined
                printout_id?: string | undefined
                op: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                letter?: string | undefined
                status?: string | undefined
                printer_id?: string | undefined
                printout_id?: string | undefined
                op: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/almaws/v1/task-lists/printouts/:printout_id': {
      $get:
        | {
            input: { param: { printout_id: string } }
            output: {
              date?: string | undefined
              id?: string | undefined
              letter?: string | undefined
              link?: string | undefined
              printer?: { desc?: string | undefined; value?: string | undefined } | undefined
              printout?: string | undefined
              size?: string | undefined
              source?: string | undefined
              status?: { desc?: string | undefined; value?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { printout_id: string } }
            output: {
              date?: string | undefined
              id?: string | undefined
              letter?: string | undefined
              link?: string | undefined
              printer?: { desc?: string | undefined; value?: string | undefined } | undefined
              printout?: string | undefined
              size?: string | undefined
              source?: string | undefined
              status?: { desc?: string | undefined; value?: string | undefined } | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { printout_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { printout_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { printout_id: string } } & { query: { op: string } }
            output: {
              date?: string | undefined
              id?: string | undefined
              letter?: string | undefined
              link?: string | undefined
              printer?: { desc?: string | undefined; value?: string | undefined } | undefined
              printout?: string | undefined
              size?: string | undefined
              source?: string | undefined
              status?: { desc?: string | undefined; value?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { printout_id: string } } & { query: { op: string } }
            output: {
              date?: string | undefined
              id?: string | undefined
              letter?: string | undefined
              link?: string | undefined
              printer?: { desc?: string | undefined; value?: string | undefined } | undefined
              printout?: string | undefined
              size?: string | undefined
              source?: string | undefined
              status?: { desc?: string | undefined; value?: string | undefined } | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { printout_id: string } } & { query: { op: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { printout_id: string } } & { query: { op: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/almaws/v1/task-lists/requested-resources': {
      $get:
        | {
            input: {
              query: {
                library: string
                circ_desk: string
                location?: string | undefined
                order_by?: string | undefined
                direction?: string | undefined
                pickup_inst?: string | undefined
                reported?: string | undefined
                printed?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              requested_resource?:
                | {
                    location?:
                      | {
                          call_number?: string | undefined
                          copy?:
                            | {
                                alternative_call_number?: string | undefined
                                barcode?: string | undefined
                                base_status?:
                                  | { desc?: string | undefined; value?: string | undefined }
                                  | undefined
                                link?: string | undefined
                                pid?: string | undefined
                                storage_location_id?: string | undefined
                              }[]
                            | undefined
                          holding_id?:
                            | { link?: string | undefined; value?: string | undefined }
                            | undefined
                          library?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                          shelving_location?: string | undefined
                        }
                      | undefined
                    request?:
                      | {
                          comment?: string | undefined
                          destination?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                          id?: string | undefined
                          link?: string | undefined
                          printed?: boolean | undefined
                          reported?: boolean | undefined
                          request_date?: string | undefined
                          request_sub_type?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                          request_time?: string | undefined
                          request_type: 'BOOKING' | 'DIGITIZATION' | 'HOLD' | 'MOVE' | 'WORK_ORDER'
                          requester?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                        }[]
                      | undefined
                    resource_metadata?:
                      | {
                          author?: string | undefined
                          isbn?: string | undefined
                          issn?: string | undefined
                          mms_id?:
                            | { link?: string | undefined; value?: string | undefined }
                            | undefined
                          publication_place?: string | undefined
                          publication_year?: string | undefined
                          publisher?: string | undefined
                          title?: string | undefined
                        }
                      | undefined
                  }[]
                | undefined
              total_record_count?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                library: string
                circ_desk: string
                location?: string | undefined
                order_by?: string | undefined
                direction?: string | undefined
                pickup_inst?: string | undefined
                reported?: string | undefined
                printed?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              requested_resource?:
                | {
                    location?:
                      | {
                          call_number?: string | undefined
                          copy?:
                            | {
                                alternative_call_number?: string | undefined
                                barcode?: string | undefined
                                base_status?:
                                  | { desc?: string | undefined; value?: string | undefined }
                                  | undefined
                                link?: string | undefined
                                pid?: string | undefined
                                storage_location_id?: string | undefined
                              }[]
                            | undefined
                          holding_id?:
                            | { link?: string | undefined; value?: string | undefined }
                            | undefined
                          library?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                          shelving_location?: string | undefined
                        }
                      | undefined
                    request?:
                      | {
                          comment?: string | undefined
                          destination?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                          id?: string | undefined
                          link?: string | undefined
                          printed?: boolean | undefined
                          reported?: boolean | undefined
                          request_date?: string | undefined
                          request_sub_type?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                          request_time?: string | undefined
                          request_type: 'BOOKING' | 'DIGITIZATION' | 'HOLD' | 'MOVE' | 'WORK_ORDER'
                          requester?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                        }[]
                      | undefined
                    resource_metadata?:
                      | {
                          author?: string | undefined
                          isbn?: string | undefined
                          issn?: string | undefined
                          mms_id?:
                            | { link?: string | undefined; value?: string | undefined }
                            | undefined
                          publication_place?: string | undefined
                          publication_year?: string | undefined
                          publisher?: string | undefined
                          title?: string | undefined
                        }
                      | undefined
                  }[]
                | undefined
              total_record_count?: number | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                library: string
                circ_desk: string
                location?: string | undefined
                order_by?: string | undefined
                direction?: string | undefined
                pickup_inst?: string | undefined
                reported?: string | undefined
                printed?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                library: string
                circ_desk: string
                location?: string | undefined
                order_by?: string | undefined
                direction?: string | undefined
                pickup_inst?: string | undefined
                reported?: string | undefined
                printed?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                library?: string | undefined
                circ_desk?: string | undefined
                op?: string | undefined
                location?: string | undefined
                pickup_inst?: string | undefined
                reported?: string | undefined
                printed?: string | undefined
              }
            }
            output: {
              requested_resource?:
                | {
                    location?:
                      | {
                          call_number?: string | undefined
                          copy?:
                            | {
                                alternative_call_number?: string | undefined
                                barcode?: string | undefined
                                base_status?:
                                  | { desc?: string | undefined; value?: string | undefined }
                                  | undefined
                                link?: string | undefined
                                pid?: string | undefined
                                storage_location_id?: string | undefined
                              }[]
                            | undefined
                          holding_id?:
                            | { link?: string | undefined; value?: string | undefined }
                            | undefined
                          library?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                          shelving_location?: string | undefined
                        }
                      | undefined
                    request?:
                      | {
                          comment?: string | undefined
                          destination?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                          id?: string | undefined
                          link?: string | undefined
                          printed?: boolean | undefined
                          reported?: boolean | undefined
                          request_date?: string | undefined
                          request_sub_type?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                          request_time?: string | undefined
                          request_type: 'BOOKING' | 'DIGITIZATION' | 'HOLD' | 'MOVE' | 'WORK_ORDER'
                          requester?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                        }[]
                      | undefined
                    resource_metadata?:
                      | {
                          author?: string | undefined
                          isbn?: string | undefined
                          issn?: string | undefined
                          mms_id?:
                            | { link?: string | undefined; value?: string | undefined }
                            | undefined
                          publication_place?: string | undefined
                          publication_year?: string | undefined
                          publisher?: string | undefined
                          title?: string | undefined
                        }
                      | undefined
                  }[]
                | undefined
              total_record_count?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                library?: string | undefined
                circ_desk?: string | undefined
                op?: string | undefined
                location?: string | undefined
                pickup_inst?: string | undefined
                reported?: string | undefined
                printed?: string | undefined
              }
            }
            output: {
              requested_resource?:
                | {
                    location?:
                      | {
                          call_number?: string | undefined
                          copy?:
                            | {
                                alternative_call_number?: string | undefined
                                barcode?: string | undefined
                                base_status?:
                                  | { desc?: string | undefined; value?: string | undefined }
                                  | undefined
                                link?: string | undefined
                                pid?: string | undefined
                                storage_location_id?: string | undefined
                              }[]
                            | undefined
                          holding_id?:
                            | { link?: string | undefined; value?: string | undefined }
                            | undefined
                          library?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                          shelving_location?: string | undefined
                        }
                      | undefined
                    request?:
                      | {
                          comment?: string | undefined
                          destination?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                          id?: string | undefined
                          link?: string | undefined
                          printed?: boolean | undefined
                          reported?: boolean | undefined
                          request_date?: string | undefined
                          request_sub_type?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                          request_time?: string | undefined
                          request_type: 'BOOKING' | 'DIGITIZATION' | 'HOLD' | 'MOVE' | 'WORK_ORDER'
                          requester?:
                            | { desc?: string | undefined; value?: string | undefined }
                            | undefined
                        }[]
                      | undefined
                    resource_metadata?:
                      | {
                          author?: string | undefined
                          isbn?: string | undefined
                          issn?: string | undefined
                          mms_id?:
                            | { link?: string | undefined; value?: string | undefined }
                            | undefined
                          publication_place?: string | undefined
                          publication_year?: string | undefined
                          publisher?: string | undefined
                          title?: string | undefined
                        }
                      | undefined
                  }[]
                | undefined
              total_record_count?: number | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                library?: string | undefined
                circ_desk?: string | undefined
                op?: string | undefined
                location?: string | undefined
                pickup_inst?: string | undefined
                reported?: string | undefined
                printed?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                library?: string | undefined
                circ_desk?: string | undefined
                op?: string | undefined
                location?: string | undefined
                pickup_inst?: string | undefined
                reported?: string | undefined
                printed?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/almaws/v1/task-lists/rs/lending-requests': {
      $get:
        | {
            input: {
              query: {
                library?: string | undefined
                status?: string | undefined
                printed?: string | undefined
                reported?: string | undefined
                partner?: string | undefined
                requested_format?: string | undefined
                supplied_format?: string | undefined
              }
            }
            output: {
              total_record_count?: bigint | undefined
              user_resource_sharing_request?:
                | {
                    additional_barcode?: string[] | undefined
                    additional_person_name?: string | undefined
                    agree_to_copyright_terms?: boolean | undefined
                    allow_other_formats?: boolean | undefined
                    author?: string | undefined
                    author_initials?: string | undefined
                    barcode?: string | undefined
                    bib_note?: string | undefined
                    call_number?: string | undefined
                    chapter?: string | undefined
                    chapter_author?: string | undefined
                    chapter_title?: string | undefined
                    citation_type?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    copyright_status?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    created_date?: string | undefined
                    created_time?: string | undefined
                    doi?: string | undefined
                    edition?: string | undefined
                    editor?: string | undefined
                    end_page?: string | undefined
                    external_id?: string | undefined
                    format?: { desc?: string | undefined; value?: string | undefined } | undefined
                    fund?: { desc?: string | undefined; value?: string | undefined } | undefined
                    has_active_notes?: boolean | undefined
                    isbn?: string | undefined
                    issn?: string | undefined
                    issue?: string | undefined
                    journal_title?: string | undefined
                    last_interest_date?: string | undefined
                    last_modified_date?: string | undefined
                    last_modified_time?: string | undefined
                    lcc_number?: string | undefined
                    level_of_service?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    lost_damaged_fee?:
                      | {
                          currency: { desc?: string | undefined; value?: string | undefined }
                          sum: number
                        }
                      | undefined
                    maximum_fee?: number | undefined
                    mms_id?: string | undefined
                    need_patron_info?: boolean | undefined
                    note?: string | undefined
                    oclc_number?: string | undefined
                    other_standard_id?: string | undefined
                    owner?: string | undefined
                    pages?: string | undefined
                    part?: string | undefined
                    partner?: { desc?: string | undefined; value?: string | undefined } | undefined
                    pickup_location?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    pickup_location_type?: string | undefined
                    place_of_publication?: string | undefined
                    pmid?: string | undefined
                    preferred_send_method?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    printed?: boolean | undefined
                    publisher?: string | undefined
                    reading_room?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    receive_cost?:
                      | {
                          currency: { desc?: string | undefined; value?: string | undefined }
                          sum: number
                        }
                      | undefined
                    remote_record_id?: string | undefined
                    reported?: boolean | undefined
                    request_cost?:
                      | {
                          currency: { desc?: string | undefined; value?: string | undefined }
                          sum: number
                        }
                      | undefined
                    request_id?: string | undefined
                    requested_language?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    requested_media?: string | undefined
                    requester?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    rs_note?:
                      | {
                          content?: string | undefined
                          created_by?: string | undefined
                          created_date?: string | undefined
                        }[]
                      | undefined
                    series_title_number?: string | undefined
                    shipping_cost?:
                      | {
                          currency: { desc?: string | undefined; value?: string | undefined }
                          sum: number
                        }
                      | undefined
                    source?: string | undefined
                    specific_edition?: boolean | undefined
                    start_page?: string | undefined
                    status?: { desc?: string | undefined; value?: string | undefined } | undefined
                    supplied_format?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    text_email?: string | undefined
                    text_postal_1?: string | undefined
                    text_postal_2?: string | undefined
                    text_postal_3?: string | undefined
                    text_postal_4?: string | undefined
                    title?: string | undefined
                    use_alternative_address?: boolean | undefined
                    user_request?:
                      | { link?: string | undefined; value?: string | undefined }
                      | undefined
                    volume?: string | undefined
                    willing_to_pay?: boolean | undefined
                    year?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                library?: string | undefined
                status?: string | undefined
                printed?: string | undefined
                reported?: string | undefined
                partner?: string | undefined
                requested_format?: string | undefined
                supplied_format?: string | undefined
              }
            }
            output: {
              total_record_count?: bigint | undefined
              user_resource_sharing_request?:
                | {
                    additional_barcode?: string[] | undefined
                    additional_person_name?: string | undefined
                    agree_to_copyright_terms?: boolean | undefined
                    allow_other_formats?: boolean | undefined
                    author?: string | undefined
                    author_initials?: string | undefined
                    barcode?: string | undefined
                    bib_note?: string | undefined
                    call_number?: string | undefined
                    chapter?: string | undefined
                    chapter_author?: string | undefined
                    chapter_title?: string | undefined
                    citation_type?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    copyright_status?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    created_date?: string | undefined
                    created_time?: string | undefined
                    doi?: string | undefined
                    edition?: string | undefined
                    editor?: string | undefined
                    end_page?: string | undefined
                    external_id?: string | undefined
                    format?: { desc?: string | undefined; value?: string | undefined } | undefined
                    fund?: { desc?: string | undefined; value?: string | undefined } | undefined
                    has_active_notes?: boolean | undefined
                    isbn?: string | undefined
                    issn?: string | undefined
                    issue?: string | undefined
                    journal_title?: string | undefined
                    last_interest_date?: string | undefined
                    last_modified_date?: string | undefined
                    last_modified_time?: string | undefined
                    lcc_number?: string | undefined
                    level_of_service?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    lost_damaged_fee?:
                      | {
                          currency: { desc?: string | undefined; value?: string | undefined }
                          sum: number
                        }
                      | undefined
                    maximum_fee?: number | undefined
                    mms_id?: string | undefined
                    need_patron_info?: boolean | undefined
                    note?: string | undefined
                    oclc_number?: string | undefined
                    other_standard_id?: string | undefined
                    owner?: string | undefined
                    pages?: string | undefined
                    part?: string | undefined
                    partner?: { desc?: string | undefined; value?: string | undefined } | undefined
                    pickup_location?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    pickup_location_type?: string | undefined
                    place_of_publication?: string | undefined
                    pmid?: string | undefined
                    preferred_send_method?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    printed?: boolean | undefined
                    publisher?: string | undefined
                    reading_room?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    receive_cost?:
                      | {
                          currency: { desc?: string | undefined; value?: string | undefined }
                          sum: number
                        }
                      | undefined
                    remote_record_id?: string | undefined
                    reported?: boolean | undefined
                    request_cost?:
                      | {
                          currency: { desc?: string | undefined; value?: string | undefined }
                          sum: number
                        }
                      | undefined
                    request_id?: string | undefined
                    requested_language?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    requested_media?: string | undefined
                    requester?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    rs_note?:
                      | {
                          content?: string | undefined
                          created_by?: string | undefined
                          created_date?: string | undefined
                        }[]
                      | undefined
                    series_title_number?: string | undefined
                    shipping_cost?:
                      | {
                          currency: { desc?: string | undefined; value?: string | undefined }
                          sum: number
                        }
                      | undefined
                    source?: string | undefined
                    specific_edition?: boolean | undefined
                    start_page?: string | undefined
                    status?: { desc?: string | undefined; value?: string | undefined } | undefined
                    supplied_format?:
                      | { desc?: string | undefined; value?: string | undefined }
                      | undefined
                    text_email?: string | undefined
                    text_postal_1?: string | undefined
                    text_postal_2?: string | undefined
                    text_postal_3?: string | undefined
                    text_postal_4?: string | undefined
                    title?: string | undefined
                    use_alternative_address?: boolean | undefined
                    user_request?:
                      | { link?: string | undefined; value?: string | undefined }
                      | undefined
                    volume?: string | undefined
                    willing_to_pay?: boolean | undefined
                    year?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                library?: string | undefined
                status?: string | undefined
                printed?: string | undefined
                reported?: string | undefined
                partner?: string | undefined
                requested_format?: string | undefined
                supplied_format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                library?: string | undefined
                status?: string | undefined
                printed?: string | undefined
                reported?: string | undefined
                partner?: string | undefined
                requested_format?: string | undefined
                supplied_format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: {
              query: {
                library?: string | undefined
                op?: string | undefined
                status?: string | undefined
                printed?: string | undefined
                reported?: string | undefined
                partner?: string | undefined
                requested_format?: string | undefined
                supplied_format?: string | undefined
              }
            }
            output: {
              additional_barcode?: string[] | undefined
              additional_person_name?: string | undefined
              agree_to_copyright_terms?: boolean | undefined
              allow_other_formats?: boolean | undefined
              author?: string | undefined
              author_initials?: string | undefined
              barcode?: string | undefined
              bib_note?: string | undefined
              call_number?: string | undefined
              chapter?: string | undefined
              chapter_author?: string | undefined
              chapter_title?: string | undefined
              citation_type?: { desc?: string | undefined; value?: string | undefined } | undefined
              copyright_status?:
                | { desc?: string | undefined; value?: string | undefined }
                | undefined
              created_date?: string | undefined
              created_time?: string | undefined
              doi?: string | undefined
              edition?: string | undefined
              editor?: string | undefined
              end_page?: string | undefined
              external_id?: string | undefined
              format?: { desc?: string | undefined; value?: string | undefined } | undefined
              fund?: { desc?: string | undefined; value?: string | undefined } | undefined
              has_active_notes?: boolean | undefined
              isbn?: string | undefined
              issn?: string | undefined
              issue?: string | undefined
              journal_title?: string | undefined
              last_interest_date?: string | undefined
              last_modified_date?: string | undefined
              last_modified_time?: string | undefined
              lcc_number?: string | undefined
              level_of_service?:
                | { desc?: string | undefined; value?: string | undefined }
                | undefined
              lost_damaged_fee?:
                | {
                    currency: { desc?: string | undefined; value?: string | undefined }
                    sum: number
                  }
                | undefined
              maximum_fee?: number | undefined
              mms_id?: string | undefined
              need_patron_info?: boolean | undefined
              note?: string | undefined
              oclc_number?: string | undefined
              other_standard_id?: string | undefined
              owner?: string | undefined
              pages?: string | undefined
              part?: string | undefined
              partner?: { desc?: string | undefined; value?: string | undefined } | undefined
              pickup_location?:
                | { desc?: string | undefined; value?: string | undefined }
                | undefined
              pickup_location_type?: string | undefined
              place_of_publication?: string | undefined
              pmid?: string | undefined
              preferred_send_method?:
                | { desc?: string | undefined; value?: string | undefined }
                | undefined
              printed?: boolean | undefined
              publisher?: string | undefined
              reading_room?: { desc?: string | undefined; value?: string | undefined } | undefined
              receive_cost?:
                | {
                    currency: { desc?: string | undefined; value?: string | undefined }
                    sum: number
                  }
                | undefined
              remote_record_id?: string | undefined
              reported?: boolean | undefined
              request_cost?:
                | {
                    currency: { desc?: string | undefined; value?: string | undefined }
                    sum: number
                  }
                | undefined
              request_id?: string | undefined
              requested_language?:
                | { desc?: string | undefined; value?: string | undefined }
                | undefined
              requested_media?: string | undefined
              requester?: { desc?: string | undefined; value?: string | undefined } | undefined
              rs_note?:
                | {
                    content?: string | undefined
                    created_by?: string | undefined
                    created_date?: string | undefined
                  }[]
                | undefined
              series_title_number?: string | undefined
              shipping_cost?:
                | {
                    currency: { desc?: string | undefined; value?: string | undefined }
                    sum: number
                  }
                | undefined
              source?: string | undefined
              specific_edition?: boolean | undefined
              start_page?: string | undefined
              status?: { desc?: string | undefined; value?: string | undefined } | undefined
              supplied_format?:
                | { desc?: string | undefined; value?: string | undefined }
                | undefined
              text_email?: string | undefined
              text_postal_1?: string | undefined
              text_postal_2?: string | undefined
              text_postal_3?: string | undefined
              text_postal_4?: string | undefined
              title?: string | undefined
              use_alternative_address?: boolean | undefined
              user_request?: { link?: string | undefined; value?: string | undefined } | undefined
              volume?: string | undefined
              willing_to_pay?: boolean | undefined
              year?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                library?: string | undefined
                op?: string | undefined
                status?: string | undefined
                printed?: string | undefined
                reported?: string | undefined
                partner?: string | undefined
                requested_format?: string | undefined
                supplied_format?: string | undefined
              }
            }
            output: {
              additional_barcode?: string[] | undefined
              additional_person_name?: string | undefined
              agree_to_copyright_terms?: boolean | undefined
              allow_other_formats?: boolean | undefined
              author?: string | undefined
              author_initials?: string | undefined
              barcode?: string | undefined
              bib_note?: string | undefined
              call_number?: string | undefined
              chapter?: string | undefined
              chapter_author?: string | undefined
              chapter_title?: string | undefined
              citation_type?: { desc?: string | undefined; value?: string | undefined } | undefined
              copyright_status?:
                | { desc?: string | undefined; value?: string | undefined }
                | undefined
              created_date?: string | undefined
              created_time?: string | undefined
              doi?: string | undefined
              edition?: string | undefined
              editor?: string | undefined
              end_page?: string | undefined
              external_id?: string | undefined
              format?: { desc?: string | undefined; value?: string | undefined } | undefined
              fund?: { desc?: string | undefined; value?: string | undefined } | undefined
              has_active_notes?: boolean | undefined
              isbn?: string | undefined
              issn?: string | undefined
              issue?: string | undefined
              journal_title?: string | undefined
              last_interest_date?: string | undefined
              last_modified_date?: string | undefined
              last_modified_time?: string | undefined
              lcc_number?: string | undefined
              level_of_service?:
                | { desc?: string | undefined; value?: string | undefined }
                | undefined
              lost_damaged_fee?:
                | {
                    currency: { desc?: string | undefined; value?: string | undefined }
                    sum: number
                  }
                | undefined
              maximum_fee?: number | undefined
              mms_id?: string | undefined
              need_patron_info?: boolean | undefined
              note?: string | undefined
              oclc_number?: string | undefined
              other_standard_id?: string | undefined
              owner?: string | undefined
              pages?: string | undefined
              part?: string | undefined
              partner?: { desc?: string | undefined; value?: string | undefined } | undefined
              pickup_location?:
                | { desc?: string | undefined; value?: string | undefined }
                | undefined
              pickup_location_type?: string | undefined
              place_of_publication?: string | undefined
              pmid?: string | undefined
              preferred_send_method?:
                | { desc?: string | undefined; value?: string | undefined }
                | undefined
              printed?: boolean | undefined
              publisher?: string | undefined
              reading_room?: { desc?: string | undefined; value?: string | undefined } | undefined
              receive_cost?:
                | {
                    currency: { desc?: string | undefined; value?: string | undefined }
                    sum: number
                  }
                | undefined
              remote_record_id?: string | undefined
              reported?: boolean | undefined
              request_cost?:
                | {
                    currency: { desc?: string | undefined; value?: string | undefined }
                    sum: number
                  }
                | undefined
              request_id?: string | undefined
              requested_language?:
                | { desc?: string | undefined; value?: string | undefined }
                | undefined
              requested_media?: string | undefined
              requester?: { desc?: string | undefined; value?: string | undefined } | undefined
              rs_note?:
                | {
                    content?: string | undefined
                    created_by?: string | undefined
                    created_date?: string | undefined
                  }[]
                | undefined
              series_title_number?: string | undefined
              shipping_cost?:
                | {
                    currency: { desc?: string | undefined; value?: string | undefined }
                    sum: number
                  }
                | undefined
              source?: string | undefined
              specific_edition?: boolean | undefined
              start_page?: string | undefined
              status?: { desc?: string | undefined; value?: string | undefined } | undefined
              supplied_format?:
                | { desc?: string | undefined; value?: string | undefined }
                | undefined
              text_email?: string | undefined
              text_postal_1?: string | undefined
              text_postal_2?: string | undefined
              text_postal_3?: string | undefined
              text_postal_4?: string | undefined
              title?: string | undefined
              use_alternative_address?: boolean | undefined
              user_request?: { link?: string | undefined; value?: string | undefined } | undefined
              volume?: string | undefined
              willing_to_pay?: boolean | undefined
              year?: string | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                library?: string | undefined
                op?: string | undefined
                status?: string | undefined
                printed?: string | undefined
                reported?: string | undefined
                partner?: string | undefined
                requested_format?: string | undefined
                supplied_format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                library?: string | undefined
                op?: string | undefined
                status?: string | undefined
                printed?: string | undefined
                reported?: string | undefined
                partner?: string | undefined
                requested_format?: string | undefined
                supplied_format?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/almaws/v1/task-lists/test': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  },
  '/'
>
export default routes

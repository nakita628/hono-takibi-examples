type LawNumEra = 'Meiji' | 'Taisho' | 'Showa' | 'Heisei' | 'Reiwa'
type LawNumType =
  | 'Constitution'
  | 'Act'
  | 'CabinetOrder'
  | 'ImperialOrder'
  | 'MinisterialOrdinance'
  | 'Rule'
  | 'Misc'
type LawType =
  | 'Constitution'
  | 'Act'
  | 'CabinetOrder'
  | 'ImperialOrder'
  | 'MinisterialOrdinance'
  | 'Rule'
  | 'Misc'
type CategoryCd =
  | '001'
  | '002'
  | '003'
  | '004'
  | '005'
  | '006'
  | '007'
  | '008'
  | '009'
  | '010'
  | '011'
  | '012'
  | '013'
  | '014'
  | '015'
  | '016'
  | '017'
  | '018'
  | '019'
  | '020'
  | '021'
  | '022'
  | '023'
  | '024'
  | '025'
  | '026'
  | '027'
  | '028'
  | '029'
  | '030'
  | '031'
  | '032'
  | '033'
  | '034'
  | '035'
  | '036'
  | '037'
  | '038'
  | '039'
  | '040'
  | '041'
  | '042'
  | '043'
  | '044'
  | '045'
  | '046'
  | '047'
  | '048'
  | '049'
  | '050'
type Mission = 'New' | 'Partial'
type RepealStatus = 'None' | 'Repeal' | 'Expire' | 'Suspend' | 'LossOfEffectiveness'
type LawsResponse = {
  total_count?: bigint | undefined
  count: bigint
  next_offset?: (bigint | null) | undefined
  laws?:
    | {
        law_info?:
          | {
              law_type?: {} | undefined
              law_id?: string | undefined
              law_num?: string | undefined
              law_num_era?: {} | undefined
              law_num_year?: number | undefined
              law_num_type?: {} | undefined
              law_num_num?: string | undefined
              promulgation_date?: string | undefined
            }
          | undefined
        revision_info?:
          | {
              law_revision_id?: string | undefined
              law_type?: {} | undefined
              law_title?: string | undefined
              law_title_kana?: string | undefined
              abbrev?: string | undefined
              category?: string | undefined
              updated?: string | undefined
              amendment_promulgate_date?: string | undefined
              amendment_enforcement_date?: string | undefined
              amendment_enforcement_comment?: string | undefined
              amendment_scheduled_enforcement_date?: string | undefined
              amendment_law_id?: string | undefined
              amendment_law_title?: string | undefined
              amendment_law_title_kana?: string | undefined
              amendment_law_num?: string | undefined
              amendment_type?: {} | undefined
              repeal_status?: {} | undefined
              repeal_date?: (string | null) | undefined
              remain_in_force?: (boolean | null) | undefined
              mission?: {} | undefined
              current_revision_status?: {} | undefined
            }
          | undefined
        current_revision_info?:
          | {
              law_revision_id?: string | undefined
              law_type?: {} | undefined
              law_title?: string | undefined
              law_title_kana?: string | undefined
              abbrev?: string | undefined
              category?: string | undefined
              updated?: string | undefined
              amendment_promulgate_date?: string | undefined
              amendment_enforcement_date?: string | undefined
              amendment_enforcement_comment?: string | undefined
              amendment_scheduled_enforcement_date?: string | undefined
              amendment_law_id?: string | undefined
              amendment_law_title?: string | undefined
              amendment_law_title_kana?: string | undefined
              amendment_law_num?: string | undefined
              amendment_type?: {} | undefined
              repeal_status?: {} | undefined
              repeal_date?: (string | null) | undefined
              remain_in_force?: (boolean | null) | undefined
              mission?: {} | undefined
              current_revision_status?: {} | undefined
            }
          | undefined
      }[]
    | undefined
}
type ErrorInfo = { code?: string | undefined; message?: string | undefined }
type AmendmentType = '1' | '3' | '8'
type CurrentRevisionStatus = 'CurrentEnforced' | 'UnEnforced' | 'PreviousEnforced' | 'Repeal'
type LawInfo = {
  law_type?: {} | undefined
  law_id?: string | undefined
  law_num?: string | undefined
  law_num_era?: {} | undefined
  law_num_year?: number | undefined
  law_num_type?: {} | undefined
  law_num_num?: string | undefined
  promulgation_date?: string | undefined
}
type LawRevisionsResponse = {
  law_info: LawInfo
  revisions: {
    law_revision_id?: string | undefined
    law_type?: {} | undefined
    law_title?: string | undefined
    law_title_kana?: string | undefined
    abbrev?: string | undefined
    category?: string | undefined
    updated?: string | undefined
    amendment_promulgate_date?: string | undefined
    amendment_enforcement_date?: string | undefined
    amendment_enforcement_comment?: string | undefined
    amendment_scheduled_enforcement_date?: string | undefined
    amendment_law_id?: string | undefined
    amendment_law_title?: string | undefined
    amendment_law_title_kana?: string | undefined
    amendment_law_num?: string | undefined
    amendment_type?: {} | undefined
    repeal_status?: {} | undefined
    repeal_date?: (string | null) | undefined
    remain_in_force?: (boolean | null) | undefined
    mission?: {} | undefined
    current_revision_status?: {} | undefined
  }[]
}
type AttachedFilesInfo = {
  image_data?: string | undefined
  attached_files?:
    | {
        law_revision_id?: string | undefined
        src?: string | undefined
        updated?: string | undefined
      }[]
    | undefined
}
type RevisionInfo = {
  law_revision_id?: string | undefined
  law_type?: {} | undefined
  law_title?: string | undefined
  law_title_kana?: string | undefined
  abbrev?: string | undefined
  category?: string | undefined
  updated?: string | undefined
  amendment_promulgate_date?: string | undefined
  amendment_enforcement_date?: string | undefined
  amendment_enforcement_comment?: string | undefined
  amendment_scheduled_enforcement_date?: string | undefined
  amendment_law_id?: string | undefined
  amendment_law_title?: string | undefined
  amendment_law_title_kana?: string | undefined
  amendment_law_num?: string | undefined
  amendment_type?: {} | undefined
  repeal_status?: {} | undefined
  repeal_date?: (string | null) | undefined
  remain_in_force?: (boolean | null) | undefined
  mission?: {} | undefined
  current_revision_status?: {} | undefined
}
type LawDataResponse = {
  attached_files_info?: AttachedFilesInfo | undefined
  law_info?: LawInfo | undefined
  revision_info?: RevisionInfo | undefined
  law_full_text?: { [x: string]: unknown } | string | undefined
}
type KeywordResponse = {
  total_count?: bigint | undefined
  sentence_count?: bigint | undefined
  next_offset?: (bigint | null) | undefined
  items?:
    | {
        law_info?: LawInfo | undefined
        revision_info?: RevisionInfo | undefined
        sentences?: { position?: {} | undefined; text?: string | undefined }[] | undefined
      }[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/laws': {
      $get:
        | {
            input: {
              query: {
                law_id?: string | undefined
                law_num?: string | undefined
                law_num_era?: LawNumEra | undefined
                law_num_num?: string | undefined
                law_num_type?: LawNumType | undefined
                law_num_year?: number | undefined
                law_title?: string | undefined
                law_title_kana?: string | undefined
                law_type?: LawType[] | undefined
                amendment_law_id?: string | undefined
                asof?: string | undefined
                category_cd?: CategoryCd[] | undefined
                mission?: Mission[] | undefined
                omit_current_revision_info?: boolean | undefined
                promulgation_date_from?: string | undefined
                promulgation_date_to?: string | undefined
                repeal_status?: RepealStatus[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                response_format?: {} | undefined
              }
            }
            output: LawsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                law_id?: string | undefined
                law_num?: string | undefined
                law_num_era?: LawNumEra | undefined
                law_num_num?: string | undefined
                law_num_type?: LawNumType | undefined
                law_num_year?: number | undefined
                law_title?: string | undefined
                law_title_kana?: string | undefined
                law_type?: LawType[] | undefined
                amendment_law_id?: string | undefined
                asof?: string | undefined
                category_cd?: CategoryCd[] | undefined
                mission?: Mission[] | undefined
                omit_current_revision_info?: boolean | undefined
                promulgation_date_from?: string | undefined
                promulgation_date_to?: string | undefined
                repeal_status?: RepealStatus[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                response_format?: {} | undefined
              }
            }
            output: LawsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                law_id?: string | undefined
                law_num?: string | undefined
                law_num_era?: LawNumEra | undefined
                law_num_num?: string | undefined
                law_num_type?: LawNumType | undefined
                law_num_year?: number | undefined
                law_title?: string | undefined
                law_title_kana?: string | undefined
                law_type?: LawType[] | undefined
                amendment_law_id?: string | undefined
                asof?: string | undefined
                category_cd?: CategoryCd[] | undefined
                mission?: Mission[] | undefined
                omit_current_revision_info?: boolean | undefined
                promulgation_date_from?: string | undefined
                promulgation_date_to?: string | undefined
                repeal_status?: RepealStatus[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                response_format?: {} | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                law_id?: string | undefined
                law_num?: string | undefined
                law_num_era?: LawNumEra | undefined
                law_num_num?: string | undefined
                law_num_type?: LawNumType | undefined
                law_num_year?: number | undefined
                law_title?: string | undefined
                law_title_kana?: string | undefined
                law_type?: LawType[] | undefined
                amendment_law_id?: string | undefined
                asof?: string | undefined
                category_cd?: CategoryCd[] | undefined
                mission?: Mission[] | undefined
                omit_current_revision_info?: boolean | undefined
                promulgation_date_from?: string | undefined
                promulgation_date_to?: string | undefined
                repeal_status?: RepealStatus[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                response_format?: {} | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                law_id?: string | undefined
                law_num?: string | undefined
                law_num_era?: LawNumEra | undefined
                law_num_num?: string | undefined
                law_num_type?: LawNumType | undefined
                law_num_year?: number | undefined
                law_title?: string | undefined
                law_title_kana?: string | undefined
                law_type?: LawType[] | undefined
                amendment_law_id?: string | undefined
                asof?: string | undefined
                category_cd?: CategoryCd[] | undefined
                mission?: Mission[] | undefined
                omit_current_revision_info?: boolean | undefined
                promulgation_date_from?: string | undefined
                promulgation_date_to?: string | undefined
                repeal_status?: RepealStatus[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                response_format?: {} | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                law_id?: string | undefined
                law_num?: string | undefined
                law_num_era?: LawNumEra | undefined
                law_num_num?: string | undefined
                law_num_type?: LawNumType | undefined
                law_num_year?: number | undefined
                law_title?: string | undefined
                law_title_kana?: string | undefined
                law_type?: LawType[] | undefined
                amendment_law_id?: string | undefined
                asof?: string | undefined
                category_cd?: CategoryCd[] | undefined
                mission?: Mission[] | undefined
                omit_current_revision_info?: boolean | undefined
                promulgation_date_from?: string | undefined
                promulgation_date_to?: string | undefined
                repeal_status?: RepealStatus[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                response_format?: {} | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/law_revisions/:law_id_or_num': {
      $get:
        | {
            input: { param: { law_id_or_num: string } } & {
              query: {
                law_title?: string | undefined
                law_title_kana?: string | undefined
                amendment_date_from?: string | undefined
                amendment_date_to?: string | undefined
                amendment_law_id?: string | undefined
                amendment_law_num?: string | undefined
                amendment_law_title?: string | undefined
                amendment_law_title_kana?: string | undefined
                amendment_promulgate_date_from?: string | undefined
                amendment_promulgate_date_to?: string | undefined
                amendment_type?: AmendmentType[] | undefined
                category_cd?: CategoryCd[] | undefined
                current_revision_status?: CurrentRevisionStatus[] | undefined
                mission?: Mission[] | undefined
                remain_in_force?: boolean | undefined
                repeal_date_from?: string | undefined
                repeal_date_to?: string | undefined
                repeal_status?: RepealStatus[] | undefined
                updated_from?: string | undefined
                updated_to?: string | undefined
                response_format?: {} | undefined
              }
            }
            output: LawRevisionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { law_id_or_num: string } } & {
              query: {
                law_title?: string | undefined
                law_title_kana?: string | undefined
                amendment_date_from?: string | undefined
                amendment_date_to?: string | undefined
                amendment_law_id?: string | undefined
                amendment_law_num?: string | undefined
                amendment_law_title?: string | undefined
                amendment_law_title_kana?: string | undefined
                amendment_promulgate_date_from?: string | undefined
                amendment_promulgate_date_to?: string | undefined
                amendment_type?: AmendmentType[] | undefined
                category_cd?: CategoryCd[] | undefined
                current_revision_status?: CurrentRevisionStatus[] | undefined
                mission?: Mission[] | undefined
                remain_in_force?: boolean | undefined
                repeal_date_from?: string | undefined
                repeal_date_to?: string | undefined
                repeal_status?: RepealStatus[] | undefined
                updated_from?: string | undefined
                updated_to?: string | undefined
                response_format?: {} | undefined
              }
            }
            output: LawRevisionsResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { law_id_or_num: string } } & {
              query: {
                law_title?: string | undefined
                law_title_kana?: string | undefined
                amendment_date_from?: string | undefined
                amendment_date_to?: string | undefined
                amendment_law_id?: string | undefined
                amendment_law_num?: string | undefined
                amendment_law_title?: string | undefined
                amendment_law_title_kana?: string | undefined
                amendment_promulgate_date_from?: string | undefined
                amendment_promulgate_date_to?: string | undefined
                amendment_type?: AmendmentType[] | undefined
                category_cd?: CategoryCd[] | undefined
                current_revision_status?: CurrentRevisionStatus[] | undefined
                mission?: Mission[] | undefined
                remain_in_force?: boolean | undefined
                repeal_date_from?: string | undefined
                repeal_date_to?: string | undefined
                repeal_status?: RepealStatus[] | undefined
                updated_from?: string | undefined
                updated_to?: string | undefined
                response_format?: {} | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { law_id_or_num: string } } & {
              query: {
                law_title?: string | undefined
                law_title_kana?: string | undefined
                amendment_date_from?: string | undefined
                amendment_date_to?: string | undefined
                amendment_law_id?: string | undefined
                amendment_law_num?: string | undefined
                amendment_law_title?: string | undefined
                amendment_law_title_kana?: string | undefined
                amendment_promulgate_date_from?: string | undefined
                amendment_promulgate_date_to?: string | undefined
                amendment_type?: AmendmentType[] | undefined
                category_cd?: CategoryCd[] | undefined
                current_revision_status?: CurrentRevisionStatus[] | undefined
                mission?: Mission[] | undefined
                remain_in_force?: boolean | undefined
                repeal_date_from?: string | undefined
                repeal_date_to?: string | undefined
                repeal_status?: RepealStatus[] | undefined
                updated_from?: string | undefined
                updated_to?: string | undefined
                response_format?: {} | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { law_id_or_num: string } } & {
              query: {
                law_title?: string | undefined
                law_title_kana?: string | undefined
                amendment_date_from?: string | undefined
                amendment_date_to?: string | undefined
                amendment_law_id?: string | undefined
                amendment_law_num?: string | undefined
                amendment_law_title?: string | undefined
                amendment_law_title_kana?: string | undefined
                amendment_promulgate_date_from?: string | undefined
                amendment_promulgate_date_to?: string | undefined
                amendment_type?: AmendmentType[] | undefined
                category_cd?: CategoryCd[] | undefined
                current_revision_status?: CurrentRevisionStatus[] | undefined
                mission?: Mission[] | undefined
                remain_in_force?: boolean | undefined
                repeal_date_from?: string | undefined
                repeal_date_to?: string | undefined
                repeal_status?: RepealStatus[] | undefined
                updated_from?: string | undefined
                updated_to?: string | undefined
                response_format?: {} | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { law_id_or_num: string } } & {
              query: {
                law_title?: string | undefined
                law_title_kana?: string | undefined
                amendment_date_from?: string | undefined
                amendment_date_to?: string | undefined
                amendment_law_id?: string | undefined
                amendment_law_num?: string | undefined
                amendment_law_title?: string | undefined
                amendment_law_title_kana?: string | undefined
                amendment_promulgate_date_from?: string | undefined
                amendment_promulgate_date_to?: string | undefined
                amendment_type?: AmendmentType[] | undefined
                category_cd?: CategoryCd[] | undefined
                current_revision_status?: CurrentRevisionStatus[] | undefined
                mission?: Mission[] | undefined
                remain_in_force?: boolean | undefined
                repeal_date_from?: string | undefined
                repeal_date_to?: string | undefined
                repeal_status?: RepealStatus[] | undefined
                updated_from?: string | undefined
                updated_to?: string | undefined
                response_format?: {} | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/law_data/:law_id_or_num_or_revision_id': {
      $get:
        | {
            input: { param: { law_id_or_num_or_revision_id: string } } & {
              query: {
                law_full_text_format?: {} | undefined
                asof?: string | undefined
                elm?: {} | undefined
                json_format?: 'full' | 'light' | undefined
                omit_amendment_suppl_provision?: boolean | undefined
                include_attached_file_content?: boolean | undefined
                response_format?: {} | undefined
              }
            }
            output: LawDataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { law_id_or_num_or_revision_id: string } } & {
              query: {
                law_full_text_format?: {} | undefined
                asof?: string | undefined
                elm?: {} | undefined
                json_format?: 'full' | 'light' | undefined
                omit_amendment_suppl_provision?: boolean | undefined
                include_attached_file_content?: boolean | undefined
                response_format?: {} | undefined
              }
            }
            output: LawDataResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { law_id_or_num_or_revision_id: string } } & {
              query: {
                law_full_text_format?: {} | undefined
                asof?: string | undefined
                elm?: {} | undefined
                json_format?: 'full' | 'light' | undefined
                omit_amendment_suppl_provision?: boolean | undefined
                include_attached_file_content?: boolean | undefined
                response_format?: {} | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { law_id_or_num_or_revision_id: string } } & {
              query: {
                law_full_text_format?: {} | undefined
                asof?: string | undefined
                elm?: {} | undefined
                json_format?: 'full' | 'light' | undefined
                omit_amendment_suppl_provision?: boolean | undefined
                include_attached_file_content?: boolean | undefined
                response_format?: {} | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { law_id_or_num_or_revision_id: string } } & {
              query: {
                law_full_text_format?: {} | undefined
                asof?: string | undefined
                elm?: {} | undefined
                json_format?: 'full' | 'light' | undefined
                omit_amendment_suppl_provision?: boolean | undefined
                include_attached_file_content?: boolean | undefined
                response_format?: {} | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { law_id_or_num_or_revision_id: string } } & {
              query: {
                law_full_text_format?: {} | undefined
                asof?: string | undefined
                elm?: {} | undefined
                json_format?: 'full' | 'light' | undefined
                omit_amendment_suppl_provision?: boolean | undefined
                include_attached_file_content?: boolean | undefined
                response_format?: {} | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/attachment/:law_revision_id': {
      $get:
        | {
            input: { param: { law_revision_id: string } } & { query: { src?: string | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { law_revision_id: string } } & { query: { src?: string | undefined } }
            output: ErrorInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { law_revision_id: string } } & { query: { src?: string | undefined } }
            output: ErrorInfo
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { law_revision_id: string } } & { query: { src?: string | undefined } }
            output: ErrorInfo
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { law_revision_id: string } } & { query: { src?: string | undefined } }
            output: ErrorInfo
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/keyword': {
      $get:
        | {
            input: {
              query: {
                keyword: string
                law_num?: string | undefined
                law_num_era?: LawNumEra | undefined
                law_num_num?: string | undefined
                law_num_type?: LawNumType | undefined
                law_num_year?: number | undefined
                law_type?: LawType[] | undefined
                asof?: string | undefined
                category_cd?: CategoryCd[] | undefined
                promulgation_date_from?: string | undefined
                promulgation_date_to?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                response_format?: {} | undefined
                sentences_limit?: number | undefined
                sentence_text_size?: number | undefined
                highlight_tag?: string | undefined
              }
            }
            output: KeywordResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                keyword: string
                law_num?: string | undefined
                law_num_era?: LawNumEra | undefined
                law_num_num?: string | undefined
                law_num_type?: LawNumType | undefined
                law_num_year?: number | undefined
                law_type?: LawType[] | undefined
                asof?: string | undefined
                category_cd?: CategoryCd[] | undefined
                promulgation_date_from?: string | undefined
                promulgation_date_to?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                response_format?: {} | undefined
                sentences_limit?: number | undefined
                sentence_text_size?: number | undefined
                highlight_tag?: string | undefined
              }
            }
            output: KeywordResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                keyword: string
                law_num?: string | undefined
                law_num_era?: LawNumEra | undefined
                law_num_num?: string | undefined
                law_num_type?: LawNumType | undefined
                law_num_year?: number | undefined
                law_type?: LawType[] | undefined
                asof?: string | undefined
                category_cd?: CategoryCd[] | undefined
                promulgation_date_from?: string | undefined
                promulgation_date_to?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                response_format?: {} | undefined
                sentences_limit?: number | undefined
                sentence_text_size?: number | undefined
                highlight_tag?: string | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                keyword: string
                law_num?: string | undefined
                law_num_era?: LawNumEra | undefined
                law_num_num?: string | undefined
                law_num_type?: LawNumType | undefined
                law_num_year?: number | undefined
                law_type?: LawType[] | undefined
                asof?: string | undefined
                category_cd?: CategoryCd[] | undefined
                promulgation_date_from?: string | undefined
                promulgation_date_to?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                response_format?: {} | undefined
                sentences_limit?: number | undefined
                sentence_text_size?: number | undefined
                highlight_tag?: string | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                keyword: string
                law_num?: string | undefined
                law_num_era?: LawNumEra | undefined
                law_num_num?: string | undefined
                law_num_type?: LawNumType | undefined
                law_num_year?: number | undefined
                law_type?: LawType[] | undefined
                asof?: string | undefined
                category_cd?: CategoryCd[] | undefined
                promulgation_date_from?: string | undefined
                promulgation_date_to?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                response_format?: {} | undefined
                sentences_limit?: number | undefined
                sentence_text_size?: number | undefined
                highlight_tag?: string | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                keyword: string
                law_num?: string | undefined
                law_num_era?: LawNumEra | undefined
                law_num_num?: string | undefined
                law_num_type?: LawNumType | undefined
                law_num_year?: number | undefined
                law_type?: LawType[] | undefined
                asof?: string | undefined
                category_cd?: CategoryCd[] | undefined
                promulgation_date_from?: string | undefined
                promulgation_date_to?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                order?: string | undefined
                response_format?: {} | undefined
                sentences_limit?: number | undefined
                sentence_text_size?: number | undefined
                highlight_tag?: string | undefined
              }
            }
            output: ErrorInfo
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/law_file/:file_type/:law_id_or_num_or_revision_id': {
      $get:
        | {
            input: { param: { law_id_or_num_or_revision_id: string; file_type: {} } } & {
              query: { asof?: string | undefined }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { law_id_or_num_or_revision_id: string; file_type: {} } } & {
              query: { asof?: string | undefined }
            }
            output: ErrorInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { law_id_or_num_or_revision_id: string; file_type: {} } } & {
              query: { asof?: string | undefined }
            }
            output: ErrorInfo
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { law_id_or_num_or_revision_id: string; file_type: {} } } & {
              query: { asof?: string | undefined }
            }
            output: ErrorInfo
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { law_id_or_num_or_revision_id: string; file_type: {} } } & {
              query: { asof?: string | undefined }
            }
            output: ErrorInfo
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes

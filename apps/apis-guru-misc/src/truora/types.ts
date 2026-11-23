type CreateBehaviorInput = {
  birth_date: string
  country: 'co' | 've' | 'cl' | 'mx' | 'pe' | 'do' | 'sv' | 'gt' | 'bo' | 'cr' | 'ec' | 'pa' | 'br'
  document_id: string
  document_type:
    | 'national-id'
    | 'passport'
    | 'foreign-id'
    | 'nit'
    | 'diplomatic-id'
    | 'civil-registration'
    | 'identity-card'
    | 'foreigner-card'
    | 'professional-card'
    | 'military-card'
    | 'pep'
    | 'nis'
    | 'dni'
    | 'rui'
    | 'license-plate'
    | 'query'
    | 'name'
    | 'rut'
    | 'nuip'
    | 'foreign-societies'
    | 'escrow'
    | 'individual-registration'
    | 'general-registration'
    | 'curp'
    | 'dui'
    | 'driver-license'
    | 'ruc'
  email: string
  feedback_date: string
  first_name: string
  last_name: string
  phone_number?: string | undefined
  reason:
    | 'rape'
    | 'drug-dealer'
    | 'sexual-harassment'
    | 'theft'
    | 'fights'
    | 'aggressive-behaviour'
    | 'identity-fraud'
    | 'drunk'
    | 'drug-possession'
    | 'absences'
    | 'tardiness'
    | 'confidentiality-breach'
    | 'good-reputation'
}
type Behavior = {
  birth_date: string
  country: 'co' | 've' | 'cl' | 'mx' | 'pe' | 'do' | 'sv' | 'gt' | 'bo' | 'cr' | 'ec' | 'pa' | 'br'
  creation_date?: string | undefined
  document_id: string
  document_type:
    | 'national-id'
    | 'passport'
    | 'foreign-id'
    | 'nit'
    | 'diplomatic-id'
    | 'civil-registration'
    | 'identity-card'
    | 'foreigner-card'
    | 'professional-card'
    | 'military-card'
    | 'pep'
    | 'nis'
    | 'dni'
    | 'rui'
    | 'license-plate'
    | 'query'
    | 'name'
    | 'rut'
    | 'nuip'
    | 'foreign-societies'
    | 'escrow'
    | 'individual-registration'
    | 'general-registration'
    | 'curp'
    | 'dui'
    | 'driver-license'
    | 'ruc'
  email: string
  feedback_date: string
  first_name: string
  last_name: string
  phone_number?: string | undefined
  reason: string
}
type BehaviourOutput = { behavior: Behavior[]; self: string }
type Error = { code: string; message: string }
type NameFound = { count: number; first_name: string; last_name: string }
type CompanySummary = { names_found?: NameFound[] | undefined }
type ScoreDetail = {
  result: 'pending' | 'found' | 'not_found' | 'error' | 'delayed' | 'ignored'
  score: number
  severity: 'unknown' | 'none' | 'very_low' | 'low' | 'medium' | 'high' | 'very_high'
}
type Score = {
  by_id: ScoreDetail
  by_name: ScoreDetail
  data_set:
    | 'affiliations_and_insurances'
    | 'alert_in_media'
    | 'behavior'
    | 'business_background'
    | 'criminal_record'
    | 'driving_licenses'
    | 'international_background'
    | 'legal_background'
    | 'personal_identity'
    | 'professional_background'
    | 'traffic_fines'
    | 'vehicle_information'
    | 'vehicle_permits'
    | 'taxes_and_finances'
  result?: 'pending' | 'found' | 'not_found' | 'error' | 'delayed' | 'ignored' | undefined
  score: number
  severity: 'unknown' | 'none' | 'very_low' | 'low' | 'medium' | 'high' | 'very_high'
}
type Status = {
  data_set?:
    | 'affiliations_and_insurances'
    | 'alert_in_media'
    | 'behavior'
    | 'business_background'
    | 'criminal_record'
    | 'driving_licenses'
    | 'international_background'
    | 'legal_background'
    | 'personal_identity'
    | 'professional_background'
    | 'traffic_fines'
    | 'vehicle_information'
    | 'vehicle_permits'
    | 'taxes_and_finances'
    | undefined
  database_id?: string | undefined
  database_name?: string | undefined
  invalid_inputs?: string[] | undefined
  status?: 'not_started' | 'completed' | 'expired' | 'error' | 'delayed' | 'skipped' | undefined
}
type Summary = {
  date_of_birth?: string | undefined
  death_date?: string | undefined
  drivers_license?: string | undefined
  gender?: 'male' | 'female' | undefined
  identity_status?: 'found' | 'not_found' | 'dead' | undefined
  names_found: NameFound[]
  nss?: string | undefined
  rfc?: string | undefined
}
type VehicleSummary = {
  capacity?: number | undefined
  color?: string | undefined
  license_plate?: string | undefined
  manufacturer?: string | undefined
  model?: string | undefined
  number_of_doors?: number | undefined
  obligatory_insurance_expiration_date?: string | undefined
  obligatory_insurance_status?: string | undefined
  service_type?: string | undefined
  vehicle_category?: string | undefined
  vehicle_id?: string | undefined
  vehicle_type?: string | undefined
  year?: number | undefined
}
type WrongInput = { Input?: 'document_expedition_date' | undefined }
type Check = {
  birth_certificate?: string | undefined
  check_id: string
  company_summary?: CompanySummary | undefined
  country: 'ALL' | 'BR' | 'CL' | 'CO' | 'CR' | 'EC' | 'MX' | 'PE' | 'AR'
  creation_date: string
  date_of_birth?: string | undefined
  diplomatic_id?: string | undefined
  driver_license?: string | undefined
  first_name?: string | undefined
  foreign_id?: string | undefined
  homonym_probability?: number | undefined
  homonym_score?: number | undefined
  homonym_scores?: Score[] | undefined
  id_score: number
  issue_date?: string | undefined
  last_name?: string | undefined
  license_plate?: string | undefined
  national_id?: string | undefined
  native_country?:
    | 'ad'
    | 'ae'
    | 'af'
    | 'ag'
    | 'ai'
    | 'al'
    | 'am'
    | 'an'
    | 'ao'
    | 'aq'
    | 'ar'
    | 'as'
    | 'at'
    | 'au'
    | 'aw'
    | 'ax'
    | 'az'
    | 'ba'
    | 'bb'
    | 'bd'
    | 'be'
    | 'bf'
    | 'bg'
    | 'bh'
    | 'bi'
    | 'bj'
    | 'bm'
    | 'bn'
    | 'bo'
    | 'br'
    | 'bs'
    | 'bt'
    | 'bv'
    | 'bw'
    | 'by'
    | 'bz'
    | 'ca'
    | 'cc'
    | 'cd'
    | 'cf'
    | 'cg'
    | 'ch'
    | 'ci'
    | 'ck'
    | 'cl'
    | 'cm'
    | 'cn'
    | 'co'
    | 'cr'
    | 'cu'
    | 'cv'
    | 'cx'
    | 'cy'
    | 'cz'
    | 'de'
    | 'dj'
    | 'dk'
    | 'dm'
    | 'do'
    | 'dz'
    | 'ea'
    | 'ec'
    | 'ee'
    | 'eg'
    | 'eh'
    | 'er'
    | 'es'
    | 'et'
    | 'fi'
    | 'fj'
    | 'fk'
    | 'fm'
    | 'fo'
    | 'fr'
    | 'ga'
    | 'gb'
    | 'gd'
    | 'ge'
    | 'gf'
    | 'gg'
    | 'gh'
    | 'gi'
    | 'gl'
    | 'gm'
    | 'gn'
    | 'gp'
    | 'gq'
    | 'gr'
    | 'gs'
    | 'gt'
    | 'gu'
    | 'gw'
    | 'gy'
    | 'hk'
    | 'hm'
    | 'hn'
    | 'hr'
    | 'ht'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'im'
    | 'in'
    | 'io'
    | 'iq'
    | 'ir'
    | 'is'
    | 'it'
    | 'je'
    | 'jm'
    | 'jo'
    | 'jp'
    | 'ke'
    | 'kg'
    | 'kh'
    | 'ki'
    | 'km'
    | 'kn'
    | 'kp'
    | 'kr'
    | 'kw'
    | 'ky'
    | 'kz'
    | 'la'
    | 'lb'
    | 'lc'
    | 'li'
    | 'lk'
    | 'lr'
    | 'ls'
    | 'lt'
    | 'lu'
    | 'lv'
    | 'ly'
    | 'ma'
    | 'mc'
    | 'md'
    | 'me'
    | 'mg'
    | 'mh'
    | 'mk'
    | 'ml'
    | 'mm'
    | 'mn'
    | 'mo'
    | 'mp'
    | 'mq'
    | 'mr'
    | 'ms'
    | 'mt'
    | 'mu'
    | 'mv'
    | 'mw'
    | 'mx'
    | 'my'
    | 'mz'
    | 'na'
    | 'nc'
    | 'ne'
    | 'nf'
    | 'ng'
    | 'ni'
    | 'nl'
    | 'no'
    | 'np'
    | 'nr'
    | 'nu'
    | 'nz'
    | 'om'
    | 'pa'
    | 'pe'
    | 'pf'
    | 'pg'
    | 'ph'
    | 'pk'
    | 'pl'
    | 'pm'
    | 'pn'
    | 'pr'
    | 'ps'
    | 'pt'
    | 'pw'
    | 'py'
    | 'qa'
    | 're'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'rw'
    | 'sa'
    | 'sb'
    | 'sc'
    | 'sd'
    | 'se'
    | 'sg'
    | 'sh'
    | 'si'
    | 'sj'
    | 'sk'
    | 'sl'
    | 'sm'
    | 'sn'
    | 'so'
    | 'sr'
    | 'st'
    | 'sv'
    | 'sy'
    | 'sz'
    | 'tc'
    | 'td'
    | 'tf'
    | 'tg'
    | 'th'
    | 'tj'
    | 'tk'
    | 'tl'
    | 'tm'
    | 'tn'
    | 'to'
    | 'tr'
    | 'tt'
    | 'tv'
    | 'tw'
    | 'tz'
    | 'ua'
    | 'ug'
    | 'um'
    | 'us'
    | 'uy'
    | 'uz'
    | 'va'
    | 'vc'
    | 've'
    | 'vg'
    | 'vi'
    | 'vn'
    | 'vu'
    | 'wf'
    | 'ws'
    | 'ye'
    | 'yt'
    | 'za'
    | 'zm'
    | 'zw'
    | undefined
  owner_document_id?: string | undefined
  owner_document_type?: string | undefined
  passport?: string | undefined
  payment_date?: string | undefined
  pep?: string | undefined
  phone_number?: string | undefined
  professional_card?: string | undefined
  ptp?: string | undefined
  region?:
    | 'DF'
    | 'AC'
    | 'AL'
    | 'AP'
    | 'AM'
    | 'BA'
    | 'CE'
    | 'ES'
    | 'GO'
    | 'MA'
    | 'MT'
    | 'MS'
    | 'MG'
    | 'PA'
    | 'PB'
    | 'PR'
    | 'PE'
    | 'PI'
    | 'RJ'
    | 'RN'
    | 'RS'
    | 'RO'
    | 'RR'
    | 'SC'
    | 'SP'
    | 'SE'
    | 'TO'
    | undefined
  report_id?: string | undefined
  score: number
  scores?: Score[] | undefined
  status: 'not_started' | 'in_progress' | 'completed' | 'error' | 'delayed'
  statuses: Status[]
  summary: Summary
  tax_id?: string | undefined
  type: 'company' | 'person' | 'vehicle'
  update_date?: string | undefined
  vehicle_id?: string | undefined
  vehicle_summary?: VehicleSummary | undefined
  wrong_inputs?: WrongInput[] | undefined
}
type ChecksOutput = { checks: Check[]; next?: string | undefined; self: string }
type CreateCheckInput = {
  birth_certificate?: string | undefined
  company_name?: string | undefined
  country: 'ALL' | 'BR' | 'CL' | 'CO' | 'CR' | 'EC' | 'MX' | 'PE' | 'AR'
  date_of_birth?: string | undefined
  diplomatic_id?: string | undefined
  driver_license?: string | undefined
  escrow?: string | undefined
  first_name?: string | undefined
  force_creation?: boolean | undefined
  foreign_id?: string | undefined
  issue_date?: string | undefined
  last_name?: string | undefined
  license_plate?: string | undefined
  national_id?: string | undefined
  native_country?: string | undefined
  owner_document_id?: string | undefined
  owner_document_type?: string | undefined
  passport?: string | undefined
  payment_date?: string | undefined
  pep?: string | undefined
  phone_number?: string | undefined
  professional_card?: string | undefined
  ptp?: string | undefined
  region?:
    | 'DF'
    | 'AC'
    | 'AL'
    | 'AP'
    | 'AM'
    | 'BA'
    | 'CE'
    | 'ES'
    | 'GO'
    | 'MA'
    | 'MT'
    | 'MS'
    | 'MG'
    | 'PA'
    | 'PB'
    | 'PR'
    | 'PE'
    | 'PI'
    | 'RJ'
    | 'RN'
    | 'RS'
    | 'RO'
    | 'RR'
    | 'SC'
    | 'SP'
    | 'SE'
    | 'TO'
    | undefined
  report_id?: string | undefined
  state_id?: string | undefined
  tax_id?: string | undefined
  type: 'person' | 'vehicle' | 'company' | 'custom_type_name'
  user_authorized?: boolean | undefined
  vehicle_id?: string | undefined
  verification_code?: string | undefined
  watch?: string | undefined
}
type CheckOutput = { check: Check; details: string; self: string }
type Database = {
  data_sets?: string[] | undefined
  database_id?: string | undefined
  database_name?: string | undefined
  hourly_status?: string[] | undefined
}
type TableCell = { label: string; value: string }
type TableRow = { cells: TableCell[] }
type Table = { rows: TableRow[]; title: string }
type CheckDetails = {
  check_id: string
  data_set: string
  database_name: string
  group: 'profile' | 'legal' | 'affiliations' | 'vehicle' | 'global' | 'media' | 'unknown'
  id: string
  result: 'pending' | 'found' | 'not_found' | 'error'
  score: number
  tables: Table[]
}
type CheckDetailsOutput = { details: CheckDetails[]; next?: string | undefined; self: string }
type ScoreConfig = { data_set: string; weight: string }
type ScoreConfigOutput = { ScoreConfigByCountry?: ScoreConfig[] | undefined }
type ScoreConfigsOutput = { score_configs: ScoreConfigOutput[] }
type CreateConfigInput = {
  country: 'ALL' | 'BR' | 'CL' | 'CO' | 'CR' | 'EC' | 'MX' | 'PE' | 'AR'
  dataset_affiliations_and_insurances?: number | undefined
  dataset_alert_in_media?: number | undefined
  dataset_business_background?: number | undefined
  dataset_criminal_record?: number | undefined
  dataset_driving_licenses?: number | undefined
  dataset_international_background?: number | undefined
  dataset_legal_background?: number | undefined
  dataset_personal_identity?: number | undefined
  dataset_professional_background?: number | undefined
  dataset_taxes_and_finances?: number | undefined
  dataset_traffic_fines?: number | undefined
  dataset_vehicle_information?: number | undefined
  dataset_vehicle_permits?: number | undefined
  type: string
}
type ListContinuousChecksOutput = {
  continuous_checks?: Check[] | undefined
  next?: string | undefined
  self?: string | undefined
}
type CreateContinuousCheckInput = {
  check_id?: string | undefined
  frequency?: string | undefined
  status?: string | undefined
}
type Change = { dataset_score_changes?: number | undefined; score_changes?: Change[] | undefined }
type ContinuousCheckEntry = {
  changes?: Change[] | undefined
  check_id?: string | undefined
  continuous_check_id?: string | undefined
  creation_date?: string | undefined
  previous_check_id?: string | undefined
}
type ContinuousCheck = {
  ContinuousCheckID?: string | undefined
  ContinuousCheckStatus: 'new' | 'up' | 'down' | 'same'
  CreationDate?: string | undefined
  Enabled?: boolean | undefined
  Frequency: string
  History?: ContinuousCheckEntry | undefined
  LastCheckID: string
  NextRunDate?: string | undefined
  OriginalCheck?: Check | undefined
  UpdateDate?: string | undefined
}
type UpdateContinuousCheckInput = { frequency: string; status: 'enabled' | 'disabled' }
type GetContiuousCheckHistoryOutput = {
  history: Change[]
  next?: string | undefined
  self?: string | undefined
}
type Hook = {
  actions?: string[] | undefined
  event_type?: 'all' | 'check' | undefined
  signing_key?: string | undefined
  status?: 'enabled' | 'disabled' | undefined
  subscriber_type?: string | undefined
  subscriber_url?: string | undefined
}
type HookOutput = {
  hooks?: Hook[] | undefined
  next?: string | undefined
  self?: string | undefined
  signing_key?: string | undefined
}
type CreateHookInput = {
  actions?: string[] | undefined
  event_type: 'all' | 'check' | 'continuous_check'
  status?: 'enabled' | 'disabled' | undefined
  subscriber_address?: string | undefined
  subscriber_language?:
    | 'af'
    | 'ar'
    | 'ca'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'en'
    | 'es'
    | 'fi'
    | 'fr'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'ms'
    | 'nb'
    | 'nl'
    | 'pl'
    | 'pt'
    | 'pr-BR'
    | 'ro'
    | 'ru'
    | 'sv'
    | 'th'
    | 'tl'
    | 'tr'
    | 'vi'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | undefined
  subscriber_name?: string | undefined
  subscriber_type: 'web' | 'email'
  subscriber_url?: string | undefined
}
type Report = {
  created_by?: string | undefined
  created_checks_count?: number | undefined
  creation_date: string
  has_data?: boolean | undefined
  id: string
  invalid_checks_count?: number | undefined
  name: string
  size?: number | undefined
  update_date: string
}
type ReportsOutput = { next?: string | undefined; reports: Report[]; self: string }
type CreateReportInput = { name: string }
type ReportOutput = { checks: string; report: Report; self?: string | undefined }
type BatchUploadInput = { file: File[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/behavior': {
      $post:
        | {
            input: { json: CreateBehaviorInput } & { form: CreateBehaviorInput }
            output: BehaviourOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateBehaviorInput } & { form: CreateBehaviorInput }
            output: Error[]
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/checks': {
      $get: {
        input: { query: { start_key?: string | undefined; report_id?: string | undefined } }
        output: ChecksOutput
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { 'Truora-Priority'?: 'low' | 'medium' | 'high' | undefined } } & {
              json: CreateCheckInput
            } & { form: CreateCheckInput }
            output: CheckOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Truora-Priority'?: 'low' | 'medium' | 'high' | undefined } } & {
              json: CreateCheckInput
            } & { form: CreateCheckInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Truora-Priority'?: 'low' | 'medium' | 'high' | undefined } } & {
              json: CreateCheckInput
            } & { form: CreateCheckInput }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v1/checks/health': {
      $get: {
        input: {
          query: {
            country?: string | undefined
            unixTimestampSeconds?: string | undefined
            unixtimezoneOffsetSeconds?: string | undefined
          }
        }
        output: Database[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/checks/:check_id': {
      $get:
        | {
            input: { param: { check_id: string } }
            output: CheckOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { check_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/checks/:check_id/details': {
      $get: {
        input: { param: { check_id: string } } & {
          query: { start_key?: string | undefined; lang?: string | undefined }
        }
        output: CheckDetailsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/checks/:check_id/pdf': {
      $get:
        | {
            input: { param: { check_id: string } } & { query: { lang?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { check_id: string } } & { query: { lang?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | { input: { param: { check_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { check_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v1/config': {
      $delete: {
        input: {
          query: {
            type: string
            country?: 'BR' | 'CL' | 'CO' | 'CR' | 'EC' | 'MX' | 'PE' | 'ALL' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { query: { start_key?: string | undefined } }
        output: ScoreConfigsOutput
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: CreateConfigInput } & { form: CreateConfigInput }
            output: ScoreConfigOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateConfigInput } & { form: CreateConfigInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
      $put: {
        input: { json: CreateConfigInput } & { form: CreateConfigInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/continuous-checks': {
      $get: { input: {}; output: ListContinuousChecksOutput; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: CreateContinuousCheckInput } & { form: CreateContinuousCheckInput }
            output: ContinuousCheck
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateContinuousCheckInput } & { form: CreateContinuousCheckInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/continuous-checks/:continuous_check_id': {
      $get: {
        input: { param: { continuous_check_id: number } }
        output: ContinuousCheck
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { continuous_check_id: number } } & { json: UpdateContinuousCheckInput } & {
          form: UpdateContinuousCheckInput
        }
        output: ContinuousCheck
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/continuous-checks/:continuous_check_id/history': {
      $get: {
        input: { param: { continuous_check_id: string } }
        output: GetContiuousCheckHistoryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/hooks': {
      $get: { input: {}; output: HookOutput; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: CreateHookInput } & { form: CreateHookInput }
            output: Hook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateHookInput } & { form: CreateHookInput }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/v1/hooks/:hook_id': {
      $delete: {
        input: { param: { hook_id: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { hook_id: string } } & { json: CreateHookInput } & {
              form: CreateHookInput
            }
            output: Hook
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { hook_id: string } } & { json: CreateHookInput } & {
              form: CreateHookInput
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/reports': {
      $get: {
        input: { query: { start_key?: string | undefined; username?: string | undefined } }
        output: ReportsOutput
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: CreateReportInput } & { form: CreateReportInput }
            output: ReportOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateReportInput } & { form: CreateReportInput }
            output: ReportOutput
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/reports/:report_id': {
      $get:
        | {
            input: { param: { report_id: string } }
            output: ReportOutput
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { report_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v1/reports/:report_id/upload': {
      $post:
        | {
            input: { param: { report_id: string } } & { form: BatchUploadInput }
            output: ReportOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_id: string } } & { form: BatchUploadInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes

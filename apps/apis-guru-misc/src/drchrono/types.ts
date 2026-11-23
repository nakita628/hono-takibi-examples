type PatientAllergy = {
  description?: string | undefined
  doctor: number
  id?: number | undefined
  notes?: string | undefined
  patient: number
  reaction?: string | undefined
  rxnorm?: string | undefined
  snomed_reaction?:
    | ''
    | '14669001'
    | '39579001'
    | '57676002'
    | '43724002'
    | '49727002'
    | '386661006'
    | '25064002'
    | '247472004'
    | '271795006'
    | '68962001'
    | '68235000'
    | '422587007'
    | '95388000'
    | '271807003'
    | '271825005'
    | '64531003'
    | '267036007'
    | '162397003'
    | '65124004'
    | undefined
  status?: 'active' | 'inactive' | undefined
}
type PatientAmendment = {
  amendment_file: string
  amendment_name: string
  appointment?: number | undefined
  comments?: string | undefined
  doctor: number
  id?: number | undefined
  patient: number
}
type AppointmentProfile = {
  archived?: boolean | undefined
  color: string
  doctor?: number | undefined
  duration?: number | undefined
  id?: number | undefined
  name: string
  online_scheduling: boolean
  reason?: string | undefined
  sort_order?: number | undefined
}
type AppointmentTemplate = {
  archived?: boolean | undefined
  date_end?: string | undefined
  date_start?: string | undefined
  duration?: number | undefined
  exam_room: number
  id?: number | undefined
  office: number
  open_slots?: { end?: string | undefined; start?: string | undefined }[] | undefined
  profile: number
  scheduled_time: string
  week_days: number[]
}
type Appointment = {
  allow_overlapping?: boolean | undefined
  appt_is_break?: boolean | undefined
  base_recurring_appointment?: string | undefined
  billing_notes?:
    | {
        appointment?: number | undefined
        created_at?: string | undefined
        created_by?: string | undefined
        id?: number | undefined
        text?: string | undefined
      }[]
    | undefined
  billing_provider?: string | undefined
  billing_status?: string | undefined
  clinical_note?:
    | { locked?: boolean | undefined; pdf?: string | undefined; updated_at?: string | undefined }
    | undefined
  cloned_from?: number | undefined
  color?: string | undefined
  created_at?: string | undefined
  custom_fields?:
    | {
        created_at?: string | undefined
        field_type?: number | undefined
        field_value?: string | undefined
        updated_at?: string | undefined
      }[]
    | undefined
  custom_vitals?: { value?: string | undefined; vital_type?: number | undefined }[] | undefined
  deleted_flag?: boolean | undefined
  doctor: number
  duration?: number | undefined
  exam_room: number
  extended_updated_at?: string | undefined
  first_billed_date?: string | undefined
  icd10_codes?: string[] | undefined
  icd9_codes?: string[] | undefined
  id?: string | undefined
  ins1_status?:
    | ''
    | 'Incomplete Information'
    | 'In Process Emdeon'
    | 'Rejected Emdeon'
    | 'Rejected Jopari'
    | 'In Process Payor'
    | 'Rejected Waystar Professional'
    | 'Rejected Waystar Institutional'
    | 'In Process Payer'
    | 'Payer Acknowledged'
    | 'Rejected Payor'
    | 'Rejected Payer'
    | 'Paid in Full'
    | 'Partially Paid'
    | 'Coordination of Benefits'
    | 'ERA Received'
    | 'ERA Denied'
    | 'HCFA Form Faxed'
    | undefined
  ins2_status?:
    | ''
    | 'Incomplete Information'
    | 'In Process Emdeon'
    | 'Rejected Emdeon'
    | 'Rejected Jopari'
    | 'In Process Payor'
    | 'Rejected Waystar Professional'
    | 'Rejected Waystar Institutional'
    | 'In Process Payer'
    | 'Payer Acknowledged'
    | 'Rejected Payor'
    | 'Rejected Payer'
    | 'Paid in Full'
    | 'Partially Paid'
    | 'Coordination of Benefits'
    | 'ERA Received'
    | 'ERA Denied'
    | 'HCFA Form Faxed'
    | undefined
  is_virtual_base?: boolean | undefined
  is_walk_in?: boolean | undefined
  last_billed_date?: string | undefined
  notes?: string | undefined
  office: number
  patient: number
  primary_insurance_id_number?: string | undefined
  primary_insurer_name?: string | undefined
  primary_insurer_payer_id?: string | undefined
  profile?: number | undefined
  reason?: string | undefined
  recurring_appointment?: boolean | undefined
  reminder_profile?: string | undefined
  reminders?:
    | {
        id?: number | undefined
        scheduled_time?: string | undefined
        type?: 'email' | 'sms' | 'phone' | 'auto_call' | undefined
      }[]
    | undefined
  scheduled_time: string
  secondary_insurance_id_number?: string | undefined
  secondary_insurer_name?: string | undefined
  secondary_insurer_payer_id?: string | undefined
  status?:
    | ''
    | 'Arrived'
    | 'Checked In'
    | 'Checked In Online'
    | 'In Room'
    | 'In Session'
    | 'Complete'
    | 'Confirmed'
    | 'Not Confirmed'
    | 'Rescheduled'
    | 'Cancelled'
    | 'No Show'
    | undefined
  status_transitions?:
    | {
        appointment?: string | undefined
        datetime?: string | undefined
        from_status?: string | undefined
        to_status?: string | undefined
      }[]
    | undefined
  supervising_provider?: string | undefined
  updated_at?: string | undefined
  vitals?:
    | {
        blood_pressure_1?: number | undefined
        blood_pressure_2?: number | undefined
        bmi?: string | undefined
        head_circumference?: number | undefined
        head_circumference_units?: string | undefined
        height?: number | undefined
        height_units?: string | undefined
        oxygen_saturation?: number | undefined
        pain?: string | undefined
        pulse?: number | undefined
        respiratory_rate?: number | undefined
        smoking_status?:
          | 'blank'
          | '449868002'
          | '428041000124106'
          | '8517006'
          | '266919005'
          | '77176002'
          | '266927001'
          | '428071000124103'
          | '428061000124105'
          | undefined
        temperature?: number | undefined
        temperature_units?: string | undefined
        weight?: number | undefined
        weight_units?: string | undefined
      }
    | undefined
}
type BillingProfile = {
  archived?: boolean | undefined
  cpt_codes?:
    | {
        code?: string | undefined
        diagnosis_pointers_icd10?: string[] | undefined
        diagnosis_pointers_icd9?: string[] | undefined
        modifiers?: string[] | undefined
        ndc_code?:
          | {
              ndc_package_code?: string | undefined
              quantity?: string | undefined
              units?: 'F2' | 'GR' | 'ME' | 'ML' | 'UN' | undefined
            }[]
          | undefined
        price?: string | undefined
        quantity?: string | undefined
      }[]
    | undefined
  created_at?: string | undefined
  custom_procedure_codes?:
    | { code?: string | undefined; price?: string | undefined; quantity?: string | undefined }[]
    | undefined
  doctor?: string | undefined
  hcpcs_codes?:
    | {
        code?: string | undefined
        diagnosis_pointers_icd10?: string[] | undefined
        diagnosis_pointers_icd9?: string[] | undefined
        modifiers?: string[] | undefined
        ndc_code?:
          | {
              ndc_package_code?: string | undefined
              quantity?: string | undefined
              units?: 'F2' | 'GR' | 'ME' | 'ML' | 'UN' | undefined
            }[]
          | undefined
        price?: string | undefined
        quantity?: string | undefined
      }[]
    | undefined
  icd10_codes?: string[] | undefined
  icd9_codes?: string[] | undefined
  id?: number | undefined
  name?: string | undefined
  updated_at?: string | undefined
}
type CarePlan = {
  appointment?: string | undefined
  code?: string | undefined
  code_system?: string | undefined
  created_at?: string | undefined
  description?: string | undefined
  id?: number | undefined
  instructions?: string | undefined
  patient?: string | undefined
  plan_type?: '1' | '2' | '3' | '4' | '5' | '6' | undefined
  scheduled_date?: string | undefined
  title?: string | undefined
  updated_at?: string | undefined
}
type CareTeamMember = {
  appointment?: string | undefined
  created_at?: string | undefined
  id?: number | undefined
  patient?: string | undefined
  user?: string | undefined
}
type ClaimBillingNotes = {
  appointment: number
  created_at?: string | undefined
  created_by?: string | undefined
  id?: number | undefined
  text?: string | undefined
}
type SoapNoteLineItemFieldType = {
  allowed_values?: string[] | undefined
  archived?: boolean | undefined
  clinical_note_template?: string | undefined
  comment?: string | undefined
  data_type?: string | undefined
  id?: number | undefined
  name?: string | undefined
  required?: boolean | undefined
}
type SoapNoteLineItemFieldValue = {
  appointment: number
  clinical_note_field: number
  created_at?: string | undefined
  id?: number | undefined
  updated_at?: string | undefined
  value: string
}
type SoapNoteCustomReport = {
  archived?: boolean | undefined
  clinical_note_fields?:
    | {
        allowed_values?: string[] | undefined
        archived?: boolean | undefined
        clinical_note_template?: number | undefined
        data_type?: string | undefined
        name?: string | undefined
        required?: boolean | undefined
      }[]
    | undefined
  doctor?: string | undefined
  id?: number | undefined
  is_onpatient?: boolean | undefined
  is_persistent?: boolean | undefined
  name?: string | undefined
  order?: { on_complete_note?: number | undefined; on_ipad?: number | undefined } | undefined
  updated_at?: string | undefined
}
type ClinicalNote = {
  appointment?: string | undefined
  archived?: boolean | undefined
  clinical_note_sections?:
    | {
        clinical_note_template?: number | undefined
        name?: string | undefined
        values?:
          | {
              clinical_note_field?: number | undefined
              id?: number | undefined
              value?: string | undefined
            }[]
          | undefined
      }[]
    | undefined
  patient?: string | undefined
}
type PhoneCallLog = {
  appointment?: number | undefined
  archived?: boolean | undefined
  author?: string | undefined
  cash_charged?: number | undefined
  created_at?: string | undefined
  doctor: number
  duration?: number | undefined
  id?: number | undefined
  message?: string | undefined
  patient: number
  scheduled_time?: string | undefined
  title?: string | undefined
  type?: string | undefined
  updated_at?: string | undefined
}
type ConsentForm = {
  archived?: boolean | undefined
  assign_by_default: boolean
  created_at?: string | undefined
  doctor: number
  id?: number | undefined
  is_mandatory: boolean
  order?: number | undefined
  title: string
  updated_at?: string | undefined
  uri: string
}
type CustomAppointmentFieldType = {
  archived?: boolean | undefined
  created_at?: string | undefined
  doctor?: string | undefined
  field_desc?: string | undefined
  field_name?: string | undefined
  id?: number | undefined
  order?: number | undefined
  updated_at?: string | undefined
}
type CustomPatientFieldType = {
  allowed_values?: string | undefined
  archived?: boolean | undefined
  description?: string | undefined
  doctor: number
  id?: number | undefined
  name: string
  template_name?: string | undefined
}
type CustomInsurancePlanName = {
  archived?: boolean | undefined
  created_at?: string | undefined
  doctor?: string | undefined
  id?: number | undefined
  insurance_plan_name?: string | undefined
  updated_at?: string | undefined
  user?: string | undefined
}
type CustomVitalType = {
  allowed_values?: string[] | undefined
  archived?: boolean | undefined
  data_type?: 'text' | 'number' | 'single_sel' | undefined
  description?: string | undefined
  doctor?: string | undefined
  fraction_delimiter?: string | undefined
  id?: number | undefined
  is_fraction_field?: boolean | undefined
  name?: string | undefined
  unit?: string | undefined
}
type Doctor = {
  cell_phone?: string | undefined
  country?:
    | 'BD'
    | 'WF'
    | 'BF'
    | 'BG'
    | 'BA'
    | 'BB'
    | 'BE'
    | 'BL'
    | 'BM'
    | 'BN'
    | 'BO'
    | 'JP'
    | 'BI'
    | 'BJ'
    | 'BT'
    | 'JM'
    | 'BV'
    | 'JO'
    | 'WS'
    | 'BQ'
    | 'BR'
    | 'BS'
    | 'JE'
    | 'BY'
    | 'BZ'
    | 'RU'
    | 'RW'
    | 'RS'
    | 'TL'
    | 'RE'
    | 'TM'
    | 'TJ'
    | 'RO'
    | 'TK'
    | 'GW'
    | 'GU'
    | 'GT'
    | 'GS'
    | 'GR'
    | 'GQ'
    | 'GP'
    | 'BH'
    | 'GY'
    | 'GG'
    | 'GF'
    | 'GE'
    | 'GD'
    | 'GB'
    | 'GA'
    | 'GN'
    | 'GM'
    | 'GL'
    | 'KW'
    | 'GI'
    | 'GH'
    | 'OM'
    | 'TN'
    | 'BW'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'HK'
    | 'HN'
    | 'HM'
    | 'KR'
    | 'AD'
    | 'PR'
    | 'PS'
    | 'PW'
    | 'PT'
    | 'KN'
    | 'PY'
    | 'AI'
    | 'PA'
    | 'PF'
    | 'PG'
    | 'PE'
    | 'PK'
    | 'PH'
    | 'PN'
    | 'PL'
    | 'PM'
    | 'ZM'
    | 'EH'
    | 'EE'
    | 'EG'
    | 'ZA'
    | 'EC'
    | 'AL'
    | 'AO'
    | 'KZ'
    | 'ET'
    | 'ZW'
    | 'KY'
    | 'ES'
    | 'ER'
    | 'ME'
    | 'MD'
    | 'MG'
    | 'MF'
    | 'MA'
    | 'MC'
    | 'UZ'
    | 'MM'
    | 'ML'
    | 'MO'
    | 'MN'
    | 'MH'
    | 'MK'
    | 'MU'
    | 'MT'
    | 'MW'
    | 'MV'
    | 'MQ'
    | 'MP'
    | 'MS'
    | 'MR'
    | 'AU'
    | 'UG'
    | 'MY'
    | 'MX'
    | 'MZ'
    | 'FR'
    | 'AW'
    | 'AF'
    | 'AX'
    | 'FI'
    | 'FJ'
    | 'FK'
    | 'FM'
    | 'FO'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NA'
    | 'VU'
    | 'NC'
    | 'NE'
    | 'NF'
    | 'NG'
    | 'NZ'
    | 'NP'
    | 'NR'
    | 'NU'
    | 'CK'
    | 'CI'
    | 'CH'
    | 'CO'
    | 'CN'
    | 'CM'
    | 'CL'
    | 'CC'
    | 'CA'
    | 'CG'
    | 'CF'
    | 'CD'
    | 'CZ'
    | 'CY'
    | 'CX'
    | 'CR'
    | 'KP'
    | 'CW'
    | 'CV'
    | 'CU'
    | 'SZ'
    | 'SY'
    | 'SX'
    | 'KG'
    | 'KE'
    | 'SS'
    | 'SR'
    | 'KI'
    | 'KH'
    | 'SV'
    | 'KM'
    | 'ST'
    | 'SK'
    | 'SJ'
    | 'SI'
    | 'SH'
    | 'SO'
    | 'SN'
    | 'SM'
    | 'SL'
    | 'SC'
    | 'SB'
    | 'SA'
    | 'SG'
    | 'SE'
    | 'SD'
    | 'DO'
    | 'DM'
    | 'DJ'
    | 'DK'
    | 'DE'
    | 'YE'
    | 'AT'
    | 'DZ'
    | 'US'
    | 'UY'
    | 'YT'
    | 'UM'
    | 'LB'
    | 'LC'
    | 'LA'
    | 'TV'
    | 'TW'
    | 'TT'
    | 'TR'
    | 'LK'
    | 'LI'
    | 'LV'
    | 'TO'
    | 'LT'
    | 'LU'
    | 'LR'
    | 'LS'
    | 'TH'
    | 'TF'
    | 'TG'
    | 'TD'
    | 'TC'
    | 'LY'
    | 'VA'
    | 'VC'
    | 'AE'
    | 'VE'
    | 'AG'
    | 'VG'
    | 'IQ'
    | 'VI'
    | 'IS'
    | 'IR'
    | 'AM'
    | 'IT'
    | 'VN'
    | 'AQ'
    | 'AS'
    | 'AR'
    | 'IM'
    | 'IL'
    | 'IO'
    | 'IN'
    | 'TZ'
    | 'AZ'
    | 'IE'
    | 'ID'
    | 'UA'
    | 'QA'
    | undefined
  email?: string | undefined
  first_name?: string | undefined
  group_npi_number?: string | undefined
  home_phone?: string | undefined
  id?: number | undefined
  is_account_suspended?: boolean | undefined
  job_title?:
    | ''
    | 'Provider/Staff (Private Practice)'
    | 'Provider/Staff (Hospital)'
    | 'Patients/Interview Candidate'
    | 'Educator/Student'
    | 'API/Developer'
    | 'Consultant'
    | 'Other'
    | undefined
  last_name?: string | undefined
  npi_number?: string | undefined
  office_phone?: string | undefined
  practice_group?: string | undefined
  practice_group_name?: string | undefined
  profile_picture?: string | undefined
  specialty?: string | undefined
  suffix?: string | undefined
  timezone?: string | undefined
  website?: string | undefined
}
type ScannedClinicalDocument = {
  archived?: boolean | undefined
  date: string
  description: string
  doctor: number
  document: string
  id?: number | undefined
  metatags?: string | undefined
  patient: number
  updated_at?: string | undefined
}
type Coverage = {
  appointment?: string | undefined
  cob_level?: string | undefined
  coverage_details?: string | undefined
  coverage_subscriber?: string | undefined
  eligibility?: string | undefined
  patient?: string | undefined
  payer_name?: string | undefined
  query_date?: string | undefined
  request_service_type?:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '23'
    | '24'
    | '25'
    | '26'
    | '27'
    | '28'
    | '30'
    | '32'
    | '33'
    | '34'
    | '35'
    | '36'
    | '37'
    | '38'
    | '39'
    | '40'
    | '41'
    | '42'
    | '43'
    | '44'
    | '45'
    | '46'
    | '47'
    | '48'
    | '49'
    | '50'
    | '51'
    | '52'
    | '53'
    | '54'
    | '55'
    | '56'
    | '57'
    | '58'
    | '59'
    | '60'
    | '61'
    | '62'
    | '63'
    | '64'
    | '65'
    | '66'
    | '67'
    | '68'
    | '69'
    | '70'
    | '71'
    | '72'
    | '73'
    | '74'
    | '75'
    | '76'
    | '77'
    | '78'
    | '79'
    | '80'
    | '81'
    | '82'
    | '83'
    | '84'
    | '85'
    | '86'
    | '87'
    | '88'
    | '89'
    | '90'
    | '91'
    | '92'
    | '93'
    | '94'
    | '95'
    | '96'
    | '97'
    | '98'
    | '99'
    | 'A0'
    | 'A1'
    | 'A2'
    | 'A3'
    | 'A4'
    | 'A5'
    | 'A6'
    | 'A7'
    | 'A8'
    | 'A9'
    | 'AA'
    | 'AB'
    | 'AC'
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AH'
    | 'AI'
    | 'AJ'
    | 'AK'
    | 'AL'
    | 'AM'
    | 'AN'
    | 'AO'
    | 'AQ'
    | 'AR'
    | 'B1'
    | 'B2'
    | 'B3'
    | 'BA'
    | 'BB'
    | 'BC'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BK'
    | 'BL'
    | 'BM'
    | 'BN'
    | 'BP'
    | 'BQ'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BU'
    | 'BV'
    | 'BW'
    | 'BX'
    | 'BY'
    | 'BZ'
    | 'C1'
    | 'CA'
    | 'CB'
    | 'CC'
    | 'CD'
    | 'CE'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CJ'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CP'
    | 'CQ'
    | 'DG'
    | 'DM'
    | 'DS'
    | 'GF'
    | 'GN'
    | 'GY'
    | 'IC'
    | 'MH'
    | 'NI'
    | 'ON'
    | 'PT'
    | 'PU'
    | 'RN'
    | 'RT'
    | 'TC'
    | 'TN'
    | 'UC'
    | undefined
  service_type_description?: string | undefined
}
type EOBObject = {
  check_date?: string | undefined
  deposit_date?: string | undefined
  doctor: number
  id?: number | undefined
  insurance_payer_id: string
  insurance_payer_name: string
  insurance_payer_trace_number: string
  payment_method?: '' | 'ACH' | 'BOPCCP' | 'BOPCTX' | 'CHK' | 'FWT' | 'VPAY' | 'NON' | undefined
  posted_date?: string | undefined
  scanned_eob?: string | undefined
  total_paid?: number | undefined
  updated_at?: string | undefined
}
type DoctorFeeSchedule = {
  allowed_amount?: number | undefined
  base_price?: number | undefined
  billing_description?: string | undefined
  cash_price?: number | undefined
  code?: string | undefined
  code_type?: 'CPT' | 'HCPCS' | 'Custom' | 'ICD9' | 'ICD10' | 'Revenue' | undefined
  cpt_hcpcs_modifier1?: string | undefined
  cpt_hcpcs_modifier2?:
    | ''
    | '17'
    | '1D'
    | '22'
    | '23'
    | '24'
    | '25'
    | '26'
    | '29'
    | '32'
    | '33'
    | '47'
    | '50'
    | '51'
    | '52'
    | '53'
    | '54'
    | '55'
    | '56'
    | '57'
    | '58'
    | '59'
    | '62'
    | '63'
    | '66'
    | '73'
    | '74'
    | '76'
    | '77'
    | '78'
    | '79'
    | '80'
    | '81'
    | '82'
    | '83'
    | '90'
    | '91'
    | '92'
    | '93'
    | '95'
    | '96'
    | '97'
    | '99'
    | 'A1'
    | 'A2'
    | 'A3'
    | 'A4'
    | 'A5'
    | 'A6'
    | 'A7'
    | 'A8'
    | 'A9'
    | 'AA'
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AH'
    | 'AI'
    | 'AJ'
    | 'AK'
    | 'AM'
    | 'AO'
    | 'AP'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AV'
    | 'AW'
    | 'AX'
    | 'AY'
    | 'AZ'
    | 'BA'
    | 'BL'
    | 'BO'
    | 'BP'
    | 'BR'
    | 'BU'
    | 'CA'
    | 'CB'
    | 'CC'
    | 'CD'
    | 'CE'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CJ'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CP'
    | 'CQ'
    | 'CR'
    | 'CS'
    | 'CT'
    | 'DA'
    | 'E1'
    | 'E2'
    | 'E3'
    | 'E4'
    | 'EA'
    | 'EB'
    | 'EC'
    | 'ED'
    | 'EE'
    | 'EJ'
    | 'EM'
    | 'EP'
    | 'ER'
    | 'ET'
    | 'EX'
    | 'EY'
    | 'F1'
    | 'F2'
    | 'F3'
    | 'F4'
    | 'F5'
    | 'F6'
    | 'F7'
    | 'F8'
    | 'F9'
    | 'FA'
    | 'FB'
    | 'FC'
    | 'FP'
    | 'FX'
    | 'FY'
    | 'G0'
    | 'G1'
    | 'G2'
    | 'G3'
    | 'G4'
    | 'G5'
    | 'G6'
    | 'G7'
    | 'G8'
    | 'G9'
    | 'GA'
    | 'GB'
    | 'GC'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GJ'
    | 'GK'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GO'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GV'
    | 'GW'
    | 'GX'
    | 'GY'
    | 'GZ'
    | 'H9'
    | 'HA'
    | 'HB'
    | 'HC'
    | 'HD'
    | 'HE'
    | 'HF'
    | 'HG'
    | 'HH'
    | 'HI'
    | 'HJ'
    | 'HK'
    | 'HL'
    | 'HM'
    | 'HN'
    | 'HO'
    | 'HP'
    | 'HQ'
    | 'HR'
    | 'HS'
    | 'HT'
    | 'HU'
    | 'HV'
    | 'HW'
    | 'HX'
    | 'HY'
    | 'HZ'
    | 'J1'
    | 'J2'
    | 'J3'
    | 'J4'
    | 'JA'
    | 'JB'
    | 'JC'
    | 'JD'
    | 'JE'
    | 'JF'
    | 'JG'
    | 'JW'
    | 'K0'
    | 'K1'
    | 'K2'
    | 'K3'
    | 'K4'
    | 'KA'
    | 'KB'
    | 'KC'
    | 'KD'
    | 'KE'
    | 'KF'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KJ'
    | 'KK'
    | 'KL'
    | 'KM'
    | 'KN'
    | 'KO'
    | 'KP'
    | 'KQ'
    | 'KR'
    | 'KS'
    | 'KT'
    | 'KU'
    | 'KV'
    | 'KW'
    | 'KX'
    | 'KY'
    | 'KZ'
    | 'L1'
    | 'LC'
    | 'LD'
    | 'LL'
    | 'LM'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'M2'
    | 'ME'
    | 'MI'
    | 'MR'
    | 'MS'
    | 'NB'
    | 'NH'
    | 'NM'
    | 'NR'
    | 'NU'
    | 'P1'
    | 'P2'
    | 'P3'
    | 'P4'
    | 'P5'
    | 'P6'
    | 'PA'
    | 'PB'
    | 'PC'
    | 'PD'
    | 'PE'
    | 'PI'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PO'
    | 'PS'
    | 'PT'
    | 'Q0'
    | 'Q1'
    | 'Q2'
    | 'Q3'
    | 'Q4'
    | 'Q5'
    | 'Q6'
    | 'Q7'
    | 'Q8'
    | 'Q9'
    | 'QA'
    | 'QB'
    | 'QC'
    | 'QD'
    | 'QE'
    | 'QF'
    | 'QG'
    | 'QH'
    | 'QJ'
    | 'QK'
    | 'QL'
    | 'QM'
    | 'QN'
    | 'QP'
    | 'QQ'
    | 'QR'
    | 'QS'
    | 'QT'
    | 'QU'
    | 'QV'
    | 'QW'
    | 'QX'
    | 'QY'
    | 'QZ'
    | 'RA'
    | 'RB'
    | 'RC'
    | 'RD'
    | 'RE'
    | 'RI'
    | 'RP'
    | 'RR'
    | 'RT'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SD'
    | 'SE'
    | 'SF'
    | 'SG'
    | 'SH'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SP'
    | 'SQ'
    | 'SS'
    | 'ST'
    | 'SU'
    | 'SV'
    | 'SW'
    | 'SY'
    | 'SZ'
    | 'T1'
    | 'T2'
    | 'T3'
    | 'T4'
    | 'T5'
    | 'T6'
    | 'T7'
    | 'T8'
    | 'T9'
    | 'TA'
    | 'TB'
    | 'TC'
    | 'TD'
    | 'TE'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TP'
    | 'TQ'
    | 'TR'
    | 'TS'
    | 'TT'
    | 'TU'
    | 'TV'
    | 'TW'
    | 'TX'
    | 'U1'
    | 'U2'
    | 'U3'
    | 'U4'
    | 'U5'
    | 'U6'
    | 'U7'
    | 'U8'
    | 'U9'
    | 'UA'
    | 'UB'
    | 'UC'
    | 'UD'
    | 'UE'
    | 'UF'
    | 'UG'
    | 'UH'
    | 'UJ'
    | 'UK'
    | 'UN'
    | 'UP'
    | 'UQ'
    | 'UR'
    | 'US'
    | 'V1'
    | 'V2'
    | 'V3'
    | 'V4'
    | 'V5'
    | 'V6'
    | 'V7'
    | 'V8'
    | 'V9'
    | 'VP'
    | 'VR'
    | 'W1'
    | 'W5'
    | 'W6'
    | 'W7'
    | 'W8'
    | 'W9'
    | 'WC'
    | 'WH'
    | 'WP'
    | 'X1'
    | 'X2'
    | 'X3'
    | 'X4'
    | 'X5'
    | 'XE'
    | 'XP'
    | 'XS'
    | 'XU'
    | 'VM'
    | 'ZA'
    | 'ZB'
    | 'ZL'
    | 'ZS'
    | '1P'
    | '2P'
    | '3P'
    | '8P'
    | undefined
  cpt_hcpcs_modifier3?:
    | ''
    | '17'
    | '1D'
    | '22'
    | '23'
    | '24'
    | '25'
    | '26'
    | '29'
    | '32'
    | '33'
    | '47'
    | '50'
    | '51'
    | '52'
    | '53'
    | '54'
    | '55'
    | '56'
    | '57'
    | '58'
    | '59'
    | '62'
    | '63'
    | '66'
    | '73'
    | '74'
    | '76'
    | '77'
    | '78'
    | '79'
    | '80'
    | '81'
    | '82'
    | '83'
    | '90'
    | '91'
    | '92'
    | '93'
    | '95'
    | '96'
    | '97'
    | '99'
    | 'A1'
    | 'A2'
    | 'A3'
    | 'A4'
    | 'A5'
    | 'A6'
    | 'A7'
    | 'A8'
    | 'A9'
    | 'AA'
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AH'
    | 'AI'
    | 'AJ'
    | 'AK'
    | 'AM'
    | 'AO'
    | 'AP'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AV'
    | 'AW'
    | 'AX'
    | 'AY'
    | 'AZ'
    | 'BA'
    | 'BL'
    | 'BO'
    | 'BP'
    | 'BR'
    | 'BU'
    | 'CA'
    | 'CB'
    | 'CC'
    | 'CD'
    | 'CE'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CJ'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CP'
    | 'CQ'
    | 'CR'
    | 'CS'
    | 'CT'
    | 'DA'
    | 'E1'
    | 'E2'
    | 'E3'
    | 'E4'
    | 'EA'
    | 'EB'
    | 'EC'
    | 'ED'
    | 'EE'
    | 'EJ'
    | 'EM'
    | 'EP'
    | 'ER'
    | 'ET'
    | 'EX'
    | 'EY'
    | 'F1'
    | 'F2'
    | 'F3'
    | 'F4'
    | 'F5'
    | 'F6'
    | 'F7'
    | 'F8'
    | 'F9'
    | 'FA'
    | 'FB'
    | 'FC'
    | 'FP'
    | 'FX'
    | 'FY'
    | 'G0'
    | 'G1'
    | 'G2'
    | 'G3'
    | 'G4'
    | 'G5'
    | 'G6'
    | 'G7'
    | 'G8'
    | 'G9'
    | 'GA'
    | 'GB'
    | 'GC'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GJ'
    | 'GK'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GO'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GV'
    | 'GW'
    | 'GX'
    | 'GY'
    | 'GZ'
    | 'H9'
    | 'HA'
    | 'HB'
    | 'HC'
    | 'HD'
    | 'HE'
    | 'HF'
    | 'HG'
    | 'HH'
    | 'HI'
    | 'HJ'
    | 'HK'
    | 'HL'
    | 'HM'
    | 'HN'
    | 'HO'
    | 'HP'
    | 'HQ'
    | 'HR'
    | 'HS'
    | 'HT'
    | 'HU'
    | 'HV'
    | 'HW'
    | 'HX'
    | 'HY'
    | 'HZ'
    | 'J1'
    | 'J2'
    | 'J3'
    | 'J4'
    | 'JA'
    | 'JB'
    | 'JC'
    | 'JD'
    | 'JE'
    | 'JF'
    | 'JG'
    | 'JW'
    | 'K0'
    | 'K1'
    | 'K2'
    | 'K3'
    | 'K4'
    | 'KA'
    | 'KB'
    | 'KC'
    | 'KD'
    | 'KE'
    | 'KF'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KJ'
    | 'KK'
    | 'KL'
    | 'KM'
    | 'KN'
    | 'KO'
    | 'KP'
    | 'KQ'
    | 'KR'
    | 'KS'
    | 'KT'
    | 'KU'
    | 'KV'
    | 'KW'
    | 'KX'
    | 'KY'
    | 'KZ'
    | 'L1'
    | 'LC'
    | 'LD'
    | 'LL'
    | 'LM'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'M2'
    | 'ME'
    | 'MI'
    | 'MR'
    | 'MS'
    | 'NB'
    | 'NH'
    | 'NM'
    | 'NR'
    | 'NU'
    | 'P1'
    | 'P2'
    | 'P3'
    | 'P4'
    | 'P5'
    | 'P6'
    | 'PA'
    | 'PB'
    | 'PC'
    | 'PD'
    | 'PE'
    | 'PI'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PO'
    | 'PS'
    | 'PT'
    | 'Q0'
    | 'Q1'
    | 'Q2'
    | 'Q3'
    | 'Q4'
    | 'Q5'
    | 'Q6'
    | 'Q7'
    | 'Q8'
    | 'Q9'
    | 'QA'
    | 'QB'
    | 'QC'
    | 'QD'
    | 'QE'
    | 'QF'
    | 'QG'
    | 'QH'
    | 'QJ'
    | 'QK'
    | 'QL'
    | 'QM'
    | 'QN'
    | 'QP'
    | 'QQ'
    | 'QR'
    | 'QS'
    | 'QT'
    | 'QU'
    | 'QV'
    | 'QW'
    | 'QX'
    | 'QY'
    | 'QZ'
    | 'RA'
    | 'RB'
    | 'RC'
    | 'RD'
    | 'RE'
    | 'RI'
    | 'RP'
    | 'RR'
    | 'RT'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SD'
    | 'SE'
    | 'SF'
    | 'SG'
    | 'SH'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SP'
    | 'SQ'
    | 'SS'
    | 'ST'
    | 'SU'
    | 'SV'
    | 'SW'
    | 'SY'
    | 'SZ'
    | 'T1'
    | 'T2'
    | 'T3'
    | 'T4'
    | 'T5'
    | 'T6'
    | 'T7'
    | 'T8'
    | 'T9'
    | 'TA'
    | 'TB'
    | 'TC'
    | 'TD'
    | 'TE'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TP'
    | 'TQ'
    | 'TR'
    | 'TS'
    | 'TT'
    | 'TU'
    | 'TV'
    | 'TW'
    | 'TX'
    | 'U1'
    | 'U2'
    | 'U3'
    | 'U4'
    | 'U5'
    | 'U6'
    | 'U7'
    | 'U8'
    | 'U9'
    | 'UA'
    | 'UB'
    | 'UC'
    | 'UD'
    | 'UE'
    | 'UF'
    | 'UG'
    | 'UH'
    | 'UJ'
    | 'UK'
    | 'UN'
    | 'UP'
    | 'UQ'
    | 'UR'
    | 'US'
    | 'V1'
    | 'V2'
    | 'V3'
    | 'V4'
    | 'V5'
    | 'V6'
    | 'V7'
    | 'V8'
    | 'V9'
    | 'VP'
    | 'VR'
    | 'W1'
    | 'W5'
    | 'W6'
    | 'W7'
    | 'W8'
    | 'W9'
    | 'WC'
    | 'WH'
    | 'WP'
    | 'X1'
    | 'X2'
    | 'X3'
    | 'X4'
    | 'X5'
    | 'XE'
    | 'XP'
    | 'XS'
    | 'XU'
    | 'VM'
    | 'ZA'
    | 'ZB'
    | 'ZL'
    | 'ZS'
    | '1P'
    | '2P'
    | '3P'
    | '8P'
    | undefined
  cpt_hcpcs_modifier4?:
    | ''
    | '17'
    | '1D'
    | '22'
    | '23'
    | '24'
    | '25'
    | '26'
    | '29'
    | '32'
    | '33'
    | '47'
    | '50'
    | '51'
    | '52'
    | '53'
    | '54'
    | '55'
    | '56'
    | '57'
    | '58'
    | '59'
    | '62'
    | '63'
    | '66'
    | '73'
    | '74'
    | '76'
    | '77'
    | '78'
    | '79'
    | '80'
    | '81'
    | '82'
    | '83'
    | '90'
    | '91'
    | '92'
    | '93'
    | '95'
    | '96'
    | '97'
    | '99'
    | 'A1'
    | 'A2'
    | 'A3'
    | 'A4'
    | 'A5'
    | 'A6'
    | 'A7'
    | 'A8'
    | 'A9'
    | 'AA'
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AH'
    | 'AI'
    | 'AJ'
    | 'AK'
    | 'AM'
    | 'AO'
    | 'AP'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AV'
    | 'AW'
    | 'AX'
    | 'AY'
    | 'AZ'
    | 'BA'
    | 'BL'
    | 'BO'
    | 'BP'
    | 'BR'
    | 'BU'
    | 'CA'
    | 'CB'
    | 'CC'
    | 'CD'
    | 'CE'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CJ'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CP'
    | 'CQ'
    | 'CR'
    | 'CS'
    | 'CT'
    | 'DA'
    | 'E1'
    | 'E2'
    | 'E3'
    | 'E4'
    | 'EA'
    | 'EB'
    | 'EC'
    | 'ED'
    | 'EE'
    | 'EJ'
    | 'EM'
    | 'EP'
    | 'ER'
    | 'ET'
    | 'EX'
    | 'EY'
    | 'F1'
    | 'F2'
    | 'F3'
    | 'F4'
    | 'F5'
    | 'F6'
    | 'F7'
    | 'F8'
    | 'F9'
    | 'FA'
    | 'FB'
    | 'FC'
    | 'FP'
    | 'FX'
    | 'FY'
    | 'G0'
    | 'G1'
    | 'G2'
    | 'G3'
    | 'G4'
    | 'G5'
    | 'G6'
    | 'G7'
    | 'G8'
    | 'G9'
    | 'GA'
    | 'GB'
    | 'GC'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GJ'
    | 'GK'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GO'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GV'
    | 'GW'
    | 'GX'
    | 'GY'
    | 'GZ'
    | 'H9'
    | 'HA'
    | 'HB'
    | 'HC'
    | 'HD'
    | 'HE'
    | 'HF'
    | 'HG'
    | 'HH'
    | 'HI'
    | 'HJ'
    | 'HK'
    | 'HL'
    | 'HM'
    | 'HN'
    | 'HO'
    | 'HP'
    | 'HQ'
    | 'HR'
    | 'HS'
    | 'HT'
    | 'HU'
    | 'HV'
    | 'HW'
    | 'HX'
    | 'HY'
    | 'HZ'
    | 'J1'
    | 'J2'
    | 'J3'
    | 'J4'
    | 'JA'
    | 'JB'
    | 'JC'
    | 'JD'
    | 'JE'
    | 'JF'
    | 'JG'
    | 'JW'
    | 'K0'
    | 'K1'
    | 'K2'
    | 'K3'
    | 'K4'
    | 'KA'
    | 'KB'
    | 'KC'
    | 'KD'
    | 'KE'
    | 'KF'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KJ'
    | 'KK'
    | 'KL'
    | 'KM'
    | 'KN'
    | 'KO'
    | 'KP'
    | 'KQ'
    | 'KR'
    | 'KS'
    | 'KT'
    | 'KU'
    | 'KV'
    | 'KW'
    | 'KX'
    | 'KY'
    | 'KZ'
    | 'L1'
    | 'LC'
    | 'LD'
    | 'LL'
    | 'LM'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'M2'
    | 'ME'
    | 'MI'
    | 'MR'
    | 'MS'
    | 'NB'
    | 'NH'
    | 'NM'
    | 'NR'
    | 'NU'
    | 'P1'
    | 'P2'
    | 'P3'
    | 'P4'
    | 'P5'
    | 'P6'
    | 'PA'
    | 'PB'
    | 'PC'
    | 'PD'
    | 'PE'
    | 'PI'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PO'
    | 'PS'
    | 'PT'
    | 'Q0'
    | 'Q1'
    | 'Q2'
    | 'Q3'
    | 'Q4'
    | 'Q5'
    | 'Q6'
    | 'Q7'
    | 'Q8'
    | 'Q9'
    | 'QA'
    | 'QB'
    | 'QC'
    | 'QD'
    | 'QE'
    | 'QF'
    | 'QG'
    | 'QH'
    | 'QJ'
    | 'QK'
    | 'QL'
    | 'QM'
    | 'QN'
    | 'QP'
    | 'QQ'
    | 'QR'
    | 'QS'
    | 'QT'
    | 'QU'
    | 'QV'
    | 'QW'
    | 'QX'
    | 'QY'
    | 'QZ'
    | 'RA'
    | 'RB'
    | 'RC'
    | 'RD'
    | 'RE'
    | 'RI'
    | 'RP'
    | 'RR'
    | 'RT'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SD'
    | 'SE'
    | 'SF'
    | 'SG'
    | 'SH'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SP'
    | 'SQ'
    | 'SS'
    | 'ST'
    | 'SU'
    | 'SV'
    | 'SW'
    | 'SY'
    | 'SZ'
    | 'T1'
    | 'T2'
    | 'T3'
    | 'T4'
    | 'T5'
    | 'T6'
    | 'T7'
    | 'T8'
    | 'T9'
    | 'TA'
    | 'TB'
    | 'TC'
    | 'TD'
    | 'TE'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TP'
    | 'TQ'
    | 'TR'
    | 'TS'
    | 'TT'
    | 'TU'
    | 'TV'
    | 'TW'
    | 'TX'
    | 'U1'
    | 'U2'
    | 'U3'
    | 'U4'
    | 'U5'
    | 'U6'
    | 'U7'
    | 'U8'
    | 'U9'
    | 'UA'
    | 'UB'
    | 'UC'
    | 'UD'
    | 'UE'
    | 'UF'
    | 'UG'
    | 'UH'
    | 'UJ'
    | 'UK'
    | 'UN'
    | 'UP'
    | 'UQ'
    | 'UR'
    | 'US'
    | 'V1'
    | 'V2'
    | 'V3'
    | 'V4'
    | 'V5'
    | 'V6'
    | 'V7'
    | 'V8'
    | 'V9'
    | 'VP'
    | 'VR'
    | 'W1'
    | 'W5'
    | 'W6'
    | 'W7'
    | 'W8'
    | 'W9'
    | 'WC'
    | 'WH'
    | 'WP'
    | 'X1'
    | 'X2'
    | 'X3'
    | 'X4'
    | 'X5'
    | 'XE'
    | 'XP'
    | 'XS'
    | 'XU'
    | 'VM'
    | 'ZA'
    | 'ZB'
    | 'ZL'
    | 'ZS'
    | '1P'
    | '2P'
    | '3P'
    | '8P'
    | undefined
  created_at?: string | undefined
  description?: string | undefined
  doctor?: number | undefined
  id?: number | undefined
  insured_out_of_network_price?: number | undefined
  insured_price?: number | undefined
  ndc_code?: string | undefined
  ndc_quantity?: number | undefined
  ndc_units?: 'F2' | 'GR' | 'ME' | 'ML' | 'UN' | undefined
  office?: number | undefined
  payer_id?: string | undefined
  picklist_category?: string | undefined
  plan_name?: string | undefined
  updated_at?: string | undefined
}
type ImplantableDevice = {
  archived?: boolean | undefined
  brand_name?: string | undefined
  company_name?: string | undefined
  created_at?: string | undefined
  expiration_date?: string | undefined
  gmdn_pt_name?: string | undefined
  id?: number | undefined
  manufacturing_date?: string | undefined
  patient?: string | undefined
  procedure?: string | undefined
  serial_number?: string | undefined
  status?: 'active' | 'inactive' | undefined
  udi?: string | undefined
  updated_at?: string | undefined
  version_or_model?: string | undefined
}
type Insurance = {
  payer_id?: string | undefined
  payer_name?: string | undefined
  state?: string | undefined
}
type InventoryCategory = {
  archived?: boolean | undefined
  category_type?: 'vaccine' | 'product' | 'service' | undefined
  created_at?: string | undefined
  doctor?: string | undefined
  id?: number | undefined
  name?: string | undefined
  updated_at?: string | undefined
}
type InventoryVaccine = {
  category?: number | undefined
  cost?: number | undefined
  created_at?: string | undefined
  current_quantity?: number | undefined
  cvx_code?: string | undefined
  doctor: number
  expiry?: string | undefined
  id?: number | undefined
  lot_number?: string | undefined
  manufacturer?: string | undefined
  manufacturer_code: string
  name: string
  note?: string | undefined
  original_quantity?: number | undefined
  price?: number | undefined
  price_with_tax?: number | undefined
  sales_tax_applicable?: boolean | undefined
  status?: 'active' | 'inactive' | 'archived' | 'voided' | undefined
  updated_at?: string | undefined
  vaccination_type?: string | undefined
}
type LabOrderDocument = {
  document: string
  id?: number | undefined
  lab_order: number
  timestamp?: string | undefined
  type: 'REQ' | 'ABN' | 'R-A' | 'RES'
}
type LabOrder = {
  accession_number?: string | undefined
  doctor: number
  documents?: string[] | undefined
  icd10_codes?: { code?: string | undefined; description?: string | undefined }[] | undefined
  id?: number | undefined
  notes?: string | undefined
  patient: number
  priority?: 'N' | 'S' | undefined
  requisition_id?: string | undefined
  status?: string | undefined
  sublab: number
  timestamp?: string | undefined
}
type LabResult = {
  abnormal_status?:
    | 'L'
    | 'LL'
    | 'H'
    | 'HH'
    | '<'
    | '>'
    | 'A'
    | 'AA'
    | 'S'
    | 'R'
    | 'I'
    | 'NEG'
    | 'POS'
    | 'N'
    | ''
    | undefined
  comments?: string | undefined
  document: number
  group_code?: string | undefined
  id?: number | undefined
  is_abnormal?: string | undefined
  lab_order?: string | undefined
  lab_test: number
  normal_range?: string | undefined
  observation_code?: string | undefined
  observation_description?: string | undefined
  specimen_received?: string | undefined
  status: 'P' | 'I' | 'C' | 'F' | 'X'
  test_performed: string
  unit?: string | undefined
  value: string
  value_is_numeric?: boolean | undefined
}
type LabTest = {
  code?: string | undefined
  collection_date?: string | undefined
  description?: string | undefined
  id?: number | undefined
  internal_notes?: string | undefined
  lab_order: number
  name?: string | undefined
  report_notes?: string | undefined
  specimen_condition?: string | undefined
  specimen_source?: string | undefined
  specimen_total_volume?: number | undefined
  status?: 'P' | 'I' | 'C' | 'F' | 'X' | undefined
}
type BillingLineItem = {
  adjustment?: number | undefined
  allowed?: number | undefined
  appointment: number
  balance_ins?: number | undefined
  balance_pt?: number | undefined
  balance_total?: string | undefined
  billed?: number | undefined
  billing_status?:
    | ''
    | 'Incomplete Information'
    | 'In Process Emdeon'
    | 'In Process iHCFA'
    | 'In Process Gateway'
    | 'In Process Jopari'
    | 'In Process Waystar'
    | 'Rejected Emdeon'
    | 'Rejected iHCFA'
    | 'Rejected Gateway'
    | 'Rejected Jopari'
    | 'Rejected Waystar'
    | 'In Process Payer'
    | 'Payer Acknowledged'
    | 'Rejected Payer'
    | 'Paid in Full'
    | 'Partially Paid'
    | 'Coordination of Benefits'
    | 'ERA Received'
    | 'ERA Denied'
    | undefined
  code: string
  denied_flag?: boolean | undefined
  description?: string | undefined
  diagnosis_pointers: string[]
  doctor?: string | undefined
  expected_reimbursement?: number | undefined
  id?: number | undefined
  ins1_paid?: number | undefined
  ins2_paid?: number | undefined
  ins3_paid?: number | undefined
  ins_total?: string | undefined
  insurance_status?: string | undefined
  modifiers?: string[] | undefined
  paid_total?: string | undefined
  patient?: string | undefined
  posted_date?: string | undefined
  price?: number | undefined
  procedure_type: 'C' | 'H' | 'U' | 'S'
  pt_paid?: number | undefined
  quantity?: number | undefined
  service_date?: string | undefined
  units?: string | undefined
  updated_at?: string | undefined
}
type PatientDrug = {
  appointment?: number | undefined
  date_prescribed?: string | undefined
  date_started_taking?: string | undefined
  date_stopped_taking?: string | undefined
  daw?: boolean | undefined
  dispense_quantity?: number | undefined
  doctor: number
  dosage_quantity?: string | undefined
  dosage_units?: string | undefined
  frequency?: string | undefined
  id?: number | undefined
  indication?: string | undefined
  name?: string | undefined
  ndc?: string | undefined
  notes?: string | undefined
  number_refills?: number | undefined
  order_status?:
    | ''
    | 'Ordered'
    | 'Administered during visit'
    | 'Electronic eRx Sent'
    | 'Phoned into Pharmacy'
    | 'Faxed to Pharmacy'
    | 'Paper Rx'
    | 'Prescription Printed'
    | 'Discontinued'
    | 'Prescribed by other Dr'
    | 'Over the Counter'
    | undefined
  patient: number
  pharmacy_note?: string | undefined
  prn?: boolean | undefined
  route?: string | undefined
  rxnorm?: string | undefined
  signature_note?: string | undefined
  status?: 'active' | 'inactive' | undefined
}
type DoctorMessage = {
  archived?: boolean | undefined
  attachment?: string | undefined
  doctor: number
  id?: number | undefined
  message_notes?:
    | {
        created_at?: string | undefined
        created_by?: string | undefined
        text?: string | undefined
      }[]
    | undefined
  owner?: string | undefined
  patient?: number | undefined
  read?: boolean | undefined
  received_at?: string | undefined
  responsible_user?: string | undefined
  starred?: boolean | undefined
  title: string
  type?:
    | 'GP'
    | 'GC'
    | 'GT'
    | 'GZ'
    | 'IF'
    | 'OF'
    | 'IL'
    | 'IR'
    | 'OR'
    | 'IE'
    | 'OA'
    | 'PO'
    | 'PI'
    | 'PM'
    | 'OO'
    | 'OD'
    | 'ID'
    | 'DL'
    | 'CN'
    | undefined
  updated_at?: string | undefined
  workflow_step?: string | undefined
}
type Office = {
  address?: string | undefined
  archived?: boolean | undefined
  city?: string | undefined
  country?:
    | ''
    | 'AF'
    | 'AX'
    | 'AL'
    | 'DZ'
    | 'AS'
    | 'AD'
    | 'AO'
    | 'AI'
    | 'AQ'
    | 'AG'
    | 'AR'
    | 'AM'
    | 'AW'
    | 'AU'
    | 'AT'
    | 'AZ'
    | 'BS'
    | 'BH'
    | 'BD'
    | 'BB'
    | 'BY'
    | 'BE'
    | 'BZ'
    | 'BJ'
    | 'BM'
    | 'BT'
    | 'BO'
    | 'BQ'
    | 'BA'
    | 'BW'
    | 'BV'
    | 'BR'
    | 'IO'
    | 'BN'
    | 'BG'
    | 'BF'
    | 'BI'
    | 'KH'
    | 'CM'
    | 'CA'
    | 'CV'
    | 'KY'
    | 'CF'
    | 'TD'
    | 'CL'
    | 'CN'
    | 'CX'
    | 'CC'
    | 'CO'
    | 'KM'
    | 'CG'
    | 'CD'
    | 'CK'
    | 'CR'
    | 'CI'
    | 'HR'
    | 'CU'
    | 'CW'
    | 'CY'
    | 'CZ'
    | 'CYM'
    | 'DK'
    | 'DJ'
    | 'DM'
    | 'DO'
    | 'EC'
    | 'EG'
    | 'SV'
    | 'GQ'
    | 'ER'
    | 'EE'
    | 'ET'
    | 'FK'
    | 'FO'
    | 'FJ'
    | 'FI'
    | 'FR'
    | 'GF'
    | 'PF'
    | 'TF'
    | 'GA'
    | 'GM'
    | 'GE'
    | 'DE'
    | 'GH'
    | 'GI'
    | 'GR'
    | 'GL'
    | 'GD'
    | 'GP'
    | 'GU'
    | 'GT'
    | 'GG'
    | 'GN'
    | 'GW'
    | 'GY'
    | 'HT'
    | 'HM'
    | 'VA'
    | 'HN'
    | 'HK'
    | 'HU'
    | 'IS'
    | 'IN'
    | 'ID'
    | 'IR'
    | 'IQ'
    | 'IE'
    | 'IM'
    | 'IL'
    | 'IT'
    | 'JM'
    | 'JP'
    | 'JE'
    | 'JO'
    | 'KZ'
    | 'KE'
    | 'KI'
    | 'KP'
    | 'KR'
    | 'XK'
    | 'KW'
    | 'KG'
    | 'LA'
    | 'LV'
    | 'LB'
    | 'LS'
    | 'LR'
    | 'LY'
    | 'LI'
    | 'LT'
    | 'LU'
    | 'MO'
    | 'MK'
    | 'MG'
    | 'MW'
    | 'MY'
    | 'MV'
    | 'ML'
    | 'MT'
    | 'MH'
    | 'MQ'
    | 'MR'
    | 'MU'
    | 'YT'
    | 'MX'
    | 'FM'
    | 'MD'
    | 'MC'
    | 'MN'
    | 'ME'
    | 'MS'
    | 'MA'
    | 'MZ'
    | 'MM'
    | 'NA'
    | 'NR'
    | 'NP'
    | 'NL'
    | 'NC'
    | 'NZ'
    | 'NI'
    | 'NE'
    | 'NG'
    | 'NU'
    | 'NF'
    | 'MP'
    | 'NO'
    | 'OM'
    | 'PK'
    | 'PW'
    | 'PS'
    | 'PA'
    | 'PG'
    | 'PY'
    | 'PE'
    | 'PH'
    | 'PN'
    | 'PL'
    | 'PT'
    | 'PR'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RU'
    | 'RW'
    | 'BL'
    | 'SH'
    | 'KN'
    | 'LC'
    | 'MF'
    | 'PM'
    | 'VC'
    | 'WS'
    | 'SM'
    | 'ST'
    | 'SA'
    | 'SN'
    | 'RS'
    | 'SC'
    | 'SL'
    | 'SG'
    | 'SX'
    | 'SK'
    | 'SI'
    | 'SB'
    | 'SO'
    | 'ZA'
    | 'GS'
    | 'SS'
    | 'ES'
    | 'LK'
    | 'SD'
    | 'SR'
    | 'SJ'
    | 'SZ'
    | 'SE'
    | 'CH'
    | 'SY'
    | 'TW'
    | 'TJ'
    | 'TZ'
    | 'TH'
    | 'TL'
    | 'TG'
    | 'TK'
    | 'TO'
    | 'TT'
    | 'TN'
    | 'TR'
    | 'TM'
    | 'TC'
    | 'TV'
    | 'UG'
    | 'UA'
    | 'AE'
    | 'GB'
    | 'US'
    | 'UM'
    | 'UY'
    | 'UZ'
    | 'VU'
    | 'VE'
    | 'VN'
    | 'VG'
    | 'VI'
    | 'WF'
    | 'EH'
    | 'YE'
    | 'ZM'
    | 'ZW'
    | undefined
  doctor?: string | undefined
  end_time?: string | undefined
  exam_rooms?: string | undefined
  fax_number?: string | undefined
  id?: number | undefined
  name?: string | undefined
  online_scheduling?: boolean | undefined
  online_timeslots?:
    | { day?: number | undefined; hour?: number | undefined; minute?: number | undefined }[]
    | undefined
  phone_number?: string | undefined
  start_time?: string | undefined
  state?:
    | 'AL'
    | 'AK'
    | 'AS'
    | 'AZ'
    | 'AR'
    | 'AA'
    | 'AE'
    | 'AP'
    | 'CA'
    | 'CO'
    | 'CT'
    | 'DE'
    | 'DC'
    | 'FL'
    | 'GA'
    | 'GU'
    | 'HI'
    | 'ID'
    | 'IL'
    | 'IN'
    | 'IA'
    | 'KS'
    | 'KY'
    | 'LA'
    | 'ME'
    | 'MD'
    | 'MA'
    | 'MI'
    | 'MN'
    | 'MS'
    | 'MO'
    | 'MT'
    | 'NE'
    | 'NV'
    | 'NH'
    | 'NJ'
    | 'NM'
    | 'NY'
    | 'NC'
    | 'ND'
    | 'MP'
    | 'OH'
    | 'OK'
    | 'OR'
    | 'PA'
    | 'PR'
    | 'RI'
    | 'SC'
    | 'SD'
    | 'TN'
    | 'TX'
    | 'UT'
    | 'VT'
    | 'VI'
    | 'VA'
    | 'WA'
    | 'WV'
    | 'WI'
    | 'WY'
    | undefined
  tax_id_number_professional?: string | undefined
  zip_code?: string | undefined
}
type PatientCommunication = {
  code?: string | undefined
  code_system?: string | undefined
  created_at?: string | undefined
  doctor: number
  effective_time?: string | undefined
  id?: number | undefined
  name?: string | undefined
  patient: number
  value_code?: string | undefined
  value_code_system?: string | undefined
  value_name?: string | undefined
}
type PatientFlagType = {
  archived?: boolean | undefined
  color?: string | undefined
  created_at?: string | undefined
  doctor: number
  id?: number | undefined
  name: string
  priority?: number | undefined
  updated_at?: string | undefined
}
type PatientIntervention = {
  code?: string | undefined
  code_system?: string | undefined
  created_at?: string | undefined
  doctor: number
  effective_time?: string | undefined
  id?: number | undefined
  name?: string | undefined
  patient: number
  value_code?: string | undefined
  value_code_system?: string | undefined
  value_name?: string | undefined
}
type PatientLabResultSet = {
  created_at?: string | undefined
  date_test_performed?: string | undefined
  doctor_comments?: string | undefined
  doctor_signoff?: boolean | undefined
  id?: number | undefined
  lab_abnormal_flag?:
    | ''
    | 'L'
    | 'H'
    | 'LL'
    | 'HH'
    | '<'
    | '>'
    | 'N'
    | 'A'
    | 'AA'
    | 'null'
    | 'U'
    | 'D'
    | 'B'
    | 'W'
    | 'S'
    | 'R'
    | 'I'
    | 'MS'
    | 'VS'
    | undefined
  lab_imported_from_ccr?: string | undefined
  lab_normal_range?: string | undefined
  lab_normal_range_units?: string | undefined
  lab_order_status?:
    | ''
    | 'Order Entered'
    | 'Discontinued'
    | 'In Progress'
    | 'Results Received'
    | 'Results Reviewed with Patient'
    | 'Paper Order'
    | undefined
  lab_result_value?: string | undefined
  lab_result_value_as_float?: number | undefined
  lab_result_value_units?: string | undefined
  loinc_code?: string | undefined
  ordering_doctor: number
  patient: number
  scanned_in_result?: string | undefined
  title?: string | undefined
  updated_at?: string | undefined
}
type PatientMessage = {
  attachments?:
    | {
        attachment?: string | undefined
        created_at?: string | undefined
        doctor?: number | undefined
        updated_at?: string | undefined
      }[]
    | undefined
  body?: string | undefined
  created_at?: string | undefined
  doctor: number
  id?: number | undefined
  message?: string | undefined
  patient: number
  subject: string
  updated_at?: string | undefined
}
type CashPaymentLog = {
  action?: 'C' | 'U' | 'D' | 'F' | 'A' | undefined
  amount?: number | undefined
  appointment?: string | undefined
  created_by?: string | undefined
  doctor?: string | undefined
  id?: number | undefined
  patient?: string | undefined
  payment_method?:
    | 'CASH'
    | 'CHCK'
    | 'DBIT'
    | 'CRDT'
    | 'AMEX'
    | 'VISA'
    | 'MSTR'
    | 'DISC'
    | 'SQR1'
    | 'SQRE'
    | 'PTPA'
    | 'ONPT'
    | 'OTHR'
    | undefined
  source?: string | undefined
  updated_at?: string | undefined
}
type CashPayment = {
  amount?: number | undefined
  appointment?: number | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  doctor?: number | undefined
  id?: number | undefined
  line_item?: number | undefined
  notes?: string | undefined
  patient: number
  payment_method?:
    | 'CASH'
    | 'CHCK'
    | 'DBIT'
    | 'CRDT'
    | 'AMEX'
    | 'VISA'
    | 'MSTR'
    | 'DISC'
    | 'SQR1'
    | 'SQRE'
    | 'PTPA'
    | 'ONPT'
    | 'OTHR'
    | undefined
  payment_transaction_type?: '' | 'REF' | 'COR' | 'COPAY' | 'COINSR' | 'OTHR' | undefined
  posted_date?: string | undefined
  received_date?: string | undefined
  trace_number?: string | undefined
  updated_at?: string | undefined
}
type PatientPhysicalExam = {
  code?: string | undefined
  code_system?: string | undefined
  created_at?: string | undefined
  doctor: number
  effective_time?: string | undefined
  id?: number | undefined
  name?: string | undefined
  patient: number
  value_code?: string | undefined
  value_code_system?: string | undefined
  value_name?: string | undefined
}
type PatientRiskAssessment = {
  code?: string | undefined
  code_system?: string | undefined
  created_at?: string | undefined
  doctor: number
  effective_time?: string | undefined
  id?: number | undefined
  name?: string | undefined
  patient: number
  value_code?: string | undefined
  value_code_system?: string | undefined
  value_name?: string | undefined
}
type PatientVaccineRecord = {
  administered_at?: number | undefined
  administered_by?: string | undefined
  administration_start?: string | undefined
  amount?: number | undefined
  comments?: string | undefined
  completion_status?: 'CP' | 'RE' | 'NA' | 'PA' | undefined
  consent_form?: number | undefined
  cpt_code?: string | undefined
  created_at?: string | undefined
  cvx_code: string
  doses?:
    | {
        id?: number | undefined
        max_age_months?: number | undefined
        min_age_months?: number | undefined
        title?: string | undefined
      }[]
    | undefined
  entered_by?: string | undefined
  funding_eligibility?: 'V01' | 'V02' | 'V03' | 'V04' | 'V05' | 'V07' | undefined
  id?: number | undefined
  name: string
  next_dose_date?: string | undefined
  observed_immunity?:
    | '398102009'
    | '409498004'
    | '397428000'
    | '18624000'
    | '91428005'
    | '271511000'
    | '240532009'
    | '6142004'
    | '52947006'
    | '14189004'
    | '23511006'
    | '36989005'
    | '27836007'
    | '16814004'
    | '14168008'
    | '36653000'
    | '76902006'
    | '66071002'
    | '4834000'
    | '111852003'
    | '38907003'
    | '40468003'
    | '16541001'
    | undefined
  ordering_doctor?: number | undefined
  patient: number
  record_source?: '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | undefined
  route?: string | undefined
  site?: string | undefined
  units?: string | undefined
  updated_at?: string | undefined
  vaccine_inventory?: number | undefined
  vis?: string | undefined
}
type Patient = {
  address?: string | undefined
  auto_accident_insurance?:
    | {
        auto_accident_case_number?: string | undefined
        auto_accident_claim_rep_address?: string | undefined
        auto_accident_claim_rep_city?: string | undefined
        auto_accident_claim_rep_is_insurer?: boolean | undefined
        auto_accident_claim_rep_name?: string | undefined
        auto_accident_claim_rep_state?:
          | 'AL'
          | 'AK'
          | 'AS'
          | 'AZ'
          | 'AR'
          | 'AA'
          | 'AE'
          | 'AP'
          | 'CA'
          | 'CO'
          | 'CT'
          | 'DE'
          | 'DC'
          | 'FL'
          | 'GA'
          | 'GU'
          | 'HI'
          | 'ID'
          | 'IL'
          | 'IN'
          | 'IA'
          | 'KS'
          | 'KY'
          | 'LA'
          | 'ME'
          | 'MD'
          | 'MA'
          | 'MI'
          | 'MN'
          | 'MS'
          | 'MO'
          | 'MT'
          | 'NE'
          | 'NV'
          | 'NH'
          | 'NJ'
          | 'NM'
          | 'NY'
          | 'NC'
          | 'ND'
          | 'MP'
          | 'OH'
          | 'OK'
          | 'OR'
          | 'PA'
          | 'PR'
          | 'RI'
          | 'SC'
          | 'SD'
          | 'TN'
          | 'TX'
          | 'UT'
          | 'VT'
          | 'VI'
          | 'VA'
          | 'WA'
          | 'WV'
          | 'WI'
          | 'WY'
          | undefined
        auto_accident_claim_rep_zip?: string | undefined
        auto_accident_company?: string | undefined
        auto_accident_date_of_accident?: string | undefined
        auto_accident_disabled_from_date?: string | undefined
        auto_accident_disabled_to_date?: string | undefined
        auto_accident_had_similar_condition?: boolean | undefined
        auto_accident_is_subscriber_the_patient?: boolean | undefined
        auto_accident_notes?: string | undefined
        auto_accident_patient_relationship_to_subscriber?:
          | ''
          | '01'
          | '04'
          | '05'
          | '07'
          | '10'
          | '15'
          | '17'
          | '19'
          | '20'
          | '21'
          | '22'
          | '23'
          | '24'
          | '29'
          | '32'
          | '33'
          | '36'
          | '39'
          | '40'
          | '41'
          | '43'
          | '53'
          | '76'
          | 'G8'
          | undefined
        auto_accident_payer_address?: string | undefined
        auto_accident_payer_city?: string | undefined
        auto_accident_payer_id?: string | undefined
        auto_accident_payer_state?:
          | 'AL'
          | 'AK'
          | 'AS'
          | 'AZ'
          | 'AR'
          | 'AA'
          | 'AE'
          | 'AP'
          | 'CA'
          | 'CO'
          | 'CT'
          | 'DE'
          | 'DC'
          | 'FL'
          | 'GA'
          | 'GU'
          | 'HI'
          | 'ID'
          | 'IL'
          | 'IN'
          | 'IA'
          | 'KS'
          | 'KY'
          | 'LA'
          | 'ME'
          | 'MD'
          | 'MA'
          | 'MI'
          | 'MN'
          | 'MS'
          | 'MO'
          | 'MT'
          | 'NE'
          | 'NV'
          | 'NH'
          | 'NJ'
          | 'NM'
          | 'NY'
          | 'NC'
          | 'ND'
          | 'MP'
          | 'OH'
          | 'OK'
          | 'OR'
          | 'PA'
          | 'PR'
          | 'RI'
          | 'SC'
          | 'SD'
          | 'TN'
          | 'TX'
          | 'UT'
          | 'VT'
          | 'VI'
          | 'VA'
          | 'WA'
          | 'WV'
          | 'WI'
          | 'WY'
          | undefined
        auto_accident_payer_zip?: string | undefined
        auto_accident_policy_number?: string | undefined
        auto_accident_return_to_work_date?: string | undefined
        auto_accident_significant_injury?: 'YES' | 'NO' | 'N\\A' | undefined
        auto_accident_significant_injury_notes?: string | undefined
        auto_accident_similar_condition_date?: string | undefined
        auto_accident_similar_condition_notes?: string | undefined
        auto_accident_state_of_occurrence?:
          | 'AL'
          | 'AK'
          | 'AS'
          | 'AZ'
          | 'AR'
          | 'AA'
          | 'AE'
          | 'AP'
          | 'CA'
          | 'CO'
          | 'CT'
          | 'DE'
          | 'DC'
          | 'FL'
          | 'GA'
          | 'GU'
          | 'HI'
          | 'ID'
          | 'IL'
          | 'IN'
          | 'IA'
          | 'KS'
          | 'KY'
          | 'LA'
          | 'ME'
          | 'MD'
          | 'MA'
          | 'MI'
          | 'MN'
          | 'MS'
          | 'MO'
          | 'MT'
          | 'NE'
          | 'NV'
          | 'NH'
          | 'NJ'
          | 'NM'
          | 'NY'
          | 'NC'
          | 'ND'
          | 'MP'
          | 'OH'
          | 'OK'
          | 'OR'
          | 'PA'
          | 'PR'
          | 'RI'
          | 'SC'
          | 'SD'
          | 'TN'
          | 'TX'
          | 'UT'
          | 'VT'
          | 'VI'
          | 'VA'
          | 'WA'
          | 'WV'
          | 'WI'
          | 'WY'
          | undefined
        auto_accident_still_under_care?: boolean | undefined
        auto_accident_subscriber_address?: string | undefined
        auto_accident_subscriber_city?: string | undefined
        auto_accident_subscriber_date_of_birth?: string | undefined
        auto_accident_subscriber_first_name?: string | undefined
        auto_accident_subscriber_last_name?: string | undefined
        auto_accident_subscriber_middle_name?: string | undefined
        auto_accident_subscriber_phone_number?: string | undefined
        auto_accident_subscriber_social_security?: string | undefined
        auto_accident_subscriber_state?:
          | 'AL'
          | 'AK'
          | 'AS'
          | 'AZ'
          | 'AR'
          | 'AA'
          | 'AE'
          | 'AP'
          | 'CA'
          | 'CO'
          | 'CT'
          | 'DE'
          | 'DC'
          | 'FL'
          | 'GA'
          | 'GU'
          | 'HI'
          | 'ID'
          | 'IL'
          | 'IN'
          | 'IA'
          | 'KS'
          | 'KY'
          | 'LA'
          | 'ME'
          | 'MD'
          | 'MA'
          | 'MI'
          | 'MN'
          | 'MS'
          | 'MO'
          | 'MT'
          | 'NE'
          | 'NV'
          | 'NH'
          | 'NJ'
          | 'NM'
          | 'NY'
          | 'NC'
          | 'ND'
          | 'MP'
          | 'OH'
          | 'OK'
          | 'OR'
          | 'PA'
          | 'PR'
          | 'RI'
          | 'SC'
          | 'SD'
          | 'TN'
          | 'TX'
          | 'UT'
          | 'VT'
          | 'VI'
          | 'VA'
          | 'WA'
          | 'WV'
          | 'WI'
          | 'WY'
          | undefined
        auto_accident_subscriber_suffix?: string | undefined
        auto_accident_subscriber_zip_code?: string | undefined
        auto_accident_treatment_duration?: string | undefined
        auto_accident_will_require_therapy?: boolean | undefined
        auto_accident_will_require_therapy_rec?: string | undefined
      }
    | undefined
  cell_phone?: string | undefined
  chart_id?: string | undefined
  city?: string | undefined
  copay?: string | undefined
  custom_demographics?:
    | {
        field_type?: number | undefined
        updated_at?: string | undefined
        value?: string | undefined
      }[]
    | undefined
  date_of_birth?: string | undefined
  date_of_first_appointment?: string | undefined
  date_of_last_appointment?: string | undefined
  default_pharmacy?: string | undefined
  disable_sms_messages?: boolean | undefined
  doctor: number
  email?: string | undefined
  emergency_contact_name?: string | undefined
  emergency_contact_phone?: string | undefined
  emergency_contact_relation?: string | undefined
  employer?: string | undefined
  employer_address?: string | undefined
  employer_city?: string | undefined
  employer_state?: string | undefined
  employer_zip_code?: string | undefined
  ethnicity?: 'blank' | 'hispanic' | 'not_hispanic' | 'declined' | undefined
  first_name?: string | undefined
  gender: '' | 'Male' | 'Female' | 'Other' | 'UNK' | 'ASKU'
  home_phone?: string | undefined
  id?: number | undefined
  last_name?: string | undefined
  middle_name?: string | undefined
  nick_name?: string | undefined
  office_phone?: string | undefined
  offices?: number[] | undefined
  patient_flags?:
    | {
        archived?: boolean | undefined
        color?: string | undefined
        created_at?: string | undefined
        doctor?: number | undefined
        id?: number | undefined
        name?: string | undefined
        priority?: number | undefined
        updated_at?: string | undefined
      }[]
    | undefined
  patient_flags_attached?:
    | {
        archived?: boolean | undefined
        created_at?: string | undefined
        flag_text?: string | undefined
        flag_type?: number | undefined
        id?: number | undefined
        updated_at?: string | undefined
      }[]
    | undefined
  patient_payment_profile?:
    | ''
    | 'Cash'
    | 'Insurance'
    | 'Insurance Out of Network'
    | 'Auto Accident'
    | "Worker's Comp"
    | undefined
  patient_photo?: string | undefined
  patient_photo_date?: string | undefined
  patient_status?: 'A' | 'I' | 'D' | undefined
  preferred_language?:
    | 'blank'
    | 'eng'
    | 'zho'
    | 'fra'
    | 'ita'
    | 'jpn'
    | 'por'
    | 'rus'
    | 'spa'
    | 'other'
    | 'unknown'
    | 'declined'
    | undefined
  primary_care_physician?: string | undefined
  primary_insurance?:
    | {
        insurance_claim_office_number?: string | undefined
        insurance_company?: string | undefined
        insurance_group_name?: string | undefined
        insurance_group_number?: string | undefined
        insurance_id_number?: string | undefined
        insurance_payer_id?: string | undefined
        insurance_plan_name?: string | undefined
        insurance_plan_type?:
          | ''
          | 'AM'
          | 'BL'
          | 'CH'
          | 'CI'
          | '17'
          | 'DS'
          | '14'
          | 'FI'
          | 'HM'
          | '16'
          | '15'
          | 'LM'
          | 'MC'
          | 'MA'
          | 'MB'
          | 'ZZ'
          | 'OF'
          | '11'
          | '13'
          | '12'
          | 'TV'
          | 'VA'
          | 'WC'
          | undefined
        is_subscriber_the_patient?: boolean | undefined
        patient_relationship_to_subscriber?:
          | ''
          | '01'
          | '04'
          | '05'
          | '07'
          | '10'
          | '15'
          | '17'
          | '19'
          | '20'
          | '21'
          | '22'
          | '23'
          | '24'
          | '29'
          | '32'
          | '33'
          | '36'
          | '39'
          | '40'
          | '41'
          | '43'
          | '53'
          | '76'
          | 'G8'
          | undefined
        photo_back?: string | undefined
        photo_front?: string | undefined
        subscriber_address?: string | undefined
        subscriber_city?: string | undefined
        subscriber_country?:
          | ''
          | 'AF'
          | 'AX'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BQ'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CW'
          | 'CY'
          | 'CZ'
          | 'CYM'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GG'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IM'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JE'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'XK'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MK'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'ME'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'BL'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'MF'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'RS'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SX'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'SS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'US'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | undefined
        subscriber_date_of_birth?: string | undefined
        subscriber_first_name?: string | undefined
        subscriber_gender?: '' | 'Male' | 'Female' | 'Other' | 'UNK' | 'ASKU' | undefined
        subscriber_last_name?: string | undefined
        subscriber_middle_name?: string | undefined
        subscriber_social_security?: string | undefined
        subscriber_state?:
          | 'AL'
          | 'AK'
          | 'AS'
          | 'AZ'
          | 'AR'
          | 'AA'
          | 'AE'
          | 'AP'
          | 'CA'
          | 'CO'
          | 'CT'
          | 'DE'
          | 'DC'
          | 'FL'
          | 'GA'
          | 'GU'
          | 'HI'
          | 'ID'
          | 'IL'
          | 'IN'
          | 'IA'
          | 'KS'
          | 'KY'
          | 'LA'
          | 'ME'
          | 'MD'
          | 'MA'
          | 'MI'
          | 'MN'
          | 'MS'
          | 'MO'
          | 'MT'
          | 'NE'
          | 'NV'
          | 'NH'
          | 'NJ'
          | 'NM'
          | 'NY'
          | 'NC'
          | 'ND'
          | 'MP'
          | 'OH'
          | 'OK'
          | 'OR'
          | 'PA'
          | 'PR'
          | 'RI'
          | 'SC'
          | 'SD'
          | 'TN'
          | 'TX'
          | 'UT'
          | 'VT'
          | 'VI'
          | 'VA'
          | 'WA'
          | 'WV'
          | 'WI'
          | 'WY'
          | undefined
        subscriber_suffix?: string | undefined
        subscriber_zip_code?: string | undefined
      }
    | undefined
  race?:
    | 'blank'
    | 'indian'
    | 'asian'
    | 'black'
    | 'hawaiian'
    | 'white'
    | 'other'
    | 'declined'
    | undefined
  referring_doctor?:
    | {
        address?: string | undefined
        email?: string | undefined
        fax?: string | undefined
        first_name?: string | undefined
        last_name?: string | undefined
        middle_name?: string | undefined
        npi?: string | undefined
        phone?: string | undefined
        provider_number?: string | undefined
        provider_qualifier?: '' | '0B' | '1G' | 'G2' | undefined
        specialty?:
          | ''
          | 'Acupuncture'
          | 'Advanced Practice Midwife'
          | 'Aesthetic Medicine'
          | 'Aesthetician'
          | 'Allergist/Immunologist'
          | 'Anesthesiologist'
          | 'Cardiac Electrophysiologist'
          | 'Cardiologist'
          | 'Cardiothoracic Surgeon'
          | 'Child/Adolescent Psychiatry'
          | 'Chiropractor'
          | 'Clinical Social Worker'
          | 'Colorectal Surgeon'
          | 'Correactology'
          | 'Cosmetic Medicine'
          | 'Counselor Mental Health'
          | 'Counselor Professional'
          | 'Counselor'
          | 'Dentist'
          | 'Diabetology'
          | 'Dermatologist'
          | 'Diagnostic Medical Sonographer'
          | 'Dietitian, Registered'
          | 'Ear-Nose-Throat Specialist (ENT)'
          | 'Emergency Medicine Physician'
          | 'Endocrinologist'
          | 'Endodontist'
          | 'Epidemiologist'
          | 'Family Practitioner'
          | 'Gastroenterologist'
          | 'General Practice'
          | 'General Surgeon'
          | 'Geneticist'
          | 'Geriatrician'
          | 'Gerontologist'
          | 'Gynecologist (no OB)'
          | 'Gynegologic Oncologist'
          | 'Hand Surgeon'
          | 'Hematologist'
          | 'Home Care'
          | 'Hospice'
          | 'Hospitalist'
          | 'Infectious Disease Specialist'
          | 'Integrative and Functional Medicine'
          | 'Integrative Medicine'
          | 'Internist'
          | 'Interventional Radiology'
          | 'Laboratory Medicine Specialist'
          | 'Laser Surgery'
          | 'Massage Therapist'
          | 'Naturopathic Physician'
          | 'Neonatologist'
          | 'Nephrologist'
          | 'Neurologist'
          | 'Neuropsychology'
          | 'Neurosurgeon'
          | 'Not Actively Practicing'
          | 'Nuclear Medicine Specialist'
          | 'Nurse Practitioner'
          | 'Nursing'
          | 'Nutritionist'
          | 'Obstetrician/Gynecologist'
          | 'Occupational Medicine'
          | 'Occupational Therapist'
          | 'Oncologist'
          | 'Ophthalmologist'
          | 'Optometrist'
          | 'Oral Surgeon'
          | 'Orofacial Pain'
          | 'Orthodontist'
          | 'Orthopedic Surgeon'
          | 'Orthotist'
          | 'Other'
          | 'Pain Management Specialist'
          | 'Pathologist'
          | 'Pediatric Dentist'
          | 'Pediatric Gastroenterology'
          | 'Pediatric Surgeon'
          | 'Pediatrician'
          | 'Perinatologist'
          | 'Periodontist'
          | 'Physical Medicine and Rehab Specialist'
          | 'Physical Therapist'
          | 'Physician Assistant'
          | 'Plastic Surgeon'
          | 'Podiatrist'
          | 'Preventive-Aging Medicine'
          | 'Preventive Medicine/Occupational-Environmental Medicine'
          | 'Primary Care Physician'
          | 'Prosthetist'
          | 'Prosthodontist'
          | 'Psychiatrist'
          | 'Psychologist'
          | 'Public Health Professional'
          | 'Pulmonologist'
          | 'Radiation Oncologist'
          | 'Radiologist'
          | 'Registered Nurse'
          | 'Religious Nonmedical Practitioner'
          | 'Reproductive Endocrinologist'
          | 'Reproductive Medicine'
          | 'Rheumatologist'
          | 'Sleep Medicine'
          | 'Speech-Language Pathologist'
          | 'Sports Medicine Specialist'
          | 'Urologist'
          | 'Urgent Care'
          | 'Vascular Surgeon'
          | undefined
        suffix?: string | undefined
      }
    | undefined
  referring_source?: string | undefined
  responsible_party_email?: string | undefined
  responsible_party_name?: string | undefined
  responsible_party_phone?: string | undefined
  responsible_party_relation?: string | undefined
  secondary_insurance?:
    | {
        insurance_claim_office_number?: string | undefined
        insurance_company?: string | undefined
        insurance_group_name?: string | undefined
        insurance_group_number?: string | undefined
        insurance_id_number?: string | undefined
        insurance_payer_id?: string | undefined
        insurance_plan_name?: string | undefined
        insurance_plan_type?:
          | ''
          | 'AM'
          | 'BL'
          | 'CH'
          | 'CI'
          | '17'
          | 'DS'
          | '14'
          | 'FI'
          | 'HM'
          | '16'
          | '15'
          | 'LM'
          | 'MC'
          | 'MA'
          | 'MB'
          | 'ZZ'
          | 'OF'
          | '11'
          | '13'
          | '12'
          | 'TV'
          | 'VA'
          | 'WC'
          | undefined
        is_subscriber_the_patient?: boolean | undefined
        patient_relationship_to_subscriber?:
          | ''
          | '01'
          | '04'
          | '05'
          | '07'
          | '10'
          | '15'
          | '17'
          | '19'
          | '20'
          | '21'
          | '22'
          | '23'
          | '24'
          | '29'
          | '32'
          | '33'
          | '36'
          | '39'
          | '40'
          | '41'
          | '43'
          | '53'
          | '76'
          | 'G8'
          | undefined
        photo_back?: string | undefined
        photo_front?: string | undefined
        subscriber_address?: string | undefined
        subscriber_city?: string | undefined
        subscriber_country?:
          | ''
          | 'AF'
          | 'AX'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BQ'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CW'
          | 'CY'
          | 'CZ'
          | 'CYM'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GG'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IM'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JE'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'XK'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MK'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'ME'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'BL'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'MF'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'RS'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SX'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'SS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'US'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | undefined
        subscriber_date_of_birth?: string | undefined
        subscriber_first_name?: string | undefined
        subscriber_gender?: '' | 'Male' | 'Female' | 'Other' | 'UNK' | 'ASKU' | undefined
        subscriber_last_name?: string | undefined
        subscriber_middle_name?: string | undefined
        subscriber_social_security?: string | undefined
        subscriber_state?:
          | 'AL'
          | 'AK'
          | 'AS'
          | 'AZ'
          | 'AR'
          | 'AA'
          | 'AE'
          | 'AP'
          | 'CA'
          | 'CO'
          | 'CT'
          | 'DE'
          | 'DC'
          | 'FL'
          | 'GA'
          | 'GU'
          | 'HI'
          | 'ID'
          | 'IL'
          | 'IN'
          | 'IA'
          | 'KS'
          | 'KY'
          | 'LA'
          | 'ME'
          | 'MD'
          | 'MA'
          | 'MI'
          | 'MN'
          | 'MS'
          | 'MO'
          | 'MT'
          | 'NE'
          | 'NV'
          | 'NH'
          | 'NJ'
          | 'NM'
          | 'NY'
          | 'NC'
          | 'ND'
          | 'MP'
          | 'OH'
          | 'OK'
          | 'OR'
          | 'PA'
          | 'PR'
          | 'RI'
          | 'SC'
          | 'SD'
          | 'TN'
          | 'TX'
          | 'UT'
          | 'VT'
          | 'VI'
          | 'VA'
          | 'WA'
          | 'WV'
          | 'WI'
          | 'WY'
          | undefined
        subscriber_suffix?: string | undefined
        subscriber_zip_code?: string | undefined
      }
    | undefined
  social_security_number?: string | undefined
  state?: string | undefined
  tertiary_insurance?:
    | {
        insurance_claim_office_number?: string | undefined
        insurance_company?: string | undefined
        insurance_group_name?: string | undefined
        insurance_group_number?: string | undefined
        insurance_id_number?: string | undefined
        insurance_payer_id?: string | undefined
        insurance_plan_name?: string | undefined
        insurance_plan_type?:
          | ''
          | 'AM'
          | 'BL'
          | 'CH'
          | 'CI'
          | '17'
          | 'DS'
          | '14'
          | 'FI'
          | 'HM'
          | '16'
          | '15'
          | 'LM'
          | 'MC'
          | 'MA'
          | 'MB'
          | 'ZZ'
          | 'OF'
          | '11'
          | '13'
          | '12'
          | 'TV'
          | 'VA'
          | 'WC'
          | undefined
        is_subscriber_the_patient?: boolean | undefined
        patient_relationship_to_subscriber?:
          | ''
          | '01'
          | '04'
          | '05'
          | '07'
          | '10'
          | '15'
          | '17'
          | '19'
          | '20'
          | '21'
          | '22'
          | '23'
          | '24'
          | '29'
          | '32'
          | '33'
          | '36'
          | '39'
          | '40'
          | '41'
          | '43'
          | '53'
          | '76'
          | 'G8'
          | undefined
        photo_back?: string | undefined
        photo_front?: string | undefined
        subscriber_address?: string | undefined
        subscriber_city?: string | undefined
        subscriber_country?:
          | ''
          | 'AF'
          | 'AX'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BQ'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CW'
          | 'CY'
          | 'CZ'
          | 'CYM'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GG'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IM'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JE'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'XK'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MK'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'ME'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'BL'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'MF'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'RS'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SX'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'SS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'US'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | undefined
        subscriber_date_of_birth?: string | undefined
        subscriber_first_name?: string | undefined
        subscriber_gender?: '' | 'Male' | 'Female' | 'Other' | 'UNK' | 'ASKU' | undefined
        subscriber_last_name?: string | undefined
        subscriber_middle_name?: string | undefined
        subscriber_social_security?: string | undefined
        subscriber_state?:
          | 'AL'
          | 'AK'
          | 'AS'
          | 'AZ'
          | 'AR'
          | 'AA'
          | 'AE'
          | 'AP'
          | 'CA'
          | 'CO'
          | 'CT'
          | 'DE'
          | 'DC'
          | 'FL'
          | 'GA'
          | 'GU'
          | 'HI'
          | 'ID'
          | 'IL'
          | 'IN'
          | 'IA'
          | 'KS'
          | 'KY'
          | 'LA'
          | 'ME'
          | 'MD'
          | 'MA'
          | 'MI'
          | 'MN'
          | 'MS'
          | 'MO'
          | 'MT'
          | 'NE'
          | 'NV'
          | 'NH'
          | 'NJ'
          | 'NM'
          | 'NY'
          | 'NC'
          | 'ND'
          | 'MP'
          | 'OH'
          | 'OK'
          | 'OR'
          | 'PA'
          | 'PR'
          | 'RI'
          | 'SC'
          | 'SD'
          | 'TN'
          | 'TX'
          | 'UT'
          | 'VT'
          | 'VI'
          | 'VA'
          | 'WA'
          | 'WV'
          | 'WI'
          | 'WY'
          | undefined
        subscriber_suffix?: string | undefined
        subscriber_zip_code?: string | undefined
      }
    | undefined
  updated_at?: string | undefined
  workers_comp_insurance?:
    | {
        property_and_casualty_agency_claim_number?: string | undefined
        workers_comp_carrier_code?: string | undefined
        workers_comp_case_number?: string | undefined
        workers_comp_company?: string | undefined
        workers_comp_date_of_accident?: string | undefined
        workers_comp_group_name?: string | undefined
        workers_comp_group_number?: string | undefined
        workers_comp_notes?: string | undefined
        workers_comp_payer_address?: string | undefined
        workers_comp_payer_city?: string | undefined
        workers_comp_payer_id?: string | undefined
        workers_comp_payer_state?:
          | 'AL'
          | 'AK'
          | 'AS'
          | 'AZ'
          | 'AR'
          | 'AA'
          | 'AE'
          | 'AP'
          | 'CA'
          | 'CO'
          | 'CT'
          | 'DE'
          | 'DC'
          | 'FL'
          | 'GA'
          | 'GU'
          | 'HI'
          | 'ID'
          | 'IL'
          | 'IN'
          | 'IA'
          | 'KS'
          | 'KY'
          | 'LA'
          | 'ME'
          | 'MD'
          | 'MA'
          | 'MI'
          | 'MN'
          | 'MS'
          | 'MO'
          | 'MT'
          | 'NE'
          | 'NV'
          | 'NH'
          | 'NJ'
          | 'NM'
          | 'NY'
          | 'NC'
          | 'ND'
          | 'MP'
          | 'OH'
          | 'OK'
          | 'OR'
          | 'PA'
          | 'PR'
          | 'RI'
          | 'SC'
          | 'SD'
          | 'TN'
          | 'TX'
          | 'UT'
          | 'VT'
          | 'VI'
          | 'VA'
          | 'WA'
          | 'WV'
          | 'WI'
          | 'WY'
          | undefined
        workers_comp_payer_zip?: string | undefined
        workers_comp_state_of_occurrence?:
          | 'AL'
          | 'AK'
          | 'AS'
          | 'AZ'
          | 'AR'
          | 'AA'
          | 'AE'
          | 'AP'
          | 'CA'
          | 'CO'
          | 'CT'
          | 'DE'
          | 'DC'
          | 'FL'
          | 'GA'
          | 'GU'
          | 'HI'
          | 'ID'
          | 'IL'
          | 'IN'
          | 'IA'
          | 'KS'
          | 'KY'
          | 'LA'
          | 'ME'
          | 'MD'
          | 'MA'
          | 'MI'
          | 'MN'
          | 'MS'
          | 'MO'
          | 'MT'
          | 'NE'
          | 'NV'
          | 'NH'
          | 'NJ'
          | 'NM'
          | 'NY'
          | 'NC'
          | 'ND'
          | 'MP'
          | 'OH'
          | 'OK'
          | 'OR'
          | 'PA'
          | 'PR'
          | 'RI'
          | 'SC'
          | 'SD'
          | 'TN'
          | 'TX'
          | 'UT'
          | 'VT'
          | 'VI'
          | 'VA'
          | 'WA'
          | 'WV'
          | 'WI'
          | 'WY'
          | undefined
        workers_comp_wcb?: string | undefined
        workers_comp_wcb_rating_code?: string | undefined
      }
    | undefined
  zip_code?: string | undefined
}
type PrescriptionMessage = {
  created_at?: string | undefined
  doctor?: number | undefined
  id?: number | undefined
  json_data?: string | undefined
  message_direction?: 'I' | 'O' | undefined
  message_status?: string | undefined
  message_type?: string | undefined
  parent_message?: string | undefined
  patient?: number | undefined
  pharmacy?: string | undefined
}
type PatientProblem = {
  date_changed?: string | undefined
  date_diagnosis?: string | undefined
  date_onset?: string | undefined
  description?: string | undefined
  doctor: number
  icd_code?: string | undefined
  icd_version?: '9' | '10' | undefined
  id?: number | undefined
  info_url?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  patient: number
  snomed_ct_code?: string | undefined
  status?: 'active' | 'inactive' | 'resolved' | undefined
}
type ReminderProfile = {
  doctor: number
  id?: number | undefined
  name?: string | undefined
  reminders: {
    amount?: number | undefined
    type?: 'email' | 'sms' | 'phone' | 'auto_call' | undefined
    unit?: 'minutes' | 'hours' | 'days' | 'weeks' | undefined
  }[]
}
type LabVendorLocation = {
  facility_code: string
  id?: number | undefined
  name: string
  vendor_name?: string | undefined
}
type TaskCategory = {
  archived?: boolean | undefined
  created_at?: string | undefined
  id?: number | undefined
  is_global?: string | undefined
  name: string
  practice_group: number
  updated_at?: string | undefined
}
type TaskNote = {
  archived?: boolean | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  id?: number | undefined
  task: number
  text: string
  updated_at?: string | undefined
}
type TaskStatus = {
  archived?: boolean | undefined
  created_at?: string | undefined
  id?: number | undefined
  name: string
  practice_group: number
  status_category?: 'O' | 'P' | 'H' | 'C' | undefined
  task_category?: number | undefined
  updated_at?: string | undefined
}
type TaskTemplate = {
  archived?: boolean | undefined
  created_at?: string | undefined
  default_assignee_group?: number | undefined
  default_assignee_user?: string | undefined
  default_category?: number | undefined
  default_due_date_offset?: string | undefined
  default_note?: string | undefined
  default_priority?: '10' | '20' | '30' | '40' | undefined
  default_status?: number | undefined
  default_title?: string | undefined
  id?: number | undefined
  name: string
  practice_group?: string | undefined
  updated_at?: string | undefined
}
type Task = {
  archived?: boolean | undefined
  assigned_by?: string | undefined
  assignee_group?: number | undefined
  assignee_user?: string | undefined
  associated_items?:
    | {
        task?: number | undefined
        type?:
          | 'Patient'
          | 'Appointment'
          | 'Lab order'
          | 'Document'
          | 'Message'
          | 'Lab document'
          | 'Lab result'
          | 'Communication'
          | undefined
        value?: number | undefined
      }[]
    | undefined
  category?: number | undefined
  created_at?: string | undefined
  created_by?: string | undefined
  due_date?: { time?: string | undefined } | undefined
  id?: number | undefined
  notes?:
    | {
        archived?: boolean | undefined
        created_at?: string | undefined
        created_by?: string | undefined
        id?: number | undefined
        task?: number | undefined
        text?: string | undefined
        updated_at?: string | undefined
      }[]
    | undefined
  priority?: '10' | '20' | '30' | '40' | undefined
  status: number
  title: string
  updated_at?: string | undefined
}
type LineItemTransaction = {
  adjustment?: number | undefined
  adjustment_group_code?: '' | 'CO' | 'OA' | 'PI' | 'PR' | undefined
  adjustment_reason?:
    | '-3'
    | '-2'
    | '-4'
    | '-1'
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '23'
    | '24'
    | '26'
    | '27'
    | '29'
    | '31'
    | '32'
    | '33'
    | '34'
    | '35'
    | '39'
    | '40'
    | '44'
    | '45'
    | '49'
    | '50'
    | '51'
    | '53'
    | '54'
    | '55'
    | '56'
    | '58'
    | '59'
    | '60'
    | '61'
    | '66'
    | '69'
    | '70'
    | '74'
    | '75'
    | '76'
    | '78'
    | '85'
    | '87'
    | '89'
    | '90'
    | '91'
    | '94'
    | '95'
    | '96'
    | '97'
    | '100'
    | '101'
    | '102'
    | '103'
    | '104'
    | '105'
    | '106'
    | '107'
    | '108'
    | '109'
    | '110'
    | '111'
    | '112'
    | '114'
    | '115'
    | '116'
    | '117'
    | '118'
    | '119'
    | '121'
    | '122'
    | '125'
    | '128'
    | '129'
    | '130'
    | '131'
    | '132'
    | '133'
    | '134'
    | '135'
    | '136'
    | '137'
    | '138'
    | '139'
    | '140'
    | '142'
    | '143'
    | '144'
    | '146'
    | '147'
    | '148'
    | '149'
    | '150'
    | '151'
    | '152'
    | '153'
    | '154'
    | '155'
    | '157'
    | '158'
    | '159'
    | '160'
    | '161'
    | '162'
    | '163'
    | '164'
    | '165'
    | '166'
    | '167'
    | '168'
    | '169'
    | '170'
    | '171'
    | '172'
    | '173'
    | '174'
    | '175'
    | '176'
    | '177'
    | '178'
    | '179'
    | '180'
    | '181'
    | '182'
    | '183'
    | '184'
    | '185'
    | '186'
    | '187'
    | '188'
    | '189'
    | '190'
    | '191'
    | '192'
    | '193'
    | '194'
    | '195'
    | '197'
    | '198'
    | '199'
    | '200'
    | '201'
    | '202'
    | '203'
    | '204'
    | '205'
    | '206'
    | '207'
    | '208'
    | '209'
    | '210'
    | '211'
    | '212'
    | '213'
    | '214'
    | '215'
    | '216'
    | '217'
    | '218'
    | '219'
    | '220'
    | '221'
    | '222'
    | '223'
    | '224'
    | '225'
    | '226'
    | '227'
    | '228'
    | '229'
    | '230'
    | '231'
    | '232'
    | '233'
    | '234'
    | '235'
    | '236'
    | '237'
    | '238'
    | '239'
    | '240'
    | '241'
    | '242'
    | '243'
    | '244'
    | '245'
    | '246'
    | '247'
    | '248'
    | '249'
    | '250'
    | '251'
    | '252'
    | '253'
    | '254'
    | '256'
    | '257'
    | '258'
    | '259'
    | '260'
    | '261'
    | '262'
    | '263'
    | '264'
    | '265'
    | '266'
    | '267'
    | '268'
    | '269'
    | '270'
    | '271'
    | '272'
    | '273'
    | '274'
    | '275'
    | '276'
    | '277'
    | '287'
    | '288'
    | 'A0'
    | 'A1'
    | 'A5'
    | 'A6'
    | 'A7'
    | 'A8'
    | 'B1'
    | 'B4'
    | 'B5'
    | 'B7'
    | 'B8'
    | 'B9'
    | 'B10'
    | 'B11'
    | 'B12'
    | 'B13'
    | 'B14'
    | 'B15'
    | 'B16'
    | 'B20'
    | 'B22'
    | 'B23'
    | 'P1'
    | 'P2'
    | 'P3'
    | 'P4'
    | 'P5'
    | 'P6'
    | 'P7'
    | 'P8'
    | 'P9'
    | 'P10'
    | 'P11'
    | 'P12'
    | 'P13'
    | 'P14'
    | 'P15'
    | 'P16'
    | 'P17'
    | 'P18'
    | 'P19'
    | 'P20'
    | 'P21'
    | 'P22'
    | 'P23'
    | 'W1'
    | 'W2'
    | 'W3'
    | 'W4'
    | 'Y1'
    | 'Y2'
    | 'Y3'
    | undefined
  appointment?: number | undefined
  check_date?: string | undefined
  claim_status?:
    | ''
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '10'
    | '13'
    | '15'
    | '16'
    | '17'
    | '19'
    | '20'
    | '21'
    | '22'
    | '23'
    | '25'
    | '27'
    | undefined
  created_at?: string | undefined
  doctor?: number | undefined
  id?: number | undefined
  ins_name?: number | undefined
  ins_paid?: number | undefined
  line_item?: number | undefined
  patient?: number | undefined
  posted_date?: string | undefined
  trace_number?: string | undefined
  updated_at?: string | undefined
}
type UserProfilesGroup = {
  archived?: boolean | undefined
  created_at?: string | undefined
  id?: number | undefined
  members?: string[] | undefined
  name?: string | undefined
  practice_group?: string | undefined
  updated_at?: string | undefined
}
type UserProfile = {
  doctor?: string | undefined
  id?: string | undefined
  is_doctor?: string | undefined
  is_staff?: string | undefined
  permissions?: string | undefined
  practice_group?: string | undefined
  username?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/allergies': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: PatientAllergy[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { patient?: number | undefined; doctor?: number | undefined } }
        output: PatientAllergy
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/allergies/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: PatientAllergy
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/amendments': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            appointment?: number | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: PatientAmendment[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            appointment?: number | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: PatientAmendment
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/amendments/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            appointment?: number | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            appointment?: number | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: PatientAmendment
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            appointment?: number | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            appointment?: number | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/appointment_profiles': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: AppointmentProfile[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { doctor?: number | undefined } }
        output: AppointmentProfile
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/appointment_profiles/:id': {
      $delete: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: AppointmentProfile
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/appointment_templates': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            profile?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: AppointmentTemplate[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            profile?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
          }
        }
        output: AppointmentTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/appointment_templates/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            profile?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            profile?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
          }
        }
        output: AppointmentTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            profile?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            profile?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/appointments': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            status?: string | undefined
            patient?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
            since?: string | undefined
            date_range?: string | undefined
            date?: string | undefined
          }
        }
        output: {
          data?: Appointment[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            status?: string | undefined
            patient?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
            since?: string | undefined
            date_range?: string | undefined
            date?: string | undefined
          }
        }
        output: Appointment
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/appointments/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            status?: string | undefined
            patient?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
            since?: string | undefined
            date_range?: string | undefined
            date?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            status?: string | undefined
            patient?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
            since?: string | undefined
            date_range?: string | undefined
            date?: string | undefined
          }
        }
        output: Appointment
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            status?: string | undefined
            patient?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
            since?: string | undefined
            date_range?: string | undefined
            date?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            status?: string | undefined
            patient?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
            since?: string | undefined
            date_range?: string | undefined
            date?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/billing_profiles': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: BillingProfile[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/billing_profiles/:id': {
      $get: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: BillingProfile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/care_plans': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            patient?: number | undefined
            plan_type?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: CarePlan[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/care_plans/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            patient?: number | undefined
            plan_type?: number | undefined
            doctor?: number | undefined
          }
        }
        output: CarePlan
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/care_team_members': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            patient?: number | undefined
            appointment?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: CareTeamMember[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/care_team_members/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            patient?: number | undefined
            appointment?: number | undefined
            doctor?: number | undefined
          }
        }
        output: CareTeamMember
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/claim_billing_notes': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            appointment?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: ClaimBillingNotes[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { appointment?: number | undefined; doctor?: number | undefined } }
        output: ClaimBillingNotes
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/claim_billing_notes/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { appointment?: number | undefined; doctor?: number | undefined }
        }
        output: ClaimBillingNotes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/clinical_note_field_types': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            clinical_note_template?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: SoapNoteLineItemFieldType[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/clinical_note_field_types/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { clinical_note_template?: number | undefined; doctor?: number | undefined }
        }
        output: SoapNoteLineItemFieldType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/clinical_note_field_values': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            clinical_note_field?: number | undefined
            since?: string | undefined
            appointment?: number | undefined
            clinical_note_template?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: SoapNoteLineItemFieldValue[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            clinical_note_field?: number | undefined
            since?: string | undefined
            appointment?: number | undefined
            clinical_note_template?: number | undefined
            doctor?: number | undefined
          }
        }
        output: SoapNoteLineItemFieldValue
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/clinical_note_field_values/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            clinical_note_field?: number | undefined
            since?: string | undefined
            appointment?: number | undefined
            clinical_note_template?: number | undefined
            doctor?: number | undefined
          }
        }
        output: SoapNoteLineItemFieldValue
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            clinical_note_field?: number | undefined
            since?: string | undefined
            appointment?: number | undefined
            clinical_note_template?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            clinical_note_field?: number | undefined
            since?: string | undefined
            appointment?: number | undefined
            clinical_note_template?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/clinical_note_templates': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: SoapNoteCustomReport[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/clinical_note_templates/:id': {
      $get: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: SoapNoteCustomReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/clinical_notes': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            patient?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
            since?: string | undefined
            date_range?: string | undefined
            date?: string | undefined
          }
        }
        output: {
          data?: ClinicalNote[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/clinical_notes/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            patient?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
            since?: string | undefined
            date_range?: string | undefined
            date?: string | undefined
          }
        }
        output: ClinicalNote
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/comm_logs': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: PhoneCallLog[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: PhoneCallLog
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/comm_logs/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: PhoneCallLog
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/consent_forms': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: ConsentForm[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { doctor?: number | undefined } }
        output: ConsentForm
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/consent_forms/:id': {
      $get: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: ConsentForm
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/consent_forms/:id/apply_to_appointment': {
      $post: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/consent_forms/:id/unapply_from_appointment': {
      $post: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/custom_appointment_fields': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: CustomAppointmentFieldType[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { doctor?: number | undefined } }
        output: CustomAppointmentFieldType
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/custom_appointment_fields/:id': {
      $get: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: CustomAppointmentFieldType
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/custom_demographics': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: CustomPatientFieldType[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { doctor?: number | undefined } }
        output: CustomPatientFieldType
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/custom_demographics/:id': {
      $get: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: CustomPatientFieldType
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/custom_insurance_plan_names': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            since?: string | undefined
            user?: number | undefined
            name?: string | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: CustomInsurancePlanName[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/custom_insurance_plan_names/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            since?: string | undefined
            user?: number | undefined
            name?: string | undefined
            doctor?: number | undefined
          }
        }
        output: CustomInsurancePlanName
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/custom_vitals': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: CustomVitalType[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/custom_vitals/:id': {
      $get: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: CustomVitalType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/doctors': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: Doctor[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/doctors/:id': {
      $get: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: Doctor
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/documents': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: ScannedClinicalDocument[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: ScannedClinicalDocument
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/documents/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: ScannedClinicalDocument
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/eligibility_checks': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            appointment?: number | undefined
            appointment_date?: string | undefined
            doctor?: number | undefined
            query_date_range?: string | undefined
            appointment_date_range?: string | undefined
            query_date?: string | undefined
            patient?: number | undefined
          }
        }
        output: {
          data?: Coverage[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/eligibility_checks/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            appointment?: number | undefined
            appointment_date?: string | undefined
            doctor?: number | undefined
            query_date_range?: string | undefined
            appointment_date_range?: string | undefined
            query_date?: string | undefined
            patient?: number | undefined
          }
        }
        output: Coverage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/eobs': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: EOBObject[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { doctor?: number | undefined } }
        output: EOBObject
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/eobs/:id': {
      $get: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: EOBObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/fee_schedules': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            code?: string | undefined
            code_type?: string | undefined
            since?: string | undefined
            payer_id?: string | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: DoctorFeeSchedule[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/fee_schedules/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            code?: string | undefined
            code_type?: string | undefined
            since?: string | undefined
            payer_id?: string | undefined
            doctor?: number | undefined
          }
        }
        output: DoctorFeeSchedule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/implantable_devices': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            mu_date?: string | undefined
            patient?: number | undefined
            mu_date_range?: string | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: ImplantableDevice[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/implantable_devices/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            mu_date?: string | undefined
            patient?: number | undefined
            mu_date_range?: string | undefined
            doctor?: number | undefined
          }
        }
        output: ImplantableDevice
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/insurances': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            payer_type: string
            term?: string | undefined
          }
        }
        output: {
          data?: Insurance[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/insurances/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { payer_type: string; term?: string | undefined }
        }
        output: Insurance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/inventory_categories': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            since?: string | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: InventoryCategory[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/inventory_categories/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { since?: string | undefined; doctor?: number | undefined }
        }
        output: InventoryCategory
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/inventory_vaccines': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            status?: string | undefined
            cvx_code?: string | undefined
            since?: string | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: InventoryVaccine[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            status?: string | undefined
            cvx_code?: string | undefined
            since?: string | undefined
            doctor?: number | undefined
          }
        }
        output: InventoryVaccine
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/inventory_vaccines/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            status?: string | undefined
            cvx_code?: string | undefined
            since?: string | undefined
            doctor?: number | undefined
          }
        }
        output: InventoryVaccine
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/lab_documents': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            since?: string | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: LabOrderDocument[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { since?: string | undefined; doctor?: number | undefined } }
        output: LabOrderDocument
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/lab_documents/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: { since?: string | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: { since?: string | undefined; doctor?: number | undefined }
        }
        output: LabOrderDocument
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: { since?: string | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: { since?: string | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/lab_orders': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            since?: string | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: LabOrder[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { since?: string | undefined; doctor?: number | undefined } }
        output: LabOrder
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/lab_orders/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: { since?: string | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: { since?: string | undefined; doctor?: number | undefined }
        }
        output: LabOrder
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: { since?: string | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: { since?: string | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/lab_orders_summary': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: LabOrder[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/lab_orders_summary/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: LabOrder
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/lab_results': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            order?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: LabResult[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { order?: number | undefined; doctor?: number | undefined } }
        output: LabResult
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/lab_results/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: { order?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: { order?: number | undefined; doctor?: number | undefined }
        }
        output: LabResult
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: { order?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: { order?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/lab_tests': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            order?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: LabTest[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { order?: number | undefined; doctor?: number | undefined } }
        output: LabTest
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/lab_tests/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: { order?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: { order?: number | undefined; doctor?: number | undefined }
        }
        output: LabTest
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: { order?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: { order?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/line_items': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            posted_date?: string | undefined
            patient?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
            since?: string | undefined
            appointment?: number | undefined
            service_date?: string | undefined
          }
        }
        output: {
          data?: BillingLineItem[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            posted_date?: string | undefined
            patient?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
            since?: string | undefined
            appointment?: number | undefined
            service_date?: string | undefined
          }
        }
        output: BillingLineItem
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/line_items/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            posted_date?: string | undefined
            patient?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
            since?: string | undefined
            appointment?: number | undefined
            service_date?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            posted_date?: string | undefined
            patient?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
            since?: string | undefined
            appointment?: number | undefined
            service_date?: string | undefined
          }
        }
        output: BillingLineItem
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            posted_date?: string | undefined
            patient?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
            since?: string | undefined
            appointment?: number | undefined
            service_date?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            posted_date?: string | undefined
            patient?: number | undefined
            office?: number | undefined
            doctor?: number | undefined
            since?: string | undefined
            appointment?: number | undefined
            service_date?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/medications': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: PatientDrug[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { patient?: number | undefined; doctor?: number | undefined } }
        output: PatientDrug
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/medications/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: PatientDrug
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/medications/:id/append_to_pharmacy_note': {
      $patch: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/messages': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            patient?: number | undefined
            doctor?: number | undefined
            responsible_user?: number | undefined
            updated_since?: string | undefined
            received_since?: string | undefined
            owner?: number | undefined
            type?: string | undefined
          }
        }
        output: {
          data?: DoctorMessage[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            patient?: number | undefined
            doctor?: number | undefined
            responsible_user?: number | undefined
            updated_since?: string | undefined
            received_since?: string | undefined
            owner?: number | undefined
            type?: string | undefined
          }
        }
        output: DoctorMessage
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/messages/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            patient?: number | undefined
            doctor?: number | undefined
            responsible_user?: number | undefined
            updated_since?: string | undefined
            received_since?: string | undefined
            owner?: number | undefined
            type?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            patient?: number | undefined
            doctor?: number | undefined
            responsible_user?: number | undefined
            updated_since?: string | undefined
            received_since?: string | undefined
            owner?: number | undefined
            type?: string | undefined
          }
        }
        output: DoctorMessage
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            patient?: number | undefined
            doctor?: number | undefined
            responsible_user?: number | undefined
            updated_since?: string | undefined
            received_since?: string | undefined
            owner?: number | undefined
            type?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            patient?: number | undefined
            doctor?: number | undefined
            responsible_user?: number | undefined
            updated_since?: string | undefined
            received_since?: string | undefined
            owner?: number | undefined
            type?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/offices': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: Office[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/offices/:id': {
      $get: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: Office
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/offices/:id/add_exam_room': {
      $post: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: Office
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/patient_communications': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: PatientCommunication[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { patient?: number | undefined; doctor?: number | undefined } }
        output: PatientCommunication
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/patient_communications/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: PatientCommunication
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/patient_flag_types': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: PatientFlagType[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { doctor?: number | undefined } }
        output: PatientFlagType
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/patient_flag_types/:id': {
      $get: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: PatientFlagType
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/patient_interventions': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: PatientIntervention[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { patient?: number | undefined; doctor?: number | undefined } }
        output: PatientIntervention
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/patient_interventions/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: PatientIntervention
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/patient_lab_results': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            ordering_doctor?: number | undefined
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: PatientLabResultSet[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            ordering_doctor?: number | undefined
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: PatientLabResultSet
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/patient_lab_results/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            ordering_doctor?: number | undefined
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            ordering_doctor?: number | undefined
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: PatientLabResultSet
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            ordering_doctor?: number | undefined
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            ordering_doctor?: number | undefined
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/patient_messages': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: PatientMessage[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: PatientMessage
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/patient_messages/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: PatientMessage
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/patient_payment_log': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            since?: string | undefined
            office?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: CashPaymentLog[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patient_payment_log/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            since?: string | undefined
            office?: number | undefined
            doctor?: number | undefined
          }
        }
        output: CashPaymentLog
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patient_payments': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: CashPayment[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: CashPayment
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/patient_payments/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: CashPayment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/patient_physical_exams': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: PatientPhysicalExam[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { patient?: number | undefined; doctor?: number | undefined } }
        output: PatientPhysicalExam
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/patient_physical_exams/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: PatientPhysicalExam
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/patient_risk_assessments': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: PatientRiskAssessment[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { patient?: number | undefined; doctor?: number | undefined } }
        output: PatientRiskAssessment
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/patient_risk_assessments/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: PatientRiskAssessment
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/patient_vaccine_records': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            cvx_code?: string | undefined
            patient?: number | undefined
            since?: string | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: PatientVaccineRecord[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            cvx_code?: string | undefined
            patient?: number | undefined
            since?: string | undefined
            doctor?: number | undefined
          }
        }
        output: PatientVaccineRecord
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/patient_vaccine_records/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            cvx_code?: string | undefined
            patient?: number | undefined
            since?: string | undefined
            doctor?: number | undefined
          }
        }
        output: PatientVaccineRecord
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            cvx_code?: string | undefined
            patient?: number | undefined
            since?: string | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            cvx_code?: string | undefined
            patient?: number | undefined
            since?: string | undefined
            doctor?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/patients': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            first_name?: string | undefined
            last_name?: string | undefined
            preferred_language?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
            race?: string | undefined
            chart_id?: string | undefined
            email?: string | undefined
            ethnicity?: string | undefined
          }
        }
        output: {
          data?: Patient[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            preferred_language?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
            race?: string | undefined
            chart_id?: string | undefined
            email?: string | undefined
            ethnicity?: string | undefined
          }
        }
        output: Patient
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/patients/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            preferred_language?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
            race?: string | undefined
            chart_id?: string | undefined
            email?: string | undefined
            ethnicity?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            preferred_language?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
            race?: string | undefined
            chart_id?: string | undefined
            email?: string | undefined
            ethnicity?: string | undefined
          }
        }
        output: Patient
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            preferred_language?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
            race?: string | undefined
            chart_id?: string | undefined
            email?: string | undefined
            ethnicity?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            preferred_language?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
            race?: string | undefined
            chart_id?: string | undefined
            email?: string | undefined
            ethnicity?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/patients/:id/ccda': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            preferred_language?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
            race?: string | undefined
            chart_id?: string | undefined
            email?: string | undefined
            ethnicity?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/patients/:id/onpatient_access': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            preferred_language?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
            race?: string | undefined
            chart_id?: string | undefined
            email?: string | undefined
            ethnicity?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            preferred_language?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
            race?: string | undefined
            chart_id?: string | undefined
            email?: string | undefined
            ethnicity?: string | undefined
          }
        }
        output: Patient
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            preferred_language?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
            race?: string | undefined
            chart_id?: string | undefined
            email?: string | undefined
            ethnicity?: string | undefined
          }
        }
        output: Patient
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/patients/:id/qrda1': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            preferred_language?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
            race?: string | undefined
            chart_id?: string | undefined
            email?: string | undefined
            ethnicity?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/patients_summary': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            first_name?: string | undefined
            last_name?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
          }
        }
        output: {
          data?: Patient[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
          }
        }
        output: Patient
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/patients_summary/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
          }
        }
        output: Patient
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            first_name?: string | undefined
            last_name?: string | undefined
            doctor?: number | undefined
            gender?: string | undefined
            since?: string | undefined
            date_of_birth?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/prescription_messages': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            parent_message?: number | undefined
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: PrescriptionMessage[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/prescription_messages/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            parent_message?: number | undefined
            since?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: PrescriptionMessage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/problems': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            patient?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: PatientProblem[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { patient?: number | undefined; doctor?: number | undefined } }
        output: PatientProblem
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/problems/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: PatientProblem
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: { patient?: number | undefined; doctor?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/procedures': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            mu_date?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
            mu_date_range?: string | undefined
            appointment?: number | undefined
            service_date?: string | undefined
          }
        }
        output: {
          data?: BillingLineItem[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/procedures/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            mu_date?: string | undefined
            patient?: number | undefined
            doctor?: number | undefined
            mu_date_range?: string | undefined
            appointment?: number | undefined
            service_date?: string | undefined
          }
        }
        output: BillingLineItem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/reminder_profiles': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: ReminderProfile[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { doctor?: number | undefined } }
        output: ReminderProfile
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/reminder_profiles/:id': {
      $delete: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: ReminderProfile
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/sublabs': {
      $get: {
        input: { query: { cursor?: string | undefined; page_size?: number | undefined } }
        output: {
          data?: LabVendorLocation[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: {}; output: LabVendorLocation; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/api/sublabs/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: number } }
        output: LabVendorLocation
        outputFormat: 'json'
        status: 200
      }
      $patch: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $put: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/task_categories': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            since?: string | undefined
          }
        }
        output: {
          data?: TaskCategory[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { since?: string | undefined } }
        output: TaskCategory
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/task_categories/:id': {
      $get: {
        input: { param: { id: string } } & { query: { since?: string | undefined } }
        output: TaskCategory
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { query: { since?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { since?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/task_notes': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            task?: number | undefined
            since?: string | undefined
          }
        }
        output: {
          data?: TaskNote[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { task?: number | undefined; since?: string | undefined } }
        output: TaskNote
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/task_notes/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { task?: number | undefined; since?: string | undefined }
        }
        output: TaskNote
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: { task?: number | undefined; since?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: { task?: number | undefined; since?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/task_statuses': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            since?: string | undefined
          }
        }
        output: {
          data?: TaskStatus[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { since?: string | undefined } }
        output: TaskStatus
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/task_statuses/:id': {
      $get: {
        input: { param: { id: string } } & { query: { since?: string | undefined } }
        output: TaskStatus
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { query: { since?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { since?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/task_templates': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            assignee_user?: number | undefined
            status?: number | undefined
            assignee_group?: number | undefined
            since?: string | undefined
            category?: number | undefined
          }
        }
        output: {
          data?: TaskTemplate[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            assignee_user?: number | undefined
            status?: number | undefined
            assignee_group?: number | undefined
            since?: string | undefined
            category?: number | undefined
          }
        }
        output: TaskTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/task_templates/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            assignee_user?: number | undefined
            status?: number | undefined
            assignee_group?: number | undefined
            since?: string | undefined
            category?: number | undefined
          }
        }
        output: TaskTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            assignee_user?: number | undefined
            status?: number | undefined
            assignee_group?: number | undefined
            since?: string | undefined
            category?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            assignee_user?: number | undefined
            status?: number | undefined
            assignee_group?: number | undefined
            since?: string | undefined
            category?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/tasks': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            status?: number | undefined
            category?: number | undefined
            due_at_date?: string | undefined
            due_at_unknown?: string | undefined
            since?: string | undefined
            due_at_since?: string | undefined
            assignee_user?: number | undefined
            assignee_group?: number | undefined
            due_at_range?: string | undefined
          }
        }
        output: {
          data?: Task[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            status?: number | undefined
            category?: number | undefined
            due_at_date?: string | undefined
            due_at_unknown?: string | undefined
            since?: string | undefined
            due_at_since?: string | undefined
            assignee_user?: number | undefined
            assignee_group?: number | undefined
            due_at_range?: string | undefined
          }
        }
        output: Task
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api/tasks/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            status?: number | undefined
            category?: number | undefined
            due_at_date?: string | undefined
            due_at_unknown?: string | undefined
            since?: string | undefined
            due_at_since?: string | undefined
            assignee_user?: number | undefined
            assignee_group?: number | undefined
            due_at_range?: string | undefined
          }
        }
        output: Task
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            status?: number | undefined
            category?: number | undefined
            due_at_date?: string | undefined
            due_at_unknown?: string | undefined
            since?: string | undefined
            due_at_since?: string | undefined
            assignee_user?: number | undefined
            assignee_group?: number | undefined
            due_at_range?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            status?: number | undefined
            category?: number | undefined
            due_at_date?: string | undefined
            due_at_unknown?: string | undefined
            since?: string | undefined
            due_at_since?: string | undefined
            assignee_user?: number | undefined
            assignee_group?: number | undefined
            due_at_range?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/transactions': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            line_item?: number | undefined
            posted_date?: string | undefined
            appointment?: number | undefined
            since?: string | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: LineItemTransaction[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/transactions/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            line_item?: number | undefined
            posted_date?: string | undefined
            appointment?: number | undefined
            since?: string | undefined
            doctor?: number | undefined
          }
        }
        output: LineItemTransaction
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/user_groups': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: UserProfilesGroup[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/user_groups/:id': {
      $get: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: UserProfilesGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/users': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            page_size?: number | undefined
            doctor?: number | undefined
          }
        }
        output: {
          data?: UserProfile[] | undefined
          next?: string | undefined
          previous?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/users/:id': {
      $get: {
        input: { param: { id: string } } & { query: { doctor?: number | undefined } }
        output: UserProfile
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

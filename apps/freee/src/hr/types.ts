type ApiV1UsersCompanySerializer = {
  id?: number | undefined
  name?: string | undefined
  role?: string | undefined
  external_cid?: string | undefined
  employee_id?: (number | null) | undefined
  display_name?: (string | null) | undefined
}
type ApiV1UsersMeSerializer = {
  id?: number | undefined
  companies?: ApiV1UsersCompanySerializer[] | undefined
}
type Error = {
  status_code?: number | undefined
  errors?: { type?: string | undefined; messages?: string[] | undefined }[] | undefined
}
type UnauthorizedError = { message?: string | undefined; messages?: string | undefined }
type ForbiddenError = {
  status_code?: number | undefined
  errors?: { type?: string | undefined; messages?: string[] | undefined }[] | undefined
}
type AccessDeniedError = {
  error?: string | undefined
  message?: string | undefined
  code?: string | undefined
}
type InternalServerError = {
  status_code?: number | undefined
  errors?: { type?: string | undefined; messages?: string[] | undefined }[] | undefined
}
type ApiV1CompaniesEmployeeSerializer = {
  id?: number | undefined
  num?: string | undefined
  display_name?: string | undefined
  entry_date?: string | undefined
  retire_date?: (string | null) | undefined
  user_id?: (number | null) | undefined
  email?: (string | null) | undefined
  payroll_calculation?: boolean | undefined
  closing_day?: (number | null) | undefined
  pay_day?: (number | null) | undefined
  month_of_pay_day?: (string | null) | undefined
}
type ApiV1EmployeesProfileRuleSerializer = {
  id?: number | undefined
  company_id?: number | undefined
  employee_id?: number | undefined
  last_name?: string | undefined
  first_name?: string | undefined
  last_name_kana?: string | undefined
  first_name_kana?: string | undefined
  zipcode1?: (string | null) | undefined
  zipcode2?: (string | null) | undefined
  prefecture_code?: (number | null) | undefined
  address?: (string | null) | undefined
  address_kana?: string | undefined
  phone1?: (string | null) | undefined
  phone2?: (string | null) | undefined
  phone3?: (string | null) | undefined
  residential_zipcode1?: (string | null) | undefined
  residential_zipcode2?: (string | null) | undefined
  residential_prefecture_code?: (number | null) | undefined
  residential_address?: (string | null) | undefined
  residential_address_kana?: (string | null) | undefined
  employment_type?: (string | null) | undefined
  title?: (string | null) | undefined
  gender?: 'unselected' | 'male' | 'female' | undefined
  married?: boolean | undefined
  is_working_student?: boolean | undefined
  widow_type?: string | undefined
  disability_type?: string | undefined
  email?: (string | null) | undefined
  householder_name?: string | undefined
  householder?:
    | 'myself'
    | 'husband'
    | 'wife'
    | 'father'
    | 'mother'
    | 'child'
    | 'senior_brother'
    | 'junior_brother'
    | 'senior_sister'
    | 'junior_sister'
    | 'grandchild'
    | 'grandfather'
    | 'grandmother'
    | 'father_in_law'
    | 'mother_in_law'
    | 'grandfather_in_law'
    | 'grandmother_in_law'
    | 'other'
    | undefined
} | null
type ApiV1EmployeesHealthInsuranceRuleSerializer = {
  id?: number | undefined
  company_id?: number | undefined
  employee_id?: number | undefined
  entried?: boolean | undefined
  health_insurance_salary_calc_type?: 'auto' | 'manual' | undefined
  health_insurance_bonus_calc_type?: 'auto' | 'manual' | undefined
  health_insurance_qualification_required?: boolean | undefined
  manual_health_insurance_amount_of_employee_salary?: (number | null) | undefined
  manual_health_insurance_amount_of_employee_bonus?: (number | null) | undefined
  manual_health_insurance_amount_of_company_salary?: (number | null) | undefined
  manual_health_insurance_amount_of_company_bonus?: (number | null) | undefined
  care_insurance_salary_calc_type?: 'auto' | 'manual' | undefined
  care_insurance_bonus_calc_type?: 'auto' | 'manual' | undefined
  manual_care_insurance_amount_of_employee_salary?: (number | null) | undefined
  manual_care_insurance_amount_of_employee_bonus?: (number | null) | undefined
  manual_care_insurance_amount_of_company_salary?: (number | null) | undefined
  manual_care_insurance_amount_of_company_bonus?: (number | null) | undefined
  child_support_fund_salary_calc_type?: 'auto' | 'manual' | undefined
  child_support_fund_bonus_calc_type?: 'auto' | 'manual' | undefined
  manual_child_support_fund_amount_of_employee_salary?: (number | null) | undefined
  manual_child_support_fund_amount_of_employee_bonus?: (number | null) | undefined
  manual_child_support_fund_amount_of_company_salary?: (number | null) | undefined
  manual_child_support_fund_amount_of_company_bonus?: (number | null) | undefined
  reference_num?: (string | null) | undefined
  standard_monthly_remuneration?: number | undefined
} | null
type ApiV1EmployeesWelfarePensionInsuranceRuleSerializer = {
  id?: number | undefined
  child_allowance_contribution_bonus_calc_type?: 'auto' | 'manual' | undefined
  child_allowance_contribution_salary_calc_type?: 'auto' | 'manual' | undefined
  company_id?: number | undefined
  employee_id?: number | undefined
  entried?: boolean | undefined
  manual_child_allowance_contribution_amount_bonus?: (number | null) | undefined
  manual_child_allowance_contribution_amount_salary?: (number | null) | undefined
  manual_welfare_pension_insurance_amount_of_company_bonus?: (number | null) | undefined
  manual_welfare_pension_insurance_amount_of_company_salary?: (number | null) | undefined
  manual_welfare_pension_insurance_amount_of_employee_bonus?: (number | null) | undefined
  manual_welfare_pension_insurance_amount_of_employee_salary?: (number | null) | undefined
  reference_num?: (string | null) | undefined
  standard_monthly_remuneration?: number | undefined
  welfare_pension_insurance_bonus_calc_type?: 'auto' | 'manual' | undefined
  welfare_pension_insurance_salary_calc_type?: 'auto' | 'manual' | undefined
} | null
type ApiV1EmployeesDependentRuleSerializer = {
  id?: number | undefined
  company_id?: number | undefined
  employee_id?: number | undefined
  last_name?: string | undefined
  first_name?: string | undefined
  last_name_kana?: (string | null) | undefined
  first_name_kana?: (string | null) | undefined
  gender?: 'unselected' | 'male' | 'female' | undefined
  relationship?: string | undefined
  birth_date?: string | undefined
  residence_type?: string | undefined
  zipcode1?: (string | null) | undefined
  zipcode2?: (string | null) | undefined
  prefecture_code?: (number | null) | undefined
  address?: (string | null) | undefined
  address_kana?: (string | null) | undefined
  base_pension_num?: (string | null) | undefined
  income?: number | undefined
  annual_revenue?: number | undefined
  disability_type?: string | undefined
  occupation?: (string | null) | undefined
  annual_remittance_amount?: number | undefined
  employment_insurance_receive_status?:
    | 'unselected'
    | 'receiving_employment_insurance'
    | 'not_receiving_employment_insurance'
    | 'pending_employment_insurance'
    | undefined
  employment_insurance_receives_from?: (string | null) | undefined
  health_insurance_qualification_required?: boolean | undefined
  phone_type?: 'unselected' | 'home' | 'office' | 'mobile' | 'other' | undefined
  phone1?: (string | null) | undefined
  phone2?: (string | null) | undefined
  phone3?: (string | null) | undefined
  social_insurance_and_tax_dependent?: string | undefined
  social_insurance_dependent_acquisition_date?: (string | null) | undefined
  social_insurance_dependent_acquisition_reason?:
    | ''
    | 'start_working'
    | 'marriage'
    | 'turnover'
    | 'decrease_in_income'
    | 'other'
    | 'birth'
    | 'live_in'
    | undefined
  social_insurance_other_dependent_acquisition_reason?: (string | null) | undefined
  social_insurance_dependent_disqualification_date?: (string | null) | undefined
  social_insurance_dependent_disqualification_reason?:
    | ''
    | 'death'
    | 'divorce'
    | 'start_working_or_increase_in_income'
    | 'reach_75_years_old'
    | 'disability'
    | 'other'
    | 'start_working'
    | 'increase_in_income'
    | undefined
  social_insurance_other_dependent_disqualification_reason?: (string | null) | undefined
  tax_dependent_acquisition_date?: (string | null) | undefined
  tax_dependent_acquisition_reason?:
    | ''
    | 'start_working'
    | 'marriage'
    | 'turnover'
    | 'decrease_in_income'
    | 'other'
    | 'birth'
    | 'live_in'
    | undefined
  tax_other_dependent_acquisition_reason?: (string | null) | undefined
  tax_dependent_disqualification_date?: (string | null) | undefined
  tax_dependent_disqualification_reason?:
    | ''
    | 'death'
    | 'divorce'
    | 'start_working_or_increase_in_income'
    | 'reach_75_years_old'
    | 'disability'
    | 'other'
    | 'start_working'
    | 'increase_in_income'
    | undefined
  tax_other_dependent_disqualification_reason?: (string | null) | undefined
  non_resident_dependents_reason?:
    | 'none'
    | 'over_16_to_under_30_or_over_70'
    | 'study_abroad'
    | 'handicapped'
    | 'over_38_man'
    | undefined
}
type ApiV1EmployeesBankAccountRuleSerializer = {
  id?: number | undefined
  company_id?: number | undefined
  employee_id?: number | undefined
  bank_name?: (string | null) | undefined
  bank_name_kana?: (string | null) | undefined
  bank_code?: (string | null) | undefined
  branch_name?: (string | null) | undefined
  branch_name_kana?: (string | null) | undefined
  branch_code?: (string | null) | undefined
  account_number?: (string | null) | undefined
  account_name?: (string | null) | undefined
  account_type?: (string | null) | undefined
} | null
type ApiV1EmployeesBasicPayRuleSerializer = {
  id?: number | undefined
  company_id?: number | undefined
  employee_id?: number | undefined
  pay_calc_type?: 'monthly' | 'daily' | 'hourly' | undefined
  pay_amount?: number | undefined
} | null
type ApiV1EmployeeSerializer = {
  id?: number | undefined
  company_id?: number | undefined
  num?: string | undefined
  display_name?: string | undefined
  base_pension_num?: (string | null) | undefined
  employment_insurance_reference_number?: string | undefined
  birth_date?: string | undefined
  entry_date?: string | undefined
  retire_date?: (string | null) | undefined
  user_id?: (number | null) | undefined
  profile_rule?: ApiV1EmployeesProfileRuleSerializer | undefined
  health_insurance_rule?: ApiV1EmployeesHealthInsuranceRuleSerializer | undefined
  welfare_pension_insurance_rule?: ApiV1EmployeesWelfarePensionInsuranceRuleSerializer | undefined
  dependent_rules?: ApiV1EmployeesDependentRuleSerializer[] | undefined
  bank_account_rule?: ApiV1EmployeesBankAccountRuleSerializer | undefined
  basic_pay_rule?: ApiV1EmployeesBasicPayRuleSerializer | undefined
  payroll_calculation?: boolean | undefined
  company_reference_date_rule_name?: (string | null) | undefined
}
type ApiV1EmployeesIndexSerializer = {
  employees?: ApiV1EmployeeSerializer[] | undefined
  total_count?: number | undefined
}
type ApiV1EmployeeCreateRequestSerializer = {
  num?: string | undefined
  working_hours_system_name?: string | undefined
  company_reference_date_rule_name?: string | undefined
  last_name: string
  first_name: string
  last_name_kana: string
  first_name_kana: string
  birth_date: string
  entry_date: string
  pay_calc_type?: 'monthly' | 'daily' | 'hourly' | undefined
  pay_amount?: number | undefined
  gender?: 'unselected' | 'male' | 'female' | undefined
  married?: boolean | undefined
  no_payroll_calculation?: boolean | undefined
}
type ApiV1EmployeesControllerCreateBody = {
  company_id: number
  employee: ApiV1EmployeeCreateRequestSerializer
}
type ApiV1EmployeesControllerCreateResponse = { employee?: ApiV1EmployeeSerializer | undefined }
type ApiV1EmployeesControllerShowResponse = { employee?: ApiV1EmployeeSerializer | undefined }
type NotfoundError = {
  status_code?: number | undefined
  errors?: { type?: string | undefined; messages?: string[] | undefined }[] | undefined
}
type ApiV1EmployeeUpdateRequestSerializer = {
  num?: string | undefined
  display_name?: string | undefined
  base_pension_num?: string | undefined
  employment_insurance_reference_number?: string | undefined
  birth_date: string
  entry_date: string
  retire_date?: (string | null) | undefined
  company_reference_date_rule_name?: string | undefined
}
type ApiV1EmployeesControllerUpdateBody = {
  company_id: number
  year?: number | undefined
  month?: number | undefined
  employee: ApiV1EmployeeUpdateRequestSerializer
}
type ApiV1EmployeesControllerUpdateResponse = { employee?: ApiV1EmployeeSerializer | undefined }
type ApiV1EmployeesProfileRulesControllerShowResponse = {
  employee_profile_rule?: ApiV1EmployeesProfileRuleSerializer | undefined
}
type ApiV1EmployeesProfileRuleUpdateRequestSerializer = {
  last_name: string
  first_name: string
  last_name_kana: string
  first_name_kana: string
  zipcode1?: string | undefined
  zipcode2?: string | undefined
  prefecture_code?: number | undefined
  address?: string | undefined
  address_kana?: string | undefined
  phone1?: string | undefined
  phone2?: string | undefined
  phone3?: string | undefined
  residential_zipcode1?: string | undefined
  residential_zipcode2?: string | undefined
  residential_prefecture_code?: number | undefined
  residential_address?: string | undefined
  residential_address_kana?: string | undefined
  employment_type?:
    | 'board-member'
    | 'regular'
    | 'fixed-term'
    | 'part-time'
    | 'temporary'
    | ''
    | undefined
  title?: string | undefined
  gender?: 'unselected' | 'male' | 'female' | undefined
  married?: boolean | undefined
  is_working_student?: boolean | undefined
  widow_type?: 'na' | 'widower' | 'widow' | 'special_widow' | 'one_parent' | undefined
  disability_type?: 'na' | 'general' | 'heavy' | undefined
  email?: (string | null) | undefined
  householder_name?: string | undefined
  householder?:
    | 'myself'
    | 'husband'
    | 'wife'
    | 'father'
    | 'mother'
    | 'child'
    | 'senior_brother'
    | 'junior_brother'
    | 'senior_sister'
    | 'junior_sister'
    | 'grandchild'
    | 'grandfather'
    | 'grandmother'
    | 'father_in_law'
    | 'mother_in_law'
    | 'grandfather_in_law'
    | 'grandmother_in_law'
    | 'other'
    | undefined
}
type ApiV1EmployeesProfileRulesControllerUpdateBody = {
  company_id: number
  year: number
  month: number
  employee_profile_rule: ApiV1EmployeesProfileRuleUpdateRequestSerializer
}
type ApiV1EmployeesProfileRulesControllerUpdateResponse = {
  employee_profile_rule?: ApiV1EmployeesProfileRuleSerializer | undefined
}
type ApiV1EmployeesHealthInsuranceRulesControllerShowResponse = {
  employee_health_insurance_rule?: ApiV1EmployeesHealthInsuranceRuleSerializer | undefined
}
type ApiV1EmployeesHealthInsuranceRuleUpdateRequestSerializer = {
  entried?: boolean | undefined
  health_insurance_salary_calc_type?: 'auto' | 'manual' | undefined
  health_insurance_bonus_calc_type?: 'auto' | 'manual' | undefined
  manual_health_insurance_amount_of_employee_salary?: (number | null) | undefined
  manual_health_insurance_amount_of_employee_bonus?: (number | null) | undefined
  manual_health_insurance_amount_of_company_salary?: (number | null) | undefined
  manual_health_insurance_amount_of_company_bonus?: (number | null) | undefined
  care_insurance_salary_calc_type?: 'auto' | 'manual' | undefined
  care_insurance_bonus_calc_type?: 'auto' | 'manual' | undefined
  manual_care_insurance_amount_of_employee_salary?: (number | null) | undefined
  manual_care_insurance_amount_of_employee_bonus?: (number | null) | undefined
  manual_care_insurance_amount_of_company_salary?: (number | null) | undefined
  manual_care_insurance_amount_of_company_bonus?: (number | null) | undefined
  child_support_fund_salary_calc_type?: 'auto' | 'manual' | undefined
  child_support_fund_bonus_calc_type?: 'auto' | 'manual' | undefined
  manual_child_support_fund_amount_of_employee_salary?: (number | null) | undefined
  manual_child_support_fund_amount_of_employee_bonus?: (number | null) | undefined
  manual_child_support_fund_amount_of_company_salary?: (number | null) | undefined
  manual_child_support_fund_amount_of_company_bonus?: (number | null) | undefined
  reference_num?: string | undefined
  standard_monthly_remuneration: number
  health_insurance_qualification_required?: boolean | undefined
}
type ApiV1EmployeesHealthInsuranceRulesControllerUpdateBody = {
  company_id: number
  year: number
  month: number
  employee_health_insurance_rule: ApiV1EmployeesHealthInsuranceRuleUpdateRequestSerializer
}
type ApiV1EmployeesHealthInsuranceRulesControllerUpdateResponse = {
  employee_health_insurance_rule?: ApiV1EmployeesHealthInsuranceRuleSerializer | undefined
}
type ApiV1EmployeesWelfarePensionInsuranceRulesControllerShowResponse = {
  employee_welfare_pension_insurance_rule?:
    | ApiV1EmployeesWelfarePensionInsuranceRuleSerializer
    | undefined
}
type ApiV1EmployeesWelfarePensionInsuranceRuleUpdateRequestSerializer = {
  entried?: boolean | undefined
  welfare_pension_insurance_salary_calc_type?: 'auto' | 'manual' | undefined
  welfare_pension_insurance_bonus_calc_type?: 'auto' | 'manual' | undefined
  manual_welfare_pension_insurance_amount_of_employee_salary?: (number | null) | undefined
  manual_welfare_pension_insurance_amount_of_employee_bonus?: (number | null) | undefined
  manual_welfare_pension_insurance_amount_of_company_salary?: (number | null) | undefined
  manual_welfare_pension_insurance_amount_of_company_bonus?: (number | null) | undefined
  child_allowance_contribution_salary_calc_type?: 'auto' | 'manual' | undefined
  child_allowance_contribution_bonus_calc_type?: 'auto' | 'manual' | undefined
  manual_child_allowance_contribution_amount_salary?: (number | null) | undefined
  manual_child_allowance_contribution_amount_bonus?: (number | null) | undefined
  reference_num?: string | undefined
  standard_monthly_remuneration: number
}
type ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateBody = {
  company_id: number
  year: number
  month: number
  employee_welfare_pension_insurance_rule: ApiV1EmployeesWelfarePensionInsuranceRuleUpdateRequestSerializer
}
type ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateResponse = {
  employee_welfare_pension_insurance_rule?:
    | ApiV1EmployeesWelfarePensionInsuranceRuleSerializer
    | undefined
}
type ApiV1EmployeesDependentRulesControllerIndexResponse = {
  employee_dependent_rules?: ApiV1EmployeesDependentRuleSerializer[] | undefined
}
type ApiV1EmployeesDependentRuleUpdateRequestSerializer = {
  id?: number | undefined
  last_name: string
  first_name: string
  last_name_kana?: string | undefined
  first_name_kana?: string | undefined
  gender: 'unselected' | 'male' | 'female'
  relationship:
    | 'spouse'
    | 'father'
    | 'mother'
    | 'child'
    | 'senior_brother'
    | 'junior_brother'
    | 'senior_sister'
    | 'junior_sister'
    | 'grandchild'
    | 'grandfather'
    | 'grandmother'
    | 'father_in_law'
    | 'mother_in_law'
    | 'grandfather_in_law'
    | 'grandmother_in_law'
    | 'other'
    | 'great_grandfather'
    | 'great_grandmother'
    | 'spouses_child'
  birth_date: string
  residence_type: 'live_in' | 'resident' | 'non_resident'
  zipcode1?: string | undefined
  zipcode2?: string | undefined
  prefecture_code?: number | undefined
  address?: string | undefined
  address_kana?: string | undefined
  base_pension_num?: string | undefined
  income: number
  annual_revenue: number
  disability_type: 'na' | 'general' | 'heavy'
  occupation?: string | undefined
  annual_remittance_amount?: number | undefined
  employment_insurance_receive_status?:
    | 'unselected'
    | 'receiving_employment_insurance'
    | 'not_receiving_employment_insurance'
    | 'pending_employment_insurance'
    | undefined
  employment_insurance_receives_from?: (string | null) | undefined
  health_insurance_qualification_required?: boolean | undefined
  phone_type?: 'unselected' | 'home' | 'office' | 'mobile' | 'other' | undefined
  phone1?: (string | null) | undefined
  phone2?: (string | null) | undefined
  phone3?: (string | null) | undefined
  destroy?: boolean | undefined
  social_insurance_and_tax_dependent:
    | 'social_insurance_and_tax'
    | 'tax_only'
    | 'social_insurance_only'
    | 'not_dependent'
  social_insurance_dependent_acquisition_date?: (string | null) | undefined
  social_insurance_dependent_acquisition_reason?:
    | ''
    | 'start_working'
    | 'marriage'
    | 'turnover'
    | 'decrease_in_income'
    | 'other'
    | 'birth'
    | 'live_in'
    | undefined
  social_insurance_other_dependent_acquisition_reason?: (string | null) | undefined
  social_insurance_dependent_disqualification_date?: (string | null) | undefined
  social_insurance_dependent_disqualification_reason?:
    | ''
    | 'death'
    | 'divorce'
    | 'start_working_or_increase_in_income'
    | 'reach_75_years_old'
    | 'disability'
    | 'other'
    | 'start_working'
    | 'increase_in_income'
    | undefined
  social_insurance_other_dependent_disqualification_reason?: (string | null) | undefined
  tax_dependent_acquisition_date?: (string | null) | undefined
  tax_dependent_acquisition_reason?:
    | ''
    | 'start_working'
    | 'marriage'
    | 'turnover'
    | 'decrease_in_income'
    | 'other'
    | 'birth'
    | 'live_in'
    | undefined
  tax_other_dependent_acquisition_reason?: (string | null) | undefined
  tax_dependent_disqualification_date?: (string | null) | undefined
  tax_dependent_disqualification_reason?:
    | ''
    | 'death'
    | 'divorce'
    | 'start_working_or_increase_in_income'
    | 'reach_75_years_old'
    | 'disability'
    | 'other'
    | 'start_working'
    | 'increase_in_income'
    | undefined
  tax_other_dependent_disqualification_reason?: (string | null) | undefined
  non_resident_dependents_reason?:
    | 'none'
    | 'over_16_to_under_30_or_over_70'
    | 'study_abroad'
    | 'handicapped'
    | 'over_38_man'
    | undefined
}
type ApiV1EmployeesDependentRulesControllerBulkUpdateBody = {
  company_id: number
  year: number
  month: number
  employee_dependent_rules: ApiV1EmployeesDependentRuleUpdateRequestSerializer[]
}
type ApiV1EmployeesDependentRulesControllerBulkUpdateResponse = {
  employee_dependent_rules?: ApiV1EmployeesDependentRuleSerializer[] | undefined
}
type ApiV1EmployeesBankAccountRulesControllerShowResponse = {
  employee_bank_account_rule?: ApiV1EmployeesBankAccountRuleSerializer | undefined
}
type ApiV1EmployeesBankAccountRuleUpdateRequestSerializer = {
  bank_name?: string | undefined
  bank_name_kana?: string | undefined
  bank_code?: string | undefined
  branch_name?: string | undefined
  branch_name_kana?: string | undefined
  branch_code?: string | undefined
  account_number?: string | undefined
  account_name?: string | undefined
  account_type?: 'ordinary' | 'current' | 'saving' | undefined
}
type ApiV1EmployeesBankAccountRulesControllerUpdateBody = {
  company_id: number
  year: number
  month: number
  employee_bank_account_rule: ApiV1EmployeesBankAccountRuleUpdateRequestSerializer
}
type ApiV1EmployeesBankAccountRulesControllerUpdateResponse = {
  employee_bank_account_rule?: ApiV1EmployeesBankAccountRuleSerializer | undefined
}
type ApiV1EmployeesBasicPayRulesControllerShowResponse = {
  employee_basic_pay_rule?: ApiV1EmployeesBasicPayRuleSerializer | undefined
}
type ApiV1EmployeesBasicPayRuleUpdateRequestSerializer = {
  pay_calc_type: 'monthly' | 'daily' | 'hourly'
  pay_amount: number
}
type ApiV1EmployeesBasicPayRulesControllerUpdateBody = {
  company_id: number
  year: number
  month: number
  employee_basic_pay_rule: ApiV1EmployeesBasicPayRuleUpdateRequestSerializer
}
type ApiV1EmployeesBasicPayRulesControllerUpdateResponse = {
  employee_basic_pay_rule?: ApiV1EmployeesBasicPayRuleSerializer | undefined
}
type ApiV1EmployeesAllowanceRuleSerializer = {
  id: bigint
  employee_id: bigint
  allowance_id: bigint
  allowance_name: string
  amount?: (number | null) | undefined
  frequency: 'salary_this_month' | 'salary_monthly' | 'bonus'
  calc_type: 'fixed' | 'variable' | 'custom' | 'attendance_day_tag' | 'attendance_time_tag'
}
type ApiV1EmployeesDeductionRuleSerializer = {
  id: bigint
  employee_id: bigint
  deduction_id: bigint
  deduction_name: string
  amount?: number | undefined
  frequency: 'salary_this_month' | 'salary_monthly' | 'bonus'
  calc_type: 'fixed' | 'attendance_day_tag'
}
type ApiV1EmployeesDeductionRuleUpdateRequestSerializer = { deduction_id: number; amount: number }
type ApiV1EmployeesDeductionRulesControllerUpdateBody = {
  company_id: number
  year: number
  month: number
  employee_deduction_rule: ApiV1EmployeesDeductionRuleUpdateRequestSerializer
}
type ApiV1EmployeesDeductionRulesControllerUpdateResponse = {
  employee_deduction_rule?: ApiV1EmployeesDeductionRuleSerializer | undefined
}
type ApiV1EmployeeProfileCustomFieldSerializer = {
  id?: number | undefined
  field_type?: 'file' | 'text' | 'number' | 'date' | 'selector' | 'time' | undefined
  name?: string | undefined
  value?: (string | null) | undefined
  file_name?: (string | null) | undefined
}
type ApiV1ProfileCustomFieldGroupSerializer = {
  id?: number | undefined
  name?: string | undefined
  profile_custom_field_rules?: ApiV1EmployeeProfileCustomFieldSerializer[] | undefined
}
type ApiV1EmployeesProfileCustomFieldRulesControllerIndexResponse = {
  profile_custom_field_groups?: ApiV1ProfileCustomFieldGroupSerializer[] | undefined
}
type ApiV1EmployeesWorkRecordTimeRangeResponseSerializer = {
  clock_in_at?: string | undefined
  clock_out_at?: string | undefined
}
type ApiV1EmployeesWorkRecordHolidayType =
  | 'full'
  | 'half'
  | 'morning_off'
  | 'afternoon_off'
  | 'hourly'
type ApiV1EmployeesWorkRecordHolidayMins = number
type ApiV1EmployeesWorkRecordHolidayTimeRangeResponse = { start_at: string; end_at: string }
type ApiV1EmployeesWorkRecordHolidayTimeRangesResponse =
  ApiV1EmployeesWorkRecordHolidayTimeRangeResponse[]
type ApiV1EmployeesWorkRecordAnnualPaidHolidayResponse = {
  holiday_type: ApiV1EmployeesWorkRecordHolidayType
  mins?: ApiV1EmployeesWorkRecordHolidayMins | undefined
  time_ranges?: ApiV1EmployeesWorkRecordHolidayTimeRangesResponse | undefined
  holiday_category: 'annual_paid_holiday'
}
type ApiV1EmployeesWorkRecordSpecialHolidaySettingId = number
type ApiV1EmployeesWorkRecordSpecialHolidayResponse = {
  holiday_type: ApiV1EmployeesWorkRecordHolidayType
  mins?: ApiV1EmployeesWorkRecordHolidayMins | undefined
  time_ranges?: ApiV1EmployeesWorkRecordHolidayTimeRangesResponse | undefined
  holiday_category: 'special_holiday'
  special_holiday_setting_id: ApiV1EmployeesWorkRecordSpecialHolidaySettingId
}
type ApiV1EmployeesWorkRecordCompensatoryHolidayType =
  | 'full'
  | 'half'
  | 'morning_off'
  | 'afternoon_off'
type ApiV1EmployeesWorkRecordCompensatoryHolidaySourceDate = string
type ApiV1EmployeesWorkRecordCompensatoryHolidayResponse = {
  holiday_category: 'compensatory_holiday'
  holiday_type: ApiV1EmployeesWorkRecordCompensatoryHolidayType
  source_date: ApiV1EmployeesWorkRecordCompensatoryHolidaySourceDate
}
type ApiV1EmployeesWorkRecordHolidayResponse =
  | ApiV1EmployeesWorkRecordAnnualPaidHolidayResponse
  | ApiV1EmployeesWorkRecordSpecialHolidayResponse
  | ApiV1EmployeesWorkRecordCompensatoryHolidayResponse
type ApiV1EmployeesWorkRecordSerializer = {
  break_records?: ApiV1EmployeesWorkRecordTimeRangeResponseSerializer[] | undefined
  work_record_segments?: ApiV1EmployeesWorkRecordTimeRangeResponseSerializer[] | undefined
  clock_in_at?: (string | null) | undefined
  clock_out_at?: (string | null) | undefined
  date?: string | undefined
  day_pattern?: 'normal_day' | 'prescribed_holiday' | 'legal_holiday' | undefined
  schedule_pattern?:
    | ''
    | 'substitute_holiday_work'
    | 'substitute_holiday'
    | 'compensatory_holiday_work'
    | 'compensatory_holiday'
    | 'special_holiday'
    | undefined
  early_leaving_mins?: number | undefined
  half_paid_holiday_mins?: number | undefined
  half_special_holiday_mins?: number | undefined
  hourly_paid_holiday_mins?: number | undefined
  hourly_special_holiday_mins?: number | undefined
  is_absence?: boolean | undefined
  is_editable?: boolean | undefined
  lateness_mins?: number | undefined
  normal_work_clock_in_at?: (string | null) | undefined
  normal_work_clock_out_at?: (string | null) | undefined
  normal_work_mins?: number | undefined
  note?: string | undefined
  paid_holiday?: number | undefined
  paid_holidays?:
    | {
        type: 'full' | 'half' | 'morning_off' | 'afternoon_off' | 'hourly'
        mins: number
        days: number
      }[]
    | undefined
  holidays?: ApiV1EmployeesWorkRecordHolidayResponse[] | undefined
  special_holiday?: number | undefined
  special_holiday_setting_id?: (number | null) | undefined
  use_attendance_deduction?: boolean | undefined
  use_default_work_pattern?: boolean | undefined
  use_half_compensatory_holiday?: boolean | undefined
  total_overtime_work_mins?: number | undefined
  total_prescribed_holiday_work_mins?: number | undefined
  total_holiday_work_mins?: number | undefined
  total_latenight_work_mins?: number | undefined
  not_auto_calc_work_time?: boolean | undefined
  total_excess_statutory_work_mins?: number | undefined
  total_latenight_excess_statutory_work_mins?: number | undefined
  total_overtime_within_statutory_work_mins?: number | undefined
  total_latenight_overtime_within_statutory_work_mins?: number | undefined
  total_overtime_except_normal_work_mins?: number | undefined
  total_latenight_overtime_except_normal_work_mins?: number | undefined
}
type LegacyApiV1EmployeesWorkRecordSerializer = {
  break_records?: ApiV1EmployeesWorkRecordTimeRangeResponseSerializer[] | undefined
  work_record_segments?: ApiV1EmployeesWorkRecordTimeRangeResponseSerializer[] | undefined
  clock_in_at?: (string | null) | undefined
  clock_out_at?: (string | null) | undefined
  date?: string | undefined
  day_pattern?: 'normal_day' | 'prescribed_holiday' | 'legal_holiday' | undefined
  schedule_pattern?:
    | ''
    | 'substitute_holiday_work'
    | 'substitute_holiday'
    | 'compensatory_holiday_work'
    | 'compensatory_holiday'
    | 'special_holiday'
    | undefined
  early_leaving_mins?: number | undefined
  half_paid_holiday_mins?: number | undefined
  half_special_holiday_mins?: number | undefined
  hourly_paid_holiday_mins?: number | undefined
  hourly_special_holiday_mins?: number | undefined
  is_absence?: boolean | undefined
  is_editable?: boolean | undefined
  lateness_mins?: number | undefined
  normal_work_clock_in_at?: (string | null) | undefined
  normal_work_clock_out_at?: (string | null) | undefined
  normal_work_mins?: number | undefined
  note?: string | undefined
  paid_holiday?: number | undefined
  special_holiday?: number | undefined
  special_holiday_setting_id?: (number | null) | undefined
  use_attendance_deduction?: boolean | undefined
  use_default_work_pattern?: boolean | undefined
  use_half_compensatory_holiday?: boolean | undefined
  total_overtime_work_mins?: number | undefined
  total_prescribed_holiday_work_mins?: number | undefined
  total_holiday_work_mins?: number | undefined
  total_latenight_work_mins?: number | undefined
  not_auto_calc_work_time?: boolean | undefined
  total_excess_statutory_work_mins?: number | undefined
  total_latenight_excess_statutory_work_mins?: number | undefined
  total_overtime_within_statutory_work_mins?: number | undefined
  total_latenight_overtime_within_statutory_work_mins?: number | undefined
  total_overtime_except_normal_work_mins?: number | undefined
  total_latenight_overtime_except_normal_work_mins?: number | undefined
}
type ApiV1EmployeesWorkRecordTimeRangeSerializer = { clock_in_at: string; clock_out_at: string }
type ApiV1EmployeesWorkRecordHolidayTimeRangeRequest = { start_at: string; end_at: string }
type ApiV1EmployeesWorkRecordHolidayTimeRangesRequest =
  ApiV1EmployeesWorkRecordHolidayTimeRangeRequest[]
type ApiV1EmployeesWorkRecordAnnualPaidHolidayRequest = {
  holiday_type: ApiV1EmployeesWorkRecordHolidayType
  mins?: ApiV1EmployeesWorkRecordHolidayMins | undefined
  time_ranges?: ApiV1EmployeesWorkRecordHolidayTimeRangesRequest | undefined
  holiday_category: 'annual_paid_holiday'
}
type ApiV1EmployeesWorkRecordSpecialHolidayRequest = {
  holiday_type: ApiV1EmployeesWorkRecordHolidayType
  mins?: ApiV1EmployeesWorkRecordHolidayMins | undefined
  time_ranges?: ApiV1EmployeesWorkRecordHolidayTimeRangesRequest | undefined
  holiday_category: 'special_holiday'
  special_holiday_setting_id: ApiV1EmployeesWorkRecordSpecialHolidaySettingId
}
type ApiV1EmployeesWorkRecordCompensatoryHolidayRequest = {
  holiday_category: 'compensatory_holiday'
  holiday_type: ApiV1EmployeesWorkRecordCompensatoryHolidayType
  source_date: ApiV1EmployeesWorkRecordCompensatoryHolidaySourceDate
}
type ApiV1EmployeesWorkRecordHolidayRequest =
  | ApiV1EmployeesWorkRecordAnnualPaidHolidayRequest
  | ApiV1EmployeesWorkRecordSpecialHolidayRequest
  | ApiV1EmployeesWorkRecordCompensatoryHolidayRequest
type ApiV1EmployeesWorkRecordsControllerUpdateBody = {
  company_id: number
  break_records?: ApiV1EmployeesWorkRecordTimeRangeSerializer[] | undefined
  work_record_segments?: ApiV1EmployeesWorkRecordTimeRangeSerializer[] | undefined
  clock_in_at?: string | undefined
  clock_out_at?: string | undefined
  day_pattern?: 'normal_day' | 'prescribed_holiday' | 'legal_holiday' | undefined
  early_leaving_mins?: number | undefined
  is_absence?: boolean | undefined
  lateness_mins?: number | undefined
  normal_work_clock_in_at?: string | undefined
  normal_work_clock_out_at?: string | undefined
  normal_work_mins?: number | undefined
  note?: string | undefined
  paid_holidays?:
    | {
        type: 'full' | 'half' | 'morning_off' | 'afternoon_off' | 'hourly'
        mins?: number | undefined
      }[]
    | undefined
  holidays?: ApiV1EmployeesWorkRecordHolidayRequest[] | undefined
  special_holiday?: 0 | 1 | undefined
  special_holiday_setting_id?: (number | null) | undefined
  half_special_holiday_mins?: number | undefined
  hourly_special_holiday_mins?: number | undefined
  use_attendance_deduction?: boolean | undefined
  use_default_work_pattern?: boolean | undefined
}
type LegacyApiV1EmployeesWorkRecordsControllerUpdateBody = {
  company_id?: number | undefined
  break_records?: ApiV1EmployeesWorkRecordTimeRangeSerializer[] | undefined
  work_record_segments?: ApiV1EmployeesWorkRecordTimeRangeSerializer[] | undefined
  clock_in_at?: string | undefined
  clock_out_at?: string | undefined
  day_pattern?: 'normal_day' | 'prescribed_holiday' | 'legal_holiday' | undefined
  early_leaving_mins?: number | undefined
  is_absence?: boolean | undefined
  lateness_mins?: number | undefined
  normal_work_clock_in_at?: string | undefined
  normal_work_clock_out_at?: string | undefined
  normal_work_mins?: number | undefined
  note?: string | undefined
  paid_holiday?: 0 | 1 | undefined
  half_paid_holiday_mins?: number | undefined
  hourly_paid_holiday_mins?: number | undefined
  special_holiday?: 0 | 1 | undefined
  special_holiday_setting_id?: (number | null) | undefined
  half_special_holiday_mins?: number | undefined
  hourly_special_holiday_mins?: number | undefined
  use_attendance_deduction?: boolean | undefined
  use_default_work_pattern?: boolean | undefined
}
type ApiV1HolidaysAndHoursSerializer = { days?: number | undefined; hours?: number | undefined }
type ApiV1EmployeesEmployeeMultiHourlyWageWorkRecordSummarySerializer = {
  name?: string | undefined
  total_normal_time_mins?: number | undefined
}
type ApiV1EmployeesWorkRecordSummarySerializer = {
  year?: number | undefined
  month?: number | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  work_days?: number | undefined
  total_work_mins?: number | undefined
  total_normal_work_mins?: number | undefined
  total_excess_statutory_work_mins?: number | undefined
  total_overtime_within_statutory_work_mins?: number | undefined
  total_overtime_except_normal_work_mins?: number | undefined
  total_overtime_within_normal_work_mins?: number | undefined
  total_prescribed_holiday_work_mins?: number | undefined
  total_holiday_work_mins?: number | undefined
  total_latenight_work_mins?: number | undefined
  num_absences?: number | undefined
  num_paid_holidays?: number | undefined
  num_paid_holidays_and_hours?: ApiV1HolidaysAndHoursSerializer | undefined
  num_paid_holidays_left?: number | undefined
  num_paid_holidays_and_hours_left?: ApiV1HolidaysAndHoursSerializer | undefined
  num_substitute_holidays_used?: number | undefined
  num_compensatory_holidays_used?: number | undefined
  num_special_holidays_used?: number | undefined
  num_special_holidays_and_hours_used?: ApiV1HolidaysAndHoursSerializer | undefined
  total_lateness_and_early_leaving_mins?: number | undefined
  multi_hourly_wages?:
    | ApiV1EmployeesEmployeeMultiHourlyWageWorkRecordSummarySerializer[]
    | undefined
  work_records?:
    | (ApiV1EmployeesWorkRecordSerializer | LegacyApiV1EmployeesWorkRecordSerializer)[]
    | undefined
  total_shortage_work_mins?: (number | null) | undefined
  total_deemed_paid_excess_statutory_work_mins?: (number | null) | undefined
  total_deemed_paid_overtime_within_statutory_work_mins?: (number | null) | undefined
  total_deemed_paid_overtime_except_normal_work_mins?: (number | null) | undefined
}
type ApiV1EmployeesWorkRecordSummaryControllerUpdateBody = {
  company_id: number
  work_days?: number | undefined
  work_days_on_weekdays?: number | undefined
  work_days_on_prescribed_holidays?: number | undefined
  work_days_on_legal_holidays?: number | undefined
  total_work_mins?: number | undefined
  total_normal_work_mins?: number | undefined
  total_excess_statutory_work_mins?: number | undefined
  total_overtime_within_statutory_work_mins?: number | undefined
  total_holiday_work_mins?: number | undefined
  total_latenight_work_mins?: number | undefined
  total_actual_excess_statutory_work_mins?: number | undefined
  total_actual_overtime_within_statutory_work_mins?: number | undefined
  total_overtime_work_mins?: number | undefined
  total_overtime_excess_statutory_work_mins?: number | undefined
  total_prescribed_holiday_work_mins?: number | undefined
  num_absences?: number | undefined
  num_absences_for_deduction?: number | undefined
  total_lateness_mins?: number | undefined
  total_lateness_mins_for_deduction?: number | undefined
  total_early_leaving_mins?: number | undefined
  total_early_leaving_mins_for_deduction?: number | undefined
  num_paid_holidays?: number | undefined
  total_shortage_work_mins?: number | undefined
  total_deemed_paid_excess_statutory_work_mins?: number | undefined
  total_deemed_paid_overtime_within_statutory_work_mins?: number | undefined
  total_deemed_paid_overtime_except_normal_work_mins?: number | undefined
}
type ApiV1EmployeesTimeClockSerializer = {
  id?: number | undefined
  date?: string | undefined
  type?: 'clock_in' | 'break_begin' | 'break_end' | 'clock_out' | undefined
  datetime?: string | undefined
  original_datetime?: string | undefined
  note?: string | undefined
}
type ApiV1EmployeesTimeClocksControllerIndexResponse = ApiV1EmployeesTimeClockSerializer[]
type ApiV1EmployeesTimeClocksControllerCreateBody = {
  company_id: number
  type: 'clock_in' | 'break_begin' | 'break_end' | 'clock_out'
  base_date?: string | undefined
  datetime?: string | undefined
}
type ApiV1EmployeesTimeClocksControllerCreateResponse = {
  employee_time_clock?: ApiV1EmployeesTimeClockSerializer | undefined
}
type ApiV1EmployeesTimeClocksControllerShowResponse = {
  employee_time_clock?: ApiV1EmployeesTimeClockSerializer | undefined
}
type ApiV1EmployeesTimeClocksControllerAvailableTypesResponse = {
  available_types?: ('clock_in' | 'break_begin' | 'break_end' | 'clock_out')[] | undefined
  base_date?: string | undefined
}
type ApiV1EmployeesAttendanceTagSummary = {
  attendance_tag: {
    id: number
    company_id: number
    name: string
    description: string
    max_amount: number
    published: boolean
    is_employee_usable: boolean
  }
  amount: number
}
type ApiV1EmployeesAttendanceMinsTagSummary = {
  attendance_mins_tag: {
    id: number
    company_id: number
    name: string
    description: string
    input_unit_mins: 1 | 5 | 10 | 15 | 30 | 60
    max_mins: number
    published: boolean
    is_employee_usable: boolean
  }
  mins: number
}
type ApiV1EmployeesAttendanceTagSummariesControllerShowResponse = {
  employee_attendance_tag_summaries?: ApiV1EmployeesAttendanceTagSummary[] | undefined
  employee_attendance_mins_tag_summaries?: ApiV1EmployeesAttendanceMinsTagSummary[] | undefined
}
type ApiV1EmployeesAttendanceTagSummaryUpdateRequestSerializer = {
  attendance_tag_id: number
  amount: number
}
type ApiV1EmployeesAttendanceMinsTagSummaryUpdateRequestSerializer = {
  attendance_tag_id: number
  mins: number
}
type ApiV1EmployeesAttendanceTagSummariesControllerUpdateBody = {
  company_id: number
  employee_attendance_tag_summaries?:
    | ApiV1EmployeesAttendanceTagSummaryUpdateRequestSerializer[]
    | undefined
  employee_attendance_mins_tag_summaries?:
    | ApiV1EmployeesAttendanceMinsTagSummaryUpdateRequestSerializer[]
    | undefined
}
type ApiV1EmployeesAttendanceTagSummariesControllerUpdateResponse = {
  employee_attendance_tag_summaries?: ApiV1EmployeesAttendanceTagSummary[] | undefined
  employee_attendance_mins_tag_summaries?: ApiV1EmployeesAttendanceMinsTagSummary[] | undefined
}
type ApiV1EmployeesAttendanceTagSerializer = {
  id: number
  company_id: number
  name: string
  description: string
  max_amount: number
  published: boolean
  is_employee_usable: boolean
}
type ApiV1EmployeesAttendanceMinsTagSerializer = {
  id: number
  company_id: number
  name: string
  description: string
  input_unit_mins: 1 | 5 | 10 | 15 | 30 | 60
  max_mins: number
  published: boolean
  is_employee_usable: boolean
}
type ApiV1EmployeesAttendanceTagsControllerIndexResponse = {
  employee_attendance_tags?: ApiV1EmployeesAttendanceTagSerializer[] | undefined
  employee_attendance_mins_tags?: ApiV1EmployeesAttendanceMinsTagSerializer[] | undefined
}
type ApiV1EmployeesAssignedAttendanceTagSerializer = {
  attendance_tag: {
    id: number
    company_id: number
    name: string
    description: string
    max_amount: number
    published: boolean
    is_employee_usable: boolean
  }
  amount: number
}
type ApiV1EmployeesAssignedAttendanceMinsTagSerializer = {
  attendance_mins_tag: ApiV1EmployeesAttendanceMinsTagSerializer
  mins: number
}
type ApiV1EmployeesAttendanceTagsControllerShowResponse = {
  employee_attendance_tags?: ApiV1EmployeesAssignedAttendanceTagSerializer[] | undefined
  employee_attendance_mins_tags?: ApiV1EmployeesAssignedAttendanceMinsTagSerializer[] | undefined
}
type ApiV1EmployeesAttendanceTagUpdateRequestSerializer = {
  attendance_tag_id: number
  amount: number
}
type ApiV1EmployeesAttendanceMinsTagUpdateRequestSerializer = {
  attendance_tag_id: number
  mins: number
}
type ApiV1EmployeesAttendanceTagsControllerUpdateBody = {
  company_id: number
  employee_attendance_tags?: ApiV1EmployeesAttendanceTagUpdateRequestSerializer[] | undefined
  employee_attendance_mins_tags?:
    | ApiV1EmployeesAttendanceMinsTagUpdateRequestSerializer[]
    | undefined
}
type ApiV1EmployeesAttendanceTagsControllerUpdateResponse = {
  employee_attendance_tags?: ApiV1EmployeesAssignedAttendanceTagSerializer[] | undefined
  employee_attendance_mins_tags?: ApiV1EmployeesAssignedAttendanceMinsTagSerializer[] | undefined
}
type ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer = {
  name?: string | undefined
  amount?: string | undefined
}
type ApiV1EmployeePayrollStatementsEmployeeAttendanceItemSerializer = {
  name?: string | undefined
  time?: string | undefined
  amount?: string | undefined
}
type ApiV1EmployeePayrollStatementsEmployeeOvertimePayItemSerializer = {
  name?: string | undefined
  time?: (string | null) | undefined
  amount?: string | undefined
  code?: (string | null) | undefined
}
type ApiV1SalariesEmployeePayrollStatementSerializer = {
  id?: number | undefined
  company_id?: number | undefined
  employee_id?: number | undefined
  employee_name?: string | undefined
  employee_display_name?: string | undefined
  employee_num?: string | undefined
  pay_date?: string | undefined
  start_date?: string | undefined
  closing_date?: string | undefined
  variable_pay_start_date?: string | undefined
  variable_pay_closing_date?: string | undefined
  fixed?: boolean | undefined
  calc_status?: string | undefined
  calculated_at?: (string | null) | undefined
  pay_calc_type?: 'monthly' | 'daily' | 'hourly' | '' | undefined
  board_member_remuneration_amount?: (string | null) | undefined
  basic_pay_amount?: (string | null) | undefined
  work_days?: (string | null) | undefined
  normal_work_time?: (string | null) | undefined
  normal_work_days?: (string | null) | undefined
  work_mins_by_paid_holiday?: (string | null) | undefined
  num_paid_holidays?: (string | null) | undefined
  is_board_member?: boolean | undefined
  total_attendance_deduction_amount?: (string | null) | undefined
  total_allowance_amount?: (string | null) | undefined
  total_deduction_amount?: (string | null) | undefined
  total_deduction_employer_share?: (string | null) | undefined
  net_payment_amount?: (string | null) | undefined
  gross_payment_amount?: (string | null) | undefined
  total_worked_days_count?: (string | null) | undefined
  total_taxable_payment_amount?: (string | null) | undefined
  total_expense_amount?: (string | null) | undefined
  total_transfer_amount?: (string | null) | undefined
  total_annual_payment_amount?: (string | null) | undefined
  payments?: ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer[] | undefined
  deductions?: ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer[] | undefined
  deductions_employer_share?:
    | ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer[]
    | undefined
  attendances?: ApiV1EmployeePayrollStatementsEmployeeAttendanceItemSerializer[] | undefined
  overtime_pays?:
    | (ApiV1EmployeePayrollStatementsEmployeeOvertimePayItemSerializer[] | null)
    | undefined
  remark?: (string | null) | undefined
}
type ApiV1SalariesEmployeePayrollStatementsControllerIndexResponse = {
  employee_payroll_statements?: ApiV1SalariesEmployeePayrollStatementSerializer[] | undefined
  total_count?: number | undefined
}
type ApiV1SalariesEmployeePayrollStatementsControllerShowResponse = {
  employee_payroll_statement?: ApiV1SalariesEmployeePayrollStatementSerializer | undefined
}
type ApiV1BonusesEmployeePayrollStatementSerializer = {
  id?: number | undefined
  company_id?: number | undefined
  employee_id?: number | undefined
  employee_name?: string | undefined
  employee_display_name?: string | undefined
  employee_num?: string | undefined
  closing_date?: string | undefined
  pay_date?: string | undefined
  fixed?: boolean | undefined
  calc_status?: string | undefined
  calculated_at?: (string | null) | undefined
  bonus_amount?: (string | null) | undefined
  total_allowance_amount?: (string | null) | undefined
  total_deduction_amount?: (string | null) | undefined
  net_payment_amount?: (string | null) | undefined
  gross_payment_amount?: (string | null) | undefined
  total_taxable_payment_amount?: (string | null) | undefined
  allowances?: ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer[] | undefined
  deductions?: ApiV1EmployeePayrollStatementsEmployeePayrollStatementItemSerializer[] | undefined
  remark?: string | undefined
}
type ApiV1BonusesEmployeePayrollStatementsIndexSerializer = {
  employee_payroll_statements?: ApiV1BonusesEmployeePayrollStatementSerializer[] | undefined
  total_count?: number | undefined
}
type ApiV1BonusesEmployeePayrollStatementsControllerShowResponse = {
  employee_payroll_statement?: ApiV1BonusesEmployeePayrollStatementSerializer | undefined
}
type ApiV1GroupMembershipSerializer = {
  start_date?: string | undefined
  end_date?: string | undefined
  boss_id?: (bigint | null) | undefined
  main_duty?: 'unspecified' | 'sub_duty' | 'main_duty' | undefined
  group_id?: number | undefined
  group_code?: string | undefined
  group_name?: string | undefined
  level?: number | undefined
  position_id?: (number | null) | undefined
  position_code?: (string | null) | undefined
  position_name?: (string | null) | undefined
  parent_group_id?: (number | null) | undefined
  parent_group_code?: (string | null) | undefined
  parent_group_name?: (string | null) | undefined
}
type ApiV1EmployeeGroupMembershipSerializer = {
  id?: number | undefined
  num?: string | undefined
  display_name?: string | undefined
  entry_date?: string | undefined
  retire_date?: (string | null) | undefined
  user_id?: (number | null) | undefined
  login_email?: (string | null) | undefined
  birth_date?: string | undefined
  gender?: 'unselected' | 'male' | 'female' | undefined
  payroll_calculation?: boolean | undefined
  group_memberships?: ApiV1GroupMembershipSerializer[] | undefined
}
type ApiV1EmployeeGroupMembershipsIndexSerializer = {
  employee_group_memberships?: ApiV1EmployeeGroupMembershipSerializer[] | undefined
  total_count?: number | undefined
}
type ApiV1EmployeesGroupMembershipsIndexSerializer = {
  group_memberships: {
    id: bigint
    start_date: string
    end_date: string | null
    boss_id?: (bigint | null) | undefined
    main_duty: 'unspecified' | 'sub_duty' | 'main_duty'
    group_id: number
    group_code: string
    group_name: string
    position_id?: (number | null) | undefined
    position_code?: (string | null) | undefined
    position_name?: (string | null) | undefined
  }[]
  total_count: number
}
type ApiV1GroupResponseParams = {
  id: number
  code?: (string | null) | undefined
  name: string
  level: number
  parent_group_id?: (number | null) | undefined
  parent_group_code?: (string | null) | undefined
  parent_group_name?: (string | null) | undefined
}
type ApiV1GroupsIndexResponse = { groups: ApiV1GroupResponseParams[]; total_count: number }
type ApiV1GroupCreateRequestParams = {
  code?: (string | null) | undefined
  name: string
  parent_group_id?: (number | null) | undefined
}
type ApiV1GroupCreateRequest = { company_id: number; group: ApiV1GroupCreateRequestParams }
type ApiV1GroupResponse = { group: ApiV1GroupResponseParams }
type ApiV1GroupUpdateRequestParams = { code?: (string | null) | undefined; name: string }
type ApiV1GroupUpdateRequest = { company_id: number; group: ApiV1GroupUpdateRequestParams }
type ApiV1AllowanceSerializer = {
  id: bigint
  company_id: number
  name: string
  description?: (string | null) | undefined
  frequency: 'salary_this_month' | 'salary_monthly' | 'bonus'
  calc_type: 'fixed' | 'variable' | 'custom' | 'attendance_day_tag' | 'attendance_time_tag'
  is_active: boolean
  amount?: (number | null) | undefined
  amount_source: 'direct' | 'system_overtime_charge' | 'system_deduction_charge'
  is_daily_prorated: boolean
  formula_element?:
    | 'num_absences'
    | 'num_paid_holidays'
    | 'num_total_workdays'
    | 'num_work_days_with_early_leaving'
    | 'num_work_days_with_lateness'
    | 'total_excess_statutory_work_mins'
    | 'total_holiday_work_mins'
    | 'total_lateness_and_early_leaving_mins'
    | 'total_latenight_work_mins'
    | 'total_normal_work_mins'
    | 'total_overtime_work_mins'
    | 'total_prescribed_holiday_work_mins'
    | 'total_work_mins'
    | 'company_profile_custom_field'
    | 'attendance_tag_total_count'
    | 'attendance_tag_assigned_days'
    | 'attendance_tag_total_excess_statutory_work_mins'
    | 'attendance_tag_total_prescribed_holiday_work_mins'
    | 'attendance_tag_total_holiday_work_mins'
    | 'attendance_tag_total_latenight_work_mins'
    | 'attendance_tag_total_normal_work_mins'
    | 'attendance_tag_total_overtime_work_mins'
    | 'attendance_tag_total_work_mins'
    | undefined
  formula_element_code?:
    | 'num_absences'
    | 'num_paid_holidays'
    | 'num_total_workdays'
    | 'num_work_days_with_early_leaving'
    | 'num_work_days_with_lateness'
    | 'total_overtime_within_statutory_work_mins'
    | 'total_holiday_work_mins'
    | 'total_lateness_and_early_leaving_mins'
    | 'total_latenight_work_mins'
    | 'total_normal_work_mins'
    | 'total_overtime_excess_statutory_work_mins'
    | 'total_prescribed_holiday_work_mins'
    | 'total_work_mins'
    | 'company_profile_custom_field'
    | 'attendance_tag_total_count'
    | 'attendance_tag_assigned_days'
    | 'attendance_tag_total_overtime_within_statutory_work_mins'
    | 'attendance_tag_total_prescribed_holiday_work_mins'
    | 'attendance_tag_total_holiday_work_mins'
    | 'attendance_tag_total_latenight_work_mins'
    | 'attendance_tag_total_normal_work_mins'
    | 'attendance_tag_total_overtime_excess_statutory_work_mins'
    | 'attendance_tag_total_work_mins'
    | undefined
  round_type?: 'round' | 'floor' | 'ceil' | undefined
  rate_multiplier?: (number | null) | undefined
  company_profile_custom_field_id?: (bigint | null) | undefined
  attendance_tag_id?: (bigint | null) | undefined
  is_affect_income_tax: boolean
  is_affect_employment_insurance: boolean
  is_affect_labor_insurance: boolean
  is_affect_overtime_wage_base: boolean
  is_affect_attendance_deduction_base: boolean
  is_affect_fixed_wage: boolean
}
type ApiV1AllowancesIndexResponse = { allowances: ApiV1AllowanceSerializer[]; total_count: number }
type ApiV1AllowanceCreateRequestSerializer = {
  name: string
  description?: (string | null) | undefined
  frequency: 'salary_this_month' | 'salary_monthly'
  calc_type: 'fixed'
  amount_source: 'direct'
  amount: number
  is_daily_prorated?: boolean | undefined
  is_affect_income_tax?: boolean | undefined
  is_affect_employment_insurance?: boolean | undefined
  is_affect_labor_insurance?: boolean | undefined
  is_affect_overtime_wage_base?: boolean | undefined
  is_affect_attendance_deduction_base?: boolean | undefined
  is_affect_fixed_wage?: boolean | undefined
}
type ApiV1AllowancesControllerCreateBody = {
  company_id: number
  allowance: ApiV1AllowanceCreateRequestSerializer
}
type ApiV1AllowanceResponse = { allowance: ApiV1AllowanceSerializer }
type ApiV1DeductionSerializer = {
  id: bigint
  company_id: number
  name: string
  description?: (string | null) | undefined
  frequency: 'salary_this_month' | 'salary_monthly' | 'bonus'
  calc_type: 'fixed' | 'attendance_day_tag'
  is_active: boolean
  amount: number | null
  is_affect_income_tax: boolean
  attendance_tag_id?: (bigint | null) | undefined
}
type ApiV1DeductionsIndexResponse = { deductions: ApiV1DeductionSerializer[]; total_count: number }
type ApiV1DeductionCreateRequestSerializer = {
  name: string
  description?: (string | null) | undefined
  frequency: 'salary_this_month' | 'salary_monthly' | 'bonus'
  calc_type: 'fixed'
  amount: number
  is_affect_income_tax: boolean
}
type ApiV1DeductionsControllerCreateBody = {
  company_id: number
  deduction: ApiV1DeductionCreateRequestSerializer
}
type ApiV1DeductionResponse = { deduction: ApiV1DeductionSerializer }
type ApiV1PositionResponseParams = { id: number; code?: (string | null) | undefined; name: string }
type ApiV1PositionIndexResponse = { positions: ApiV1PositionResponseParams[]; total_count: number }
type ApiV1PositionRequestParams = { code?: (string | null) | undefined; name: string }
type ApiV1PositionRequest = { company_id: number; position: ApiV1PositionRequestParams }
type ApiV1PositionResponse = { position: ApiV1PositionResponseParams }
type ApiV1MonthlyAttendanceIndexResponseParams = {
  id: number
  company_id: number
  application_number: number
  applicant_id: number
  proxy_applicant_id?: (number | null) | undefined
  approver_ids?: (number | null)[] | undefined
  target_date: string
  issue_date: string
  status: 'draft' | 'in_progress' | 'approved' | 'feedback'
  passed_auto_check: boolean
}
type ApiV1MonthlyAttendanceIndexResponse = {
  monthly_attendances: ApiV1MonthlyAttendanceIndexResponseParams[]
  total_count: number
}
type ApiV1MonthlyAttendanceCreateRequest = {
  company_id: number
  target_year: number
  target_month: number
  approval_flow_route_id: number
  approver_id?: number | undefined
}
type ApiV1ApprovalFlowLogsParams = {
  user_id?: number | undefined
  action?: 'apply' | 'approve' | 'cancel' | 'feedback' | undefined
  update_at?: string | undefined
}
type ApiV1ApprovalFlowCommentsParams = {
  comment: string
  user_id: number | null
  posted_at: string
}
type ApiV1MonthlyAttendanceResponseParams = {
  id: number
  company_id: number
  application_number: number
  applicant_id: number
  proxy_applicant_id?: (number | null) | undefined
  approver_ids?: (number | null)[] | undefined
  target_date: string
  issue_date: string
  status: 'draft' | 'in_progress' | 'approved' | 'feedback'
  passed_auto_check: boolean
  approval_flow_route_id: number
  approval_flow_route_name: string
  approval_flow_logs: ApiV1ApprovalFlowLogsParams[]
  comments: ApiV1ApprovalFlowCommentsParams[]
  current_step_id?: (number | null) | undefined
  current_round: number
}
type ApiV1MonthlyAttendanceResponse = { monthly_attendance: ApiV1MonthlyAttendanceResponseParams }
type ApiV1MonthlyAttendanceUpdateRequest = {
  company_id: number
  approval_flow_route_id: number
  approver_id?: number | undefined
}
type ApiV1ApprovalActionRequest = {
  company_id: number
  approval_action: 'approve' | 'cancel' | 'feedback' | 'force_feedback'
  target_round: number | null
  target_step_id: number | null
  next_approver_id?: (number | null) | undefined
}
type ApiV1WorkTimeIndexResponseParams = {
  id: number
  company_id: number
  application_number: number
  applicant_id: number
  approver_ids?: (number | null)[] | undefined
  target_date: string
  clear_work_time: boolean
  clock_in_at?: (string | null) | undefined
  clock_out_at?: (string | null) | undefined
  work_records?: { clock_in_at: string; clock_out_at: string }[] | undefined
  lateness_mins: number
  early_leaving_mins: number
  break_records?: { clock_in_at: string; clock_out_at: string }[] | undefined
  issue_date: string
  comment?: (string | null) | undefined
  status: 'draft' | 'in_progress' | 'approved' | 'feedback'
  passed_auto_check: boolean
  proxy_applicant_id?: (number | null) | undefined
}
type ApiV1WorkTimeResponseParams = {
  id: number
  company_id: number
  application_number: number
  applicant_id: number
  approver_ids?: (number | null)[] | undefined
  target_date: string
  clear_work_time: boolean
  clock_in_at?: (string | null) | undefined
  clock_out_at?: (string | null) | undefined
  work_records?: unknown[] | undefined
  lateness_mins: number
  early_leaving_mins: number
  break_records?: unknown[] | undefined
  issue_date: string
  comment?: (string | null) | undefined
  status: 'draft' | 'in_progress' | 'approved' | 'feedback'
  passed_auto_check: boolean
  approval_flow_route_id: number
  approval_flow_route_name: string
  approval_flow_logs: ApiV1ApprovalFlowLogsParams[]
  comments: ApiV1ApprovalFlowCommentsParams[]
  current_step_id?: (number | null) | undefined
  current_round: number
  proxy_applicant_id?: (number | null) | undefined
}
type ApiV1PaidHolidayIndexResponseParams = {
  id: number
  company_id: number
  application_number: number
  applicant_id: number
  approver_ids?: (number | null)[] | undefined
  target_date: string
  values: {
    type: 'full' | 'half' | 'morning' | 'afternoon' | 'hourly'
    start_at?: (string | null) | undefined
    end_at?: (string | null) | undefined
  }[]
  issue_date: string
  comment?: (string | null) | undefined
  status: 'draft' | 'in_progress' | 'approved' | 'feedback'
  revoke_status: 'revoking' | 'revoked'
  passed_auto_check: boolean
  proxy_applicant_id?: (number | null) | undefined
}
type LegacyApiV1PaidHolidayIndexResponseParams = {
  id: number
  company_id: number
  application_number: number
  applicant_id: number
  approver_ids?: (number | null)[] | undefined
  target_date: string
  holiday_type: 'full' | 'half' | 'morning' | 'afternoon' | 'hour'
  start_at?: (string | null) | undefined
  end_at?: (string | null) | undefined
  issue_date: string
  comment?: (string | null) | undefined
  status: 'draft' | 'in_progress' | 'approved' | 'feedback'
  revoke_status: 'revoking' | 'revoked'
  passed_auto_check: boolean
  proxy_applicant_id?: (number | null) | undefined
}
type ApiV1PaidHolidayIndexResponse = {
  paid_holidays: (ApiV1PaidHolidayIndexResponseParams | LegacyApiV1PaidHolidayIndexResponseParams)[]
  total_count: number
}
type ApiV1PaidHolidayRequest = {
  company_id: number
  target_date: string
  values: {
    type: 'full' | 'half' | 'morning' | 'afternoon' | 'hourly'
    start_at?: (string | null) | undefined
    end_at?: (string | null) | undefined
  }[]
  comment?: string | undefined
  approval_flow_route_id: number
  approver_id?: number | undefined
}
type LegacyApiV1PaidHolidayRequest = {
  company_id: number
  target_date: string
  holiday_type: 'full' | 'half' | 'morning' | 'afternoon' | 'hour'
  start_at?: string | undefined
  end_at?: string | undefined
  comment?: string | undefined
  approval_flow_route_id: number
  approver_id?: number | undefined
}
type ApiV1PaidHolidayResponseParams = {
  id: number
  company_id: number
  application_number: number
  applicant_id: number
  approver_ids?: (number | null)[] | undefined
  target_date: string
  values: {
    type: 'full' | 'half' | 'morning' | 'afternoon' | 'hourly'
    start_at?: (string | null) | undefined
    end_at?: (string | null) | undefined
  }[]
  issue_date: string
  comment?: (string | null) | undefined
  status: 'draft' | 'in_progress' | 'approved' | 'feedback'
  revoke_status: 'revoking' | 'revoked'
  passed_auto_check: boolean
  approval_flow_route_id: number
  approval_flow_route_name: string
  approval_flow_logs: ApiV1ApprovalFlowLogsParams[]
  comments: ApiV1ApprovalFlowCommentsParams[]
  current_step_id?: (number | null) | undefined
  current_round: number
  proxy_applicant_id?: (number | null) | undefined
}
type LegacyApiV1PaidHolidayResponseParams = {
  id: number
  company_id: number
  application_number: number
  applicant_id: number
  approver_ids?: (number | null)[] | undefined
  target_date: string
  holiday_type: 'full' | 'half' | 'morning' | 'afternoon' | 'hour'
  start_at?: (string | null) | undefined
  end_at?: (string | null) | undefined
  issue_date: string
  comment?: (string | null) | undefined
  status: 'draft' | 'in_progress' | 'approved' | 'feedback'
  revoke_status: 'revoking' | 'revoked'
  passed_auto_check: boolean
  approval_flow_route_id: number
  approval_flow_route_name: string
  approval_flow_logs: ApiV1ApprovalFlowLogsParams[]
  comments: ApiV1ApprovalFlowCommentsParams[]
  current_step_id?: (number | null) | undefined
  current_round: number
  proxy_applicant_id?: (number | null) | undefined
}
type ApiV1PaidHolidayResponse = {
  paid_holiday: ApiV1PaidHolidayResponseParams | LegacyApiV1PaidHolidayResponseParams
}
type ApiV1specialHolidayIndexResponse = {
  special_holidays: {
    id: number
    company_id: number
    application_number: number
    applicant_id: number
    approver_ids?: (number | null)[] | undefined
    target_date: string
    special_holiday_setting_id: number
    special_holiday_name: string
    holiday_type: 'full' | 'half' | 'morning' | 'afternoon' | 'hour'
    start_at?: (string | null) | undefined
    end_at?: (string | null) | undefined
    issue_date: string
    comment?: (string | null) | undefined
    status: 'draft' | 'in_progress' | 'approved' | 'feedback'
    revoke_status: 'revoking' | 'revoked'
    passed_auto_check: boolean
    proxy_applicant_id?: (number | null) | undefined
  }[]
  total_count: number
}
type ApiV1specialHolidayRequest = {
  company_id: number
  target_date: string
  special_holiday_setting_id: number
  holiday_type: 'full' | 'half' | 'morning' | 'afternoon' | 'hour'
  start_at?: string | undefined
  end_at?: string | undefined
  comment?: string | undefined
  approval_flow_route_id: number
  approver_id?: number | undefined
}
type ApiV1specialHolidayResponse = {
  special_holiday: {
    id: number
    company_id: number
    application_number: number
    applicant_id: number
    approver_ids?: (number | null)[] | undefined
    target_date: string
    special_holiday_setting_id: number
    special_holiday_name: string
    holiday_type: 'full' | 'half' | 'morning' | 'afternoon' | 'hour'
    start_at?: (string | null) | undefined
    end_at?: (string | null) | undefined
    issue_date: string
    comment?: (string | null) | undefined
    status: 'draft' | 'in_progress' | 'approved' | 'feedback'
    revoke_status: 'revoking' | 'revoked'
    passed_auto_check: boolean
    approval_flow_route_id: number
    approval_flow_route_name: string
    approval_flow_logs: ApiV1ApprovalFlowLogsParams[]
    comments: ApiV1ApprovalFlowCommentsParams[]
    current_step_id?: (number | null) | undefined
    current_round: number
    proxy_applicant_id?: (number | null) | undefined
  }
}
type ApiV1OvertimeWorkIndexResponseParams = {
  id: number
  company_id: number
  application_number: number
  applicant_id: number
  proxy_applicant_id?: (number | null) | undefined
  approver_ids?: (number | null)[] | undefined
  target_date: string
  start_at?: string | undefined
  end_at?: string | undefined
  issue_date: string
  comment?: (string | null) | undefined
  status: 'draft' | 'in_progress' | 'approved' | 'feedback'
  revoke_status: 'revoking' | 'revoked'
  passed_auto_check: boolean
}
type ApiV1OvertimeWorkIndexResponse = {
  overtime_works: ApiV1OvertimeWorkIndexResponseParams[]
  total_count: number
}
type ApiV1OvertimeWorkRequest = {
  company_id: number
  target_date: string
  start_at?: string | undefined
  end_at?: string | undefined
  early_work_start_at?: (string | null) | undefined
  early_work_end_at?: (string | null) | undefined
  overtime_work_start_at?: (string | null) | undefined
  overtime_work_end_at?: (string | null) | undefined
  comment?: string | undefined
  approval_flow_route_id: number
  approver_id?: number | undefined
}
type ApiV1OvertimeWorkResponseParams = {
  id: number
  company_id: number
  application_number: number
  applicant_id: number
  proxy_applicant_id?: (number | null) | undefined
  approver_ids?: (number | null)[] | undefined
  target_date: string
  start_at?: string | undefined
  end_at?: string | undefined
  issue_date: string
  comment?: (string | null) | undefined
  status: 'draft' | 'in_progress' | 'approved' | 'feedback'
  revoke_status: 'revoking' | 'revoked'
  passed_auto_check: boolean
  approval_flow_route_id: number
  approval_flow_route_name: string
  approval_flow_logs: ApiV1ApprovalFlowLogsParams[]
  comments: ApiV1ApprovalFlowCommentsParams[]
  current_step_id?: (number | null) | undefined
  current_round: number
}
type ApiV1OvertimeWorkResponse = { overtime_work: ApiV1OvertimeWorkResponseParams }
type ApiV1ApprovalFlowRouteIndexResponseParams = {
  id: number
  name?: string | undefined
  description?: string | undefined
  user_id?: (number | null) | undefined
  definition_system?: boolean | undefined
  first_step_id?: number | undefined
  usages?: ('AttendanceWorkflow' | 'PersonalDataWorkflow')[] | undefined
}
type ApiV1ApprovalFlowRoutesIndexResponse = {
  approval_flow_routes: ApiV1ApprovalFlowRouteIndexResponseParams[]
}
type ApiV1FlowRouteStepSrializer = {
  id: number
  next_step_id: number | null
  resource_type:
    | 'predefined_user'
    | 'selected_user'
    | 'unspecified'
    | 'and_resource'
    | 'or_resource'
    | 'and_position'
    | 'or_position'
  user_ids?: number[] | undefined
}[]
type ApiV1ApprovalFlowRouteResponseParams = {
  id: number
  name?: string | undefined
  description?: string | undefined
  user_id?: (number | null) | undefined
  definition_system?: boolean | undefined
  first_step_id?: number | undefined
  usages?: ('AttendanceWorkflow' | 'PersonalDataWorkflow')[] | undefined
  steps?: ApiV1FlowRouteStepSrializer | undefined
}
type ApiV1ApprovalFlowRouteResponse = { approval_flow_route: ApiV1ApprovalFlowRouteResponseParams }
type ApiV1EmployeeYearendAdjustmentParams = {
  employee_id?: number | undefined
  num?: string | undefined
  employee_display_name?: string | undefined
  is_not_adjust?: boolean | undefined
  status?: 'initialized' | 'in_employee_progress' | 'submitted' | 'fixed' | undefined
}
type ApiV1EmployeeYearendAdjustmentControllerIndexResponse = {
  employees?: ApiV1EmployeeYearendAdjustmentParams[] | undefined
  total_count?: number | undefined
}
type ApiV1EmployeeYearendAdjustmentEmployeeSerializer = {
  employee_id?: number | undefined
  num?: string | undefined
  last_name?: string | undefined
  first_name?: string | undefined
  last_name_kana?: string | undefined
  first_name_kana?: string | undefined
  birth_date?: string | undefined
  entry_date?: string | undefined
  retire_date?: (string | null) | undefined
  employment_type?: (string | null) | undefined
  title?: (string | null) | undefined
  zipcode1?: (string | null) | undefined
  zipcode2?: (string | null) | undefined
  prefecture_code?: (number | null) | undefined
  address?: (string | null) | undefined
  address_kana?: string | undefined
  payer_type?: 'kou' | 'otsu' | 'hei' | undefined
  widow_type?: 'na' | 'widow' | 'one_parent' | undefined
  disability_type?: 'na' | 'general' | 'heavy' | undefined
  married?: boolean | undefined
  is_working_student?: boolean | undefined
  is_foreigner?: boolean | undefined
  other_company_revenue?: (number | null) | undefined
  all_other_income?: (number | null) | undefined
  householder?:
    | 'myself'
    | 'husband'
    | 'wife'
    | 'father'
    | 'mother'
    | 'child'
    | 'senior_brother'
    | 'junior_brother'
    | 'senior_sister'
    | 'junior_sister'
    | 'grandchild'
    | 'grandfather'
    | 'grandmother'
    | 'father_in_law'
    | 'mother_in_law'
    | 'grandfather_in_law'
    | 'grandmother_in_law'
    | 'other'
    | undefined
  householder_name?: string | undefined
  is_calc_income_tax?: boolean | undefined
}
type ApiV1EmployeeYearendAdjustmentDependentSerializer = {
  id?: number | undefined
  last_name?: string | undefined
  first_name?: string | undefined
  last_name_kana?: string | undefined
  first_name_kana?: string | undefined
  relationship?:
    | 'spouse'
    | 'father'
    | 'mother'
    | 'child'
    | 'senior_brother'
    | 'junior_brother'
    | 'senior_sister'
    | 'junior_sister'
    | 'grandchild'
    | 'grandfather'
    | 'grandmother'
    | 'father_in_law'
    | 'mother_in_law'
    | 'grandfather_in_law'
    | 'grandmother_in_law'
    | 'other'
    | 'great_grandfather'
    | 'great_grandmother'
    | 'spouses_child'
    | undefined
  birth_date?: string | undefined
  social_insurance_and_tax_dependent?:
    | 'social_insurance_and_tax'
    | 'tax_only'
    | 'social_insurance_only'
    | 'not_dependent'
    | undefined
  income?: number | undefined
  employment_revenue?: number | undefined
  all_other_income?: number | undefined
  disability_type?: 'na' | 'general' | 'heavy' | undefined
  residence_type?: 'live_in' | 'resident' | 'non_resident' | undefined
  zipcode1?: (string | null) | undefined
  zipcode2?: (string | null) | undefined
  prefecture_code?: number | undefined
  address?: string | undefined
  address_kana?: string | undefined
  annual_remittance_amount?: number | undefined
  non_resident_dependents_reason?:
    | 'none'
    | 'over_16_to_under_30_or_over_70'
    | 'study_abroad'
    | 'handicapped'
    | 'over_38_man'
    | undefined
  is_resident_tax_only_deduction?: boolean | undefined
  retirement_income?: number | undefined
}
type ApiV1EmployeeYearendAdjustmentInsuranceSerializer = {
  id?: number | undefined
  type?:
    | 'life_care_pension_insurance'
    | 'earthquake_non_life_insurance'
    | 'social_insurance'
    | 'other_insurance'
    | undefined
  category?:
    | 'life'
    | 'care'
    | 'pension'
    | 'earthquake'
    | 'old_long_term_non_life'
    | 'national_pension'
    | 'national_pension_fund_premium'
    | 'national_health'
    | 'care_insurance_deduction_of_pension'
    | 'health'
    | 'employee_pension'
    | 'advanced_elderly_medical'
    | 'sema'
    | 'idc'
    | 'cdc'
    | 'dsma'
    | 'none'
    | undefined
  new_or_old?: 'new' | 'old' | 'none' | undefined
  company_name?: (string | null) | undefined
  kind_of_purpose?: (string | null) | undefined
  period?:
    | '終身'
    | '0年'
    | '1年'
    | '2年'
    | '3年'
    | '4年'
    | '5年'
    | '6年'
    | '7年'
    | '8年'
    | '9年'
    | '10年'
    | '11年'
    | '12年'
    | '13年'
    | '14年'
    | '15年'
    | '16年'
    | '17年'
    | '18年'
    | '19年'
    | '20年'
    | '21年'
    | '22年'
    | '23年'
    | '24年'
    | '25年'
    | '26年'
    | '27年'
    | '28年'
    | '29年'
    | '30年'
    | '31年'
    | '32年'
    | '33年'
    | '34年'
    | '35年'
    | '36年'
    | '37年'
    | '38年'
    | '39年'
    | '40年'
    | '41年'
    | '42年'
    | '43年'
    | '44年'
    | '45年'
    | '46年'
    | '47年'
    | '48年'
    | '49年'
    | '50年'
    | '51年'
    | '52年'
    | '53年'
    | '54年'
    | '55年'
    | '56年'
    | '57年'
    | '58年'
    | '59年'
    | '60年'
    | '61年'
    | '62年'
    | '63年'
    | '64年'
    | '65年'
    | '66年'
    | '67年'
    | '68年'
    | '69年'
    | '70年'
    | '71年'
    | '72年'
    | '73年'
    | '74年'
    | '75年'
    | '76年'
    | '77年'
    | '78年'
    | '79年'
    | '80年'
    | '81年'
    | '82年'
    | '83年'
    | '84年'
    | '85年'
    | '86年'
    | '87年'
    | '88年'
    | '89年'
    | '90年'
    | '91年'
    | '92年'
    | '93年'
    | '94年'
    | '95年'
    | '96年'
    | '97年'
    | '98年'
    | '99年'
    | '100年'
    | '0ヶ月'
    | '1ヶ月'
    | '2ヶ月'
    | '3ヶ月'
    | '4ヶ月'
    | '5ヶ月'
    | '6ヶ月'
    | '7ヶ月'
    | '8ヶ月'
    | '9ヶ月'
    | '10ヶ月'
    | '11ヶ月'
    | ''
    | undefined
  policyholder_last_name?: (string | null) | undefined
  policyholder_first_name?: (string | null) | undefined
  recipient_last_name?: (string | null) | undefined
  recipient_first_name?: (string | null) | undefined
  recipient_relationship?:
    | 'myself'
    | 'husband'
    | 'wife'
    | 'father'
    | 'mother'
    | 'child'
    | 'senior_brother'
    | 'junior_brother'
    | 'senior_sister'
    | 'junior_sister'
    | 'grandchild'
    | 'grandfather'
    | 'grandmother'
    | 'father_in_law'
    | 'mother_in_law'
    | 'grandfather_in_law'
    | 'grandmother_in_law'
    | 'other'
    | ''
    | undefined
  payment_start_date?: (string | null) | undefined
  amount?: number | undefined
  certification_type?: 'xml' | undefined
  is_group_insurance?: (boolean | null) | undefined
}
type ApiV1EmployeeYearendAdjustmentHousingLoanSerializer = {
  id?: number | undefined
  residence_start_date?: string | undefined
  remaining_balance_at_yearend?: number | undefined
  category?: 'general' | 'qualified' | 'extension' | 'earthquake' | undefined
  specific_case_type?:
    | 'not_qualified'
    | 'specified'
    | 'special_specified_or_special_exception'
    | 'exception_special_exception'
    | 'special_residential_house'
    | undefined
}
type ApiV1EmployeeYearendAdjustmentPayrollAndBonusSerializer = {
  fixed_payroll?: number | undefined
  fixed_payroll_deduction?: number | undefined
  fixed_payroll_income_tax?: number | undefined
  fixed_bonus?: number | undefined
  fixed_bonus_deduction?: number | undefined
  fixed_bonus_income_tax?: number | undefined
  unentered_payroll_amount?: number | undefined
  unentered_payroll_deduction_amount?: number | undefined
  unentered_payroll_income_tax_amount?: number | undefined
  unentered_bonus_amount?: number | undefined
  unentered_bonus_deduction_amount?: number | undefined
  unentered_bonus_income_tax_amount?: number | undefined
}
type ApiV1EmployeeYearendAdjustmentPreviousJobSerializer = {
  income?: number | undefined
  deduction?: number | undefined
  withholding_tax_amount?: number | undefined
  company_name?: string | undefined
  company_address?: string | undefined
  retire_date?: (string | null) | undefined
} | null
type ApiV1EmployeeYearendAdjustmentControllerShowResponse = {
  employee?: ApiV1EmployeeYearendAdjustmentEmployeeSerializer | undefined
  dependents?: ApiV1EmployeeYearendAdjustmentDependentSerializer[] | undefined
  insurances?: ApiV1EmployeeYearendAdjustmentInsuranceSerializer[] | undefined
  housing_loan_deduction?: number | undefined
  housing_loans?: ApiV1EmployeeYearendAdjustmentHousingLoanSerializer[] | undefined
  payroll_and_bonus?: ApiV1EmployeeYearendAdjustmentPayrollAndBonusSerializer | undefined
  previous_job?: ApiV1EmployeeYearendAdjustmentPreviousJobSerializer | undefined
}
type ApiV1EmployeeYearendAdjustmentEmployeeUpdateRequestSerializer = {
  last_name: string
  first_name: string
  last_name_kana: string
  first_name_kana: string
  zipcode1: string
  zipcode2: string
  prefecture_code: number
  address: string
  address_kana?: string | undefined
  payer_type?: 'kou' | 'otsu' | 'hei' | undefined
  widow_type?: 'na' | 'widow' | 'one_parent' | undefined
  disability_type?: 'na' | 'general' | 'heavy' | undefined
  married?: boolean | undefined
  is_working_student?: boolean | undefined
  is_foreigner?: boolean | undefined
  other_company_revenue?: (number | null) | undefined
  all_other_income?: (number | null) | undefined
  householder?:
    | 'myself'
    | 'husband'
    | 'wife'
    | 'father'
    | 'mother'
    | 'child'
    | 'senior_brother'
    | 'junior_brother'
    | 'senior_sister'
    | 'junior_sister'
    | 'grandchild'
    | 'grandfather'
    | 'grandmother'
    | 'father_in_law'
    | 'mother_in_law'
    | 'grandfather_in_law'
    | 'grandmother_in_law'
    | 'other'
    | undefined
  householder_name?: string | undefined
}
type ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeBody = {
  company_id: number
  employee: ApiV1EmployeeYearendAdjustmentEmployeeUpdateRequestSerializer
}
type ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeResponse = {
  employees?: ApiV1EmployeeYearendAdjustmentEmployeeSerializer | undefined
}
type ApiV1EmployeeYearendAdjustmentPayrollAndBonusUpdateRequestSerializer = {
  unentered_payroll_amount?: number | undefined
  unentered_payroll_deduction_amount?: number | undefined
  unentered_payroll_income_tax_amount?: number | undefined
  unentered_bonus_amount?: number | undefined
  unentered_bonus_deduction_amount?: number | undefined
  unentered_bonus_income_tax_amount?: number | undefined
}
type ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusBody = {
  company_id: number
  payroll_and_bonus: ApiV1EmployeeYearendAdjustmentPayrollAndBonusUpdateRequestSerializer
}
type ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusResponse = {
  payroll_and_bonus?: ApiV1EmployeeYearendAdjustmentPayrollAndBonusSerializer | undefined
}
type ApiV1EmployeeYearendAdjustmentDependentUpdateRequestSerializer = {
  id?: number | undefined
  destroy?: boolean | undefined
  last_name: string
  first_name: string
  last_name_kana?: string | undefined
  first_name_kana?: string | undefined
  relationship:
    | 'spouse'
    | 'father'
    | 'mother'
    | 'child'
    | 'senior_brother'
    | 'junior_brother'
    | 'senior_sister'
    | 'junior_sister'
    | 'grandchild'
    | 'grandfather'
    | 'grandmother'
    | 'father_in_law'
    | 'mother_in_law'
    | 'grandfather_in_law'
    | 'grandmother_in_law'
    | 'other'
    | 'great_grandfather'
    | 'great_grandmother'
    | 'spouses_child'
  birth_date: string
  social_insurance_and_tax_dependent:
    | 'social_insurance_and_tax'
    | 'tax_only'
    | 'social_insurance_only'
    | 'not_dependent'
  income?: number | undefined
  employment_revenue?: number | undefined
  all_other_income?: number | undefined
  disability_type: 'na' | 'general' | 'heavy'
  residence_type: 'live_in' | 'resident' | 'non_resident'
  zipcode1?: (string | null) | undefined
  zipcode2?: (string | null) | undefined
  prefecture_code?: number | undefined
  address?: string | undefined
  address_kana?: string | undefined
  annual_remittance_amount?: number | undefined
  non_resident_dependents_reason?:
    | 'none'
    | 'over_16_to_under_30_or_over_70'
    | 'study_abroad'
    | 'handicapped'
    | 'over_38_man'
    | undefined
  is_resident_tax_only_deduction?: boolean | undefined
  retirement_income?: number | undefined
}
type ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsBody = {
  company_id: number
  dependents: ApiV1EmployeeYearendAdjustmentDependentUpdateRequestSerializer[]
}
type ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsResponse = {
  dependents?: ApiV1EmployeeYearendAdjustmentDependentSerializer[] | undefined
}
type ApiV1EmployeeYearendAdjustmentPreviousJobUpdateRequestSerializer = {
  income: number
  deduction: number
  withholding_tax_amount: number
  company_name: string
  company_address: string
  retire_date: string
}
type ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobBody = {
  company_id: number
  previous_job: ApiV1EmployeeYearendAdjustmentPreviousJobUpdateRequestSerializer
}
type ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobResponse = {
  previous_job?: ApiV1EmployeeYearendAdjustmentPreviousJobSerializer | undefined
}
type ApiV1EmployeeYearendAdjustmentInsuranceUpdateRequestSerializer = {
  type:
    | 'life_care_pension_insurance'
    | 'earthquake_non_life_insurance'
    | 'social_insurance'
    | 'other_insurance'
  category:
    | 'life'
    | 'care'
    | 'pension'
    | 'earthquake'
    | 'old_long_term_non_life'
    | 'national_pension'
    | 'national_pension_fund_premium'
    | 'national_health'
    | 'care_insurance_deduction_of_pension'
    | 'health'
    | 'employee_pension'
    | 'advanced_elderly_medical'
    | 'sema'
    | 'idc'
    | 'cdc'
    | 'dsma'
    | 'none'
  new_or_old: 'new' | 'old' | 'none'
  company_name?: (string | null) | undefined
  kind_of_purpose?: (string | null) | undefined
  period?:
    | '終身'
    | '0年'
    | '1年'
    | '2年'
    | '3年'
    | '4年'
    | '5年'
    | '6年'
    | '7年'
    | '8年'
    | '9年'
    | '10年'
    | '11年'
    | '12年'
    | '13年'
    | '14年'
    | '15年'
    | '16年'
    | '17年'
    | '18年'
    | '19年'
    | '20年'
    | '21年'
    | '22年'
    | '23年'
    | '24年'
    | '25年'
    | '26年'
    | '27年'
    | '28年'
    | '29年'
    | '30年'
    | '31年'
    | '32年'
    | '33年'
    | '34年'
    | '35年'
    | '36年'
    | '37年'
    | '38年'
    | '39年'
    | '40年'
    | '41年'
    | '42年'
    | '43年'
    | '44年'
    | '45年'
    | '46年'
    | '47年'
    | '48年'
    | '49年'
    | '50年'
    | '51年'
    | '52年'
    | '53年'
    | '54年'
    | '55年'
    | '56年'
    | '57年'
    | '58年'
    | '59年'
    | '60年'
    | '61年'
    | '62年'
    | '63年'
    | '64年'
    | '65年'
    | '66年'
    | '67年'
    | '68年'
    | '69年'
    | '70年'
    | '71年'
    | '72年'
    | '73年'
    | '74年'
    | '75年'
    | '76年'
    | '77年'
    | '78年'
    | '79年'
    | '80年'
    | '81年'
    | '82年'
    | '83年'
    | '84年'
    | '85年'
    | '86年'
    | '87年'
    | '88年'
    | '89年'
    | '90年'
    | '91年'
    | '92年'
    | '93年'
    | '94年'
    | '95年'
    | '96年'
    | '97年'
    | '98年'
    | '99年'
    | '100年'
    | '0ヶ月'
    | '1ヶ月'
    | '2ヶ月'
    | '3ヶ月'
    | '4ヶ月'
    | '5ヶ月'
    | '6ヶ月'
    | '7ヶ月'
    | '8ヶ月'
    | '9ヶ月'
    | '10ヶ月'
    | '11ヶ月'
    | ''
    | undefined
  policyholder_last_name?: (string | null) | undefined
  policyholder_first_name?: (string | null) | undefined
  recipient_last_name?: (string | null) | undefined
  recipient_first_name?: (string | null) | undefined
  recipient_relationship?:
    | 'myself'
    | 'husband'
    | 'wife'
    | 'father'
    | 'mother'
    | 'child'
    | 'senior_brother'
    | 'junior_brother'
    | 'senior_sister'
    | 'junior_sister'
    | 'grandchild'
    | 'grandfather'
    | 'grandmother'
    | 'father_in_law'
    | 'mother_in_law'
    | 'grandfather_in_law'
    | 'grandmother_in_law'
    | 'other'
    | ''
    | undefined
  payment_start_date?: (string | null) | undefined
  amount: number
  is_group_insurance?: (boolean | null) | undefined
}
type ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody = {
  company_id: number
  insurance: ApiV1EmployeeYearendAdjustmentInsuranceUpdateRequestSerializer
}
type ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceResponse = {
  insurances?: ApiV1EmployeeYearendAdjustmentInsuranceSerializer[] | undefined
}
type ApiV1EmployeeYearendAdjustmentHousingLoanUpdateRequestSerializer = {
  residence_start_date: string
  remaining_balance_at_yearend: number
  category: 'general' | 'qualified' | 'extension' | 'earthquake'
  specific_case_type:
    | 'not_qualified'
    | 'specified'
    | 'special_specified_or_special_exception'
    | 'exception_special_exception'
    | 'special_residential_house'
}
type ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody = {
  company_id: number
  housing_loan: ApiV1EmployeeYearendAdjustmentHousingLoanUpdateRequestSerializer
}
type ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanResponse = {
  housing_loan_deduction?: number | undefined
  housing_loans?: ApiV1EmployeeYearendAdjustmentHousingLoanSerializer[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/users/me': {
      $get:
        | { input: {}; output: ApiV1UsersMeSerializer; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
        | { input: {}; output: UnauthorizedError; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: AccessDeniedError; outputFormat: 'json'; status: 403 }
        | { input: {}; output: InternalServerError; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/v1/companies/:company_id/employees': {
      $get:
        | {
            input: { param: { company_id: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                with_no_payroll_calculation?: boolean | undefined
              }
            }
            output: ApiV1CompaniesEmployeeSerializer[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { company_id: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                with_no_payroll_calculation?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { company_id: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                with_no_payroll_calculation?: boolean | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { company_id: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                with_no_payroll_calculation?: boolean | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { company_id: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                with_no_payroll_calculation?: boolean | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { company_id: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                with_no_payroll_calculation?: boolean | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees': {
      $get:
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
                with_no_payroll_calculation?: boolean | undefined
              }
            }
            output: ApiV1EmployeesIndexSerializer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
                with_no_payroll_calculation?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
                with_no_payroll_calculation?: boolean | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
                with_no_payroll_calculation?: boolean | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
                with_no_payroll_calculation?: boolean | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
                with_no_payroll_calculation?: boolean | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ApiV1EmployeesControllerCreateBody }
            output: ApiV1EmployeesControllerCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ApiV1EmployeesControllerCreateBody }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ApiV1EmployeesControllerCreateBody }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ApiV1EmployeesControllerCreateBody }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiV1EmployeesControllerCreateBody }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiV1EmployeesControllerCreateBody }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:id': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ApiV1EmployeesControllerShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: ApiV1EmployeesControllerUpdateBody }
            output: ApiV1EmployeesControllerUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: ApiV1EmployeesControllerUpdateBody }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: ApiV1EmployeesControllerUpdateBody }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: ApiV1EmployeesControllerUpdateBody }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1EmployeesControllerUpdateBody }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1EmployeesControllerUpdateBody }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: ApiV1EmployeesControllerUpdateBody }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/profile_rule': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ApiV1EmployeesProfileRulesControllerShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesProfileRulesControllerUpdateBody
            }
            output: ApiV1EmployeesProfileRulesControllerUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesProfileRulesControllerUpdateBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesProfileRulesControllerUpdateBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesProfileRulesControllerUpdateBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesProfileRulesControllerUpdateBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesProfileRulesControllerUpdateBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/health_insurance_rule': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ApiV1EmployeesHealthInsuranceRulesControllerShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesHealthInsuranceRulesControllerUpdateBody
            }
            output: ApiV1EmployeesHealthInsuranceRulesControllerUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesHealthInsuranceRulesControllerUpdateBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesHealthInsuranceRulesControllerUpdateBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesHealthInsuranceRulesControllerUpdateBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesHealthInsuranceRulesControllerUpdateBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesHealthInsuranceRulesControllerUpdateBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/welfare_pension_insurance_rule': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ApiV1EmployeesWelfarePensionInsuranceRulesControllerShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateBody
            }
            output: ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesWelfarePensionInsuranceRulesControllerUpdateBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/dependent_rules': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ApiV1EmployeesDependentRulesControllerIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/dependent_rules/bulk_update': {
      $put:
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesDependentRulesControllerBulkUpdateBody
            }
            output: ApiV1EmployeesDependentRulesControllerBulkUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesDependentRulesControllerBulkUpdateBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesDependentRulesControllerBulkUpdateBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesDependentRulesControllerBulkUpdateBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesDependentRulesControllerBulkUpdateBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesDependentRulesControllerBulkUpdateBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/bank_account_rule': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ApiV1EmployeesBankAccountRulesControllerShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesBankAccountRulesControllerUpdateBody
            }
            output: ApiV1EmployeesBankAccountRulesControllerUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesBankAccountRulesControllerUpdateBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesBankAccountRulesControllerUpdateBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesBankAccountRulesControllerUpdateBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesBankAccountRulesControllerUpdateBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesBankAccountRulesControllerUpdateBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/basic_pay_rule': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ApiV1EmployeesBasicPayRulesControllerShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesBasicPayRulesControllerUpdateBody
            }
            output: ApiV1EmployeesBasicPayRulesControllerUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesBasicPayRulesControllerUpdateBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesBasicPayRulesControllerUpdateBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesBasicPayRulesControllerUpdateBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesBasicPayRulesControllerUpdateBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesBasicPayRulesControllerUpdateBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/allowance_rules': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: { employee_allowance_rules: ApiV1EmployeesAllowanceRuleSerializer[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { employee_id: number } } & {
              json: {
                company_id: number
                year: number
                month: number
                employee_allowance_rule: { allowance_id: number; amount: number }
              }
            }
            output: { employee_allowance_rule?: ApiV1EmployeesAllowanceRuleSerializer | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              json: {
                company_id: number
                year: number
                month: number
                employee_allowance_rule: { allowance_id: number; amount: number }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              json: {
                company_id: number
                year: number
                month: number
                employee_allowance_rule: { allowance_id: number; amount: number }
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              json: {
                company_id: number
                year: number
                month: number
                employee_allowance_rule: { allowance_id: number; amount: number }
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: {
                company_id: number
                year: number
                month: number
                employee_allowance_rule: { allowance_id: number; amount: number }
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: {
                company_id: number
                year: number
                month: number
                employee_allowance_rule: { allowance_id: number; amount: number }
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/allowance_rules/:id': {
      $delete:
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/deduction_rules': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: { employee_deduction_rules: ApiV1EmployeesDeductionRuleSerializer[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            } & { json: ApiV1EmployeesDeductionRulesControllerUpdateBody }
            output: ApiV1EmployeesDeductionRulesControllerUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            } & { json: ApiV1EmployeesDeductionRulesControllerUpdateBody }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            } & { json: ApiV1EmployeesDeductionRulesControllerUpdateBody }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            } & { json: ApiV1EmployeesDeductionRulesControllerUpdateBody }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            } & { json: ApiV1EmployeesDeductionRulesControllerUpdateBody }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            } & { json: ApiV1EmployeesDeductionRulesControllerUpdateBody }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            } & { json: ApiV1EmployeesDeductionRulesControllerUpdateBody }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/deduction_rules/:id': {
      $delete:
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/profile_custom_fields': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ApiV1EmployeesProfileCustomFieldRulesControllerIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/work_records/:date': {
      $get:
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: ApiV1EmployeesWorkRecordSerializer | LegacyApiV1EmployeesWorkRecordSerializer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { employee_id: number; date: string } } & {
              json:
                | ApiV1EmployeesWorkRecordsControllerUpdateBody
                | LegacyApiV1EmployeesWorkRecordsControllerUpdateBody
            }
            output: ApiV1EmployeesWorkRecordSerializer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              json:
                | ApiV1EmployeesWorkRecordsControllerUpdateBody
                | LegacyApiV1EmployeesWorkRecordsControllerUpdateBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              json:
                | ApiV1EmployeesWorkRecordsControllerUpdateBody
                | LegacyApiV1EmployeesWorkRecordsControllerUpdateBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              json:
                | ApiV1EmployeesWorkRecordsControllerUpdateBody
                | LegacyApiV1EmployeesWorkRecordsControllerUpdateBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              json:
                | ApiV1EmployeesWorkRecordsControllerUpdateBody
                | LegacyApiV1EmployeesWorkRecordsControllerUpdateBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              json:
                | ApiV1EmployeesWorkRecordsControllerUpdateBody
                | LegacyApiV1EmployeesWorkRecordsControllerUpdateBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/work_record_summaries/:year/:month': {
      $get:
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              query: { company_id: number; work_records?: boolean | undefined }
            }
            output: ApiV1EmployeesWorkRecordSummarySerializer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              query: { company_id: number; work_records?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              query: { company_id: number; work_records?: boolean | undefined }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              query: { company_id: number; work_records?: boolean | undefined }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              query: { company_id: number; work_records?: boolean | undefined }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              query: { company_id: number; work_records?: boolean | undefined }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              json: ApiV1EmployeesWorkRecordSummaryControllerUpdateBody
            }
            output: ApiV1EmployeesWorkRecordSummarySerializer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              json: ApiV1EmployeesWorkRecordSummaryControllerUpdateBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              json: ApiV1EmployeesWorkRecordSummaryControllerUpdateBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              json: ApiV1EmployeesWorkRecordSummaryControllerUpdateBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              json: ApiV1EmployeesWorkRecordSummaryControllerUpdateBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              json: ApiV1EmployeesWorkRecordSummaryControllerUpdateBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/time_clocks': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                from_date?: string | undefined
                to_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ApiV1EmployeesTimeClocksControllerIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                from_date?: string | undefined
                to_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                from_date?: string | undefined
                to_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                from_date?: string | undefined
                to_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                from_date?: string | undefined
                to_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                from_date?: string | undefined
                to_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesTimeClocksControllerCreateBody
            }
            output: ApiV1EmployeesTimeClocksControllerCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesTimeClocksControllerCreateBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesTimeClocksControllerCreateBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesTimeClocksControllerCreateBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesTimeClocksControllerCreateBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: ApiV1EmployeesTimeClocksControllerCreateBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/time_clocks/:id': {
      $get:
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: ApiV1EmployeesTimeClocksControllerShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/time_clocks/available_types': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; date?: string | undefined }
            }
            output: ApiV1EmployeesTimeClocksControllerAvailableTypesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; date?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; date?: string | undefined }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; date?: string | undefined }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; date?: string | undefined }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; date?: string | undefined }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/special_holidays': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                date?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: {
              employee_special_holidays?:
                | {
                    id?: number | undefined
                    company_id?: number | undefined
                    employee_id?: number | undefined
                    special_holiday_setting_id?: number | undefined
                    name?: string | undefined
                    type_name?: string | undefined
                    paid_type?: 'paid' | 'unpaid' | undefined
                    attendance_rate_calc_type?:
                      | 'in_workdays'
                      | 'not_in_workdays'
                      | 'not_in_total_workdays'
                      | undefined
                    usage_day?: 'full' | 'half' | 'hour' | undefined
                    valid_date_from?: string | undefined
                    valid_date_to?: string | undefined
                    days?: number | undefined
                    used?: number | undefined
                    num_days_and_hours_used?:
                      | { days?: number | undefined; hours?: number | undefined }
                      | undefined
                    left?: number | undefined
                    num_days_and_hours_left?:
                      | { days?: number | undefined; hours?: number | undefined }
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                date?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                date?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                date?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                date?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                date?: string | undefined
                start_date?: string | undefined
                end_date?: string | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/attendance_tag_summaries/:year/:month': {
      $get:
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              query: { company_id: number }
            }
            output: ApiV1EmployeesAttendanceTagSummariesControllerShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              query: { company_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              query: { company_id: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              query: { company_id: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              query: { company_id: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              query: { company_id: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              query: { company_id: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              json: ApiV1EmployeesAttendanceTagSummariesControllerUpdateBody
            }
            output: ApiV1EmployeesAttendanceTagSummariesControllerUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              json: ApiV1EmployeesAttendanceTagSummariesControllerUpdateBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              json: ApiV1EmployeesAttendanceTagSummariesControllerUpdateBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              json: ApiV1EmployeesAttendanceTagSummariesControllerUpdateBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              json: ApiV1EmployeesAttendanceTagSummariesControllerUpdateBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              json: ApiV1EmployeesAttendanceTagSummariesControllerUpdateBody
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number; year: number; month: number } } & {
              json: ApiV1EmployeesAttendanceTagSummariesControllerUpdateBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/attendance_tags': {
      $get:
        | {
            input: { param: { employee_id: number } } & { query: { company_id: number } }
            output: ApiV1EmployeesAttendanceTagsControllerIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/attendance_tags/:date': {
      $get:
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: ApiV1EmployeesAttendanceTagsControllerShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              query: { company_id: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { employee_id: number; date: string } } & {
              json: ApiV1EmployeesAttendanceTagsControllerUpdateBody
            }
            output: ApiV1EmployeesAttendanceTagsControllerUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              json: ApiV1EmployeesAttendanceTagsControllerUpdateBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              json: ApiV1EmployeesAttendanceTagsControllerUpdateBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              json: ApiV1EmployeesAttendanceTagsControllerUpdateBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              json: ApiV1EmployeesAttendanceTagsControllerUpdateBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              json: ApiV1EmployeesAttendanceTagsControllerUpdateBody
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number; date: string } } & {
              json: ApiV1EmployeesAttendanceTagsControllerUpdateBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/salaries/employee_payroll_statements': {
      $get:
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ApiV1SalariesEmployeePayrollStatementsControllerIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/salaries/employee_payroll_statements/:employee_id': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ApiV1SalariesEmployeePayrollStatementsControllerShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/salaries/employee_payroll_statements/:employee_id/remark': {
      $put:
        | {
            input: { param: { employee_id: number } } & {
              json: { company_id: number; year: number; month: number; remark: { body: string } }
            }
            output: {
              employee_payroll_statement_remark: {
                id: number
                employee_payroll_statement_id: number
                body: string
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              json: { company_id: number; year: number; month: number; remark: { body: string } }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              json: { company_id: number; year: number; month: number; remark: { body: string } }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              json: { company_id: number; year: number; month: number; remark: { body: string } }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: { company_id: number; year: number; month: number; remark: { body: string } }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              json: { company_id: number; year: number; month: number; remark: { body: string } }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number } } & {
              json: { company_id: number; year: number; month: number; remark: { body: string } }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/bonuses/employee_payroll_statements': {
      $get:
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ApiV1BonusesEmployeePayrollStatementsIndexSerializer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                company_id: number
                year: number
                month: number
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/bonuses/employee_payroll_statements/:employee_id': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ApiV1BonusesEmployeePayrollStatementsControllerShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number } } & {
              query: { company_id: number; year: number; month: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employee_group_memberships': {
      $get:
        | {
            input: {
              query: {
                company_id: number
                base_date: string
                with_no_payroll_calculation?: boolean | undefined
                employee_ids?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ApiV1EmployeeGroupMembershipsIndexSerializer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: number
                base_date: string
                with_no_payroll_calculation?: boolean | undefined
                employee_ids?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: number
                base_date: string
                with_no_payroll_calculation?: boolean | undefined
                employee_ids?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: number
                base_date: string
                with_no_payroll_calculation?: boolean | undefined
                employee_ids?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                base_date: string
                with_no_payroll_calculation?: boolean | undefined
                employee_ids?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                base_date: string
                with_no_payroll_calculation?: boolean | undefined
                employee_ids?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/employees/:employee_id/group_memberships': {
      $get:
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                base_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ApiV1EmployeesGroupMembershipsIndexSerializer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                base_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                base_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                base_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                base_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                base_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { employee_id: number } } & {
              query: {
                company_id: number
                base_date?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/groups': {
      $get:
        | {
            input: { query: { company_id: number } }
            output: ApiV1GroupsIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ApiV1GroupCreateRequest }
            output: ApiV1GroupResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ApiV1GroupCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ApiV1GroupCreateRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ApiV1GroupCreateRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiV1GroupCreateRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiV1GroupCreateRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/groups/:id': {
      $put:
        | {
            input: { param: { id: number } } & { json: ApiV1GroupUpdateRequest }
            output: ApiV1GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: ApiV1GroupUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: ApiV1GroupUpdateRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: ApiV1GroupUpdateRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1GroupUpdateRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1GroupUpdateRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: ApiV1GroupUpdateRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/allowances': {
      $get:
        | {
            input: {
              query: {
                company_id: number
                frequency?: 'salary' | 'salary_monthly' | 'salary_this_month' | 'bonus' | undefined
                is_active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ApiV1AllowancesIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: number
                frequency?: 'salary' | 'salary_monthly' | 'salary_this_month' | 'bonus' | undefined
                is_active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: number
                frequency?: 'salary' | 'salary_monthly' | 'salary_this_month' | 'bonus' | undefined
                is_active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: number
                frequency?: 'salary' | 'salary_monthly' | 'salary_this_month' | 'bonus' | undefined
                is_active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                frequency?: 'salary' | 'salary_monthly' | 'salary_this_month' | 'bonus' | undefined
                is_active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                frequency?: 'salary' | 'salary_monthly' | 'salary_this_month' | 'bonus' | undefined
                is_active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { company_id: number } } & { json: ApiV1AllowancesControllerCreateBody }
            output: ApiV1AllowanceResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { company_id: number } } & { json: ApiV1AllowancesControllerCreateBody }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: number } } & { json: ApiV1AllowancesControllerCreateBody }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: number } } & { json: ApiV1AllowancesControllerCreateBody }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: number } } & { json: ApiV1AllowancesControllerCreateBody }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: number } } & { json: ApiV1AllowancesControllerCreateBody }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/allowances/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ApiV1AllowanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/deductions': {
      $get:
        | {
            input: {
              query: {
                company_id: number
                frequency?: 'salary' | 'salary_monthly' | 'salary_this_month' | 'bonus' | undefined
                is_active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ApiV1DeductionsIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: number
                frequency?: 'salary' | 'salary_monthly' | 'salary_this_month' | 'bonus' | undefined
                is_active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: number
                frequency?: 'salary' | 'salary_monthly' | 'salary_this_month' | 'bonus' | undefined
                is_active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: number
                frequency?: 'salary' | 'salary_monthly' | 'salary_this_month' | 'bonus' | undefined
                is_active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                frequency?: 'salary' | 'salary_monthly' | 'salary_this_month' | 'bonus' | undefined
                is_active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                frequency?: 'salary' | 'salary_monthly' | 'salary_this_month' | 'bonus' | undefined
                is_active?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { query: { company_id: number } } & { json: ApiV1DeductionsControllerCreateBody }
            output: ApiV1DeductionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { company_id: number } } & { json: ApiV1DeductionsControllerCreateBody }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: number } } & { json: ApiV1DeductionsControllerCreateBody }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: number } } & { json: ApiV1DeductionsControllerCreateBody }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: number } } & { json: ApiV1DeductionsControllerCreateBody }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: number } } & { json: ApiV1DeductionsControllerCreateBody }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/deductions/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ApiV1DeductionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/positions': {
      $get:
        | {
            input: { query: { company_id: number } }
            output: ApiV1PositionIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ApiV1PositionRequest }
            output: ApiV1PositionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ApiV1PositionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ApiV1PositionRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ApiV1PositionRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiV1PositionRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiV1PositionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/positions/:id': {
      $put:
        | {
            input: { param: { id: number } } & { json: ApiV1PositionRequest }
            output: ApiV1PositionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: ApiV1PositionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: ApiV1PositionRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: ApiV1PositionRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1PositionRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1PositionRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: ApiV1PositionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/monthly_attendances': {
      $get:
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ApiV1MonthlyAttendanceIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ApiV1MonthlyAttendanceCreateRequest }
            output: ApiV1MonthlyAttendanceResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ApiV1MonthlyAttendanceCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ApiV1MonthlyAttendanceCreateRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ApiV1MonthlyAttendanceCreateRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiV1MonthlyAttendanceCreateRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiV1MonthlyAttendanceCreateRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/monthly_attendances/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ApiV1MonthlyAttendanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: ApiV1MonthlyAttendanceUpdateRequest }
            output: ApiV1MonthlyAttendanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: ApiV1MonthlyAttendanceUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: ApiV1MonthlyAttendanceUpdateRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: ApiV1MonthlyAttendanceUpdateRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1MonthlyAttendanceUpdateRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1MonthlyAttendanceUpdateRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: ApiV1MonthlyAttendanceUpdateRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/monthly_attendances/:id/actions': {
      $post:
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: ApiV1MonthlyAttendanceResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/work_times': {
      $get:
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { work_times: ApiV1WorkTimeIndexResponseParams[]; total_count: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                company_id: number
                target_date: string
                clear_work_time?: boolean | undefined
                work_records?: unknown[] | undefined
                lateness_mins?: number | undefined
                early_leaving_mins?: number | undefined
                break_records?: unknown[] | undefined
                comment?: string | undefined
                approval_flow_route_id: number
                approver_id?: number | undefined
              }
            }
            output: { work_time: ApiV1WorkTimeResponseParams }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                company_id: number
                target_date: string
                clear_work_time?: boolean | undefined
                work_records?: unknown[] | undefined
                lateness_mins?: number | undefined
                early_leaving_mins?: number | undefined
                break_records?: unknown[] | undefined
                comment?: string | undefined
                approval_flow_route_id: number
                approver_id?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                company_id: number
                target_date: string
                clear_work_time?: boolean | undefined
                work_records?: unknown[] | undefined
                lateness_mins?: number | undefined
                early_leaving_mins?: number | undefined
                break_records?: unknown[] | undefined
                comment?: string | undefined
                approval_flow_route_id: number
                approver_id?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                company_id: number
                target_date: string
                clear_work_time?: boolean | undefined
                work_records?: unknown[] | undefined
                lateness_mins?: number | undefined
                early_leaving_mins?: number | undefined
                break_records?: unknown[] | undefined
                comment?: string | undefined
                approval_flow_route_id: number
                approver_id?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                company_id: number
                target_date: string
                clear_work_time?: boolean | undefined
                work_records?: unknown[] | undefined
                lateness_mins?: number | undefined
                early_leaving_mins?: number | undefined
                break_records?: unknown[] | undefined
                comment?: string | undefined
                approval_flow_route_id: number
                approver_id?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                company_id: number
                target_date: string
                clear_work_time?: boolean | undefined
                work_records?: unknown[] | undefined
                lateness_mins?: number | undefined
                early_leaving_mins?: number | undefined
                break_records?: unknown[] | undefined
                comment?: string | undefined
                approval_flow_route_id: number
                approver_id?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/work_times/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: { work_time: ApiV1WorkTimeResponseParams }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & {
              json: {
                company_id: number
                target_date: string
                clear_work_time?: boolean | undefined
                work_records?: unknown[] | undefined
                lateness_mins?: number | undefined
                early_leaving_mins?: number | undefined
                break_records?: unknown[] | undefined
                comment?: string | undefined
                approval_flow_route_id: number
                approver_id?: number | undefined
              }
            }
            output: { work_time: ApiV1WorkTimeResponseParams }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: {
                company_id: number
                target_date: string
                clear_work_time?: boolean | undefined
                work_records?: unknown[] | undefined
                lateness_mins?: number | undefined
                early_leaving_mins?: number | undefined
                break_records?: unknown[] | undefined
                comment?: string | undefined
                approval_flow_route_id: number
                approver_id?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              json: {
                company_id: number
                target_date: string
                clear_work_time?: boolean | undefined
                work_records?: unknown[] | undefined
                lateness_mins?: number | undefined
                early_leaving_mins?: number | undefined
                break_records?: unknown[] | undefined
                comment?: string | undefined
                approval_flow_route_id: number
                approver_id?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              json: {
                company_id: number
                target_date: string
                clear_work_time?: boolean | undefined
                work_records?: unknown[] | undefined
                lateness_mins?: number | undefined
                early_leaving_mins?: number | undefined
                break_records?: unknown[] | undefined
                comment?: string | undefined
                approval_flow_route_id: number
                approver_id?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: {
                company_id: number
                target_date: string
                clear_work_time?: boolean | undefined
                work_records?: unknown[] | undefined
                lateness_mins?: number | undefined
                early_leaving_mins?: number | undefined
                break_records?: unknown[] | undefined
                comment?: string | undefined
                approval_flow_route_id: number
                approver_id?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: {
                company_id: number
                target_date: string
                clear_work_time?: boolean | undefined
                work_records?: unknown[] | undefined
                lateness_mins?: number | undefined
                early_leaving_mins?: number | undefined
                break_records?: unknown[] | undefined
                comment?: string | undefined
                approval_flow_route_id: number
                approver_id?: number | undefined
              }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: {
                company_id: number
                target_date: string
                clear_work_time?: boolean | undefined
                work_records?: unknown[] | undefined
                lateness_mins?: number | undefined
                early_leaving_mins?: number | undefined
                break_records?: unknown[] | undefined
                comment?: string | undefined
                approval_flow_route_id: number
                approver_id?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/work_times/:id/actions': {
      $post:
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: { work_time: ApiV1WorkTimeResponseParams }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/paid_holidays': {
      $get:
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ApiV1PaidHolidayIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ApiV1PaidHolidayRequest | LegacyApiV1PaidHolidayRequest }
            output: ApiV1PaidHolidayResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ApiV1PaidHolidayRequest | LegacyApiV1PaidHolidayRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ApiV1PaidHolidayRequest | LegacyApiV1PaidHolidayRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ApiV1PaidHolidayRequest | LegacyApiV1PaidHolidayRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiV1PaidHolidayRequest | LegacyApiV1PaidHolidayRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiV1PaidHolidayRequest | LegacyApiV1PaidHolidayRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/paid_holidays/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ApiV1PaidHolidayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & {
              json: ApiV1PaidHolidayRequest | LegacyApiV1PaidHolidayRequest
            }
            output: ApiV1PaidHolidayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: ApiV1PaidHolidayRequest | LegacyApiV1PaidHolidayRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              json: ApiV1PaidHolidayRequest | LegacyApiV1PaidHolidayRequest
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              json: ApiV1PaidHolidayRequest | LegacyApiV1PaidHolidayRequest
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: ApiV1PaidHolidayRequest | LegacyApiV1PaidHolidayRequest
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: ApiV1PaidHolidayRequest | LegacyApiV1PaidHolidayRequest
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: ApiV1PaidHolidayRequest | LegacyApiV1PaidHolidayRequest
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/paid_holidays/:id/actions': {
      $post:
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: ApiV1PaidHolidayResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/special_holidays': {
      $get:
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ApiV1specialHolidayIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ApiV1specialHolidayRequest }
            output: ApiV1specialHolidayResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ApiV1specialHolidayRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ApiV1specialHolidayRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ApiV1specialHolidayRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiV1specialHolidayRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiV1specialHolidayRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/special_holidays/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ApiV1specialHolidayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: ApiV1specialHolidayRequest }
            output: ApiV1specialHolidayResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: ApiV1specialHolidayRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: ApiV1specialHolidayRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: ApiV1specialHolidayRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1specialHolidayRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1specialHolidayRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: ApiV1specialHolidayRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/special_holidays/:id/actions': {
      $post:
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: ApiV1specialHolidayResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/overtime_works': {
      $get:
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ApiV1OvertimeWorkIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                status?: 'draft' | 'in_progress' | 'approved' | 'feedback' | undefined
                application_number?: number | undefined
                start_issue_date?: string | undefined
                end_issue_date?: string | undefined
                approver_id?: number | undefined
                applicant_id?: number | undefined
                start_target_date?: string | undefined
                end_target_date?: string | undefined
                passed_auto_check?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ApiV1OvertimeWorkRequest }
            output: ApiV1OvertimeWorkResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ApiV1OvertimeWorkRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ApiV1OvertimeWorkRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ApiV1OvertimeWorkRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiV1OvertimeWorkRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ApiV1OvertimeWorkRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/overtime_works/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ApiV1OvertimeWorkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: ApiV1OvertimeWorkRequest }
            output: ApiV1OvertimeWorkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: ApiV1OvertimeWorkRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: ApiV1OvertimeWorkRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: ApiV1OvertimeWorkRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1OvertimeWorkRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1OvertimeWorkRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: ApiV1OvertimeWorkRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/overtime_works/:id/actions': {
      $post:
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: ApiV1OvertimeWorkResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: ApiV1ApprovalActionRequest }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_requests/overtime_works/setting': {
      $get:
        | {
            input: { query: { company_id: number; date: string } }
            output: {
              start_at?: string | undefined
              end_at?: string | undefined
              should_reflect_in_work_record: boolean
              early_work_mins_unit?: number[] | undefined
              overtime_work_mins_unit?: number[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { company_id: number; date: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { company_id: number; date: string } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { company_id: number; date: string } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: number; date: string } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { company_id: number; date: string } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { company_id: number; date: string } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_flow_routes': {
      $get:
        | {
            input: {
              query: {
                company_id: number
                included_user_id?: number | undefined
                usage?: 'AttendanceWorkflow' | 'PersonalDataWorkflow' | undefined
              }
            }
            output: ApiV1ApprovalFlowRoutesIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company_id: number
                included_user_id?: number | undefined
                usage?: 'AttendanceWorkflow' | 'PersonalDataWorkflow' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                company_id: number
                included_user_id?: number | undefined
                usage?: 'AttendanceWorkflow' | 'PersonalDataWorkflow' | undefined
              }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                company_id: number
                included_user_id?: number | undefined
                usage?: 'AttendanceWorkflow' | 'PersonalDataWorkflow' | undefined
              }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                included_user_id?: number | undefined
                usage?: 'AttendanceWorkflow' | 'PersonalDataWorkflow' | undefined
              }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                company_id: number
                included_user_id?: number | undefined
                usage?: 'AttendanceWorkflow' | 'PersonalDataWorkflow' | undefined
              }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/approval_flow_routes/:id': {
      $get:
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ApiV1ApprovalFlowRouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { company_id: number } }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/yearend_adjustments/:year/employees': {
      $get:
        | {
            input: { param: { year: number } } & {
              query: { company_id: number; limit?: number | undefined; offset?: number | undefined }
            }
            output: ApiV1EmployeeYearendAdjustmentControllerIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number } } & {
              query: { company_id: number; limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { year: number } } & {
              query: { company_id: number; limit?: number | undefined; offset?: number | undefined }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { year: number } } & {
              query: { company_id: number; limit?: number | undefined; offset?: number | undefined }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number } } & {
              query: { company_id: number; limit?: number | undefined; offset?: number | undefined }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number } } & {
              query: { company_id: number; limit?: number | undefined; offset?: number | undefined }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/yearend_adjustments/:year/employees/:employee_id': {
      $get:
        | {
            input: { param: { year: number; employee_id: number } } & {
              query: { company_id: number }
            }
            output: ApiV1EmployeeYearendAdjustmentControllerShowResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              query: { company_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              query: { company_id: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              query: { company_id: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              query: { company_id: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              query: { company_id: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              query: { company_id: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeBody
            }
            output: ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeBody
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateEmployeeBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/yearend_adjustments/:year/payroll_and_bonus/:employee_id': {
      $put:
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusBody
            }
            output: ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusBody
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdatePayrollAndBonusBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/yearend_adjustments/:year/dependents/:employee_id': {
      $put:
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsBody
            }
            output: ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsBody
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateDependentsBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/yearend_adjustments/:year/previous_jobs/:employee_id': {
      $put:
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobBody
            }
            output: ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobBody
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdatePreviousJobBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { year: number; employee_id: number } } & {
              query: { company_id: number }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              query: { company_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              query: { company_id: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              query: { company_id: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              query: { company_id: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              query: { company_id: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              query: { company_id: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/yearend_adjustments/:year/insurances/:employee_id': {
      $post:
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody
            }
            output: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/yearend_adjustments/:year/insurances/:employee_id/:id': {
      $put:
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody
            }
            output: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateInsuranceBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/yearend_adjustments/:year/housing_loan_deductions/:employee_id': {
      $put:
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: { company_id: number; housing_loan_deduction: number }
            }
            output: {
              housing_loan_deduction?: number | undefined
              housing_loans?: ApiV1EmployeeYearendAdjustmentHousingLoanSerializer[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: { company_id: number; housing_loan_deduction: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: { company_id: number; housing_loan_deduction: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: { company_id: number; housing_loan_deduction: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: { company_id: number; housing_loan_deduction: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: { company_id: number; housing_loan_deduction: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: { company_id: number; housing_loan_deduction: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/yearend_adjustments/:year/housing_loans/:employee_id': {
      $post:
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody
            }
            output: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { year: number; employee_id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v1/yearend_adjustments/:year/housing_loans/:employee_id/:id': {
      $put:
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody
            }
            output: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              json: ApiV1EmployeeYearendAdjustmentControllerUpdateHousingLoanBody
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: UnauthorizedError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: ForbiddenError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: AccessDeniedError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: NotfoundError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { year: number; employee_id: number; id: number } } & {
              query: { company_id: number }
            }
            output: InternalServerError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes

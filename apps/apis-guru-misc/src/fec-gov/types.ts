type OffsetInfo = {
  count?: number | undefined
  page?: number | undefined
  pages?: number | undefined
  per_page?: number | undefined
}
type AuditCaseSubCategory = {
  sub_category_id?: string | undefined
  sub_category_name?: string | undefined
}
type AuditCaseCategoryRelation = {
  primary_category_id?: string | undefined
  primary_category_name?: string | undefined
  sub_category_list?: AuditCaseSubCategory[] | undefined
}
type AuditCase = {
  audit_case_id?: string | undefined
  audit_id?: number | undefined
  candidate_id?: string | undefined
  candidate_name?: string | undefined
  committee_description?: string | undefined
  committee_designation?: string | undefined
  committee_id?: string | undefined
  committee_name?: string | undefined
  committee_type?: string | undefined
  cycle?: number | undefined
  far_release_date?: string | undefined
  link_to_report?: (string | null) | undefined
  primary_category_list?: AuditCaseCategoryRelation[] | undefined
}
type AuditCasePage = { pagination?: OffsetInfo | undefined; results?: AuditCase[] | undefined }
type AuditCategoryRelation = {
  sub_category_id?: string | undefined
  sub_category_name?: string | undefined
}
type AuditCategory = {
  primary_category_id?: string | undefined
  primary_category_name?: string | undefined
  sub_category_list?: AuditCategoryRelation[] | undefined
}
type AuditCategoryPage = {
  pagination?: OffsetInfo | undefined
  results?: AuditCategory[] | undefined
}
type AuditPrimaryCategory = {
  primary_category_id?: string | undefined
  primary_category_name?: string | undefined
}
type AuditPrimaryCategoryPage = {
  pagination?: OffsetInfo | undefined
  results?: AuditPrimaryCategory[] | undefined
}
type CalendarDate = {
  all_day?: (boolean | null) | undefined
  calendar_category_id?: (number | null) | undefined
  category?: (string | null) | undefined
  description?: string | undefined
  end_date?: string | undefined
  event_id?: number | undefined
  location?: (string | null) | undefined
  start_date?: string | undefined
  state?: (string[] | null) | undefined
  summary?: string | undefined
  url?: (string | null) | undefined
}
type CalendarDatePage = {
  pagination?: OffsetInfo | undefined
  results?: CalendarDate[] | undefined
}
type CandidateDetail = {
  active_through?: (number | null) | undefined
  address_city?: (string | null) | undefined
  address_state?: (string | null) | undefined
  address_street_1?: (string | null) | undefined
  address_street_2?: (string | null) | undefined
  address_zip?: (string | null) | undefined
  candidate_id?: (string | null) | undefined
  candidate_inactive?: (boolean | null) | undefined
  candidate_status?: (string | null) | undefined
  cycles?: (number[] | null) | undefined
  district?: (string | null) | undefined
  district_number?: (number | null) | undefined
  election_districts?: (string[] | null) | undefined
  election_years?: (number[] | null) | undefined
  federal_funds_flag?: boolean | undefined
  first_file_date?: (string | null) | undefined
  flags?: (string | null) | undefined
  has_raised_funds?: boolean | undefined
  incumbent_challenge?: (string | null) | undefined
  incumbent_challenge_full?: (string | null) | undefined
  last_f2_date?: (string | null) | undefined
  last_file_date?: (string | null) | undefined
  load_date?: (string | null) | undefined
  name?: (string | null) | undefined
  office?: (string | null) | undefined
  office_full?: (string | null) | undefined
  party?: (string | null) | undefined
  party_full?: (string | null) | undefined
  state?: (string | null) | undefined
}
type CandidateDetailPage = {
  pagination?: OffsetInfo | undefined
  results?: CandidateDetail[] | undefined
}
type CommitteeDetail = {
  affiliated_committee_name?: (string | null) | undefined
  candidate_ids?: (string[] | null) | undefined
  city?: (string | null) | undefined
  committee_id: string
  committee_type?: (string | null) | undefined
  committee_type_full?: (string | null) | undefined
  custodian_city?: (string | null) | undefined
  custodian_name_1?: (string | null) | undefined
  custodian_name_2?: (string | null) | undefined
  custodian_name_full?: (string | null) | undefined
  custodian_name_middle?: (string | null) | undefined
  custodian_name_prefix?: (string | null) | undefined
  custodian_name_suffix?: (string | null) | undefined
  custodian_name_title?: (string | null) | undefined
  custodian_phone?: (string | null) | undefined
  custodian_state?: (string | null) | undefined
  custodian_street_1?: (string | null) | undefined
  custodian_street_2?: (string | null) | undefined
  custodian_zip?: (string | null) | undefined
  cycles?: (number[] | null) | undefined
  designation?: (string | null) | undefined
  designation_full?: (string | null) | undefined
  email?: (string | null) | undefined
  fax?: (string | null) | undefined
  filing_frequency?: (string | null) | undefined
  first_f1_date?: (string | null) | undefined
  first_file_date?: (string | null) | undefined
  form_type?: (string | null) | undefined
  jfc_committee?:
    | {
        joint_committee_id?: (string | null) | undefined
        joint_committee_name?: (string | null) | undefined
      }[]
    | undefined
  last_f1_date?: (string | null) | undefined
  last_file_date?: (string | null) | undefined
  leadership_pac?: (string | null) | undefined
  lobbyist_registrant_pac?: (string | null) | undefined
  name?: (string | null) | undefined
  organization_type?: (string | null) | undefined
  organization_type_full?: (string | null) | undefined
  party?: (string | null) | undefined
  party_full?: (string | null) | undefined
  party_type?: (string | null) | undefined
  party_type_full?: (string | null) | undefined
  sponsor_candidate_ids?: (string[] | null) | undefined
  state?: (string | null) | undefined
  state_full?: (string | null) | undefined
  street_1?: (string | null) | undefined
  street_2?: (string | null) | undefined
  treasurer_city?: (string | null) | undefined
  treasurer_name?: (string | null) | undefined
  treasurer_name_1?: (string | null) | undefined
  treasurer_name_2?: (string | null) | undefined
  treasurer_name_middle?: (string | null) | undefined
  treasurer_name_prefix?: (string | null) | undefined
  treasurer_name_suffix?: (string | null) | undefined
  treasurer_name_title?: (string | null) | undefined
  treasurer_phone?: (string | null) | undefined
  treasurer_state?: (string | null) | undefined
  treasurer_street_1?: (string | null) | undefined
  treasurer_street_2?: (string | null) | undefined
  treasurer_zip?: (string | null) | undefined
  website?: (string | null) | undefined
  zip?: (string | null) | undefined
}
type CommitteeDetailPage = {
  pagination?: OffsetInfo | undefined
  results?: CommitteeDetail[] | undefined
}
type CommitteeHistoryProfile = {
  affiliated_committee_name?: (string | null) | undefined
  candidate_ids?: (string[] | null) | undefined
  city?: (string | null) | undefined
  committee_id: string
  committee_label?: (string | null) | undefined
  committee_type?: (string | null) | undefined
  committee_type_full?: (string | null) | undefined
  convert_to_pac_flag?: (boolean | null) | undefined
  cycle: number
  cycles?: (number[] | null) | undefined
  cycles_has_activity?: (number[] | null) | undefined
  cycles_has_financial?: (number[] | null) | undefined
  designation?: (string | null) | undefined
  designation_full?: (string | null) | undefined
  filing_frequency?: (string | null) | undefined
  first_f1_date?: (string | null) | undefined
  first_file_date?: (string | null) | undefined
  former_candidate_election_year?: (number | null) | undefined
  former_candidate_id?: (string | null) | undefined
  former_candidate_name?: (string | null) | undefined
  former_committee_name?: (string | null) | undefined
  is_active?: (boolean | null) | undefined
  jfc_committee?:
    | {
        joint_committee_id?: (string | null) | undefined
        joint_committee_name?: (string | null) | undefined
      }[]
    | undefined
  last_cycle_has_activity?: (number | null) | undefined
  last_cycle_has_financial?: (number | null) | undefined
  last_f1_date?: (string | null) | undefined
  last_file_date?: (string | null) | undefined
  name?: (string | null) | undefined
  organization_type?: (string | null) | undefined
  organization_type_full?: (string | null) | undefined
  party?: (string | null) | undefined
  party_full?: (string | null) | undefined
  sponsor_candidate_ids?: (string[] | null) | undefined
  state?: (string | null) | undefined
  state_full?: (string | null) | undefined
  street_1?: (string | null) | undefined
  street_2?: (string | null) | undefined
  treasurer_name?: (string | null) | undefined
  zip?: (string | null) | undefined
}
type CommitteeHistoryProfilePage = {
  pagination?: OffsetInfo | undefined
  results?: CommitteeHistoryProfile[] | undefined
}
type Filings = {
  additional_bank_names?: (string[] | null) | undefined
  amendment_chain?: (number[] | null) | undefined
  amendment_indicator?: (string | null) | undefined
  amendment_version?: (number | null) | undefined
  bank_depository_city?: (string | null) | undefined
  bank_depository_name?: (string | null) | undefined
  bank_depository_state?: (string | null) | undefined
  bank_depository_street_1?: (string | null) | undefined
  bank_depository_street_2?: (string | null) | undefined
  bank_depository_zip?: (string | null) | undefined
  beginning_image_number?: string | undefined
  candidate_id?: (string | null) | undefined
  candidate_name?: (string | null) | undefined
  cash_on_hand_beginning_period?: (number | null) | undefined
  cash_on_hand_end_period?: (number | null) | undefined
  committee_id?: (string | null) | undefined
  committee_name?: (string | null) | undefined
  committee_type?: (string | null) | undefined
  coverage_end_date?: (string | null) | undefined
  coverage_start_date?: (string | null) | undefined
  csv_url?: string | undefined
  cycle?: (number | null) | undefined
  debts_owed_by_committee?: (number | null) | undefined
  debts_owed_to_committee?: (number | null) | undefined
  document_description?: string | undefined
  document_type?: (string | null) | undefined
  document_type_full?: (string | null) | undefined
  election_year?: (number | null) | undefined
  ending_image_number?: string | undefined
  fec_file_id?: string | undefined
  fec_url?: string | undefined
  file_number?: (number | null) | undefined
  form_category?: (string | null) | undefined
  form_type?: (string | null) | undefined
  house_personal_funds?: (number | null) | undefined
  html_url?: (string | null) | undefined
  is_amended?: (boolean | null) | undefined
  means_filed?: (string | null) | undefined
  most_recent?: (boolean | null) | undefined
  most_recent_file_number?: (number | null) | undefined
  net_donations?: (number | null) | undefined
  office?: (string | null) | undefined
  opposition_personal_funds?: (number | null) | undefined
  pages?: (number | null) | undefined
  party?: (string | null) | undefined
  pdf_url?: (string | null) | undefined
  previous_file_number?: (number | null) | undefined
  primary_general_indicator?: (string | null) | undefined
  receipt_date?: (string | null) | undefined
  report_type?: (string | null) | undefined
  report_type_full?: string | undefined
  report_year?: (number | null) | undefined
  request_type?: (string | null) | undefined
  senate_personal_funds?: (number | null) | undefined
  state?: (string | null) | undefined
  sub_id?: string | undefined
  total_communication_cost?: (number | null) | undefined
  total_disbursements?: (number | null) | undefined
  total_independent_expenditures?: (number | null) | undefined
  total_individual_contributions?: (number | null) | undefined
  total_receipts?: (number | null) | undefined
  treasurer_name?: (string | null) | undefined
  update_date?: (string | null) | undefined
}
type FilingsPage = { pagination?: OffsetInfo | undefined; results?: Filings[] | undefined }
type CandidateHistory = {
  active_through?: (number | null) | undefined
  address_city?: (string | null) | undefined
  address_state?: (string | null) | undefined
  address_street_1?: (string | null) | undefined
  address_street_2?: (string | null) | undefined
  address_zip?: (string | null) | undefined
  candidate_election_year?: (number | null) | undefined
  candidate_id: string
  candidate_inactive?: (boolean | null) | undefined
  candidate_status?: (string | null) | undefined
  cycles?: (number[] | null) | undefined
  district?: (string | null) | undefined
  district_number?: (number | null) | undefined
  election_districts?: (string[] | null) | undefined
  election_years?: (number[] | null) | undefined
  fec_cycles_in_election?: (number[] | null) | undefined
  first_file_date?: (string | null) | undefined
  flags?: (string | null) | undefined
  incumbent_challenge?: (string | null) | undefined
  incumbent_challenge_full?: (string | null) | undefined
  last_f2_date?: (string | null) | undefined
  last_file_date?: (string | null) | undefined
  load_date?: (string | null) | undefined
  name?: (string | null) | undefined
  office?: (string | null) | undefined
  office_full?: (string | null) | undefined
  party?: (string | null) | undefined
  party_full?: (string | null) | undefined
  rounded_election_years?: (number[] | null) | undefined
  state?: (string | null) | undefined
  two_year_period: number
}
type CandidateHistoryPage = {
  pagination?: OffsetInfo | undefined
  results?: CandidateHistory[] | undefined
}
type CommitteeTotals = {
  all_loans_received?: (number | null) | undefined
  all_other_loans?: (number | null) | undefined
  allocated_federal_election_levin_share?: (number | null) | undefined
  candidate_contribution?: (number | null) | undefined
  cash_on_hand_beginning_period?: (number | null) | undefined
  committee_designation?: (string | null) | undefined
  committee_designation_full?: (string | null) | undefined
  committee_id?: (string | null) | undefined
  committee_name?: (string | null) | undefined
  committee_state?: (string | null) | undefined
  committee_type?: (string | null) | undefined
  committee_type_full?: (string | null) | undefined
  contribution_refunds?: (number | null) | undefined
  contributions?: (number | null) | undefined
  contributions_ie_and_party_expenditures_made_percent?: number | undefined
  convention_exp?: (number | null) | undefined
  coordinated_expenditures_by_party_committee?: (number | null) | undefined
  coverage_end_date?: (string | null) | undefined
  coverage_start_date?: (string | null) | undefined
  cycle: number
  disbursements?: (number | null) | undefined
  exempt_legal_accounting_disbursement?: (number | null) | undefined
  exp_prior_years_subject_limits?: (number | null) | undefined
  exp_subject_limits?: (number | null) | undefined
  fed_candidate_committee_contributions?: (number | null) | undefined
  fed_candidate_contribution_refunds?: (number | null) | undefined
  fed_disbursements?: (number | null) | undefined
  fed_election_activity?: (number | null) | undefined
  fed_operating_expenditures?: (number | null) | undefined
  fed_receipts?: (number | null) | undefined
  federal_funds?: (number | null) | undefined
  filing_frequency?: (string | null) | undefined
  filing_frequency_full?: (string | null) | undefined
  first_f1_date?: (string | null) | undefined
  first_file_date?: (string | null) | undefined
  fundraising_disbursements?: (number | null) | undefined
  independent_expenditures?: (number | null) | undefined
  individual_contributions?: (number | null) | undefined
  individual_contributions_percent?: number | undefined
  individual_itemized_contributions?: (number | null) | undefined
  individual_unitemized_contributions?: (number | null) | undefined
  itemized_convention_exp?: (number | null) | undefined
  itemized_other_disb?: (number | null) | undefined
  itemized_other_income?: (number | null) | undefined
  itemized_other_refunds?: (number | null) | undefined
  itemized_refunds_relating_convention_exp?: (number | null) | undefined
  last_beginning_image_number?: string | undefined
  last_cash_on_hand_end_period?: number | undefined
  last_debts_owed_by_committee?: (number | null) | undefined
  last_debts_owed_to_committee?: (number | null) | undefined
  last_report_type_full?: (string | null) | undefined
  last_report_year?: (number | null) | undefined
  loan_repayments?: (number | null) | undefined
  loan_repayments_candidate_loans?: (number | null) | undefined
  loan_repayments_made?: (number | null) | undefined
  loan_repayments_other_loans?: (number | null) | undefined
  loan_repayments_received?: (number | null) | undefined
  loans?: (number | null) | undefined
  loans_and_loan_repayments_made?: (number | null) | undefined
  loans_and_loan_repayments_received?: (number | null) | undefined
  loans_made?: (number | null) | undefined
  loans_made_by_candidate?: (number | null) | undefined
  loans_received?: (number | null) | undefined
  loans_received_from_candidate?: (number | null) | undefined
  net_contributions?: (number | null) | undefined
  net_operating_expenditures?: (number | null) | undefined
  non_allocated_fed_election_activity?: (number | null) | undefined
  offsets_to_fundraising_expenditures?: (number | null) | undefined
  offsets_to_legal_accounting?: (number | null) | undefined
  offsets_to_operating_expenditures?: (number | null) | undefined
  operating_expenditures?: (number | null) | undefined
  operating_expenditures_percent?: number | undefined
  organization_type?: (string | null) | undefined
  organization_type_full?: (string | null) | undefined
  other_disbursements?: (number | null) | undefined
  other_fed_operating_expenditures?: (number | null) | undefined
  other_fed_receipts?: (number | null) | undefined
  other_loans_received?: (number | null) | undefined
  other_political_committee_contributions?: (number | null) | undefined
  other_receipts?: (number | null) | undefined
  other_refunds?: (number | null) | undefined
  party_and_other_committee_contributions_percent?: number | undefined
  party_full?: (string | null) | undefined
  pdf_url?: string | undefined
  political_party_committee_contributions?: (number | null) | undefined
  receipts?: (number | null) | undefined
  refunded_individual_contributions?: (number | null) | undefined
  refunded_other_political_committee_contributions?: (number | null) | undefined
  refunded_political_party_committee_contributions?: (number | null) | undefined
  refunds_relating_convention_exp?: (number | null) | undefined
  repayments_loans_made_by_candidate?: (number | null) | undefined
  repayments_other_loans?: (number | null) | undefined
  report_form?: string | undefined
  shared_fed_activity?: (number | null) | undefined
  shared_fed_activity_nonfed?: (number | null) | undefined
  shared_fed_operating_expenditures?: (number | null) | undefined
  shared_nonfed_operating_expenditures?: (number | null) | undefined
  total_exp_subject_limits?: (number | null) | undefined
  total_independent_contributions?: (number | null) | undefined
  total_independent_expenditures?: (number | null) | undefined
  total_offsets_to_operating_expenditures?: (number | null) | undefined
  total_transfers?: (number | null) | undefined
  transaction_coverage_date?: string | undefined
  transfers_from_affiliated_committee?: (number | null) | undefined
  transfers_from_affiliated_party?: (number | null) | undefined
  transfers_from_nonfed_account?: (number | null) | undefined
  transfers_from_nonfed_levin?: (number | null) | undefined
  transfers_from_other_authorized_committee?: (number | null) | undefined
  transfers_to_affiliated_committee?: (number | null) | undefined
  transfers_to_other_authorized_committee?: (number | null) | undefined
  treasurer_name?: (string | null) | undefined
  unitemized_convention_exp?: (number | null) | undefined
  unitemized_other_disb?: (number | null) | undefined
  unitemized_other_income?: (number | null) | undefined
  unitemized_other_refunds?: (number | null) | undefined
  unitemized_refunds_relating_convention_exp?: (number | null) | undefined
}
type CommitteeTotalsPage = {
  pagination?: OffsetInfo | undefined
  results?: CommitteeTotals[] | undefined
}
type Candidate = {
  active_through?: (number | null) | undefined
  candidate_id?: (string | null) | undefined
  candidate_inactive?: (boolean | null) | undefined
  candidate_status?: (string | null) | undefined
  cycles?: (number[] | null) | undefined
  district?: (string | null) | undefined
  district_number?: (number | null) | undefined
  election_districts?: (string[] | null) | undefined
  election_years?: (number[] | null) | undefined
  federal_funds_flag?: boolean | undefined
  first_file_date?: (string | null) | undefined
  has_raised_funds?: boolean | undefined
  inactive_election_years?: (number[] | null) | undefined
  incumbent_challenge?: (string | null) | undefined
  incumbent_challenge_full?: (string | null) | undefined
  last_f2_date?: (string | null) | undefined
  last_file_date?: (string | null) | undefined
  load_date?: (string | null) | undefined
  name?: (string | null) | undefined
  office?: (string | null) | undefined
  office_full?: (string | null) | undefined
  party?: (string | null) | undefined
  party_full?: (string | null) | undefined
  principal_committees?:
    | {
        affiliated_committee_name?: (string | null) | undefined
        candidate_ids?: (string[] | null) | undefined
        committee_id: string
        committee_type?: (string | null) | undefined
        committee_type_full?: (string | null) | undefined
        cycles?: (number[] | null) | undefined
        designation?: (string | null) | undefined
        designation_full?: (string | null) | undefined
        filing_frequency?: (string | null) | undefined
        first_f1_date?: (string | null) | undefined
        first_file_date?: (string | null) | undefined
        last_f1_date?: (string | null) | undefined
        last_file_date?: (string | null) | undefined
        name?: (string | null) | undefined
        organization_type?: (string | null) | undefined
        organization_type_full?: (string | null) | undefined
        party?: (string | null) | undefined
        party_full?: (string | null) | undefined
        state?: (string | null) | undefined
        treasurer_name?: (string | null) | undefined
      }[]
    | undefined
  state?: (string | null) | undefined
}
type CandidatePage = { pagination?: OffsetInfo | undefined; results?: Candidate[] | undefined }
type CandidateHistoryTotal = {
  active_through?: (number | null) | undefined
  address_city?: (string | null) | undefined
  address_state?: (string | null) | undefined
  address_street_1?: (string | null) | undefined
  address_street_2?: (string | null) | undefined
  address_zip?: (string | null) | undefined
  candidate_election_year?: (number | null) | undefined
  candidate_id: string
  candidate_inactive?: (boolean | null) | undefined
  candidate_status?: (string | null) | undefined
  cash_on_hand_end_period?: (number | null) | undefined
  coverage_end_date?: (string | null) | undefined
  coverage_start_date?: (string | null) | undefined
  cycle: number
  cycles?: (number[] | null) | undefined
  debts_owed_by_committee?: (number | null) | undefined
  disbursements?: (number | null) | undefined
  district?: (string | null) | undefined
  district_number?: (number | null) | undefined
  election_districts?: (string[] | null) | undefined
  election_year?: number | undefined
  election_years?: (number[] | null) | undefined
  fec_cycles_in_election?: (number[] | null) | undefined
  federal_funds_flag?: (boolean | null) | undefined
  first_file_date?: (string | null) | undefined
  flags?: (string | null) | undefined
  has_raised_funds?: (boolean | null) | undefined
  incumbent_challenge?: (string | null) | undefined
  incumbent_challenge_full?: (string | null) | undefined
  individual_itemized_contributions?: (number | null) | undefined
  is_election: boolean
  last_f2_date?: (string | null) | undefined
  last_file_date?: (string | null) | undefined
  load_date?: (string | null) | undefined
  name?: (string | null) | undefined
  office?: (string | null) | undefined
  office_full?: (string | null) | undefined
  other_political_committee_contributions?: (number | null) | undefined
  party?: (string | null) | undefined
  party_full?: (string | null) | undefined
  receipts?: (number | null) | undefined
  rounded_election_years?: (number[] | null) | undefined
  state?: (string | null) | undefined
  transfers_from_other_authorized_committee?: (number | null) | undefined
  two_year_period: number
}
type CandidateHistoryTotalPage = {
  pagination?: OffsetInfo | undefined
  results?: CandidateHistoryTotal[] | undefined
}
type CandidateTotalAggregate = {
  district?: string | undefined
  district_number?: number | undefined
  election_year?: number | undefined
  office?: string | undefined
  party?: string | undefined
  state?: string | undefined
  total_cash_on_hand_end_period?: number | undefined
  total_debts_owed_by_committee?: number | undefined
  total_disbursements?: number | undefined
  total_individual_itemized_contributions?: number | undefined
  total_other_political_committee_contributions?: number | undefined
  total_receipts?: number | undefined
  total_transfers_from_other_authorized_committee?: number | undefined
}
type CandidateTotalAggregatePage = {
  pagination?: OffsetInfo | undefined
  results?: CandidateTotalAggregate[] | undefined
}
type TotalByOffice = {
  election_year?: number | undefined
  office?: string | undefined
  total_disbursements?: number | undefined
  total_individual_itemized_contributions?: number | undefined
  total_other_political_committee_contributions?: number | undefined
  total_receipts?: number | undefined
  total_transfers_from_other_authorized_committee?: number | undefined
}
type TotalByOfficePage = {
  pagination?: OffsetInfo | undefined
  results?: TotalByOffice[] | undefined
}
type TotalByOfficeByParty = {
  election_year?: number | undefined
  office?: string | undefined
  party?: string | undefined
  total_disbursements?: number | undefined
  total_receipts?: number | undefined
}
type TotalByOfficeByPartyPage = {
  pagination?: OffsetInfo | undefined
  results?: TotalByOfficeByParty[] | undefined
}
type CommitteeReports = {
  aggregate_amount_personal_contributions_general?: (number | null) | undefined
  aggregate_contributions_personal_funds_primary?: (number | null) | undefined
  all_loans_received_period?: (number | null) | undefined
  all_loans_received_ytd?: (number | null) | undefined
  all_other_loans_period?: (number | null) | undefined
  all_other_loans_ytd?: (number | null) | undefined
  allocated_federal_election_levin_share_period?: (number | null) | undefined
  amendment_chain?: (number[] | null) | undefined
  amendment_indicator?: (string | null) | undefined
  amendment_indicator_full?: (string | null) | undefined
  beginning_image_number?: string | undefined
  calendar_ytd?: (number | null) | undefined
  candidate_contribution_period?: (number | null) | undefined
  candidate_contribution_ytd?: (number | null) | undefined
  cash_on_hand_beginning_calendar_ytd?: (number | null) | undefined
  cash_on_hand_beginning_period?: (number | null) | undefined
  cash_on_hand_close_ytd?: (number | null) | undefined
  cash_on_hand_end_period?: (number | null) | undefined
  committee_id?: (string | null) | undefined
  committee_name?: (string | null) | undefined
  committee_type?: string | undefined
  coordinated_expenditures_by_party_committee_period?: (number | null) | undefined
  coordinated_expenditures_by_party_committee_ytd?: (number | null) | undefined
  coverage_end_date?: (string | null) | undefined
  coverage_start_date?: (string | null) | undefined
  csv_url?: string | undefined
  cycle?: (number | null) | undefined
  debts_owed_by_committee?: (number | null) | undefined
  debts_owed_to_committee?: (number | null) | undefined
  document_description?: string | undefined
  end_image_number?: string | undefined
  exempt_legal_accounting_disbursement_period?: (number | null) | undefined
  exempt_legal_accounting_disbursement_ytd?: (number | null) | undefined
  expenditure_subject_to_limits?: (number | null) | undefined
  fec_file_id?: string | undefined
  fec_url?: string | undefined
  fed_candidate_committee_contribution_refunds_ytd?: (number | null) | undefined
  fed_candidate_committee_contributions_period?: (number | null) | undefined
  fed_candidate_committee_contributions_ytd?: (number | null) | undefined
  fed_candidate_contribution_refunds_period?: (number | null) | undefined
  federal_funds_period?: (number | null) | undefined
  federal_funds_ytd?: (number | null) | undefined
  file_number?: (number | null) | undefined
  fundraising_disbursements_period?: (number | null) | undefined
  fundraising_disbursements_ytd?: (number | null) | undefined
  gross_receipt_authorized_committee_general?: (number | null) | undefined
  gross_receipt_authorized_committee_primary?: (number | null) | undefined
  gross_receipt_minus_personal_contribution_general?: (number | null) | undefined
  gross_receipt_minus_personal_contributions_primary?: (number | null) | undefined
  html_url?: (string | null) | undefined
  independent_contributions_period?: (number | null) | undefined
  independent_expenditures_period?: (number | null) | undefined
  independent_expenditures_ytd?: (number | null) | undefined
  individual_itemized_contributions_period?: (number | null) | undefined
  individual_itemized_contributions_ytd?: (number | null) | undefined
  individual_unitemized_contributions_period?: (number | null) | undefined
  individual_unitemized_contributions_ytd?: (number | null) | undefined
  is_amended?: (boolean | null) | undefined
  items_on_hand_liquidated?: (number | null) | undefined
  loan_repayments_candidate_loans_period?: (number | null) | undefined
  loan_repayments_candidate_loans_ytd?: (number | null) | undefined
  loan_repayments_made_period?: (number | null) | undefined
  loan_repayments_made_ytd?: (number | null) | undefined
  loan_repayments_other_loans_period?: (number | null) | undefined
  loan_repayments_other_loans_ytd?: (number | null) | undefined
  loan_repayments_received_period?: (number | null) | undefined
  loan_repayments_received_ytd?: (number | null) | undefined
  loans_made_by_candidate_period?: (number | null) | undefined
  loans_made_by_candidate_ytd?: (number | null) | undefined
  loans_made_period?: (number | null) | undefined
  loans_made_ytd?: (number | null) | undefined
  loans_received_from_candidate_period?: (number | null) | undefined
  loans_received_from_candidate_ytd?: (number | null) | undefined
  means_filed?: (string | null) | undefined
  most_recent?: (boolean | null) | undefined
  most_recent_file_number?: (number | null) | undefined
  net_contributions_cycle_to_date?: (number | null) | undefined
  net_contributions_period?: (number | null) | undefined
  net_contributions_ytd?: (number | null) | undefined
  net_operating_expenditures_cycle_to_date?: (number | null) | undefined
  net_operating_expenditures_period?: (number | null) | undefined
  net_operating_expenditures_ytd?: (number | null) | undefined
  non_allocated_fed_election_activity_period?: (number | null) | undefined
  non_allocated_fed_election_activity_ytd?: (number | null) | undefined
  nonfed_share_allocated_disbursements_period?: (number | null) | undefined
  offsets_to_fundraising_expenditures_period?: (number | null) | undefined
  offsets_to_fundraising_expenditures_ytd?: (number | null) | undefined
  offsets_to_legal_accounting_period?: (number | null) | undefined
  offsets_to_legal_accounting_ytd?: (number | null) | undefined
  offsets_to_operating_expenditures_period?: (number | null) | undefined
  offsets_to_operating_expenditures_ytd?: (number | null) | undefined
  operating_expenditures_period?: (number | null) | undefined
  operating_expenditures_ytd?: (number | null) | undefined
  other_disbursements_period?: (number | null) | undefined
  other_disbursements_ytd?: (number | null) | undefined
  other_fed_operating_expenditures_period?: (number | null) | undefined
  other_fed_operating_expenditures_ytd?: (number | null) | undefined
  other_fed_receipts_period?: (number | null) | undefined
  other_fed_receipts_ytd?: (number | null) | undefined
  other_loans_received_period?: (number | null) | undefined
  other_loans_received_ytd?: (number | null) | undefined
  other_political_committee_contributions_period?: (number | null) | undefined
  other_political_committee_contributions_ytd?: (number | null) | undefined
  other_receipts_period?: (number | null) | undefined
  other_receipts_ytd?: (number | null) | undefined
  pdf_url?: string | undefined
  political_party_committee_contributions_period?: (number | null) | undefined
  political_party_committee_contributions_ytd?: (number | null) | undefined
  previous_file_number?: (number | null) | undefined
  receipt_date?: (string | null) | undefined
  refunded_individual_contributions_period?: (number | null) | undefined
  refunded_individual_contributions_ytd?: (number | null) | undefined
  refunded_other_political_committee_contributions_period?: (number | null) | undefined
  refunded_other_political_committee_contributions_ytd?: (number | null) | undefined
  refunded_political_party_committee_contributions_period?: (number | null) | undefined
  refunded_political_party_committee_contributions_ytd?: (number | null) | undefined
  refunds_total_contributions_col_total_ytd?: (number | null) | undefined
  repayments_loans_made_by_candidate_period?: (number | null) | undefined
  repayments_loans_made_candidate_ytd?: (number | null) | undefined
  repayments_other_loans_period?: (number | null) | undefined
  repayments_other_loans_ytd?: (number | null) | undefined
  report_form?: string | undefined
  report_type?: (string | null) | undefined
  report_type_full?: (string | null) | undefined
  report_year?: (number | null) | undefined
  shared_fed_activity_nonfed_ytd?: (number | null) | undefined
  shared_fed_activity_period?: (number | null) | undefined
  shared_fed_activity_ytd?: (number | null) | undefined
  shared_fed_operating_expenditures_period?: (number | null) | undefined
  shared_fed_operating_expenditures_ytd?: (number | null) | undefined
  shared_nonfed_operating_expenditures_period?: (number | null) | undefined
  shared_nonfed_operating_expenditures_ytd?: (number | null) | undefined
  subtotal_period?: (number | null) | undefined
  subtotal_summary_page_period?: (number | null) | undefined
  subtotal_summary_period?: (number | null) | undefined
  subtotal_summary_ytd?: (number | null) | undefined
  total_contribution_refunds_col_total_period?: (number | null) | undefined
  total_contribution_refunds_period?: (number | null) | undefined
  total_contribution_refunds_ytd?: (number | null) | undefined
  total_contributions_column_total_period?: (number | null) | undefined
  total_contributions_period?: (number | null) | undefined
  total_contributions_ytd?: (number | null) | undefined
  total_disbursements_period?: (number | null) | undefined
  total_disbursements_ytd?: (number | null) | undefined
  total_fed_disbursements_period?: (number | null) | undefined
  total_fed_disbursements_ytd?: (number | null) | undefined
  total_fed_election_activity_period?: (number | null) | undefined
  total_fed_election_activity_ytd?: (number | null) | undefined
  total_fed_operating_expenditures_period?: (number | null) | undefined
  total_fed_operating_expenditures_ytd?: (number | null) | undefined
  total_fed_receipts_period?: (number | null) | undefined
  total_fed_receipts_ytd?: (number | null) | undefined
  total_individual_contributions_period?: (number | null) | undefined
  total_individual_contributions_ytd?: (number | null) | undefined
  total_loan_repayments_made_period?: (number | null) | undefined
  total_loan_repayments_made_ytd?: (number | null) | undefined
  total_loans_received_period?: (number | null) | undefined
  total_loans_received_ytd?: (number | null) | undefined
  total_nonfed_transfers_period?: (number | null) | undefined
  total_nonfed_transfers_ytd?: (number | null) | undefined
  total_offsets_to_operating_expenditures_period?: (number | null) | undefined
  total_offsets_to_operating_expenditures_ytd?: (number | null) | undefined
  total_operating_expenditures_period?: (number | null) | undefined
  total_operating_expenditures_ytd?: (number | null) | undefined
  total_period?: (number | null) | undefined
  total_receipts_period?: (number | null) | undefined
  total_receipts_ytd?: (number | null) | undefined
  total_ytd?: (number | null) | undefined
  transfers_from_affiliated_committee_period?: (number | null) | undefined
  transfers_from_affiliated_committee_ytd?: (number | null) | undefined
  transfers_from_affiliated_party_period?: (number | null) | undefined
  transfers_from_affiliated_party_ytd?: (number | null) | undefined
  transfers_from_nonfed_account_period?: (number | null) | undefined
  transfers_from_nonfed_account_ytd?: (number | null) | undefined
  transfers_from_nonfed_levin_period?: (number | null) | undefined
  transfers_from_nonfed_levin_ytd?: (number | null) | undefined
  transfers_from_other_authorized_committee_period?: (number | null) | undefined
  transfers_from_other_authorized_committee_ytd?: (number | null) | undefined
  transfers_to_affiliated_committee_period?: (number | null) | undefined
  transfers_to_affilitated_committees_ytd?: (number | null) | undefined
  transfers_to_other_authorized_committee_period?: (number | null) | undefined
  transfers_to_other_authorized_committee_ytd?: (number | null) | undefined
}
type CommitteeReportsPage = {
  pagination?: OffsetInfo | undefined
  results?: CommitteeReports[] | undefined
}
type Committee = {
  affiliated_committee_name?: (string | null) | undefined
  candidate_ids?: (string[] | null) | undefined
  committee_id: string
  committee_type?: (string | null) | undefined
  committee_type_full?: (string | null) | undefined
  cycles?: (number[] | null) | undefined
  designation?: (string | null) | undefined
  designation_full?: (string | null) | undefined
  filing_frequency?: (string | null) | undefined
  first_f1_date?: (string | null) | undefined
  first_file_date?: (string | null) | undefined
  last_f1_date?: (string | null) | undefined
  last_file_date?: (string | null) | undefined
  name?: (string | null) | undefined
  organization_type?: (string | null) | undefined
  organization_type_full?: (string | null) | undefined
  party?: (string | null) | undefined
  party_full?: (string | null) | undefined
  sponsor_candidate_ids?: (string[] | null) | undefined
  sponsor_candidate_list?:
    | {
        sponsor_candidate_id?: (string | null) | undefined
        sponsor_candidate_name?: (string | null) | undefined
      }[]
    | undefined
  state?: (string | null) | undefined
  treasurer_name?: (string | null) | undefined
}
type CommitteePage = { pagination?: OffsetInfo | undefined; results?: Committee[] | undefined }
type CommunicationCost = {
  action_code?: (string | null) | undefined
  action_code_full?: (string | null) | undefined
  candidate_first_name?: (string | null) | undefined
  candidate_id?: (string | null) | undefined
  candidate_last_name?: (string | null) | undefined
  candidate_middle_name?: (string | null) | undefined
  candidate_name?: (string | null) | undefined
  candidate_office?: (string | null) | undefined
  candidate_office_district?: (string | null) | undefined
  candidate_office_full?: (string | null) | undefined
  candidate_office_state?: (string | null) | undefined
  committee_id?: (string | null) | undefined
  committee_name?: (string | null) | undefined
  communication_class?: (string | null) | undefined
  communication_type?: (string | null) | undefined
  communication_type_full?: (string | null) | undefined
  cycle?: (number | null) | undefined
  file_number?: (number | null) | undefined
  form_type_code?: (string | null) | undefined
  image_number?: (string | null) | undefined
  original_sub_id?: (number | null) | undefined
  pdf_url?: (string | null) | undefined
  primary_general_indicator?: (string | null) | undefined
  primary_general_indicator_description?: (string | null) | undefined
  purpose?: (string | null) | undefined
  report_type?: (string | null) | undefined
  report_year?: (number | null) | undefined
  schedule_type?: (string | null) | undefined
  schedule_type_full?: (string | null) | undefined
  state_full?: (string | null) | undefined
  sub_id?: number | undefined
  support_oppose_indicator?: (string | null) | undefined
  tran_id?: (string | null) | undefined
  transaction_amount?: (number | null) | undefined
  transaction_date?: (string | null) | undefined
  transaction_type?: (string | null) | undefined
}
type CommunicationCostPage = {
  pagination?: OffsetInfo | undefined
  results?: CommunicationCost[] | undefined
}
type CommunicationCostByCandidate = {
  candidate?: (string | null) | undefined
  candidate_id?: string | undefined
  candidate_name?: string | undefined
  committee?: (string | null) | undefined
  committee_id?: string | undefined
  committee_name?: string | undefined
  count?: number | undefined
  cycle?: number | undefined
  support_oppose_indicator: string
  total?: number | undefined
}
type CommunicationCostByCandidatePage = {
  pagination?: OffsetInfo | undefined
  results?: CommunicationCostByCandidate[] | undefined
}
type CCTotalsByCandidate = {
  candidate_id?: string | undefined
  cycle?: number | undefined
  support_oppose_indicator?: string | undefined
  total?: number | undefined
}
type CCTotalsByCandidatePage = {
  pagination?: OffsetInfo | undefined
  results?: CCTotalsByCandidate[] | undefined
}
type EFilings = {
  amended_by?: number | undefined
  amendment_chain?: number[] | undefined
  amendment_number?: (number | null) | undefined
  amends_file?: (number | null) | undefined
  beginning_image_number?: string | undefined
  committee_id?: (string | null) | undefined
  committee_name?: (string | null) | undefined
  coverage_end_date?: (string | null) | undefined
  coverage_start_date?: (string | null) | undefined
  csv_url?: string | undefined
  document_description?: string | undefined
  ending_image_number?: string | undefined
  fec_file_id?: string | undefined
  fec_url?: string | undefined
  file_number?: number | undefined
  filed_date?: (string | null) | undefined
  form_type?: (string | null) | undefined
  html_url?: string | undefined
  is_amended?: boolean | undefined
  load_timestamp?: (string | null) | undefined
  most_recent?: boolean | undefined
  most_recent_filing?: number | undefined
  pdf_url?: string | undefined
  receipt_date?: (string | null) | undefined
}
type EFilingsPage = { pagination?: OffsetInfo | undefined; results?: EFilings[] | undefined }
type BaseF3Filing = {
  amended_address?: (string | null) | undefined
  amended_by?: number | undefined
  amendment?: (string | null) | undefined
  amendment_chain?: number[] | undefined
  beginning_image_number?: string | undefined
  candidate_first_name?: (string | null) | undefined
  candidate_id?: (string | null) | undefined
  candidate_last_name?: (string | null) | undefined
  candidate_middle_name?: (string | null) | undefined
  candidate_name?: string | undefined
  candidate_prefix?: (string | null) | undefined
  candidate_suffix?: (string | null) | undefined
  cash_on_hand_beginning_period?: (number | null) | undefined
  city?: (string | null) | undefined
  committee_id?: (string | null) | undefined
  committee_name?: (string | null) | undefined
  coverage_end_date?: (string | null) | undefined
  coverage_start_date?: (string | null) | undefined
  csv_url?: string | undefined
  district?: (number | null) | undefined
  document_description?: string | undefined
  election_date?: (string | null) | undefined
  election_state?: (string | null) | undefined
  f3z1?: (number | null) | undefined
  fec_file_id?: string | undefined
  fec_url?: string | undefined
  file_number?: number | undefined
  general_election?: (string | null) | undefined
  is_amended?: boolean | undefined
  most_recent?: boolean | undefined
  most_recent_filing?: number | undefined
  pdf_url?: string | undefined
  prefix?: (string | null) | undefined
  primary_election?: (string | null) | undefined
  receipt_date?: (string | null) | undefined
  report?: (string | null) | undefined
  report_type?: (string | null) | undefined
  report_year?: number | undefined
  rpt_pgi?: (string | null) | undefined
  runoff_election?: (string | null) | undefined
  sign_date?: (string | null) | undefined
  special_election?: (string | null) | undefined
  state?: (string | null) | undefined
  street_1?: (string | null) | undefined
  street_2?: (string | null) | undefined
  suffix?: (string | null) | undefined
  summary_lines?: string | undefined
  treasurer_first_name?: (string | null) | undefined
  treasurer_last_name?: (string | null) | undefined
  treasurer_middle_name?: (string | null) | undefined
  treasurer_name?: string | undefined
  zip?: (string | null) | undefined
}
type BaseF3FilingPage = {
  pagination?: OffsetInfo | undefined
  results?: BaseF3Filing[] | undefined
}
type BaseF3XFiling = {
  amend_address?: (string | null) | undefined
  amended_by?: number | undefined
  amendment?: (string | null) | undefined
  amendment_chain?: number[] | undefined
  beginning_image_number?: string | undefined
  city?: (string | null) | undefined
  committee_id?: (string | null) | undefined
  committee_name?: (string | null) | undefined
  coverage_end_date?: (string | null) | undefined
  coverage_start_date?: (string | null) | undefined
  csv_url?: string | undefined
  document_description?: string | undefined
  election_date?: (string | null) | undefined
  election_state?: (string | null) | undefined
  fec_file_id?: string | undefined
  fec_url?: string | undefined
  file_number?: number | undefined
  is_amended?: boolean | undefined
  most_recent?: boolean | undefined
  most_recent_filing?: number | undefined
  pdf_url?: string | undefined
  qualified_multicandidate_committee?: (string | null) | undefined
  receipt_date?: (string | null) | undefined
  report?: (string | null) | undefined
  report_type?: (string | null) | undefined
  report_year?: number | undefined
  rpt_pgi?: (string | null) | undefined
  sign_date?: (string | null) | undefined
  state?: (string | null) | undefined
  street_1?: (string | null) | undefined
  street_2?: (string | null) | undefined
  summary_lines?: string | undefined
  zip?: (string | null) | undefined
}
type BaseF3XFilingPage = {
  pagination?: OffsetInfo | undefined
  results?: BaseF3XFiling[] | undefined
}
type BaseF3PFiling = {
  amended_by?: number | undefined
  amendment?: (string | null) | undefined
  amendment_chain?: number[] | undefined
  beginning_image_number?: string | undefined
  cash_on_hand_beginning_period?: (number | null) | undefined
  cash_on_hand_end_period?: (number | null) | undefined
  city?: (string | null) | undefined
  committee_id?: (string | null) | undefined
  committee_name?: (string | null) | undefined
  coverage_end_date?: (string | null) | undefined
  coverage_start_date?: (string | null) | undefined
  csv_url?: string | undefined
  debts_owed_by_committee?: (number | null) | undefined
  debts_owed_to_committee?: (number | null) | undefined
  document_description?: string | undefined
  election_date?: (string | null) | undefined
  election_state?: (string | null) | undefined
  expenditure_subject_to_limits?: (number | null) | undefined
  fec_file_id?: string | undefined
  fec_url?: string | undefined
  file_number?: number | undefined
  general_election?: (string | null) | undefined
  is_amended?: boolean | undefined
  most_recent?: boolean | undefined
  most_recent_filing?: number | undefined
  net_contributions_cycle_to_date?: (number | null) | undefined
  net_operating_expenditures_cycle_to_date?: (number | null) | undefined
  pdf_url?: string | undefined
  prefix?: (string | null) | undefined
  primary_election?: (string | null) | undefined
  receipt_date?: (string | null) | undefined
  report?: (string | null) | undefined
  report_type?: (string | null) | undefined
  report_year?: number | undefined
  rpt_pgi?: (string | null) | undefined
  sign_date?: (string | null) | undefined
  state?: (string | null) | undefined
  street_1?: (string | null) | undefined
  street_2?: (string | null) | undefined
  subtotal_summary_period?: (string | null) | undefined
  suffix?: (string | null) | undefined
  summary_lines?: string | undefined
  treasurer_first_name?: (string | null) | undefined
  treasurer_last_name?: (string | null) | undefined
  treasurer_middle_name?: (string | null) | undefined
  treasurer_name?: string | undefined
  zip?: (string | null) | undefined
}
type BaseF3PFilingPage = {
  pagination?: OffsetInfo | undefined
  results?: BaseF3PFiling[] | undefined
}
type ElectionDate = {
  active_election?: boolean | undefined
  create_date?: (string | null) | undefined
  election_date?: (string | null) | undefined
  election_district?: (number | null) | undefined
  election_notes?: (string | null) | undefined
  election_party?: (string | null) | undefined
  election_state?: (string | null) | undefined
  election_type_full?: string | undefined
  election_type_id?: (string | null) | undefined
  election_year?: (number | null) | undefined
  office_sought?: (string | null) | undefined
  primary_general_date?: (string | null) | undefined
  update_date?: (string | null) | undefined
}
type SeekInfo = {
  count?: number | undefined
  last_indexes?: string | undefined
  pages?: number | undefined
  per_page?: number | undefined
}
type Electioneering = {
  amendment_indicator?: (string | null) | undefined
  beginning_image_number?: (string | null) | undefined
  calculated_candidate_share?: (number | null) | undefined
  candidate_district?: (string | null) | undefined
  candidate_id?: (string | null) | undefined
  candidate_name?: (string | null) | undefined
  candidate_office?: (string | null) | undefined
  candidate_state?: (string | null) | undefined
  committee_id?: (string | null) | undefined
  committee_name?: (string | null) | undefined
  communication_date?: (string | null) | undefined
  disbursement_amount?: (number | null) | undefined
  disbursement_date?: (string | null) | undefined
  election_type?: string | undefined
  file_number?: (number | null) | undefined
  link_id?: (number | null) | undefined
  number_of_candidates?: (number | null) | undefined
  payee_name?: (string | null) | undefined
  payee_state?: (string | null) | undefined
  pdf_url?: (string | null) | undefined
  public_distribution_date?: (string | null) | undefined
  purpose_description?: (string | null) | undefined
  receipt_date?: (string | null) | undefined
  report_year?: (number | null) | undefined
  sb_image_num?: (string | null) | undefined
  sb_link_id?: (string | null) | undefined
  sub_id?: (number | null) | undefined
}
type ElectioneeringPage = {
  pagination?: SeekInfo | undefined
  results?: Electioneering[] | undefined
}
type ElectioneeringByCandidate = {
  candidate?: (string | null) | undefined
  candidate_id?: string | undefined
  candidate_name?: string | undefined
  committee?: (string | null) | undefined
  committee_id?: string | undefined
  committee_name?: string | undefined
  count?: number | undefined
  cycle?: number | undefined
  total?: number | undefined
}
type ElectioneeringByCandidatePage = {
  pagination?: OffsetInfo | undefined
  results?: ElectioneeringByCandidate[] | undefined
}
type ECTotalsByCandidate = {
  candidate_id?: string | undefined
  cycle?: number | undefined
  total?: number | undefined
}
type ECTotalsByCandidatePage = {
  pagination?: OffsetInfo | undefined
  results?: ECTotalsByCandidate[] | undefined
}
type Election = {
  candidate_election_year?: number | undefined
  candidate_id?: string | undefined
  candidate_name?: string | undefined
  candidate_pcc_id?: string | undefined
  candidate_pcc_name?: string | undefined
  cash_on_hand_end_period?: number | undefined
  committee_ids?: string[] | undefined
  coverage_end_date?: string | undefined
  incumbent_challenge_full?: string | undefined
  party_full?: string | undefined
  total_disbursements?: number | undefined
  total_receipts?: number | undefined
}
type ElectionPage = { pagination?: OffsetInfo | undefined; results?: Election[] | undefined }
type ElectionsList = {
  cycle?: (number | null) | undefined
  district?: (string | null) | undefined
  office?: (string | null) | undefined
  state?: (string | null) | undefined
}
type ElectionsListPage = {
  pagination?: OffsetInfo | undefined
  results?: ElectionsList[] | undefined
}
type ElectionSummary = {
  count?: number | undefined
  disbursements?: number | undefined
  independent_expenditures?: number | undefined
  receipts?: number | undefined
}
type AuditCandidateSearch = { id?: string | undefined; name?: string | undefined }
type AuditCandidateSearchList = { results?: AuditCandidateSearch[] | undefined }
type AuditCommitteeSearch = { id?: string | undefined; name?: string | undefined }
type AuditCommitteeSearchList = { results?: AuditCommitteeSearch[] | undefined }
type CandidateSearch = {
  id?: string | undefined
  name?: string | undefined
  office_sought?: string | undefined
}
type CandidateSearchList = { results?: CandidateSearch[] | undefined }
type CommitteeSearch = {
  id?: string | undefined
  is_active?: boolean | undefined
  name?: string | undefined
}
type CommitteeSearchList = { results?: CommitteeSearch[] | undefined }
type OperationsLog = {
  amendment_indicator?: (string | null) | undefined
  beginning_image_number?: (string | null) | undefined
  candidate_committee_id?: (string | null) | undefined
  coverage_end_date?: (string | null) | undefined
  coverage_start_date?: (string | null) | undefined
  ending_image_number?: (string | null) | undefined
  form_type?: (string | null) | undefined
  receipt_date?: (string | null) | undefined
  report_type?: (string | null) | undefined
  report_year?: (number | null) | undefined
  status_num?: (number | null) | undefined
  sub_id?: number | undefined
  summary_data_complete_date?: (string | null) | undefined
  summary_data_verification_date?: (string | null) | undefined
  transaction_data_complete_date?: (string | null) | undefined
}
type OperationsLogPage = {
  pagination?: OffsetInfo | undefined
  results?: OperationsLog[] | undefined
}
type PresidentialByCandidate = {
  candidate_id?: (string | null) | undefined
  candidate_last_name?: (string | null) | undefined
  candidate_party_affiliation?: (string | null) | undefined
  contributor_state?: (string | null) | undefined
  election_year?: (number | null) | undefined
  net_receipts?: (number | null) | undefined
  rounded_net_receipts?: (number | null) | undefined
}
type PresidentialByCandidatePage = {
  pagination?: OffsetInfo | undefined
  results?: PresidentialByCandidate[] | undefined
}
type PresidentialBySize = {
  candidate_id?: (string | null) | undefined
  contribution_receipt_amount?: (number | null) | undefined
  election_year?: (number | null) | undefined
  size?: (number | null) | undefined
  size_range_id?: (number | null) | undefined
}
type PresidentialBySizePage = {
  pagination?: OffsetInfo | undefined
  results?: PresidentialBySize[] | undefined
}
type PresidentialByState = {
  candidate_id?: (string | null) | undefined
  contribution_receipt_amount?: (number | null) | undefined
  contribution_state?: (string | null) | undefined
  election_year?: (number | null) | undefined
}
type PresidentialByStatePage = {
  pagination?: OffsetInfo | undefined
  results?: PresidentialByState[] | undefined
}
type PresidentialCoverage = {
  candidate_id?: (string | null) | undefined
  coverage_end_date?: (string | null) | undefined
  election_year?: (number | null) | undefined
}
type PresidentialCoveragePage = {
  pagination?: OffsetInfo | undefined
  results?: PresidentialCoverage[] | undefined
}
type PresidentialSummary = {
  candidate_contributions_less_repayments?: (number | null) | undefined
  candidate_id?: (string | null) | undefined
  candidate_last_name?: (string | null) | undefined
  candidate_name?: (string | null) | undefined
  candidate_party_affiliation?: (string | null) | undefined
  cash_on_hand_end?: (number | null) | undefined
  committee_designation?: (string | null) | undefined
  committee_id?: (string | null) | undefined
  committee_name?: (string | null) | undefined
  committee_type?: (string | null) | undefined
  debts_owed_by_committee?: (number | null) | undefined
  disbursements_less_offsets?: (number | null) | undefined
  election_year?: (number | null) | undefined
  exempt_legal_accounting_disbursement?: (number | null) | undefined
  federal_funds?: (number | null) | undefined
  fundraising_disbursements?: (number | null) | undefined
  individual_contributions_less_refunds?: (number | null) | undefined
  net_receipts?: (number | null) | undefined
  offsets_to_operating_expenditures?: (number | null) | undefined
  operating_expenditures?: (number | null) | undefined
  other_disbursements?: (number | null) | undefined
  pac_contributions_less_refunds?: (number | null) | undefined
  party_contributions_less_refunds?: (number | null) | undefined
  repayments_loans_made_by_candidate?: (number | null) | undefined
  repayments_other_loans?: (number | null) | undefined
  rounded_net_receipts?: (number | null) | undefined
  total_contribution_refunds?: (number | null) | undefined
  total_loan_repayments_made?: (number | null) | undefined
  transfers_from_affiliated_committees?: (number | null) | undefined
  transfers_to_other_authorized_committees?: (number | null) | undefined
}
type PresidentialSummaryPage = {
  pagination?: OffsetInfo | undefined
  results?: PresidentialSummary[] | undefined
}
type RadAnalyst = {
  analyst_id?: (number | null) | undefined
  analyst_short_id?: (number | null) | undefined
  assignment_update_date?: (string | null) | undefined
  committee_id: string
  committee_name?: (string | null) | undefined
  email?: (string | null) | undefined
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  rad_branch?: (string | null) | undefined
  telephone_ext?: (number | null) | undefined
  title?: (string | null) | undefined
}
type RadAnalystPage = { pagination?: OffsetInfo | undefined; results?: RadAnalyst[] | undefined }
type ReportDate = {
  create_date?: (string | null) | undefined
  due_date?: (string | null) | undefined
  report_type?: string | undefined
  report_type_full?: string | undefined
  report_year?: (number | null) | undefined
  update_date?: (string | null) | undefined
}
type CommitteeHistory = {
  affiliated_committee_name?: (string | null) | undefined
  candidate_ids?: (string[] | null) | undefined
  city?: (string | null) | undefined
  committee_id: string
  committee_type?: (string | null) | undefined
  committee_type_full?: (string | null) | undefined
  cycle: number
  cycles?: (number[] | null) | undefined
  cycles_has_activity?: (number[] | null) | undefined
  cycles_has_financial?: (number[] | null) | undefined
  designation?: (string | null) | undefined
  designation_full?: (string | null) | undefined
  filing_frequency?: (string | null) | undefined
  first_f1_date?: (string | null) | undefined
  first_file_date?: (string | null) | undefined
  is_active?: (boolean | null) | undefined
  jfc_committee?:
    | {
        joint_committee_id?: (string | null) | undefined
        joint_committee_name?: (string | null) | undefined
      }[]
    | undefined
  last_cycle_has_activity?: (number | null) | undefined
  last_cycle_has_financial?: (number | null) | undefined
  last_f1_date?: (string | null) | undefined
  last_file_date?: (string | null) | undefined
  name?: (string | null) | undefined
  organization_type?: (string | null) | undefined
  organization_type_full?: (string | null) | undefined
  party?: (string | null) | undefined
  party_full?: (string | null) | undefined
  state?: (string | null) | undefined
  state_full?: (string | null) | undefined
  street_1?: (string | null) | undefined
  street_2?: (string | null) | undefined
  treasurer_name?: (string | null) | undefined
  zip?: (string | null) | undefined
}
type ScheduleA = {
  amendment_indicator?: (string | null) | undefined
  amendment_indicator_desc?: (string | null) | undefined
  back_reference_schedule_name?: (string | null) | undefined
  back_reference_transaction_id?: (string | null) | undefined
  candidate_first_name?: (string | null) | undefined
  candidate_id?: (string | null) | undefined
  candidate_last_name?: (string | null) | undefined
  candidate_middle_name?: (string | null) | undefined
  candidate_name?: (string | null) | undefined
  candidate_office?: (string | null) | undefined
  candidate_office_district?: (string | null) | undefined
  candidate_office_full?: (string | null) | undefined
  candidate_office_state?: (string | null) | undefined
  candidate_office_state_full?: (string | null) | undefined
  candidate_prefix?: (string | null) | undefined
  candidate_suffix?: (string | null) | undefined
  committee?: CommitteeHistory | undefined
  committee_id?: (string | null) | undefined
  committee_name?: (string | null) | undefined
  conduit_committee_city?: (string | null) | undefined
  conduit_committee_id?: (string | null) | undefined
  conduit_committee_name?: (string | null) | undefined
  conduit_committee_state?: (string | null) | undefined
  conduit_committee_street1?: (string | null) | undefined
  conduit_committee_street2?: (string | null) | undefined
  conduit_committee_zip?: (number | null) | undefined
  contribution_receipt_amount?: number | undefined
  contribution_receipt_date?: (string | null) | undefined
  contributor?: CommitteeHistory | undefined
  contributor_aggregate_ytd?: number | undefined
  contributor_city?: (string | null) | undefined
  contributor_employer?: (string | null) | undefined
  contributor_first_name?: (string | null) | undefined
  contributor_id?: (string | null) | undefined
  contributor_last_name?: (string | null) | undefined
  contributor_middle_name?: (string | null) | undefined
  contributor_name?: (string | null) | undefined
  contributor_occupation?: (string | null) | undefined
  contributor_prefix?: (string | null) | undefined
  contributor_state?: (string | null) | undefined
  contributor_street_1?: (string | null) | undefined
  contributor_street_2?: (string | null) | undefined
  contributor_suffix?: (string | null) | undefined
  contributor_zip?: (string | null) | undefined
  donor_committee_name?: (string | null) | undefined
  election_type?: (string | null) | undefined
  election_type_full?: (string | null) | undefined
  entity_type?: (string | null) | undefined
  entity_type_desc?: (string | null) | undefined
  fec_election_type_desc?: (string | null) | undefined
  fec_election_year?: (string | null) | undefined
  file_number?: (number | null) | undefined
  filing_form?: (string | null) | undefined
  image_number?: string | undefined
  increased_limit?: (string | null) | undefined
  is_individual?: (boolean | null) | undefined
  line_number?: (string | null) | undefined
  line_number_label?: (string | null) | undefined
  link_id?: (number | null) | undefined
  load_date?: (string | null) | undefined
  memo_code?: (string | null) | undefined
  memo_code_full?: (string | null) | undefined
  memo_text?: (string | null) | undefined
  memoed_subtotal?: boolean | undefined
  national_committee_nonfederal_account?: (string | null) | undefined
  original_sub_id?: string | undefined
  pdf_url?: (string | null) | undefined
  receipt_type?: (string | null) | undefined
  receipt_type_desc?: (string | null) | undefined
  receipt_type_full?: (string | null) | undefined
  recipient_committee_designation?: (string | null) | undefined
  recipient_committee_org_type?: (string | null) | undefined
  recipient_committee_type?: (string | null) | undefined
  report_type?: (string | null) | undefined
  report_year?: (number | null) | undefined
  schedule_type?: (string | null) | undefined
  schedule_type_full?: (string | null) | undefined
  sub_id?: string | undefined
  transaction_id?: (string | null) | undefined
  two_year_transaction_period?: (number | null) | undefined
  unused_contbr_id?: (string | null) | undefined
}
type ScheduleAPage = { pagination?: SeekInfo | undefined; results?: ScheduleA[] | undefined }
type ScheduleAByEmployer = {
  committee_id: string
  count?: (number | null) | undefined
  cycle: number
  employer: string
  total?: (number | null) | undefined
}
type ScheduleAByEmployerPage = {
  pagination?: OffsetInfo | undefined
  results?: ScheduleAByEmployer[] | undefined
}
type ScheduleAByOccupation = {
  committee_id: string
  count?: (number | null) | undefined
  cycle: number
  occupation: string
  total?: (number | null) | undefined
}
type ScheduleAByOccupationPage = {
  pagination?: OffsetInfo | undefined
  results?: ScheduleAByOccupation[] | undefined
}
type ScheduleABySize = {
  committee_id: string
  count?: (number | null) | undefined
  cycle: number
  size: number
  total?: (number | null) | undefined
}
type ScheduleABySizePage = {
  pagination?: OffsetInfo | undefined
  results?: ScheduleABySize[] | undefined
}
type ScheduleABySizeCandidate = {
  candidate_id?: string | undefined
  count?: number | undefined
  cycle?: number | undefined
  size?: number | undefined
  total?: number | undefined
}
type ScheduleABySizeCandidatePage = {
  pagination?: OffsetInfo | undefined
  results?: ScheduleABySizeCandidate[] | undefined
}
type ScheduleAByState = {
  committee_id: string
  count?: (number | null) | undefined
  cycle: number
  state: string
  state_full: string
  total?: (number | null) | undefined
}
type ScheduleAByStatePage = {
  pagination?: OffsetInfo | undefined
  results?: ScheduleAByState[] | undefined
}
type ScheduleAByStateCandidate = {
  candidate_id?: string | undefined
  count?: number | undefined
  cycle?: number | undefined
  state?: string | undefined
  state_full?: string | undefined
  total?: number | undefined
}
type ScheduleAByStateCandidatePage = {
  pagination?: OffsetInfo | undefined
  results?: ScheduleAByStateCandidate[] | undefined
}
type ScheduleAByStateRecipientTotals = {
  committee_type?: (string | null) | undefined
  committee_type_full?: (string | null) | undefined
  count?: (number | null) | undefined
  cycle?: (number | null) | undefined
  state?: (string | null) | undefined
  state_full?: (string | null) | undefined
  total?: (number | null) | undefined
}
type ScheduleAByStateRecipientTotalsPage = {
  pagination?: OffsetInfo | undefined
  results?: ScheduleAByStateRecipientTotals[] | undefined
}
type ScheduleAByZip = {
  committee_id: string
  count?: (number | null) | undefined
  cycle: number
  state?: (string | null) | undefined
  state_full?: (string | null) | undefined
  total?: (number | null) | undefined
  zip: string
}
type ScheduleAByZipPage = {
  pagination?: OffsetInfo | undefined
  results?: ScheduleAByZip[] | undefined
}
type ScheduleAEfile = {
  amendment_indicator?: (string | null) | undefined
  back_reference_schedule_name?: (string | null) | undefined
  back_reference_transaction_id?: (string | null) | undefined
  beginning_image_number?: string | undefined
  committee?: CommitteeHistory | undefined
  committee_id?: (string | null) | undefined
  conduit_committee_city?: (string | null) | undefined
  conduit_committee_id?: (string | null) | undefined
  conduit_committee_name?: (string | null) | undefined
  conduit_committee_state?: (string | null) | undefined
  conduit_committee_street1?: (string | null) | undefined
  conduit_committee_street2?: (string | null) | undefined
  conduit_committee_zip?: (number | null) | undefined
  contribution_receipt_amount?: (number | null) | undefined
  contribution_receipt_date?: (string | null) | undefined
  contributor_aggregate_ytd?: (number | null) | undefined
  contributor_city?: (string | null) | undefined
  contributor_employer?: (string | null) | undefined
  contributor_first_name?: (string | null) | undefined
  contributor_last_name?: (string | null) | undefined
  contributor_middle_name?: (string | null) | undefined
  contributor_name?: string | undefined
  contributor_occupation?: (string | null) | undefined
  contributor_prefix?: (string | null) | undefined
  contributor_state?: (string | null) | undefined
  contributor_suffix?: (string | null) | undefined
  contributor_zip?: (string | null) | undefined
  csv_url?: string | undefined
  cycle?: number | undefined
  entity_type?: (string | null) | undefined
  fec_election_type_desc?: string | undefined
  fec_url?: string | undefined
  file_number: number
  filing?: EFilings | undefined
  image_number?: (string | null) | undefined
  line_number?: (string | null) | undefined
  load_timestamp?: (string | null) | undefined
  memo_code?: (string | null) | undefined
  memo_text?: (string | null) | undefined
  pdf_url?: string | undefined
  pgo?: (string | null) | undefined
  related_line_number: number
  report_type?: string | undefined
  transaction_id?: (string | null) | undefined
}
type ScheduleAEfilePage = {
  pagination?: OffsetInfo | undefined
  results?: ScheduleAEfile[] | undefined
}
type ScheduleB = {
  amendment_indicator?: (string | null) | undefined
  amendment_indicator_desc?: (string | null) | undefined
  back_reference_schedule_id?: (string | null) | undefined
  back_reference_transaction_id?: (string | null) | undefined
  beneficiary_committee_name?: (string | null) | undefined
  candidate_first_name?: (string | null) | undefined
  candidate_id?: (string | null) | undefined
  candidate_last_name?: (string | null) | undefined
  candidate_middle_name?: (string | null) | undefined
  candidate_name?: (string | null) | undefined
  candidate_office?: (string | null) | undefined
  candidate_office_description?: (string | null) | undefined
  candidate_office_district?: (string | null) | undefined
  candidate_office_state?: (string | null) | undefined
  candidate_office_state_full?: (string | null) | undefined
  candidate_prefix?: (string | null) | undefined
  candidate_suffix?: (string | null) | undefined
  category_code?: (string | null) | undefined
  category_code_full?: (string | null) | undefined
  comm_dt?: (string | null) | undefined
  committee?: CommitteeHistory | undefined
  committee_id?: (string | null) | undefined
  conduit_committee_city?: (string | null) | undefined
  conduit_committee_name?: (string | null) | undefined
  conduit_committee_state?: (string | null) | undefined
  conduit_committee_street1?: (string | null) | undefined
  conduit_committee_street2?: (string | null) | undefined
  conduit_committee_zip?: (number | null) | undefined
  disbursement_amount?: (number | null) | undefined
  disbursement_date?: (string | null) | undefined
  disbursement_description?: (string | null) | undefined
  disbursement_purpose_category?: (string | null) | undefined
  disbursement_type?: (string | null) | undefined
  disbursement_type_description?: (string | null) | undefined
  election_type?: (string | null) | undefined
  election_type_full?: (string | null) | undefined
  entity_type?: (string | null) | undefined
  entity_type_desc?: (string | null) | undefined
  fec_election_type_desc?: (string | null) | undefined
  fec_election_year?: (string | null) | undefined
  file_number?: (number | null) | undefined
  filing_form?: (string | null) | undefined
  image_number?: string | undefined
  line_number?: (string | null) | undefined
  line_number_label?: (string | null) | undefined
  link_id?: (number | null) | undefined
  load_date?: (string | null) | undefined
  memo_code?: (string | null) | undefined
  memo_code_full?: (string | null) | undefined
  memo_text?: (string | null) | undefined
  memoed_subtotal?: boolean | undefined
  national_committee_nonfederal_account?: (string | null) | undefined
  original_sub_id?: string | undefined
  payee_employer?: (string | null) | undefined
  payee_first_name?: (string | null) | undefined
  payee_last_name?: (string | null) | undefined
  payee_middle_name?: (string | null) | undefined
  payee_occupation?: (string | null) | undefined
  payee_prefix?: (string | null) | undefined
  payee_suffix?: (string | null) | undefined
  pdf_url?: (string | null) | undefined
  recipient_city?: (string | null) | undefined
  recipient_committee?: CommitteeHistory | undefined
  recipient_committee_id?: (string | null) | undefined
  recipient_name?: (string | null) | undefined
  recipient_state?: (string | null) | undefined
  recipient_zip?: (string | null) | undefined
  ref_disp_excess_flg?: (string | null) | undefined
  report_type?: (string | null) | undefined
  report_year?: (number | null) | undefined
  schedule_type?: (string | null) | undefined
  schedule_type_full?: (string | null) | undefined
  semi_annual_bundled_refund?: (number | null) | undefined
  spender_committee_designation?: (string | null) | undefined
  spender_committee_org_type?: (string | null) | undefined
  spender_committee_type?: (string | null) | undefined
  sub_id?: string | undefined
  transaction_id?: (string | null) | undefined
  two_year_transaction_period?: (number | null) | undefined
  unused_recipient_committee_id?: (string | null) | undefined
}
type ScheduleBPage = { pagination?: SeekInfo | undefined; results?: ScheduleB[] | undefined }
type ScheduleBByPurpose = {
  committee_id: string
  count?: (number | null) | undefined
  cycle: number
  memo_count?: (number | null) | undefined
  memo_total?: (number | null) | undefined
  purpose: string
  total?: (number | null) | undefined
}
type ScheduleBByPurposePage = {
  pagination?: OffsetInfo | undefined
  results?: ScheduleBByPurpose[] | undefined
}
type ScheduleBByRecipient = {
  committee_id: string
  committee_total_disbursements?: (number | null) | undefined
  count?: (number | null) | undefined
  cycle: number
  memo_count?: (number | null) | undefined
  memo_total?: (number | null) | undefined
  recipient_disbursement_percent?: number | undefined
  recipient_name: string
  total?: (number | null) | undefined
}
type ScheduleBByRecipientPage = {
  pagination?: SeekInfo | undefined
  results?: ScheduleBByRecipient[] | undefined
}
type ScheduleBByRecipientID = {
  committee_id: string
  committee_name?: string | undefined
  count?: (number | null) | undefined
  cycle: number
  memo_count?: (number | null) | undefined
  memo_total?: (number | null) | undefined
  recipient_id: string
  recipient_name?: string | undefined
  total?: (number | null) | undefined
}
type ScheduleBByRecipientIDPage = {
  pagination?: OffsetInfo | undefined
  results?: ScheduleBByRecipientID[] | undefined
}
type ScheduleBEfile = {
  amendment_indicator?: (string | null) | undefined
  back_reference_schedule_name?: (string | null) | undefined
  back_reference_transaction_id?: (string | null) | undefined
  beginning_image_number?: string | undefined
  beneficiary_committee_name?: (string | null) | undefined
  candidate_office?: (string | null) | undefined
  candidate_office_district?: (string | null) | undefined
  committee?: CommitteeHistory | undefined
  committee_id?: (string | null) | undefined
  csv_url?: string | undefined
  disbursement_amount?: (number | null) | undefined
  disbursement_date?: (string | null) | undefined
  disbursement_description?: (string | null) | undefined
  disbursement_type?: (string | null) | undefined
  entity_type?: (string | null) | undefined
  fec_url?: string | undefined
  file_number: number
  filing?: EFilings | undefined
  image_number?: (string | null) | undefined
  is_notice?: boolean | undefined
  line_number?: (string | null) | undefined
  load_timestamp?: (string | null) | undefined
  memo_code?: (string | null) | undefined
  memo_text?: (string | null) | undefined
  payee_name?: string | undefined
  pdf_url?: string | undefined
  recipient_city?: (string | null) | undefined
  recipient_name?: (string | null) | undefined
  recipient_prefix?: (string | null) | undefined
  recipient_state?: (string | null) | undefined
  recipient_suffix?: (string | null) | undefined
  recipient_zip?: (string | null) | undefined
  related_line_number: number
  report_type?: string | undefined
  semi_annual_bundled_refund?: (number | null) | undefined
  transaction_id?: (string | null) | undefined
}
type ScheduleBEfilePage = {
  pagination?: OffsetInfo | undefined
  results?: ScheduleBEfile[] | undefined
}
type ScheduleE = {
  action_code?: (string | null) | undefined
  action_code_full?: (string | null) | undefined
  amendment_indicator?: (string | null) | undefined
  amendment_number?: (number | null) | undefined
  back_reference_schedule_name?: (string | null) | undefined
  back_reference_transaction_id?: (string | null) | undefined
  candidate?: (string | null) | undefined
  candidate_first_name?: (string | null) | undefined
  candidate_id?: (string | null) | undefined
  candidate_last_name?: (string | null) | undefined
  candidate_middle_name?: (string | null) | undefined
  candidate_name?: (string | null) | undefined
  candidate_office?: (string | null) | undefined
  candidate_office_district?: (string | null) | undefined
  candidate_office_state?: (string | null) | undefined
  candidate_party?: (string | null) | undefined
  candidate_prefix?: (string | null) | undefined
  candidate_suffix?: (string | null) | undefined
  category_code?: (string | null) | undefined
  category_code_full?: (string | null) | undefined
  committee?: CommitteeHistory | undefined
  committee_id?: (string | null) | undefined
  conduit_committee_city?: (string | null) | undefined
  conduit_committee_id?: (string | null) | undefined
  conduit_committee_name?: (string | null) | undefined
  conduit_committee_state?: (string | null) | undefined
  conduit_committee_street1?: (string | null) | undefined
  conduit_committee_street2?: (string | null) | undefined
  conduit_committee_zip?: (number | null) | undefined
  dissemination_date?: (string | null) | undefined
  election_type?: (string | null) | undefined
  election_type_full?: (string | null) | undefined
  expenditure_amount?: number | undefined
  expenditure_date?: (string | null) | undefined
  expenditure_description?: (string | null) | undefined
  file_number?: (number | null) | undefined
  filer_first_name?: (string | null) | undefined
  filer_last_name?: (string | null) | undefined
  filer_middle_name?: (string | null) | undefined
  filer_prefix?: (string | null) | undefined
  filer_suffix?: (string | null) | undefined
  filing_date?: (string | null) | undefined
  filing_form?: (string | null) | undefined
  image_number?: string | undefined
  independent_sign_date?: (string | null) | undefined
  independent_sign_name?: (string | null) | undefined
  is_notice?: (boolean | null) | undefined
  line_number?: (string | null) | undefined
  link_id?: (number | null) | undefined
  memo_code?: (string | null) | undefined
  memo_code_full?: (string | null) | undefined
  memo_text?: (string | null) | undefined
  memoed_subtotal?: boolean | undefined
  most_recent?: (boolean | null) | undefined
  notary_commission_expiration_date?: (string | null) | undefined
  notary_sign_date?: (string | null) | undefined
  notary_sign_name?: (string | null) | undefined
  office_total_ytd?: number | undefined
  original_sub_id?: string | undefined
  payee_city?: (string | null) | undefined
  payee_first_name?: (string | null) | undefined
  payee_last_name?: (string | null) | undefined
  payee_middle_name?: (string | null) | undefined
  payee_name?: (string | null) | undefined
  payee_prefix?: (string | null) | undefined
  payee_state?: (string | null) | undefined
  payee_street_1?: (string | null) | undefined
  payee_street_2?: (string | null) | undefined
  payee_suffix?: (string | null) | undefined
  payee_zip?: (string | null) | undefined
  pdf_url?: (string | null) | undefined
  previous_file_number?: (number | null) | undefined
  report_type?: (string | null) | undefined
  report_year?: (number | null) | undefined
  schedule_type?: (string | null) | undefined
  schedule_type_full?: (string | null) | undefined
  sub_id?: string | undefined
  support_oppose_indicator?: (string | null) | undefined
  transaction_id?: (string | null) | undefined
}
type ScheduleEPage = { pagination?: SeekInfo | undefined; results?: ScheduleE[] | undefined }
type ScheduleEByCandidate = {
  candidate_id?: string | undefined
  candidate_name?: string | undefined
  committee_id?: string | undefined
  committee_name?: string | undefined
  count?: (number | null) | undefined
  cycle: number
  support_oppose_indicator: string
  total?: (number | null) | undefined
}
type ScheduleEByCandidatePage = {
  pagination?: OffsetInfo | undefined
  results?: ScheduleEByCandidate[] | undefined
}
type ScheduleEEfile = {
  amendment_indicator?: (string | null) | undefined
  back_reference_schedule_name?: (string | null) | undefined
  back_reference_transaction_id?: (string | null) | undefined
  beginning_image_number?: string | undefined
  candidate_first_name?: (string | null) | undefined
  candidate_id?: (string | null) | undefined
  candidate_middle_name?: (string | null) | undefined
  candidate_name?: (string | null) | undefined
  candidate_office?: (string | null) | undefined
  candidate_office_district?: (string | null) | undefined
  candidate_office_state?: (string | null) | undefined
  candidate_party?: (string | null) | undefined
  candidate_prefix?: (string | null) | undefined
  candidate_suffix?: (string | null) | undefined
  category_code?: (string | null) | undefined
  committee?: CommitteeHistory | undefined
  committee_id?: (string | null) | undefined
  csv_url?: string | undefined
  dissemination_date?: (string | null) | undefined
  entity_type?: (string | null) | undefined
  expenditure_amount?: (number | null) | undefined
  expenditure_date?: (string | null) | undefined
  expenditure_description?: (string | null) | undefined
  fec_url?: string | undefined
  file_number: number
  filer_first_name?: (string | null) | undefined
  filer_last_name?: (string | null) | undefined
  filer_middle_name?: (string | null) | undefined
  filer_prefix?: (string | null) | undefined
  filer_suffix?: (string | null) | undefined
  filing?: EFilings | undefined
  filing_form?: (string | null) | undefined
  image_number?: (string | null) | undefined
  is_notice?: boolean | undefined
  line_number?: (string | null) | undefined
  load_timestamp?: (string | null) | undefined
  memo_code?: (string | null) | undefined
  memo_text?: (string | null) | undefined
  most_recent?: (boolean | null) | undefined
  notary_sign_date?: (string | null) | undefined
  office_total_ytd?: (number | null) | undefined
  payee_city?: (string | null) | undefined
  payee_first_name?: (string | null) | undefined
  payee_last_name?: (string | null) | undefined
  payee_middle_name?: (string | null) | undefined
  payee_name?: string | undefined
  payee_prefix?: (string | null) | undefined
  payee_state?: (string | null) | undefined
  payee_street_1?: (string | null) | undefined
  payee_street_2?: (string | null) | undefined
  payee_suffix?: (string | null) | undefined
  payee_zip?: (string | null) | undefined
  pdf_url?: string | undefined
  related_line_number: number
  report_type?: string | undefined
  support_oppose_indicator?: (string | null) | undefined
  transaction_id?: (string | null) | undefined
}
type ScheduleEEfilePage = {
  pagination?: OffsetInfo | undefined
  results?: ScheduleEEfile[] | undefined
}
type IETotalsByCandidate = {
  candidate_id?: string | undefined
  cycle?: number | undefined
  support_oppose_indicator?: string | undefined
  total?: number | undefined
}
type IETotalsByCandidatePage = {
  pagination?: OffsetInfo | undefined
  results?: IETotalsByCandidate[] | undefined
}
type StateElectionOfficeInfo = {
  address_line1?: (string | null) | undefined
  address_line2?: (string | null) | undefined
  city?: (string | null) | undefined
  email?: (string | null) | undefined
  fax_number?: (string | null) | undefined
  mailing_address1?: (string | null) | undefined
  mailing_address2?: (string | null) | undefined
  mailing_city?: (string | null) | undefined
  mailing_state?: (string | null) | undefined
  mailing_zipcode?: (string | null) | undefined
  office_name?: (string | null) | undefined
  office_type: string
  primary_phone_number?: (string | null) | undefined
  secondary_phone_number?: (string | null) | undefined
  state: string
  state_full_name?: (string | null) | undefined
  website_url1?: (string | null) | undefined
  website_url2?: (string | null) | undefined
  zip_code?: (string | null) | undefined
}
type StateElectionOfficeInfoPage = {
  pagination?: OffsetInfo | undefined
  results?: StateElectionOfficeInfo[] | undefined
}
type EntityReceiptDisbursementTotals = {
  cumulative_candidate_disbursements?: (number | null) | undefined
  cumulative_candidate_receipts?: (number | null) | undefined
  cumulative_pac_disbursements?: (number | null) | undefined
  cumulative_pac_receipts?: (number | null) | undefined
  cumulative_party_disbursements?: (number | null) | undefined
  cumulative_party_receipts?: (number | null) | undefined
  cycle?: (number | null) | undefined
  end_date?: string | undefined
}
type EntityReceiptDisbursementTotalsPage = {
  pagination?: OffsetInfo | undefined
  results?: EntityReceiptDisbursementTotals[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/audit-case/': {
      $get: {
        input: {
          query: {
            audit_case_id?: string[] | undefined
            cycle?: number[] | undefined
            sub_category_id?: string | undefined
            sort_nulls_last?: boolean | undefined
            sort_hide_null?: boolean | undefined
            min_election_cycle?: number | undefined
            audit_id?: number[] | undefined
            q?: string[] | undefined
            per_page?: number | undefined
            max_election_cycle?: number | undefined
            candidate_id?: string[] | undefined
            committee_type?: string[] | undefined
            qq?: string[] | undefined
            page?: number | undefined
            committee_id?: string[] | undefined
            api_key: string
            committee_designation?: string | undefined
            primary_category_id?: string | undefined
            sort_null_only?: boolean | undefined
            sort?: string[] | undefined
          }
        }
        output: AuditCasePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit-category/': {
      $get: {
        input: {
          query: {
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            primary_category_name?: string[] | undefined
            sort_hide_null?: boolean | undefined
            api_key: string
            primary_category_id?: string[] | undefined
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: AuditCategoryPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/audit-primary-category/': {
      $get: {
        input: {
          query: {
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            primary_category_name?: string[] | undefined
            sort_hide_null?: boolean | undefined
            api_key: string
            primary_category_id?: string[] | undefined
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: AuditPrimaryCategoryPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calendar-dates/': {
      $get: {
        input: {
          query: {
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            min_start_date?: string | undefined
            calendar_category_id?: number[] | undefined
            sort_hide_null?: boolean | undefined
            api_key: string
            min_end_date?: string | undefined
            event_id?: number | undefined
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            description?: string[] | undefined
            sort?: string | undefined
            max_end_date?: string | undefined
            summary?: string[] | undefined
            max_start_date?: string | undefined
          }
        }
        output: CalendarDatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/calendar-dates/export/': {
      $get: {
        input: {
          query: {
            renderer?: 'ics' | 'csv' | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            min_start_date?: string | undefined
            calendar_category_id?: number[] | undefined
            sort_hide_null?: boolean | undefined
            api_key: string
            min_end_date?: string | undefined
            event_id?: number | undefined
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            description?: string[] | undefined
            sort?: string | undefined
            max_end_date?: string | undefined
            summary?: string[] | undefined
            max_start_date?: string | undefined
          }
        }
        output: CalendarDatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/candidate/:candidate_id/': {
      $get: {
        input: { param: { candidate_id: string } } & {
          query: {
            office?: ('' | 'H' | 'S' | 'P')[] | undefined
            candidate_status?: ('' | 'C' | 'F' | 'N' | 'P')[] | undefined
            cycle?: number[] | undefined
            sort_nulls_last?: boolean | undefined
            state?: string[] | undefined
            district?: string[] | undefined
            year?: string | undefined
            name?: string[] | undefined
            sort_hide_null?: boolean | undefined
            federal_funds_flag?: boolean | undefined
            per_page?: number | undefined
            page?: number | undefined
            sort?: string | undefined
            has_raised_funds?: boolean | undefined
            election_year?: number[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            incumbent_challenge?: ('' | 'I' | 'C' | 'O')[] | undefined
            party?: string[] | undefined
          }
        }
        output: CandidateDetailPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/candidate/:candidate_id/committees/': {
      $get: {
        input: { param: { candidate_id: string } } & {
          query: {
            designation?: ('' | 'A' | 'J' | 'P' | 'U' | 'B' | 'D')[] | undefined
            committee_type?:
              | (
                  | ''
                  | 'C'
                  | 'D'
                  | 'E'
                  | 'H'
                  | 'I'
                  | 'N'
                  | 'O'
                  | 'P'
                  | 'Q'
                  | 'S'
                  | 'U'
                  | 'V'
                  | 'W'
                  | 'X'
                  | 'Y'
                  | 'Z'
                )[]
              | undefined
            page?: number | undefined
            filing_frequency?: ('' | 'A' | 'M' | 'N' | 'Q' | 'T' | 'W' | '-A' | '-T')[] | undefined
            cycle?: number[] | undefined
            sort_hide_null?: boolean | undefined
            year?: number[] | undefined
            sort_nulls_last?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            organization_type?: ('' | 'C' | 'L' | 'M' | 'T' | 'V' | 'W')[] | undefined
            sort?: string | undefined
          }
        }
        output: CommitteeDetailPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/candidate/:candidate_id/committees/history/': {
      $get: {
        input: { param: { candidate_id: string } } & {
          query: {
            designation?: ('' | 'A' | 'J' | 'P' | 'U' | 'B' | 'D')[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_full?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: CommitteeHistoryProfilePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/candidate/:candidate_id/committees/history/:cycle/': {
      $get: {
        input: { param: { candidate_id: string; cycle: number } } & {
          query: {
            designation?: ('' | 'A' | 'J' | 'P' | 'U' | 'B' | 'D')[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_full?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: CommitteeHistoryProfilePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/candidate/:candidate_id/filings/': {
      $get: {
        input: { param: { candidate_id: string } } & {
          query: {
            office?: ('' | 'H' | 'S' | 'P')[] | undefined
            file_number?: number[] | undefined
            form_category?: string[] | undefined
            cycle?: number[] | undefined
            district?: string[] | undefined
            document_type?: string[] | undefined
            sort_hide_null?: boolean | undefined
            state?: string[] | undefined
            amendment_indicator?: ('' | 'N' | 'A' | 'T' | 'C' | 'M' | 'S')[] | undefined
            sort_nulls_last?: boolean | undefined
            is_amended?: boolean | undefined
            filer_type?: 'e-file' | 'paper' | undefined
            max_receipt_date?: string | undefined
            per_page?: number | undefined
            primary_general_indicator?: string[] | undefined
            request_type?: string[] | undefined
            report_year?: number[] | undefined
            form_type?: string[] | undefined
            committee_type?: string | undefined
            beginning_image_number?: string[] | undefined
            page?: number | undefined
            sort?: string[] | undefined
            api_key: string
            min_receipt_date?: string | undefined
            sort_null_only?: boolean | undefined
            q_filer?: string[] | undefined
            report_type?: string[] | undefined
            party?: string[] | undefined
            most_recent?: boolean | undefined
          }
        }
        output: FilingsPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/candidate/:candidate_id/history/': {
      $get: {
        input: { param: { candidate_id: string } } & {
          query: {
            api_key: string
            sort_nulls_last?: boolean | undefined
            per_page?: number | undefined
            sort_null_only?: boolean | undefined
            sort_hide_null?: boolean | undefined
            sort?: string | undefined
            election_full?: boolean | undefined
            page?: number | undefined
          }
        }
        output: CandidateHistoryPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/candidate/:candidate_id/history/:cycle/': {
      $get: {
        input: { param: { candidate_id: string; cycle: number } } & {
          query: {
            api_key: string
            sort_nulls_last?: boolean | undefined
            per_page?: number | undefined
            sort_null_only?: boolean | undefined
            sort_hide_null?: boolean | undefined
            sort?: string | undefined
            election_full?: boolean | undefined
            page?: number | undefined
          }
        }
        output: CandidateHistoryPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/candidate/:candidate_id/totals/': {
      $get: {
        input: { param: { candidate_id: string } } & {
          query: {
            sort_nulls_last?: boolean | undefined
            cycle?: number[] | undefined
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_full?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: CommitteeTotalsPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/candidates/': {
      $get: {
        input: {
          query: {
            office?: ('' | 'H' | 'S' | 'P')[] | undefined
            candidate_status?: ('' | 'C' | 'F' | 'N' | 'P')[] | undefined
            cycle?: number[] | undefined
            district?: string[] | undefined
            sort_nulls_last?: boolean | undefined
            sort_hide_null?: boolean | undefined
            year?: string | undefined
            state?: string[] | undefined
            name?: string[] | undefined
            is_active_candidate?: boolean | undefined
            q?: string[] | undefined
            federal_funds_flag?: boolean | undefined
            per_page?: number | undefined
            candidate_id?: string[] | undefined
            min_first_file_date?: string | undefined
            page?: number | undefined
            sort?: string | undefined
            has_raised_funds?: boolean | undefined
            election_year?: number[] | undefined
            api_key: string
            incumbent_challenge?: ('' | 'I' | 'C' | 'O')[] | undefined
            sort_null_only?: boolean | undefined
            max_first_file_date?: string | undefined
            party?: string[] | undefined
          }
        }
        output: CandidatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/candidates/search/': {
      $get: {
        input: {
          query: {
            office?: ('' | 'H' | 'S' | 'P')[] | undefined
            candidate_status?: ('' | 'C' | 'F' | 'N' | 'P')[] | undefined
            cycle?: number[] | undefined
            district?: string[] | undefined
            sort_nulls_last?: boolean | undefined
            sort_hide_null?: boolean | undefined
            year?: string | undefined
            state?: string[] | undefined
            name?: string[] | undefined
            is_active_candidate?: boolean | undefined
            q?: string[] | undefined
            federal_funds_flag?: boolean | undefined
            per_page?: number | undefined
            candidate_id?: string[] | undefined
            min_first_file_date?: string | undefined
            page?: number | undefined
            sort?: string | undefined
            has_raised_funds?: boolean | undefined
            election_year?: number[] | undefined
            api_key: string
            incumbent_challenge?: ('' | 'I' | 'C' | 'O')[] | undefined
            sort_null_only?: boolean | undefined
            max_first_file_date?: string | undefined
            party?: string[] | undefined
          }
        }
        output: CandidatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/candidates/totals/': {
      $get: {
        input: {
          query: {
            office?: ('' | 'H' | 'S' | 'P')[] | undefined
            min_receipts?: string | undefined
            cycle?: number[] | undefined
            district?: string[] | undefined
            max_receipts?: string | undefined
            sort_hide_null?: boolean | undefined
            state?: string[] | undefined
            max_debts_owed_by_committee?: string | undefined
            sort_nulls_last?: boolean | undefined
            min_debts_owed_by_committee?: string | undefined
            is_active_candidate?: boolean | undefined
            q?: string[] | undefined
            federal_funds_flag?: boolean | undefined
            per_page?: number | undefined
            max_cash_on_hand_end_period?: string | undefined
            max_disbursements?: string | undefined
            candidate_id?: string[] | undefined
            page?: number | undefined
            has_raised_funds?: boolean | undefined
            election_full?: boolean | undefined
            election_year?: number[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            min_cash_on_hand_end_period?: string | undefined
            sort?: string | undefined
            party?: string[] | undefined
            min_disbursements?: string | undefined
          }
        }
        output: CandidateHistoryTotalPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/candidates/totals/aggregates/': {
      $get: {
        input: {
          query: {
            office?: '' | 'H' | 'S' | 'P' | undefined
            sort_nulls_last?: boolean | undefined
            district?: string[] | undefined
            state?: string[] | undefined
            min_election_cycle?: number | undefined
            sort_hide_null?: boolean | undefined
            is_active_candidate?: boolean | undefined
            per_page?: number | undefined
            max_election_cycle?: number | undefined
            aggregate_by?:
              | 'office'
              | 'office-state'
              | 'office-state-district'
              | 'office-party'
              | undefined
            page?: number | undefined
            election_year?: number[] | undefined
            election_full?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            sort?: string[] | undefined
            party?: '' | 'DEM' | 'REP' | 'OTHER' | undefined
          }
        }
        output: CandidateTotalAggregatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/candidates/totals/by_office/': {
      $get: {
        input: {
          query: {
            office?: '' | 'H' | 'S' | 'P' | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            min_election_cycle?: number | undefined
            sort_hide_null?: boolean | undefined
            election_year?: number[] | undefined
            election_full?: boolean | undefined
            api_key: string
            is_active_candidate?: boolean | undefined
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            max_election_cycle?: number | undefined
            sort?: string | undefined
          }
        }
        output: TotalByOfficePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/candidates/totals/by_office/by_party/': {
      $get: {
        input: {
          query: {
            office?: '' | 'H' | 'S' | 'P' | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_year?: number[] | undefined
            election_full?: boolean | undefined
            api_key: string
            is_active_candidate?: boolean | undefined
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: TotalByOfficeByPartyPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/committee/:committee_id/': {
      $get: {
        input: { param: { committee_id: string } } & {
          query: {
            designation?: ('' | 'A' | 'J' | 'P' | 'U' | 'B' | 'D')[] | undefined
            committee_type?:
              | (
                  | ''
                  | 'C'
                  | 'D'
                  | 'E'
                  | 'H'
                  | 'I'
                  | 'N'
                  | 'O'
                  | 'P'
                  | 'Q'
                  | 'S'
                  | 'U'
                  | 'V'
                  | 'W'
                  | 'X'
                  | 'Y'
                  | 'Z'
                )[]
              | undefined
            page?: number | undefined
            filing_frequency?: ('' | 'A' | 'M' | 'N' | 'Q' | 'T' | 'W' | '-A' | '-T')[] | undefined
            cycle?: number[] | undefined
            sort_hide_null?: boolean | undefined
            year?: number[] | undefined
            sort_nulls_last?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            organization_type?: ('' | 'C' | 'L' | 'M' | 'T' | 'V' | 'W')[] | undefined
            sort?: string | undefined
          }
        }
        output: CommitteeDetailPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/committee/:committee_id/candidates/': {
      $get: {
        input: { param: { committee_id: string } } & {
          query: {
            office?: ('' | 'H' | 'S' | 'P')[] | undefined
            candidate_status?: ('' | 'C' | 'F' | 'N' | 'P')[] | undefined
            cycle?: number[] | undefined
            sort_nulls_last?: boolean | undefined
            state?: string[] | undefined
            district?: string[] | undefined
            year?: string | undefined
            name?: string[] | undefined
            sort_hide_null?: boolean | undefined
            federal_funds_flag?: boolean | undefined
            per_page?: number | undefined
            page?: number | undefined
            sort?: string | undefined
            has_raised_funds?: boolean | undefined
            election_year?: number[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            incumbent_challenge?: ('' | 'I' | 'C' | 'O')[] | undefined
            party?: string[] | undefined
          }
        }
        output: CandidateDetailPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/committee/:committee_id/candidates/history/': {
      $get: {
        input: { param: { committee_id: string } } & {
          query: {
            api_key: string
            sort_nulls_last?: boolean | undefined
            per_page?: number | undefined
            sort_null_only?: boolean | undefined
            sort_hide_null?: boolean | undefined
            sort?: string | undefined
            election_full?: boolean | undefined
            page?: number | undefined
          }
        }
        output: CandidateHistoryPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/committee/:committee_id/candidates/history/:cycle/': {
      $get: {
        input: { param: { committee_id: string; cycle: number } } & {
          query: {
            api_key: string
            sort_nulls_last?: boolean | undefined
            per_page?: number | undefined
            sort_null_only?: boolean | undefined
            sort_hide_null?: boolean | undefined
            sort?: string | undefined
            election_full?: boolean | undefined
            page?: number | undefined
          }
        }
        output: CandidateHistoryPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/committee/:committee_id/filings/': {
      $get: {
        input: { param: { committee_id: string } } & {
          query: {
            office?: ('' | 'H' | 'S' | 'P')[] | undefined
            file_number?: number[] | undefined
            form_category?: string[] | undefined
            cycle?: number[] | undefined
            district?: string[] | undefined
            document_type?: string[] | undefined
            sort_hide_null?: boolean | undefined
            state?: string[] | undefined
            amendment_indicator?: ('' | 'N' | 'A' | 'T' | 'C' | 'M' | 'S')[] | undefined
            sort_nulls_last?: boolean | undefined
            is_amended?: boolean | undefined
            filer_type?: 'e-file' | 'paper' | undefined
            max_receipt_date?: string | undefined
            per_page?: number | undefined
            primary_general_indicator?: string[] | undefined
            request_type?: string[] | undefined
            report_year?: number[] | undefined
            form_type?: string[] | undefined
            committee_type?: string | undefined
            beginning_image_number?: string[] | undefined
            page?: number | undefined
            sort?: string[] | undefined
            api_key: string
            min_receipt_date?: string | undefined
            sort_null_only?: boolean | undefined
            q_filer?: string[] | undefined
            report_type?: string[] | undefined
            party?: string[] | undefined
            most_recent?: boolean | undefined
          }
        }
        output: FilingsPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/committee/:committee_id/history/': {
      $get: {
        input: { param: { committee_id: string } } & {
          query: {
            designation?: ('' | 'A' | 'J' | 'P' | 'U' | 'B' | 'D')[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_full?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: CommitteeHistoryProfilePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/committee/:committee_id/history/:cycle/': {
      $get: {
        input: { param: { committee_id: string; cycle: number } } & {
          query: {
            designation?: ('' | 'A' | 'J' | 'P' | 'U' | 'B' | 'D')[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_full?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: CommitteeHistoryProfilePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/committee/:committee_id/reports/': {
      $get: {
        input: { param: { committee_id: string } } & {
          query: {
            min_debts_owed_amount?: string | undefined
            max_disbursements_amount?: string | undefined
            max_total_contributions?: string | undefined
            max_debts_owed_expenditures?: string | undefined
            cycle?: number[] | undefined
            sort_nulls_last?: boolean | undefined
            sort_hide_null?: boolean | undefined
            year?: number[] | undefined
            max_receipts_amount?: string | undefined
            max_cash_on_hand_end_period_amount?: string | undefined
            is_amended?: boolean | undefined
            min_disbursements_amount?: string | undefined
            max_party_coordinated_expenditures?: string | undefined
            per_page?: number | undefined
            max_independent_expenditures?: string | undefined
            min_receipts_amount?: string | undefined
            min_party_coordinated_expenditures?: string | undefined
            candidate_id?: string | undefined
            beginning_image_number?: string[] | undefined
            page?: number | undefined
            type?: string[] | undefined
            sort?: string[] | undefined
            min_total_contributions?: string | undefined
            api_key: string
            min_cash_on_hand_end_period_amount?: string | undefined
            sort_null_only?: boolean | undefined
            min_independent_expenditures?: string | undefined
            report_type?: string[] | undefined
          }
        }
        output: CommitteeReportsPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/committee/:committee_id/totals/': {
      $get: {
        input: { param: { committee_id: string } } & {
          query: {
            cycle?: number[] | undefined
            sort_nulls_last?: boolean | undefined
            per_page?: number | undefined
            sort_null_only?: boolean | undefined
            sort_hide_null?: boolean | undefined
            sort?: string | undefined
            api_key: string
            page?: number | undefined
          }
        }
        output: CommitteeTotalsPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/committees/': {
      $get: {
        input: {
          query: {
            designation?: ('' | 'A' | 'J' | 'P' | 'U' | 'B' | 'D')[] | undefined
            max_first_f1_date?: string | undefined
            min_first_f1_date?: string | undefined
            cycle?: number[] | undefined
            filing_frequency?: ('' | 'A' | 'M' | 'N' | 'Q' | 'T' | 'W' | '-A' | '-T')[] | undefined
            sort_nulls_last?: boolean | undefined
            sort_hide_null?: boolean | undefined
            year?: number[] | undefined
            state?: string[] | undefined
            sponsor_candidate_id?: string[] | undefined
            q?: string[] | undefined
            per_page?: number | undefined
            min_last_f1_date?: string | undefined
            candidate_id?: string[] | undefined
            committee_type?:
              | (
                  | ''
                  | 'C'
                  | 'D'
                  | 'E'
                  | 'H'
                  | 'I'
                  | 'N'
                  | 'O'
                  | 'P'
                  | 'Q'
                  | 'S'
                  | 'U'
                  | 'V'
                  | 'W'
                  | 'X'
                  | 'Y'
                  | 'Z'
                )[]
              | undefined
            min_first_file_date?: string | undefined
            page?: number | undefined
            sort?: string | undefined
            committee_id?: string[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            max_last_f1_date?: string | undefined
            treasurer_name?: string[] | undefined
            organization_type?: ('' | 'C' | 'L' | 'M' | 'T' | 'V' | 'W')[] | undefined
            max_first_file_date?: string | undefined
            party?: string[] | undefined
          }
        }
        output: CommitteePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/communication_costs/': {
      $get: {
        input: {
          query: {
            max_amount?: string | undefined
            max_image_number?: string | undefined
            sort_nulls_last?: boolean | undefined
            support_oppose_indicator?: ('S' | 'O')[] | undefined
            sort_hide_null?: boolean | undefined
            line_number?: string | undefined
            per_page?: number | undefined
            candidate_id?: string[] | undefined
            page?: number | undefined
            min_date?: string | undefined
            committee_id?: string[] | undefined
            api_key: string
            min_amount?: string | undefined
            min_image_number?: string | undefined
            sort_null_only?: boolean | undefined
            image_number?: string[] | undefined
            sort?: string | undefined
            max_date?: string | undefined
          }
        }
        output: CommunicationCostPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/communication_costs/aggregates/': {
      $get: {
        input: {
          query: {
            candidate_id?: string[] | undefined
            page?: number | undefined
            cycle?: number[] | undefined
            support_oppose_indicator?: 'S' | 'O' | undefined
            sort_hide_null?: boolean | undefined
            sort_nulls_last?: boolean | undefined
            committee_id?: string[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: CommunicationCostByCandidatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/communication_costs/by_candidate/': {
      $get: {
        input: {
          query: {
            office?: 'house' | 'senate' | 'president' | undefined
            candidate_id?: string[] | undefined
            cycle?: number[] | undefined
            district?: string | undefined
            state?: string | undefined
            page?: number | undefined
            support_oppose?: 'S' | 'O' | undefined
            election_full?: boolean | undefined
            sort_hide_null?: boolean | undefined
            sort_nulls_last?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: CommunicationCostByCandidatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/communication_costs/totals/by_candidate/': {
      $get: {
        input: {
          query: {
            candidate_id?: string[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            cycle?: number[] | undefined
            sort_hide_null?: boolean | undefined
            election_full?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: CCTotalsByCandidatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/efile/filings/': {
      $get: {
        input: {
          query: {
            file_number?: number[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            sort_hide_null?: boolean | undefined
            committee_id?: string[] | undefined
            api_key: string
            min_receipt_date?: string | undefined
            max_receipt_date?: string | undefined
            q_filer?: string[] | undefined
            sort_null_only?: boolean | undefined
            sort?: string | undefined
          }
        }
        output: EFilingsPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/efile/reports/house-senate/': {
      $get: {
        input: {
          query: {
            file_number?: number[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            sort_hide_null?: boolean | undefined
            committee_id?: string[] | undefined
            api_key: string
            min_receipt_date?: string | undefined
            max_receipt_date?: string | undefined
            q_filer?: string[] | undefined
            sort_null_only?: boolean | undefined
            sort?: string | undefined
          }
        }
        output: BaseF3FilingPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/efile/reports/pac-party/': {
      $get: {
        input: {
          query: {
            file_number?: number[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            sort_hide_null?: boolean | undefined
            committee_id?: string[] | undefined
            api_key: string
            min_receipt_date?: string | undefined
            max_receipt_date?: string | undefined
            q_filer?: string[] | undefined
            sort_null_only?: boolean | undefined
            sort?: string | undefined
          }
        }
        output: BaseF3XFilingPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/efile/reports/presidential/': {
      $get: {
        input: {
          query: {
            file_number?: number[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            sort_hide_null?: boolean | undefined
            committee_id?: string[] | undefined
            api_key: string
            min_receipt_date?: string | undefined
            max_receipt_date?: string | undefined
            q_filer?: string[] | undefined
            sort_null_only?: boolean | undefined
            sort?: string | undefined
          }
        }
        output: BaseF3PFilingPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/election-dates/': {
      $get: {
        input: {
          query: {
            max_update_date?: string | undefined
            sort_nulls_last?: boolean | undefined
            sort_hide_null?: boolean | undefined
            max_primary_general_date?: string | undefined
            min_update_date?: string | undefined
            max_create_date?: string | undefined
            per_page?: number | undefined
            min_election_date?: string | undefined
            election_party?: string[] | undefined
            election_type_id?: string[] | undefined
            page?: number | undefined
            min_create_date?: string | undefined
            min_primary_general_date?: string | undefined
            election_year?: string[] | undefined
            api_key: string
            election_district?: string[] | undefined
            office_sought?: ('H' | 'S' | 'P')[] | undefined
            sort_null_only?: boolean | undefined
            max_election_date?: string | undefined
            sort?: string | undefined
            election_state?: string[] | undefined
          }
        }
        output: { pagination?: OffsetInfo | undefined; results?: ElectionDate[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/electioneering/': {
      $get: {
        input: {
          query: {
            candidate_id?: string[] | undefined
            max_amount?: string | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            committee_id?: string[] | undefined
            min_date?: string | undefined
            api_key: string
            min_amount?: string | undefined
            per_page?: number | undefined
            sort_null_only?: boolean | undefined
            description?: string | undefined
            sort?: string | undefined
            report_year?: number[] | undefined
            last_index?: number | undefined
            max_date?: string | undefined
          }
        }
        output: ElectioneeringPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/electioneering/aggregates/': {
      $get: {
        input: {
          query: {
            candidate_id?: string[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            cycle?: number[] | undefined
            sort_hide_null?: boolean | undefined
            committee_id?: string[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ElectioneeringByCandidatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/electioneering/by_candidate/': {
      $get: {
        input: {
          query: {
            office?: 'house' | 'senate' | 'president' | undefined
            candidate_id?: string[] | undefined
            cycle?: number[] | undefined
            district?: string | undefined
            state?: string | undefined
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_full?: boolean | undefined
            sort_nulls_last?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ElectioneeringByCandidatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/electioneering/totals/by_candidate/': {
      $get: {
        input: {
          query: {
            candidate_id?: string[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            cycle?: number[] | undefined
            sort_hide_null?: boolean | undefined
            election_full?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ECTotalsByCandidatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/elections/': {
      $get: {
        input: {
          query: {
            office: 'house' | 'senate' | 'president'
            page?: number | undefined
            district?: string | undefined
            state?: string | undefined
            cycle: number
            sort_hide_null?: boolean | undefined
            election_full?: boolean | undefined
            sort_nulls_last?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ElectionPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/elections/search/': {
      $get: {
        input: {
          query: {
            office?: ('house' | 'senate' | 'president')[] | undefined
            cycle?: number[] | undefined
            district?: string[] | undefined
            zip?: number[] | undefined
            state?: string[] | undefined
            sort_hide_null?: boolean | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string[] | undefined
          }
        }
        output: ElectionsListPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/elections/summary/': {
      $get: {
        input: {
          query: {
            office: 'house' | 'senate' | 'president'
            cycle: number
            district?: string | undefined
            state?: string | undefined
            api_key: string
            election_full?: boolean | undefined
          }
        }
        output: ElectionSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/filings/': {
      $get: {
        input: {
          query: {
            office?: ('' | 'H' | 'S' | 'P')[] | undefined
            file_number?: number[] | undefined
            form_category?: string[] | undefined
            cycle?: number[] | undefined
            district?: string[] | undefined
            document_type?: string[] | undefined
            sort_hide_null?: boolean | undefined
            state?: string[] | undefined
            amendment_indicator?: ('' | 'N' | 'A' | 'T' | 'C' | 'M' | 'S')[] | undefined
            sort_nulls_last?: boolean | undefined
            is_amended?: boolean | undefined
            filer_type?: 'e-file' | 'paper' | undefined
            max_receipt_date?: string | undefined
            per_page?: number | undefined
            primary_general_indicator?: string[] | undefined
            request_type?: string[] | undefined
            report_year?: number[] | undefined
            form_type?: string[] | undefined
            candidate_id?: string[] | undefined
            committee_type?: string | undefined
            beginning_image_number?: string[] | undefined
            page?: number | undefined
            sort?: string[] | undefined
            committee_id?: string[] | undefined
            api_key: string
            min_receipt_date?: string | undefined
            sort_null_only?: boolean | undefined
            q_filer?: string[] | undefined
            report_type?: string[] | undefined
            party?: string[] | undefined
            most_recent?: boolean | undefined
          }
        }
        output: FilingsPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/legal/search/': {
      $get: {
        input: {
          query: {
            hits_returned?: number | undefined
            af_report_year?: string | undefined
            case_max_open_date?: string | undefined
            ao_max_issue_date?: string | undefined
            case_statutory_citation?: string[] | undefined
            case_respondents?: string | undefined
            q?: string | undefined
            ao_min_issue_date?: string | undefined
            af_max_fd_date?: string | undefined
            from_hit?: number | undefined
            af_fd_fine_amount?: number | undefined
            type?: string | undefined
            api_key: string
            af_name?: string[] | undefined
            ao_requestor_type?:
              | (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16)[]
              | undefined
            ao_statutory_citation?: string[] | undefined
            ao_entity_name?: string[] | undefined
            mur_type?: string | undefined
            ao_regulatory_citation?: string[] | undefined
            af_committee_id?: string | undefined
            ao_requestor?: string | undefined
            case_citation_require_all?: boolean | undefined
            af_min_fd_date?: string | undefined
            ao_is_pending?: boolean | undefined
            af_rtb_fine_amount?: number | undefined
            case_election_cycles?: number | undefined
            ao_category?: ('F' | 'V' | 'D' | 'R' | 'W' | 'C' | 'S')[] | undefined
            ao_citation_require_all?: boolean | undefined
            case_dispositions?: string[] | undefined
            af_max_rtb_date?: string | undefined
            case_min_open_date?: string | undefined
            case_max_close_date?: string | undefined
            ao_min_request_date?: string | undefined
            ao_status?: string | undefined
            case_doc_category_id?: ('1' | '2' | '3' | '4' | '5' | '6')[] | undefined
            af_min_rtb_date?: string | undefined
            ao_name?: string[] | undefined
            case_regulatory_citation?: string[] | undefined
            ao_no?: string[] | undefined
            case_min_close_date?: string | undefined
            sort?: string | undefined
            ao_max_request_date?: string | undefined
            case_no?: string[] | undefined
          }
        }
        output: {
          admin_fines?:
            | {
                challenge_outcome?: string | undefined
                challenge_receipt_date?: string | undefined
                check_amount?: number | undefined
                commission_votes?:
                  | { action?: string | undefined; vote_date?: string | undefined }[]
                  | undefined
                committee_id?: string | undefined
                doc_id?: string | undefined
                document_highlights?: { [x: string]: unknown } | undefined
                documents?:
                  | {
                      category?: string | undefined
                      description?: string | undefined
                      document_date?: string | undefined
                      document_id?: number | undefined
                      length?: number | undefined
                      url?: string | undefined
                    }[]
                  | undefined
                final_determination_amount?: number | undefined
                final_determination_date?: string | undefined
                highlights?: string[] | undefined
                name?: string | undefined
                no?: string | undefined
                petition_court_decision_date?: string | undefined
                petition_court_filing_date?: string | undefined
                reason_to_believe_action_date?: string | undefined
                reason_to_believe_fine_amount?: number | undefined
                report_type?: string | undefined
                report_year?: string | undefined
                treasury_referral_amount?: number | undefined
                treasury_referral_date?: string | undefined
                url?: string | undefined
              }[]
            | undefined
          adrs?:
            | {
                close_date?: string | undefined
                commission_votes?:
                  | { action?: string | undefined; vote_date?: string | undefined }[]
                  | undefined
                dispositions?:
                  | {
                      citations?:
                        | {
                            text?: string | undefined
                            title?: string | undefined
                            type?: string | undefined
                            url?: string | undefined
                          }[]
                        | undefined
                      disposition?: string | undefined
                      penalty?: number | undefined
                      respondent?: string | undefined
                    }[]
                  | undefined
                doc_id?: string | undefined
                document_highlights?: { [x: string]: unknown } | undefined
                documents?:
                  | {
                      category?: string | undefined
                      description?: string | undefined
                      document_date?: string | undefined
                      document_id?: number | undefined
                      length?: number | undefined
                      url?: string | undefined
                    }[]
                  | undefined
                election_cycles?: number | undefined
                highlights?: string[] | undefined
                name?: string | undefined
                no?: string | undefined
                open_date?: string | undefined
                participants?:
                  | {
                      citations?: { [x: string]: unknown } | undefined
                      name?: string | undefined
                      role?: string | undefined
                    }[]
                  | undefined
                respondents?: string[] | undefined
                subjects?: string[] | undefined
                url?: string | undefined
              }[]
            | undefined
          advisory_opinions?:
            | {
                ao_citations?: { name?: string | undefined; no?: string | undefined }[] | undefined
                aos_cited_by?: { name?: string | undefined; no?: string | undefined }[] | undefined
                commenter_names?: string[] | undefined
                document_highlights?: { [x: string]: unknown } | undefined
                documents?:
                  | {
                      category?: string | undefined
                      date?: string | undefined
                      description?: string | undefined
                      document_id?: number | undefined
                      url?: string | undefined
                    }[]
                  | undefined
                entities?:
                  | {
                      name?: string | undefined
                      role?: string | undefined
                      type?: string | undefined
                    }[]
                  | undefined
                highlights?: string[] | undefined
                is_pending?: boolean | undefined
                issue_date?: string | undefined
                name?: string | undefined
                no?: string | undefined
                regulatory_citations?:
                  | {
                      part?: number | undefined
                      section?: number | undefined
                      title?: number | undefined
                    }[]
                  | undefined
                representative_names?: string[] | undefined
                request_date?: string | undefined
                requestor_names?: string[] | undefined
                requestor_types?: string[] | undefined
                status?: string | undefined
                statutory_citations?:
                  | { section?: string | undefined; title?: number | undefined }[]
                  | undefined
                summary?: string | undefined
              }[]
            | undefined
          murs?:
            | {
                close_date?: string | undefined
                commission_votes?:
                  | { action?: string | undefined; vote_date?: string | undefined }[]
                  | undefined
                dispositions?:
                  | {
                      citations?:
                        | {
                            text?: string | undefined
                            title?: string | undefined
                            type?: string | undefined
                            url?: string | undefined
                          }[]
                        | undefined
                      disposition?: string | undefined
                      penalty?: number | undefined
                      respondent?: string | undefined
                    }[]
                  | undefined
                doc_id?: string | undefined
                document_highlights?: { [x: string]: unknown } | undefined
                documents?:
                  | {
                      category?: string | undefined
                      description?: string | undefined
                      document_date?: string | undefined
                      document_id?: number | undefined
                      length?: number | undefined
                      url?: string | undefined
                    }[]
                  | undefined
                election_cycles?: number | undefined
                highlights?: string[] | undefined
                mur_type?: 'current' | 'archived' | undefined
                name?: string | undefined
                no?: string | undefined
                open_date?: string | undefined
                participants?:
                  | {
                      citations?: { [x: string]: unknown } | undefined
                      name?: string | undefined
                      role?: string | undefined
                    }[]
                  | undefined
                respondents?: string[] | undefined
                subjects?: string[] | undefined
                url?: string | undefined
              }[]
            | undefined
          regulations?:
            | {
                doc_id?: string | undefined
                document_highlights?: { [x: string]: unknown } | undefined
                highlights?: string[] | undefined
                name?: string | undefined
                no?: string | undefined
                url?: string | undefined
              }[]
            | undefined
          statutes?:
            | {
                chapter?: string | undefined
                doc_id?: string | undefined
                document_highlights?: { [x: string]: unknown } | undefined
                highlights?: string[] | undefined
                name?: string | undefined
                no?: string | undefined
                title?: string | undefined
                url?: string | undefined
              }[]
            | undefined
          total_admin_fines?: number | undefined
          total_adrs?: number | undefined
          total_advisory_opinions?: number | undefined
          total_all?: number | undefined
          total_murs?: number | undefined
          total_regulations?: number | undefined
          total_statutes?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/names/audit_candidates/': {
      $get: {
        input: { query: { api_key: string; q: string[] } }
        output: AuditCandidateSearchList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/names/audit_committees/': {
      $get: {
        input: { query: { api_key: string; q: string[] } }
        output: AuditCommitteeSearchList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/names/candidates/': {
      $get: {
        input: { query: { api_key: string; q: string[] } }
        output: CandidateSearchList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/names/committees/': {
      $get: {
        input: { query: { api_key: string; q: string[] } }
        output: CommitteeSearchList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/operations-log/': {
      $get: {
        input: {
          query: {
            max_coverage_end_date?: string | undefined
            sort_nulls_last?: boolean | undefined
            amendment_indicator?: string[] | undefined
            sort_hide_null?: boolean | undefined
            max_receipt_date?: string | undefined
            per_page?: number | undefined
            min_transaction_data_complete_date?: string | undefined
            form_type?: string[] | undefined
            max_transaction_data_complete_date?: string | undefined
            beginning_image_number?: string[] | undefined
            page?: number | undefined
            min_coverage_end_date?: string | undefined
            sort?: string[] | undefined
            api_key: string
            min_receipt_date?: string | undefined
            sort_null_only?: boolean | undefined
            candidate_committee_id?: string[] | undefined
            report_type?: string[] | undefined
            report_year?: number[] | undefined
            status_num?: ('0' | '1')[] | undefined
          }
        }
        output: OperationsLogPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/presidential/contributions/by_candidate/': {
      $get: {
        input: {
          query: {
            contributor_state?: string[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_year?: number[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: PresidentialByCandidatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/presidential/contributions/by_size/': {
      $get: {
        input: {
          query: {
            candidate_id?: string[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_year?: number[] | undefined
            api_key: string
            size?: (0 | 200 | 500 | 1000 | 2000)[] | undefined
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: PresidentialBySizePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/presidential/contributions/by_state/': {
      $get: {
        input: {
          query: {
            candidate_id?: string[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_year?: number[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: PresidentialByStatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/presidential/coverage_end_date/': {
      $get: {
        input: {
          query: {
            candidate_id?: string[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_year?: number[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: PresidentialCoveragePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/presidential/financial_summary/': {
      $get: {
        input: {
          query: {
            candidate_id?: string[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_year?: number[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: PresidentialSummaryPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/rad-analyst/': {
      $get: {
        input: {
          query: {
            min_assignment_update_date?: string | undefined
            max_assignment_update_date?: string | undefined
            analyst_short_id?: number[] | undefined
            email?: string[] | undefined
            page?: number | undefined
            sort_nulls_last?: boolean | undefined
            title?: string[] | undefined
            sort_hide_null?: boolean | undefined
            committee_id?: string[] | undefined
            name?: string[] | undefined
            telephone_ext?: number[] | undefined
            api_key: string
            analyst_id?: number[] | undefined
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: RadAnalystPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reporting-dates/': {
      $get: {
        input: {
          query: {
            max_update_date?: string | undefined
            page?: number | undefined
            max_due_date?: string | undefined
            min_create_date?: string | undefined
            min_due_date?: string | undefined
            sort_hide_null?: boolean | undefined
            sort_nulls_last?: boolean | undefined
            api_key: string
            min_update_date?: string | undefined
            max_create_date?: string | undefined
            per_page?: number | undefined
            sort_null_only?: boolean | undefined
            sort?: string | undefined
            report_year?: number[] | undefined
            report_type?: string[] | undefined
          }
        }
        output: { pagination?: OffsetInfo | undefined; results?: ReportDate[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reports/:entity_type/': {
      $get: {
        input: {
          param: { entity_type: 'presidential' | 'pac-party' | 'house-senate' | 'ie-only' }
        } & {
          query: {
            min_debts_owed_amount?: string | undefined
            max_debts_owed_expenditures?: string | undefined
            sort_hide_null?: boolean | undefined
            year?: number[] | undefined
            max_cash_on_hand_end_period_amount?: string | undefined
            filer_type?: 'e-file' | 'paper' | undefined
            max_party_coordinated_expenditures?: string | undefined
            q_spender?: string[] | undefined
            max_receipt_date?: string | undefined
            per_page?: number | undefined
            max_independent_expenditures?: string | undefined
            min_party_coordinated_expenditures?: string | undefined
            committee_type?: string[] | undefined
            page?: number | undefined
            min_total_contributions?: string | undefined
            api_key: string
            min_cash_on_hand_end_period_amount?: string | undefined
            min_receipt_date?: string | undefined
            sort_null_only?: boolean | undefined
            min_independent_expenditures?: string | undefined
            q_filer?: string[] | undefined
            max_disbursements_amount?: string | undefined
            max_total_contributions?: string | undefined
            cycle?: number[] | undefined
            amendment_indicator?: ('' | 'N' | 'A' | 'T' | 'C' | 'M' | 'S')[] | undefined
            sort_nulls_last?: boolean | undefined
            max_receipts_amount?: string | undefined
            is_amended?: boolean | undefined
            min_disbursements_amount?: string | undefined
            min_receipts_amount?: string | undefined
            candidate_id?: string | undefined
            beginning_image_number?: string[] | undefined
            sort?: string[] | undefined
            committee_id?: string[] | undefined
            report_type?: string[] | undefined
            most_recent?: boolean | undefined
          }
        }
        output: CommitteeReportsPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_a/': {
      $get: {
        input: {
          query: {
            max_load_date?: string | undefined
            max_amount?: string | undefined
            max_image_number?: string | undefined
            contributor_occupation?: string[] | undefined
            recipient_committee_designation?: ('' | 'A' | 'J' | 'P' | 'U' | 'B' | 'D')[] | undefined
            sort_hide_null?: boolean | undefined
            is_individual?: boolean | undefined
            line_number?: string | undefined
            contributor_type?: ('individual' | 'committee')[] | undefined
            recipient_committee_type?:
              | (
                  | ''
                  | 'C'
                  | 'D'
                  | 'E'
                  | 'H'
                  | 'I'
                  | 'N'
                  | 'O'
                  | 'P'
                  | 'Q'
                  | 'S'
                  | 'U'
                  | 'V'
                  | 'W'
                  | 'X'
                  | 'Y'
                  | 'Z'
                )[]
              | undefined
            per_page?: number | undefined
            contributor_zip?: string[] | undefined
            contributor_city?: string[] | undefined
            last_index?: number | undefined
            last_contribution_receipt_amount?: number | undefined
            contributor_id?: string[] | undefined
            recipient_committee_org_type?: ('' | 'C' | 'L' | 'M' | 'T' | 'V' | 'W')[] | undefined
            contributor_state?: string[] | undefined
            sort?: string | undefined
            two_year_transaction_period?: number[] | undefined
            min_date?: string | undefined
            committee_id?: string[] | undefined
            contributor_employer?: string[] | undefined
            min_load_date?: string | undefined
            api_key: string
            last_contribution_receipt_date?: string | undefined
            min_image_number?: string | undefined
            contributor_name?: string[] | undefined
            sort_null_only?: boolean | undefined
            image_number?: string[] | undefined
            min_amount?: string | undefined
            max_date?: string | undefined
          }
        }
        output: ScheduleAPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_a/by_employer/': {
      $get: {
        input: {
          query: {
            employer?: string[] | undefined
            page?: number | undefined
            sort_nulls_last?: boolean | undefined
            cycle?: number[] | undefined
            sort_hide_null?: boolean | undefined
            committee_id?: string[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ScheduleAByEmployerPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_a/by_occupation/': {
      $get: {
        input: {
          query: {
            occupation?: string[] | undefined
            page?: number | undefined
            sort_nulls_last?: boolean | undefined
            cycle?: number[] | undefined
            sort_hide_null?: boolean | undefined
            committee_id?: string[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ScheduleAByOccupationPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_a/by_size/': {
      $get: {
        input: {
          query: {
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            cycle?: number[] | undefined
            sort_hide_null?: boolean | undefined
            committee_id?: string[] | undefined
            api_key: string
            size?: (0 | 200 | 500 | 1000 | 2000)[] | undefined
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ScheduleABySizePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_a/by_size/by_candidate/': {
      $get: {
        input: {
          query: {
            candidate_id: string[]
            sort_nulls_last?: boolean | undefined
            cycle: number[]
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_full?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ScheduleABySizeCandidatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_a/by_state/': {
      $get: {
        input: {
          query: {
            hide_null?: boolean | undefined
            page?: number | undefined
            cycle?: number[] | undefined
            state?: string[] | undefined
            sort_hide_null?: boolean | undefined
            sort_nulls_last?: boolean | undefined
            committee_id?: string[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ScheduleAByStatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_a/by_state/by_candidate/': {
      $get: {
        input: {
          query: {
            candidate_id: string[]
            sort_nulls_last?: boolean | undefined
            cycle: number[]
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_full?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ScheduleAByStateCandidatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_a/by_state/by_candidate/totals/': {
      $get: {
        input: {
          query: {
            candidate_id: string[]
            sort_nulls_last?: boolean | undefined
            cycle: number[]
            page?: number | undefined
            sort_hide_null?: boolean | undefined
            election_full?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ScheduleAByStateCandidatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_a/by_state/totals/': {
      $get: {
        input: {
          query: {
            committee_type?: string[] | undefined
            cycle?: number[] | undefined
            page?: number | undefined
            state?: string[] | undefined
            sort_hide_null?: boolean | undefined
            sort_nulls_last?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ScheduleAByStateRecipientTotalsPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_a/by_zip/': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            cycle?: number[] | undefined
            zip?: string[] | undefined
            sort_hide_null?: boolean | undefined
            state?: string[] | undefined
            committee_id?: string[] | undefined
            sort_nulls_last?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ScheduleAByZipPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_a/efile/': {
      $get: {
        input: {
          query: {
            max_amount?: string | undefined
            contributor_occupation?: string[] | undefined
            max_image_number?: string | undefined
            sort_nulls_last?: boolean | undefined
            sort_hide_null?: boolean | undefined
            line_number?: string | undefined
            per_page?: number | undefined
            contributor_city?: string[] | undefined
            contributor_state?: string[] | undefined
            page?: number | undefined
            sort?: string | undefined
            committee_id?: string[] | undefined
            min_date?: string | undefined
            contributor_employer?: string[] | undefined
            api_key: string
            contributor_name?: string[] | undefined
            min_image_number?: string | undefined
            sort_null_only?: boolean | undefined
            image_number?: string[] | undefined
            min_amount?: string | undefined
            max_date?: string | undefined
          }
        }
        output: ScheduleAEfilePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_a/:sub_id/': {
      $get: {
        input: { param: { sub_id: string } } & {
          query: {
            max_load_date?: string | undefined
            max_amount?: string | undefined
            max_image_number?: string | undefined
            contributor_occupation?: string[] | undefined
            recipient_committee_designation?: ('' | 'A' | 'J' | 'P' | 'U' | 'B' | 'D')[] | undefined
            sort_hide_null?: boolean | undefined
            is_individual?: boolean | undefined
            line_number?: string | undefined
            contributor_type?: ('individual' | 'committee')[] | undefined
            recipient_committee_type?:
              | (
                  | ''
                  | 'C'
                  | 'D'
                  | 'E'
                  | 'H'
                  | 'I'
                  | 'N'
                  | 'O'
                  | 'P'
                  | 'Q'
                  | 'S'
                  | 'U'
                  | 'V'
                  | 'W'
                  | 'X'
                  | 'Y'
                  | 'Z'
                )[]
              | undefined
            per_page?: number | undefined
            contributor_zip?: string[] | undefined
            contributor_city?: string[] | undefined
            last_index?: number | undefined
            last_contribution_receipt_amount?: number | undefined
            contributor_id?: string[] | undefined
            recipient_committee_org_type?: ('' | 'C' | 'L' | 'M' | 'T' | 'V' | 'W')[] | undefined
            contributor_state?: string[] | undefined
            sort?: string | undefined
            two_year_transaction_period?: number[] | undefined
            min_date?: string | undefined
            committee_id?: string[] | undefined
            contributor_employer?: string[] | undefined
            min_load_date?: string | undefined
            api_key: string
            last_contribution_receipt_date?: string | undefined
            min_image_number?: string | undefined
            contributor_name?: string[] | undefined
            sort_null_only?: boolean | undefined
            image_number?: string[] | undefined
            min_amount?: string | undefined
            max_date?: string | undefined
          }
        }
        output: ScheduleAPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_b/': {
      $get: {
        input: {
          query: {
            disbursement_description?: string[] | undefined
            max_amount?: string | undefined
            max_image_number?: string | undefined
            image_number?: string[] | undefined
            sort_hide_null?: boolean | undefined
            last_disbursement_date?: string | undefined
            line_number?: string | undefined
            spender_committee_designation?: ('' | 'A' | 'J' | 'P' | 'U' | 'B' | 'D')[] | undefined
            last_disbursement_amount?: number | undefined
            per_page?: number | undefined
            last_index?: number | undefined
            spender_committee_type?:
              | (
                  | ''
                  | 'C'
                  | 'D'
                  | 'E'
                  | 'H'
                  | 'I'
                  | 'N'
                  | 'O'
                  | 'P'
                  | 'Q'
                  | 'S'
                  | 'U'
                  | 'V'
                  | 'W'
                  | 'X'
                  | 'Y'
                  | 'Z'
                )[]
              | undefined
            sort?: string | undefined
            two_year_transaction_period?: number[] | undefined
            min_date?: string | undefined
            committee_id?: string[] | undefined
            api_key: string
            disbursement_purpose_category?: string[] | undefined
            recipient_name?: string[] | undefined
            recipient_state?: string[] | undefined
            recipient_city?: string[] | undefined
            min_image_number?: string | undefined
            spender_committee_org_type?: ('' | 'C' | 'L' | 'M' | 'T' | 'V' | 'W')[] | undefined
            sort_null_only?: boolean | undefined
            recipient_committee_id?: string[] | undefined
            min_amount?: string | undefined
            max_date?: string | undefined
          }
        }
        output: ScheduleBPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_b/by_purpose/': {
      $get: {
        input: {
          query: {
            purpose?: string[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            cycle?: number[] | undefined
            sort_hide_null?: boolean | undefined
            committee_id?: string[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ScheduleBByPurposePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_b/by_recipient/': {
      $get: {
        input: {
          query: {
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            cycle?: number[] | undefined
            sort_hide_null?: boolean | undefined
            committee_id?: string[] | undefined
            api_key: string
            recipient_name?: string[] | undefined
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ScheduleBByRecipientPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_b/by_recipient_id/': {
      $get: {
        input: {
          query: {
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            cycle?: number[] | undefined
            sort_hide_null?: boolean | undefined
            committee_id?: string[] | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            recipient_id?: string[] | undefined
            sort?: string | undefined
          }
        }
        output: ScheduleBByRecipientIDPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_b/efile/': {
      $get: {
        input: {
          query: {
            disbursement_description?: string[] | undefined
            max_amount?: string | undefined
            page?: number | undefined
            sort_nulls_last?: boolean | undefined
            sort?: string | undefined
            sort_hide_null?: boolean | undefined
            committee_id?: string[] | undefined
            min_date?: string | undefined
            api_key: string
            recipient_state?: string[] | undefined
            recipient_city?: string[] | undefined
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            image_number?: string[] | undefined
            min_amount?: string | undefined
            max_date?: string | undefined
          }
        }
        output: ScheduleBEfilePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_b/:sub_id/': {
      $get: {
        input: { param: { sub_id: string } } & {
          query: {
            disbursement_description?: string[] | undefined
            max_amount?: string | undefined
            max_image_number?: string | undefined
            image_number?: string[] | undefined
            sort_hide_null?: boolean | undefined
            last_disbursement_date?: string | undefined
            line_number?: string | undefined
            spender_committee_designation?: ('' | 'A' | 'J' | 'P' | 'U' | 'B' | 'D')[] | undefined
            last_disbursement_amount?: number | undefined
            per_page?: number | undefined
            last_index?: number | undefined
            spender_committee_type?:
              | (
                  | ''
                  | 'C'
                  | 'D'
                  | 'E'
                  | 'H'
                  | 'I'
                  | 'N'
                  | 'O'
                  | 'P'
                  | 'Q'
                  | 'S'
                  | 'U'
                  | 'V'
                  | 'W'
                  | 'X'
                  | 'Y'
                  | 'Z'
                )[]
              | undefined
            sort?: string | undefined
            two_year_transaction_period?: number[] | undefined
            min_date?: string | undefined
            committee_id?: string[] | undefined
            api_key: string
            disbursement_purpose_category?: string[] | undefined
            recipient_name?: string[] | undefined
            recipient_state?: string[] | undefined
            recipient_city?: string[] | undefined
            min_image_number?: string | undefined
            spender_committee_org_type?: ('' | 'C' | 'L' | 'M' | 'T' | 'V' | 'W')[] | undefined
            sort_null_only?: boolean | undefined
            recipient_committee_id?: string[] | undefined
            min_amount?: string | undefined
            max_date?: string | undefined
          }
        }
        output: ScheduleBPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_c/': {
      $get: {
        input: {
          query: {
            min_incurred_date?: string | undefined
            candidate_name?: string[] | undefined
            max_amount?: string | undefined
            max_image_number?: string | undefined
            sort_nulls_last?: boolean | undefined
            sort_hide_null?: boolean | undefined
            line_number?: string | undefined
            max_incurred_date?: string | undefined
            per_page?: number | undefined
            last_index?: number | undefined
            loan_source_name?: string[] | undefined
            page?: number | undefined
            sort?: string | undefined
            max_payment_to_date?: number | undefined
            min_payment_to_date?: number | undefined
            committee_id?: string[] | undefined
            api_key: string
            min_image_number?: string | undefined
            sort_null_only?: boolean | undefined
            image_number?: string[] | undefined
            min_amount?: string | undefined
          }
        }
        output: {
          pagination?: OffsetInfo | undefined
          results?:
            | {
                action_code?: (string | null) | undefined
                action_code_full?: (string | null) | undefined
                candidate_first_name?: (string | null) | undefined
                candidate_id?: (string | null) | undefined
                candidate_last_name?: (string | null) | undefined
                candidate_middle_name?: (string | null) | undefined
                candidate_name?: (string | null) | undefined
                candidate_office?: (string | null) | undefined
                candidate_office_district?: (string | null) | undefined
                candidate_office_full?: (string | null) | undefined
                candidate_office_state?: (string | null) | undefined
                candidate_office_state_full?: (string | null) | undefined
                candidate_prefix?: (string | null) | undefined
                candidate_suffix?: (string | null) | undefined
                committee?: CommitteeHistory | undefined
                committee_id?: (string | null) | undefined
                cycle?: (number | null) | undefined
                due_date_terms?: (string | null) | undefined
                election_type?: (string | null) | undefined
                election_type_full?: (string | null) | undefined
                entity_type?: (string | null) | undefined
                entity_type_full?: (string | null) | undefined
                fec_committee_id?: (string | null) | undefined
                fec_election_type_full?: (string | null) | undefined
                fec_election_type_year?: (string | null) | undefined
                file_number?: (number | null) | undefined
                filing_form?: (string | null) | undefined
                image_number?: (string | null) | undefined
                incurred_date?: (string | null) | undefined
                interest_rate_terms?: (string | null) | undefined
                line_number?: (string | null) | undefined
                link_id?: (number | null) | undefined
                load_date?: (string | null) | undefined
                loan_balance?: (number | null) | undefined
                loan_source_city?: (string | null) | undefined
                loan_source_first_name?: (string | null) | undefined
                loan_source_last_name?: (string | null) | undefined
                loan_source_middle_name?: (string | null) | undefined
                loan_source_name?: (string | null) | undefined
                loan_source_prefix?: (string | null) | undefined
                loan_source_state?: (string | null) | undefined
                loan_source_street_1?: (string | null) | undefined
                loan_source_street_2?: (string | null) | undefined
                loan_source_suffix?: (string | null) | undefined
                loan_source_zip?: (number | null) | undefined
                memo_code?: (string | null) | undefined
                memo_text?: (string | null) | undefined
                original_loan_amount?: (number | null) | undefined
                original_sub_id?: (number | null) | undefined
                payment_to_date?: (number | null) | undefined
                pdf_url?: string | undefined
                personally_funded?: (string | null) | undefined
                report_type?: (string | null) | undefined
                report_year?: (number | null) | undefined
                schedule_a_line_number?: (number | null) | undefined
                schedule_type?: (string | null) | undefined
                schedule_type_full?: (string | null) | undefined
                secured_ind?: (string | null) | undefined
                sub_id?: string | undefined
                transaction_id?: (string | null) | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_c/:sub_id/': {
      $get: {
        input: { param: { sub_id: string } } & {
          query: {
            sort_nulls_last?: boolean | undefined
            per_page?: number | undefined
            sort_null_only?: boolean | undefined
            sort_hide_null?: boolean | undefined
            sort?: string | undefined
            api_key: string
            page?: number | undefined
          }
        }
        output: {
          pagination?: OffsetInfo | undefined
          results?:
            | {
                action_code?: (string | null) | undefined
                action_code_full?: (string | null) | undefined
                candidate_first_name?: (string | null) | undefined
                candidate_id?: (string | null) | undefined
                candidate_last_name?: (string | null) | undefined
                candidate_middle_name?: (string | null) | undefined
                candidate_name?: (string | null) | undefined
                candidate_office?: (string | null) | undefined
                candidate_office_district?: (string | null) | undefined
                candidate_office_full?: (string | null) | undefined
                candidate_office_state?: (string | null) | undefined
                candidate_office_state_full?: (string | null) | undefined
                candidate_prefix?: (string | null) | undefined
                candidate_suffix?: (string | null) | undefined
                committee?: CommitteeHistory | undefined
                committee_id?: (string | null) | undefined
                cycle?: (number | null) | undefined
                due_date_terms?: (string | null) | undefined
                election_type?: (string | null) | undefined
                election_type_full?: (string | null) | undefined
                entity_type?: (string | null) | undefined
                entity_type_full?: (string | null) | undefined
                fec_committee_id?: (string | null) | undefined
                fec_election_type_full?: (string | null) | undefined
                fec_election_type_year?: (string | null) | undefined
                file_number?: (number | null) | undefined
                filing_form?: (string | null) | undefined
                image_number?: (string | null) | undefined
                incurred_date?: (string | null) | undefined
                interest_rate_terms?: (string | null) | undefined
                line_number?: (string | null) | undefined
                link_id?: (number | null) | undefined
                load_date?: (string | null) | undefined
                loan_balance?: (number | null) | undefined
                loan_source_city?: (string | null) | undefined
                loan_source_first_name?: (string | null) | undefined
                loan_source_last_name?: (string | null) | undefined
                loan_source_middle_name?: (string | null) | undefined
                loan_source_name?: (string | null) | undefined
                loan_source_prefix?: (string | null) | undefined
                loan_source_state?: (string | null) | undefined
                loan_source_street_1?: (string | null) | undefined
                loan_source_street_2?: (string | null) | undefined
                loan_source_suffix?: (string | null) | undefined
                loan_source_zip?: (number | null) | undefined
                memo_code?: (string | null) | undefined
                memo_text?: (string | null) | undefined
                original_loan_amount?: (number | null) | undefined
                original_sub_id?: (number | null) | undefined
                payment_to_date?: (number | null) | undefined
                pdf_url?: string | undefined
                personally_funded?: (string | null) | undefined
                report_type?: (string | null) | undefined
                report_year?: (number | null) | undefined
                schedule_a_line_number?: (number | null) | undefined
                schedule_type?: (string | null) | undefined
                schedule_type_full?: (string | null) | undefined
                secured_ind?: (string | null) | undefined
                sub_id?: string | undefined
                transaction_id?: (string | null) | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_d/': {
      $get: {
        input: {
          query: {
            creditor_debtor_name?: string[] | undefined
            max_image_number?: string | undefined
            sort_nulls_last?: boolean | undefined
            max_amount_outstanding_beginning?: number | undefined
            sort_hide_null?: boolean | undefined
            min_payment_period?: number | undefined
            max_amount_incurred?: number | undefined
            nature_of_debt?: string | undefined
            per_page?: number | undefined
            max_amount_outstanding_close?: number | undefined
            candidate_id?: string[] | undefined
            page?: number | undefined
            min_date?: string | undefined
            committee_id?: string[] | undefined
            min_amount_outstanding_close?: number | undefined
            api_key: string
            max_payment_period?: number | undefined
            min_image_number?: string | undefined
            min_amount_incurred?: number | undefined
            sort_null_only?: boolean | undefined
            image_number?: string[] | undefined
            sort?: string | undefined
            min_amount_outstanding_beginning?: number | undefined
            max_date?: string | undefined
          }
        }
        output: {
          pagination?: OffsetInfo | undefined
          results?:
            | {
                action_code?: (string | null) | undefined
                action_code_full?: (string | null) | undefined
                amount_incurred_period?: (number | null) | undefined
                candidate_first_name?: (string | null) | undefined
                candidate_id?: (string | null) | undefined
                candidate_last_name?: (string | null) | undefined
                candidate_name?: (string | null) | undefined
                candidate_office?: (string | null) | undefined
                candidate_office_district?: (string | null) | undefined
                candidate_office_state?: (string | null) | undefined
                candidate_office_state_full?: (string | null) | undefined
                committee?: CommitteeHistory | undefined
                committee_id?: (string | null) | undefined
                committee_name?: (string | null) | undefined
                conduit_committee_city?: (string | null) | undefined
                conduit_committee_id?: (string | null) | undefined
                conduit_committee_name?: (string | null) | undefined
                conduit_committee_state?: (string | null) | undefined
                conduit_committee_street1?: (string | null) | undefined
                conduit_committee_street2?: (string | null) | undefined
                conduit_committee_zip?: (number | null) | undefined
                creditor_debtor_city?: (string | null) | undefined
                creditor_debtor_first_name?: (string | null) | undefined
                creditor_debtor_id?: (string | null) | undefined
                creditor_debtor_last_name?: (string | null) | undefined
                creditor_debtor_middle_name?: (string | null) | undefined
                creditor_debtor_name?: (string | null) | undefined
                creditor_debtor_prefix?: (string | null) | undefined
                creditor_debtor_state?: (string | null) | undefined
                creditor_debtor_street1?: (string | null) | undefined
                creditor_debtor_street2?: (string | null) | undefined
                creditor_debtor_suffix?: (string | null) | undefined
                election_cycle?: (number | null) | undefined
                entity_type?: (string | null) | undefined
                file_number?: (number | null) | undefined
                filing_form?: (string | null) | undefined
                image_number?: (string | null) | undefined
                line_number?: (string | null) | undefined
                link_id?: (number | null) | undefined
                load_date?: (string | null) | undefined
                nature_of_debt?: (string | null) | undefined
                original_sub_id?: (number | null) | undefined
                outstanding_balance_beginning_of_period?: (number | null) | undefined
                outstanding_balance_close_of_period?: (number | null) | undefined
                payment_period?: (number | null) | undefined
                pdf_url?: string | undefined
                report_type?: (string | null) | undefined
                report_year?: (number | null) | undefined
                schedule_type?: (string | null) | undefined
                schedule_type_full?: (string | null) | undefined
                sub_id?: string | undefined
                transaction_id?: (string | null) | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_d/:sub_id/': {
      $get: {
        input: { param: { sub_id: string } } & {
          query: {
            sort_nulls_last?: boolean | undefined
            per_page?: number | undefined
            sort_null_only?: boolean | undefined
            sort_hide_null?: boolean | undefined
            sort?: string | undefined
            api_key: string
            page?: number | undefined
          }
        }
        output: {
          pagination?: OffsetInfo | undefined
          results?:
            | {
                action_code?: (string | null) | undefined
                action_code_full?: (string | null) | undefined
                amount_incurred_period?: (number | null) | undefined
                candidate_first_name?: (string | null) | undefined
                candidate_id?: (string | null) | undefined
                candidate_last_name?: (string | null) | undefined
                candidate_name?: (string | null) | undefined
                candidate_office?: (string | null) | undefined
                candidate_office_district?: (string | null) | undefined
                candidate_office_state?: (string | null) | undefined
                candidate_office_state_full?: (string | null) | undefined
                committee?: CommitteeHistory | undefined
                committee_id?: (string | null) | undefined
                committee_name?: (string | null) | undefined
                conduit_committee_city?: (string | null) | undefined
                conduit_committee_id?: (string | null) | undefined
                conduit_committee_name?: (string | null) | undefined
                conduit_committee_state?: (string | null) | undefined
                conduit_committee_street1?: (string | null) | undefined
                conduit_committee_street2?: (string | null) | undefined
                conduit_committee_zip?: (number | null) | undefined
                creditor_debtor_city?: (string | null) | undefined
                creditor_debtor_first_name?: (string | null) | undefined
                creditor_debtor_id?: (string | null) | undefined
                creditor_debtor_last_name?: (string | null) | undefined
                creditor_debtor_middle_name?: (string | null) | undefined
                creditor_debtor_name?: (string | null) | undefined
                creditor_debtor_prefix?: (string | null) | undefined
                creditor_debtor_state?: (string | null) | undefined
                creditor_debtor_street1?: (string | null) | undefined
                creditor_debtor_street2?: (string | null) | undefined
                creditor_debtor_suffix?: (string | null) | undefined
                election_cycle?: (number | null) | undefined
                entity_type?: (string | null) | undefined
                file_number?: (number | null) | undefined
                filing_form?: (string | null) | undefined
                image_number?: (string | null) | undefined
                line_number?: (string | null) | undefined
                link_id?: (number | null) | undefined
                load_date?: (string | null) | undefined
                nature_of_debt?: (string | null) | undefined
                original_sub_id?: (number | null) | undefined
                outstanding_balance_beginning_of_period?: (number | null) | undefined
                outstanding_balance_close_of_period?: (number | null) | undefined
                payment_period?: (number | null) | undefined
                pdf_url?: string | undefined
                report_type?: (string | null) | undefined
                report_year?: (number | null) | undefined
                schedule_type?: (string | null) | undefined
                schedule_type_full?: (string | null) | undefined
                sub_id?: string | undefined
                transaction_id?: (string | null) | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_e/': {
      $get: {
        input: {
          query: {
            max_dissemination_date?: string | undefined
            sort_hide_null?: boolean | undefined
            payee_name?: string[] | undefined
            q_spender?: string[] | undefined
            per_page?: number | undefined
            last_index?: number | undefined
            min_dissemination_date?: string | undefined
            candidate_office_state?: string[] | undefined
            api_key: string
            filing_form?: string[] | undefined
            sort_null_only?: boolean | undefined
            max_amount?: string | undefined
            max_image_number?: string | undefined
            min_filing_date?: string | undefined
            cycle?: number[] | undefined
            sort_nulls_last?: boolean | undefined
            support_oppose_indicator?: ('S' | 'O')[] | undefined
            candidate_office?: ('' | 'H' | 'S' | 'P')[] | undefined
            is_notice?: boolean[] | undefined
            line_number?: string | undefined
            last_expenditure_amount?: number | undefined
            last_expenditure_date?: string | undefined
            candidate_id?: string[] | undefined
            last_office_total_ytd?: number | undefined
            last_support_oppose_indicator?: string | undefined
            min_date?: string | undefined
            candidate_party?: string[] | undefined
            committee_id?: string[] | undefined
            min_image_number?: string | undefined
            max_filing_date?: string | undefined
            candidate_office_district?: string[] | undefined
            min_amount?: string | undefined
            image_number?: string[] | undefined
            sort?: string | undefined
            max_date?: string | undefined
            most_recent?: boolean | undefined
          }
        }
        output: ScheduleEPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_e/by_candidate/': {
      $get: {
        input: {
          query: {
            office?: 'house' | 'senate' | 'president' | undefined
            candidate_id?: string[] | undefined
            cycle?: number[] | undefined
            district?: string | undefined
            state?: string | undefined
            page?: number | undefined
            support_oppose?: 'S' | 'O' | undefined
            election_full?: boolean | undefined
            committee_id?: string[] | undefined
            sort_hide_null?: boolean | undefined
            sort_nulls_last?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: ScheduleEByCandidatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_e/efile/': {
      $get: {
        input: {
          query: {
            spender_name?: string[] | undefined
            min_expenditure_date?: string | undefined
            sort_nulls_last?: boolean | undefined
            max_dissemination_date?: string | undefined
            support_oppose_indicator?: ('S' | 'O')[] | undefined
            sort_hide_null?: boolean | undefined
            candidate_office?: '' | 'H' | 'S' | 'P' | undefined
            is_notice?: boolean | undefined
            payee_name?: string[] | undefined
            per_page?: number | undefined
            candidate_search?: string[] | undefined
            max_expenditure_amount?: number | undefined
            min_dissemination_date?: string | undefined
            min_filed_date?: string | undefined
            candidate_id?: string[] | undefined
            candidate_office_state?: string[] | undefined
            max_filed_date?: string | undefined
            page?: number | undefined
            min_expenditure_amount?: number | undefined
            committee_id?: string[] | undefined
            candidate_party?: string[] | undefined
            api_key: string
            max_expenditure_date?: string | undefined
            filing_form?: string[] | undefined
            sort_null_only?: boolean | undefined
            candidate_office_district?: string[] | undefined
            image_number?: string[] | undefined
            sort?: string | undefined
            most_recent?: boolean | undefined
          }
        }
        output: ScheduleEEfilePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_e/totals/by_candidate/': {
      $get: {
        input: {
          query: {
            candidate_id?: string[] | undefined
            sort_nulls_last?: boolean | undefined
            page?: number | undefined
            cycle?: number[] | undefined
            sort_hide_null?: boolean | undefined
            election_full?: boolean | undefined
            api_key: string
            sort_null_only?: boolean | undefined
            per_page?: number | undefined
            sort?: string | undefined
          }
        }
        output: IETotalsByCandidatePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_f/': {
      $get: {
        input: {
          query: {
            max_amount?: string | undefined
            max_image_number?: string | undefined
            cycle?: number[] | undefined
            sort_nulls_last?: boolean | undefined
            sort_hide_null?: boolean | undefined
            line_number?: string | undefined
            payee_name?: string[] | undefined
            per_page?: number | undefined
            candidate_id?: string[] | undefined
            page?: number | undefined
            min_date?: string | undefined
            committee_id?: string[] | undefined
            api_key: string
            min_amount?: string | undefined
            min_image_number?: string | undefined
            sort_null_only?: boolean | undefined
            image_number?: string[] | undefined
            sort?: string | undefined
            max_date?: string | undefined
          }
        }
        output: {
          pagination?: OffsetInfo | undefined
          results?:
            | {
                action_code?: (string | null) | undefined
                action_code_full?: (string | null) | undefined
                aggregate_general_election_expenditure?: (string | null) | undefined
                back_reference_schedule_name?: (string | null) | undefined
                back_reference_transaction_id?: (string | null) | undefined
                candidate_first_name?: (string | null) | undefined
                candidate_id?: (string | null) | undefined
                candidate_last_name?: (string | null) | undefined
                candidate_middle_name?: (string | null) | undefined
                candidate_name?: (string | null) | undefined
                candidate_office?: (string | null) | undefined
                candidate_office_district?: (string | null) | undefined
                candidate_office_full?: (string | null) | undefined
                candidate_office_state?: (string | null) | undefined
                candidate_office_state_full?: (string | null) | undefined
                candidate_prefix?: (string | null) | undefined
                candidate_suffix?: (string | null) | undefined
                catolog_code?: (string | null) | undefined
                catolog_code_full?: (string | null) | undefined
                committee?: CommitteeHistory | undefined
                committee_designated_coordinated_expenditure_indicator?: (string | null) | undefined
                committee_id?: (string | null) | undefined
                committee_name?: (string | null) | undefined
                conduit_committee_city?: (string | null) | undefined
                conduit_committee_id?: (string | null) | undefined
                conduit_committee_name?: (string | null) | undefined
                conduit_committee_state?: (string | null) | undefined
                conduit_committee_street1?: (string | null) | undefined
                conduit_committee_street2?: (string | null) | undefined
                conduit_committee_zip?: (number | null) | undefined
                designated_committee_id?: (string | null) | undefined
                designated_committee_name?: (string | null) | undefined
                election_cycle?: (number | null) | undefined
                entity_type?: (string | null) | undefined
                entity_type_desc?: (string | null) | undefined
                expenditure_amount?: (number | null) | undefined
                expenditure_date?: (string | null) | undefined
                expenditure_purpose_full?: (string | null) | undefined
                expenditure_type?: (string | null) | undefined
                expenditure_type_full?: (string | null) | undefined
                file_number?: (number | null) | undefined
                filing_form?: (string | null) | undefined
                image_number?: (string | null) | undefined
                line_number?: (string | null) | undefined
                link_id?: (number | null) | undefined
                load_date?: (string | null) | undefined
                memo_code?: (string | null) | undefined
                memo_code_full?: (string | null) | undefined
                memo_text?: (string | null) | undefined
                original_sub_id?: (number | null) | undefined
                payee_first_name?: (string | null) | undefined
                payee_last_name?: (string | null) | undefined
                payee_middle_name?: (string | null) | undefined
                payee_name?: (string | null) | undefined
                pdf_url?: string | undefined
                report_type?: (string | null) | undefined
                report_year?: (number | null) | undefined
                schedule_type?: (string | null) | undefined
                schedule_type_full?: (string | null) | undefined
                sub_id?: string | undefined
                subordinate_committee?: CommitteeHistory | undefined
                subordinate_committee_id?: (string | null) | undefined
                transaction_id?: (string | null) | undefined
                unlimited_spending_flag?: (string | null) | undefined
                unlimited_spending_flag_full?: (string | null) | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schedules/schedule_f/:sub_id/': {
      $get: {
        input: { param: { sub_id: string } } & {
          query: { per_page?: number | undefined; api_key: string; page?: number | undefined }
        }
        output: {
          pagination?: OffsetInfo | undefined
          results?:
            | {
                action_code?: (string | null) | undefined
                action_code_full?: (string | null) | undefined
                aggregate_general_election_expenditure?: (string | null) | undefined
                back_reference_schedule_name?: (string | null) | undefined
                back_reference_transaction_id?: (string | null) | undefined
                candidate_first_name?: (string | null) | undefined
                candidate_id?: (string | null) | undefined
                candidate_last_name?: (string | null) | undefined
                candidate_middle_name?: (string | null) | undefined
                candidate_name?: (string | null) | undefined
                candidate_office?: (string | null) | undefined
                candidate_office_district?: (string | null) | undefined
                candidate_office_full?: (string | null) | undefined
                candidate_office_state?: (string | null) | undefined
                candidate_office_state_full?: (string | null) | undefined
                candidate_prefix?: (string | null) | undefined
                candidate_suffix?: (string | null) | undefined
                catolog_code?: (string | null) | undefined
                catolog_code_full?: (string | null) | undefined
                committee?: CommitteeHistory | undefined
                committee_designated_coordinated_expenditure_indicator?: (string | null) | undefined
                committee_id?: (string | null) | undefined
                committee_name?: (string | null) | undefined
                conduit_committee_city?: (string | null) | undefined
                conduit_committee_id?: (string | null) | undefined
                conduit_committee_name?: (string | null) | undefined
                conduit_committee_state?: (string | null) | undefined
                conduit_committee_street1?: (string | null) | undefined
                conduit_committee_street2?: (string | null) | undefined
                conduit_committee_zip?: (number | null) | undefined
                designated_committee_id?: (string | null) | undefined
                designated_committee_name?: (string | null) | undefined
                election_cycle?: (number | null) | undefined
                entity_type?: (string | null) | undefined
                entity_type_desc?: (string | null) | undefined
                expenditure_amount?: (number | null) | undefined
                expenditure_date?: (string | null) | undefined
                expenditure_purpose_full?: (string | null) | undefined
                expenditure_type?: (string | null) | undefined
                expenditure_type_full?: (string | null) | undefined
                file_number?: (number | null) | undefined
                filing_form?: (string | null) | undefined
                image_number?: (string | null) | undefined
                line_number?: (string | null) | undefined
                link_id?: (number | null) | undefined
                load_date?: (string | null) | undefined
                memo_code?: (string | null) | undefined
                memo_code_full?: (string | null) | undefined
                memo_text?: (string | null) | undefined
                original_sub_id?: (number | null) | undefined
                payee_first_name?: (string | null) | undefined
                payee_last_name?: (string | null) | undefined
                payee_middle_name?: (string | null) | undefined
                payee_name?: (string | null) | undefined
                pdf_url?: string | undefined
                report_type?: (string | null) | undefined
                report_year?: (number | null) | undefined
                schedule_type?: (string | null) | undefined
                schedule_type_full?: (string | null) | undefined
                sub_id?: string | undefined
                subordinate_committee?: CommitteeHistory | undefined
                subordinate_committee_id?: (string | null) | undefined
                transaction_id?: (string | null) | undefined
                unlimited_spending_flag?: (string | null) | undefined
                unlimited_spending_flag_full?: (string | null) | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/state-election-office/': {
      $get: {
        input: {
          query: {
            sort_null_only?: boolean | undefined
            sort_nulls_last?: boolean | undefined
            per_page?: number | undefined
            state: string
            sort_hide_null?: boolean | undefined
            sort?: string | undefined
            api_key: string
            page?: number | undefined
          }
        }
        output: StateElectionOfficeInfoPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/totals/by_entity/': {
      $get: {
        input: {
          query: {
            cycle: number
            sort_nulls_last?: boolean | undefined
            per_page?: number | undefined
            sort_null_only?: boolean | undefined
            sort_hide_null?: boolean | undefined
            sort?: string | undefined
            api_key: string
            page?: number | undefined
          }
        }
        output: EntityReceiptDisbursementTotalsPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/totals/:entity_type/': {
      $get: {
        input: {
          param: {
            entity_type: 'presidential' | 'pac' | 'party' | 'pac-party' | 'house-senate' | 'ie-only'
          }
        } & {
          query: {
            max_first_f1_date?: string | undefined
            min_receipts?: string | undefined
            cycle?: number[] | undefined
            filing_frequency?: ('' | 'A' | 'M' | 'N' | 'Q' | 'T' | 'W' | '-A' | '-T')[] | undefined
            max_receipts?: string | undefined
            sort_hide_null?: boolean | undefined
            sort_nulls_last?: boolean | undefined
            min_last_debts_owed_by_committee?: string | undefined
            max_last_cash_on_hand_end_period?: string | undefined
            treasurer_name?: string[] | undefined
            sponsor_candidate_id?: string[] | undefined
            per_page?: number | undefined
            max_disbursements?: string | undefined
            committee_state?: string[] | undefined
            committee_type?: string[] | undefined
            page?: number | undefined
            max_last_debts_owed_by_committee?: string | undefined
            committee_id?: string[] | undefined
            api_key: string
            committee_designation?: string[] | undefined
            sort_null_only?: boolean | undefined
            min_first_f1_date?: string | undefined
            organization_type?: ('' | 'C' | 'L' | 'M' | 'T' | 'V' | 'W')[] | undefined
            sort?: string | undefined
            min_disbursements?: string | undefined
            min_last_cash_on_hand_end_period?: string | undefined
          }
        }
        output: CommitteeTotalsPage
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

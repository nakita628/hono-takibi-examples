type TagRepoVO = {
  isSpec?: boolean | undefined
  tagId?: bigint | undefined
  tagName?: string | undefined
}
type FileTagResponseVO = {
  result?: TagRepoVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type HTTPStatusVO = { status_code?: number | undefined; status_reason?: string | undefined }
type BigDecimal = { [x: string]: unknown }
type TagVO = {
  isSpec?: boolean | undefined
  tagId?: bigint | undefined
  tagName?: string | undefined
}
type FileVO = {
  description?: string | undefined
  download_link?: string | undefined
  file_id?: bigint | undefined
  file_name?: string | undefined
  file_size?: BigDecimal | undefined
  file_type?: string | undefined
  is_remote?: boolean | undefined
  modified_date?: string | undefined
  tagList?: TagVO[] | undefined
  upload_date?: string | undefined
  uploaded_by?: string | undefined
}
type FileResponseVO = {
  result?: FileVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type PersonVO = {
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  middle_name?: string | undefined
}
type Object = { [x: string]: unknown }
type V1x1SpecPamAndAttVO = {
  attribute_id?: bigint | undefined
  attribute_value?: Object | undefined
  label?: string | undefined
  param_id?: bigint | undefined
  param_name?: string | undefined
}
type V1x1ProperyVO = {
  property_attributes?: V1x1SpecPamAndAttVO[] | undefined
  property_id?: bigint | undefined
  property_name?: string | undefined
}
type ProductTypeVO = { label?: string | undefined; product_type_id?: bigint | undefined }
type SpecSimplestVO = { spec_id?: bigint | undefined; spec_name?: string | undefined }
type UofmSimpleVO = {
  is_default?: boolean | undefined
  uofm_id?: bigint | undefined
  uofm_name?: string | undefined
}
type SpecSimpleVO = {
  client_status?: string | undefined
  create_date?: string | undefined
  created_by?: PersonVO | undefined
  job_id?: bigint | undefined
  last_updated?: string | undefined
  reference_number?: string | undefined
  spec_id?: bigint | undefined
  spec_name?: string | undefined
  spec_options_complete?: SpecSimpleVO[] | undefined
  supplier_status?: string | undefined
  uofms?: UofmSimpleVO[] | undefined
  user_state?: string | undefined
}
type SpecTypeVO = { spec_type_id?: bigint | undefined; spec_type_name?: string | undefined }
type V1x1SpecDetailVO = {
  client_status?: string | undefined
  create_date?: string | undefined
  created_by?: PersonVO | undefined
  first_level_custom_fields?: V1x1ProperyVO | undefined
  header_custom_fields?: V1x1ProperyVO | undefined
  job_id?: bigint | undefined
  last_updated?: string | undefined
  product_type?: string | undefined
  product_type_info?: ProductTypeVO | undefined
  quantity_1?: bigint | undefined
  quantity_2?: bigint | undefined
  quantity_3?: bigint | undefined
  quantity_4?: bigint | undefined
  quantity_5?: bigint | undefined
  reference_number?: string | undefined
  second_level_custom_fields?: V1x1ProperyVO[] | undefined
  sku?: string | undefined
  spec_id?: bigint | undefined
  spec_name?: string | undefined
  spec_options?: SpecSimplestVO[] | undefined
  spec_options_complete?: SpecSimpleVO[] | undefined
  spec_original?: SpecSimplestVO | undefined
  spec_type?: SpecTypeVO | undefined
  supplier_status?: string | undefined
  uofms?: UofmSimpleVO[] | undefined
  user_state?: string | undefined
}
type V1x1SpecExpandVO = {
  result?: V1x1SpecDetailVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type V1x1SpecPamAndAttPO = {
  attribute_id?: bigint | undefined
  attribute_value?: Object | undefined
  label?: string | undefined
  param_id?: bigint | undefined
  param_name?: string | undefined
}
type V1x1ProperyPO = {
  property_attributes?: V1x1SpecPamAndAttPO[] | undefined
  property_id?: bigint | undefined
  property_name?: string | undefined
}
type SpecVersionPersistVO = { description?: string | undefined; qty?: bigint | undefined }
type V1X1SpecUpdatingPO = {
  first_level_custom_fields?: V1x1ProperyPO | undefined
  header_custom_fields?: V1x1ProperyPO | undefined
  product_type_id?: bigint | undefined
  quantity_1?: bigint | undefined
  quantity_2?: bigint | undefined
  quantity_3?: bigint | undefined
  quantity_4?: bigint | undefined
  quantity_5?: bigint | undefined
  second_level_custom_fields?: V1x1ProperyPO[] | undefined
  sku?: string | undefined
  spec_name?: string | undefined
  spec_type_id?: bigint | undefined
  versions?: SpecVersionPersistVO[] | undefined
}
type SpecHTTPStatusVO = {
  spec_id?: bigint | undefined
  spec_name?: string | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type TeamMemberPO = {
  role_id?: bigint | undefined
  team_template_id?: bigint | undefined
  user_id?: bigint | undefined
}
type RoleSimpleVO = { role_id?: bigint | undefined; role_name?: string | undefined }
type UserPersonVO = {
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  middle_name?: string | undefined
  user_id?: bigint | undefined
}
type V1x1InvitedTeamMemberVO = {
  role?: RoleSimpleVO | undefined
  team_member_id?: bigint | undefined
  user?: UserPersonVO | undefined
  was_invited_before?: boolean | undefined
}
type V1x1InvitedTeamMemberResultsVO = {
  results?: V1x1InvitedTeamMemberVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type SpecTypeFieldsVO = { [x: string]: unknown }
type SpecTypeFieldsListVO = {
  result?: SpecTypeFieldsVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type CountryVO = {
  constant_token?: string | undefined
  country?: string | undefined
  country_id?: bigint | undefined
}
type CountryListVO = {
  result?: CountryVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type WorkgroupBaseVO = { workgroup_id?: bigint | undefined; workgroup_name?: string | undefined }
type WorkgroupSimpleVO = {
  is_default?: boolean | undefined
  parent_workgroup?: WorkgroupBaseVO | undefined
  workgroup_id?: bigint | undefined
  workgroup_name?: string | undefined
}
type WorkgroupListVO = {
  results?: WorkgroupSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type TeamTemplateSimpleVO = {
  team_template_id?: bigint | undefined
  team_template_name?: string | undefined
}
type AutomaticInvitationVO = {
  automatic_invitation_type_name?: string | undefined
  team_template?: TeamTemplateSimpleVO | undefined
}
type AutomaticInvitationsListVO = {
  results?: AutomaticInvitationVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ContactsSimpleVO = {
  address?: string | undefined
  company_name?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  primary_phone?: string | undefined
  user_id?: bigint | undefined
  workgroup_name?: string | undefined
}
type ContactsListVO = {
  results?: ContactsSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type OrderSimpleBaseVO = {
  buyer_workgroup?: WorkgroupBaseVO | undefined
  comments?: string | undefined
  completion_date?: string | undefined
  currency?: string | undefined
  grand_total?: BigDecimal | undefined
  last_changed?: string | undefined
  last_status_change?: string | undefined
  order_id?: bigint | undefined
  order_number?: string | undefined
  order_title?: string | undefined
  payment_reference?: string | undefined
  print_order_ids?: bigint[] | undefined
  status?: string | undefined
  status_comments?: string | undefined
  supplier_reference?: string | undefined
  supplier_workgroup?: WorkgroupBaseVO | undefined
  transactional_currency?: string | undefined
  transactional_grand_total?: BigDecimal | undefined
}
type ProjectBaseVO = {
  project_id?: bigint | undefined
  project_name?: string | undefined
  project_number?: string | undefined
}
type OrderWorkgroupLevelSimpleVO = {
  buyer_workgroup?: WorkgroupBaseVO | undefined
  change_orders?: OrderSimpleBaseVO[] | undefined
  closing_change_orders?: OrderSimpleBaseVO[] | undefined
  comments?: string | undefined
  completion_date?: string | undefined
  currency?: string | undefined
  grand_total?: BigDecimal | undefined
  grand_total_with_changes?: BigDecimal | undefined
  last_changed?: string | undefined
  last_status_change?: string | undefined
  order_id?: bigint | undefined
  order_number?: string | undefined
  order_title?: string | undefined
  payment_reference?: string | undefined
  print_order_ids?: bigint[] | undefined
  project?: ProjectBaseVO | undefined
  status?: string | undefined
  status_comments?: string | undefined
  supplier_reference?: string | undefined
  supplier_workgroup?: WorkgroupBaseVO | undefined
  transactional_currency?: string | undefined
  transactional_grand_total?: BigDecimal | undefined
  transactional_grand_total_with_changes?: BigDecimal | undefined
}
type OrderWorkgroupLevelListVO = {
  results?: OrderWorkgroupLevelSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type UserVO = {
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  middle_name?: string | undefined
  user_id?: bigint | undefined
}
type PropertyPaAndAttVO = {
  date_value?: string | undefined
  number_value?: BigDecimal | undefined
  param_id?: bigint | undefined
  param_name?: string | undefined
  property_attribute_id?: bigint | undefined
  string_value?: string | undefined
}
type OrderDetailBaseVO = {
  accepted_date?: string | undefined
  annulled_date?: string | undefined
  approved_date?: string | undefined
  awarded_date?: string | undefined
  budget_type?: string | undefined
  buyer?: UserVO | undefined
  buyer_workgroup?: WorkgroupBaseVO | undefined
  classification?: string | undefined
  closed_date?: string | undefined
  comments?: string | undefined
  completion_date?: string | undefined
  creator_user_id?: bigint | undefined
  currency?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  grand_total?: BigDecimal | undefined
  item_count?: number | undefined
  last_activity_date?: string | undefined
  last_changed?: string | undefined
  last_status_change?: string | undefined
  misc_cost?: number | undefined
  order_id?: bigint | undefined
  order_number?: string | undefined
  order_title?: string | undefined
  order_total?: BigDecimal | undefined
  overs_percent?: number | undefined
  parent_order_id?: bigint | undefined
  payment_reference?: string | undefined
  print_order_ids?: bigint[] | undefined
  quote_id?: bigint | undefined
  shipping?: BigDecimal | undefined
  status?: string | undefined
  status_comments?: string | undefined
  supplier?: UserVO | undefined
  supplier_reference?: string | undefined
  supplier_selection_reason?: string | undefined
  supplier_workgroup?: WorkgroupBaseVO | undefined
  tax?: BigDecimal | undefined
  transactional_currency?: string | undefined
  transactional_grand_total?: BigDecimal | undefined
  transactional_order_total?: BigDecimal | undefined
  transactional_shipping?: BigDecimal | undefined
  transactional_tax?: BigDecimal | undefined
  unders_percent?: number | undefined
}
type SpecBaseVO = {
  job_id?: bigint | undefined
  reference_number?: string | undefined
  spec_id?: bigint | undefined
  spec_name?: string | undefined
}
type OrderItemSimpleVO = {
  comments?: string | undefined
  completion_date?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  item_id?: bigint | undefined
  item_price?: number | undefined
  quantity?: number | undefined
  shipping?: BigDecimal | undefined
  spec?: SpecBaseVO | undefined
  tax?: BigDecimal | undefined
  transactional_item_price?: number | undefined
  transactional_shipping?: BigDecimal | undefined
  transactional_tax?: BigDecimal | undefined
  transactional_unit_price?: BigDecimal | undefined
  unit_description?: string | undefined
  unit_price?: BigDecimal | undefined
}
type OrderDetailWorkgroupLevelVO = {
  accepted_date?: string | undefined
  annulled_date?: string | undefined
  approved_date?: string | undefined
  awarded_date?: string | undefined
  budget_type?: string | undefined
  buyer?: UserVO | undefined
  buyer_workgroup?: WorkgroupBaseVO | undefined
  change_orders?: OrderDetailBaseVO[] | undefined
  classification?: string | undefined
  closed_date?: string | undefined
  closing_change_orders?: OrderDetailBaseVO[] | undefined
  comments?: string | undefined
  completion_date?: string | undefined
  creator_user_id?: bigint | undefined
  currency?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  grand_total?: BigDecimal | undefined
  grand_total_with_changes?: BigDecimal | undefined
  item_count?: number | undefined
  last_activity_date?: string | undefined
  last_changed?: string | undefined
  last_status_change?: string | undefined
  misc_cost?: number | undefined
  order_id?: bigint | undefined
  order_items?: OrderItemSimpleVO[] | undefined
  order_number?: string | undefined
  order_title?: string | undefined
  order_total?: BigDecimal | undefined
  overs_percent?: number | undefined
  parent_order_id?: bigint | undefined
  payment_reference?: string | undefined
  print_order_ids?: bigint[] | undefined
  project?: ProjectBaseVO | undefined
  quote_id?: bigint | undefined
  shipping?: BigDecimal | undefined
  status?: string | undefined
  status_comments?: string | undefined
  supplier?: UserVO | undefined
  supplier_reference?: string | undefined
  supplier_selection_reason?: string | undefined
  supplier_workgroup?: WorkgroupBaseVO | undefined
  tax?: BigDecimal | undefined
  transactional_currency?: string | undefined
  transactional_grand_total?: BigDecimal | undefined
  transactional_grand_total_with_changes?: BigDecimal | undefined
  transactional_order_total?: BigDecimal | undefined
  transactional_shipping?: BigDecimal | undefined
  transactional_tax?: BigDecimal | undefined
  unders_percent?: number | undefined
}
type OrderExpandWorkgroupLevelVO = {
  result?: OrderDetailWorkgroupLevelVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ClientWorkgroupSimpleVO = {
  client_ac_workgroup_id?: bigint | undefined
  client_workgroup_id?: bigint | undefined
  client_workgroup_name?: string | undefined
}
type ClientWorkgroupListVO = {
  results?: ClientWorkgroupSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ClientWorkgroupDetailVO = {
  client_ac_workgroup_id?: bigint | undefined
  client_workgroup_id?: bigint | undefined
  client_workgroup_name?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  margin_percent?: BigDecimal | undefined
  markup?: BigDecimal | undefined
  markup_percent?: BigDecimal | undefined
}
type ClientWorkgroupExpandVO = {
  result?: ClientWorkgroupDetailVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ProjectCategorySimpleVO = {
  project_category_id?: bigint | undefined
  project_category_name?: string | undefined
}
type ProjectCategoryListVO = {
  results?: ProjectCategorySimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type UserFieldsSimpleVO = {
  is_required?: boolean | undefined
  label?: string | undefined
  ordinal_number?: bigint | undefined
  param_name?: string | undefined
  type?: string | undefined
  user_field_id?: bigint | undefined
}
type ProjectHomeUserFieldsListVO = {
  results?: UserFieldsSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ProjectStatusSimpleVO = {
  project_status_id?: bigint | undefined
  project_status_name?: string | undefined
}
type ProjectStatusListVO = {
  results?: ProjectStatusSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type Map = { [x: string]: unknown }
type UserDetailsVO = {
  address?: Map | undefined
  company_name?: string | undefined
  email?: string | undefined
  fax_number?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  locale?: string | undefined
  middle_name?: string | undefined
  organization?: string | undefined
  phone_number?: string | undefined
  time_zone?: string | undefined
  title?: string | undefined
  user_id?: bigint | undefined
}
type UserDetailsExpandVO = {
  result?: UserDetailsVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type WgTaskStatusVO = {
  description?: string | undefined
  is_active?: boolean | undefined
  is_default?: boolean | undefined
  task_status_name?: string | undefined
  tasks_status_id?: bigint | undefined
}
type WgTaskStatusListVO = {
  result?: WgTaskStatusVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type TaskTypeSimpleVO = { task_type?: string | undefined; task_type_id?: bigint | undefined }
type TaskTypeListVO = {
  results?: TaskTypeSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type DeactivationReasonVO = {
  deactivation_reason_id?: bigint | undefined
  deactivation_reason_name?: string | undefined
}
type DeactivationReasonListVO = {
  results?: DeactivationReasonVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type TaskPriorityVO = {
  task_priority_id?: bigint | undefined
  task_priority_name?: string | undefined
}
type TaskPriorityListVO = {
  results?: TaskPriorityVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type TaskStatusVO = { task_status_id?: bigint | undefined; task_status_name?: string | undefined }
type TaskStatusListVO = {
  results?: TaskStatusVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type WorkgroupDetailVO = {
  address_line1?: string | undefined
  address_line2?: string | undefined
  address_line3?: string | undefined
  city?: string | undefined
  country?: string | undefined
  country_code?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  default_currency?: string | undefined
  portal?: string | undefined
  postal?: string | undefined
  state?: string | undefined
  workgroup_id?: bigint | undefined
  workgroup_name?: string | undefined
}
type WorkgroupExpandVO = {
  result?: WorkgroupDetailVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type CustomFieldPersistVO = {
  date_value?: string | undefined
  number_value?: BigDecimal | undefined
  param_name?: string | undefined
  string_value?: string | undefined
}
type WorkgroupUpdPersistVO = {
  address_line1?: string | undefined
  address_line2?: string | undefined
  address_line3?: string | undefined
  city?: string | undefined
  country?: string | undefined
  custom_fields?: CustomFieldPersistVO[] | undefined
  decimal_places?: bigint | undefined
  postal?: string | undefined
  state?: string | undefined
  workgroup_name?: string | undefined
}
type WorkgroupHTTPStatusVO = {
  status_code?: number | undefined
  status_reason?: string | undefined
  workgroup_id?: bigint | undefined
  workgroup_name?: string | undefined
}
type MultiExchangeRateListVO = {
  status_code?: number | undefined
  status_reason?: string | undefined
}
type MultiExchangeRatePersisitVO = {
  activate_date?: string | undefined
  buClientWorkgroupId?: bigint | undefined
  currency?: string | undefined
  rate?: BigDecimal | undefined
  target?: string | undefined
}
type MultiExchangeRatePersistListVO = { exchange_rates?: MultiExchangeRatePersisitVO[] | undefined }
type HTTPStatus = { [x: string]: unknown }
type TimeCardSimpleVO = {
  is_submit?: boolean | undefined
  last_updated_date?: string | undefined
  no_of_workdays?: number | undefined
  submit_date?: string | undefined
  timecard_id?: bigint | undefined
  total_hours?: BigDecimal | undefined
  week_beginning?: string | undefined
}
type TimeCardListVO = {
  results?: TimeCardSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ProjectTimeCardVO = { project_id?: bigint | undefined; project_name?: string | undefined }
type TaskTimeCardVO = { task_id?: bigint | undefined; task_name?: string | undefined }
type TimeCardLineVO = {
  activity_name?: string | undefined
  day1_hours_spent?: BigDecimal | undefined
  day2_hours_spent?: BigDecimal | undefined
  day3_hours_spent?: BigDecimal | undefined
  day4_hours_spent?: BigDecimal | undefined
  day5_hours_spent?: BigDecimal | undefined
  day6_hours_spent?: BigDecimal | undefined
  day7_hours_spent?: BigDecimal | undefined
  project?: ProjectTimeCardVO | undefined
  task?: TaskTimeCardVO | undefined
  time_card_line_id?: bigint | undefined
  total_hours_spent?: BigDecimal | undefined
}
type TimeCardDetailVO = {
  billable_hours?: BigDecimal | undefined
  is_submit?: boolean | undefined
  last_updated_date?: string | undefined
  no_of_workdays?: number | undefined
  nonbillable_hours?: BigDecimal | undefined
  submit_date?: string | undefined
  time_card_line?: TimeCardLineVO[] | undefined
  timecard_id?: bigint | undefined
  total_hours?: BigDecimal | undefined
  week_beginning?: string | undefined
}
type WorkgroupAttributeVO = {
  is_checked?: boolean | undefined
  label?: string | undefined
  product_type_id?: bigint | undefined
}
type WorkgroupAttributeListVO = {
  result?: WorkgroupAttributeVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type SpecTypePersistVO = {
  prdType_labels?: string[] | undefined
  spec_type_id?: bigint | undefined
}
type WgSpecPrdTypeRegPersistVO = {
  enableDifferentiatePrdTypePreference?: boolean | undefined
  spec_prdType_list?: SpecTypePersistVO[] | undefined
}
type ProfileImageVO = {
  profileImgUrl?: string | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ProjectSimpleVO = {
  client_account?: string | undefined
  client_workgroup_id?: bigint | undefined
  completion_date?: string | undefined
  is_active?: boolean | undefined
  is_hot?: boolean | undefined
  last_spec_update?: string | undefined
  project_id?: bigint | undefined
  project_name?: string | undefined
  project_number?: string | undefined
  project_status?: string | undefined
}
type ProjectListVO = {
  results?: ProjectSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ProjectPersistVO = {
  client_account?: string | undefined
  client_user_id?: bigint | undefined
  client_workgroup_id?: bigint | undefined
  comments?: string | undefined
  completion_date?: string | undefined
  custom_fields?: CustomFieldPersistVO[] | undefined
  deactivation_reason_id?: bigint | undefined
  is_active?: boolean | undefined
  is_hot?: boolean | undefined
  is_paper_direct?: boolean | undefined
  project_category_id?: bigint | undefined
  project_description?: string | undefined
  project_name?: string | undefined
  project_number?: string | undefined
  project_owner_user_id?: bigint | undefined
  project_status_id: bigint
}
type ProjectVO = {
  project_id?: bigint | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ProjectParentVO = {
  client_account?: string | undefined
  client_user?: string | undefined
  client_user_id?: bigint | undefined
  client_workgroup_id?: bigint | undefined
  comments?: string | undefined
  created_by?: PersonVO | undefined
  project_create_date?: string | undefined
  project_description?: string | undefined
  project_id?: bigint | undefined
  project_name?: string | undefined
  project_number?: string | undefined
}
type ProjectDetailVO = {
  category?: string | undefined
  client_account?: string | undefined
  client_user?: string | undefined
  client_user_id?: bigint | undefined
  client_workgroup_id?: bigint | undefined
  comments?: string | undefined
  completion_date?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  deactivation_reason?: string | undefined
  is_active?: boolean | undefined
  is_hot?: boolean | undefined
  last_spec_update?: string | undefined
  mod_date?: string | undefined
  owner_workgroup?: string | undefined
  parent_project?: ProjectParentVO | undefined
  project_create_date?: string | undefined
  project_description?: string | undefined
  project_id?: bigint | undefined
  project_name?: string | undefined
  project_number?: string | undefined
  project_status?: string | undefined
  team_owners?: string | undefined
}
type ProjectExpandVO = {
  result?: ProjectDetailVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ProjectPatchPO = {
  client_user_id?: bigint | undefined
  client_workgroup_id?: bigint | undefined
  comments?: string | undefined
  completion_date?: string | undefined
  custom_fields?: CustomFieldPersistVO[] | undefined
  deactivation_reason_id?: bigint | undefined
  is_active?: boolean | undefined
  is_hot?: boolean | undefined
  project_category_id?: bigint | undefined
  project_description?: string | undefined
  project_name?: string | undefined
  project_number?: string | undefined
  project_status_id?: bigint | undefined
}
type OrderSimpleVO = {
  buyer_workgroup?: WorkgroupBaseVO | undefined
  change_orders?: OrderSimpleBaseVO[] | undefined
  closing_change_orders?: OrderSimpleBaseVO[] | undefined
  comments?: string | undefined
  completion_date?: string | undefined
  currency?: string | undefined
  grand_total?: BigDecimal | undefined
  grand_total_with_changes?: BigDecimal | undefined
  last_changed?: string | undefined
  last_status_change?: string | undefined
  order_id?: bigint | undefined
  order_number?: string | undefined
  order_title?: string | undefined
  payment_reference?: string | undefined
  print_order_ids?: bigint[] | undefined
  status?: string | undefined
  status_comments?: string | undefined
  supplier_reference?: string | undefined
  supplier_workgroup?: WorkgroupBaseVO | undefined
  transactional_currency?: string | undefined
  transactional_grand_total?: BigDecimal | undefined
  transactional_grand_total_with_changes?: BigDecimal | undefined
}
type OrderListVO = {
  results?: OrderSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type OrderItemPersistVO = {
  completion_date?: string | undefined
  custom_fields?: CustomFieldPersistVO[] | undefined
  ex_tax_value_calculated?: BigDecimal | undefined
  notes?: string | undefined
  per?: bigint | undefined
  price?: BigDecimal | undefined
  quantity?: BigDecimal | undefined
  shipping?: BigDecimal | undefined
  spec_id?: bigint | undefined
  spec_reference_id?: bigint | undefined
  tax?: string | undefined
}
type OrderPO = {
  buyer_user_id?: bigint | undefined
  comments?: string | undefined
  custom_fields?: CustomFieldPersistVO[] | undefined
  invoice_or_billing_recipient?: bigint | undefined
  order_completion_date?: string | undefined
  order_items?: OrderItemPersistVO[] | undefined
  other_selection_reason?: string | undefined
  payment_method_id?: bigint | undefined
  payment_reference_no?: string | undefined
  sellOrder?: boolean | undefined
  shipping?: BigDecimal | undefined
  supplier_reference?: string | undefined
  supplier_selection_reason_id?: bigint | undefined
  supplier_user_id?: bigint | undefined
  tax?: string | undefined
  title?: string | undefined
}
type OrderDetailVO = {
  accepted_date?: string | undefined
  annulled_date?: string | undefined
  approved_date?: string | undefined
  awarded_date?: string | undefined
  budget_type?: string | undefined
  buyer?: UserVO | undefined
  buyer_workgroup?: WorkgroupBaseVO | undefined
  change_orders?: OrderDetailBaseVO[] | undefined
  classification?: string | undefined
  closed_date?: string | undefined
  closing_change_orders?: OrderDetailBaseVO[] | undefined
  comments?: string | undefined
  completion_date?: string | undefined
  creator_user_id?: bigint | undefined
  currency?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  grand_total?: BigDecimal | undefined
  grand_total_with_changes?: BigDecimal | undefined
  item_count?: number | undefined
  last_activity_date?: string | undefined
  last_changed?: string | undefined
  last_status_change?: string | undefined
  misc_cost?: number | undefined
  order_id?: bigint | undefined
  order_items?: OrderItemSimpleVO[] | undefined
  order_number?: string | undefined
  order_title?: string | undefined
  order_total?: BigDecimal | undefined
  overs_percent?: number | undefined
  parent_order_id?: bigint | undefined
  payment_reference?: string | undefined
  print_order_ids?: bigint[] | undefined
  quote_id?: bigint | undefined
  shipping?: BigDecimal | undefined
  status?: string | undefined
  status_comments?: string | undefined
  supplier?: UserVO | undefined
  supplier_reference?: string | undefined
  supplier_selection_reason?: string | undefined
  supplier_workgroup?: WorkgroupBaseVO | undefined
  tax?: BigDecimal | undefined
  transactional_currency?: string | undefined
  transactional_grand_total?: BigDecimal | undefined
  transactional_grand_total_with_changes?: BigDecimal | undefined
  transactional_order_total?: BigDecimal | undefined
  transactional_shipping?: BigDecimal | undefined
  transactional_tax?: BigDecimal | undefined
  unders_percent?: number | undefined
}
type OrderUpdPersistVO = {
  action?: string | undefined
  budget_type_field_id?: bigint | undefined
  comments?: string | undefined
  custom_fields?: CustomFieldPersistVO[] | undefined
  order_completion_date?: string | undefined
  order_id?: bigint | undefined
  other_selection_reason?: string | undefined
  overs_percent?: BigDecimal | undefined
  payment_method_id?: bigint | undefined
  payment_reference_no?: string | undefined
  reject_reason?: string | undefined
  supplier_selection_reason_id?: bigint | undefined
  unders_percent?: BigDecimal | undefined
}
type OrderVO = {
  order_id?: bigint | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ProjectIdListVO = { childProjectIds?: bigint[] | undefined }
type RfeBaseVO = {
  rfe_due_date?: string | undefined
  rfe_id?: bigint | undefined
  rfe_title?: string | undefined
  status?: string | undefined
}
type EstimateBaseVO = {
  create_date?: string | undefined
  currency?: string | undefined
  estimate_id?: bigint | undefined
  estimate_title?: string | undefined
  expiration_date?: string | undefined
  project?: ProjectBaseVO | undefined
  rfe?: RfeBaseVO | undefined
  status?: string | undefined
  submit_date?: string | undefined
  supplier_workgroup?: WorkgroupBaseVO | undefined
  transactional_currency?: string | undefined
}
type EstimateListExpandVO = {
  result?: EstimateBaseVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type PaperItemPO = {
  min_uom_qty?: bigint | undefined
  paper_id?: bigint | undefined
  price_1?: BigDecimal | undefined
  price_2?: BigDecimal | undefined
  price_3?: BigDecimal | undefined
  price_4?: BigDecimal | undefined
  price_5?: BigDecimal | undefined
  price_per_tonne?: BigDecimal | undefined
  qty_uom?: string | undefined
  quantity_1?: bigint | undefined
  quantity_2?: bigint | undefined
  quantity_3?: bigint | undefined
  quantity_4?: bigint | undefined
  quantity_5?: bigint | undefined
  size?: string | undefined
  sku?: string | undefined
  unit_price_1?: BigDecimal | undefined
  unit_price_2?: BigDecimal | undefined
  unit_price_3?: BigDecimal | undefined
  unit_price_4?: BigDecimal | undefined
  unit_price_5?: BigDecimal | undefined
}
type EstimateItemPO = {
  paper_items?: PaperItemPO[] | undefined
  quantity_1_price?: BigDecimal | undefined
  quantity_1_shipping?: BigDecimal | undefined
  quantity_1_tax?: BigDecimal | undefined
  quantity_2_price?: BigDecimal | undefined
  quantity_2_shipping?: BigDecimal | undefined
  quantity_2_tax?: BigDecimal | undefined
  quantity_3_price?: BigDecimal | undefined
  quantity_3_shipping?: BigDecimal | undefined
  quantity_3_tax?: BigDecimal | undefined
  quantity_4_price?: BigDecimal | undefined
  quantity_4_shipping?: BigDecimal | undefined
  quantity_4_tax?: BigDecimal | undefined
  quantity_5_price?: BigDecimal | undefined
  quantity_5_shipping?: BigDecimal | undefined
  quantity_5_tax?: BigDecimal | undefined
  rfe_item_id?: bigint | undefined
}
type EstimatePO = {
  comments?: string | undefined
  description?: string | undefined
  estimate_items?: EstimateItemPO[] | undefined
  estimate_title?: string | undefined
  expiration_date?: string | undefined
  owner_reference?: string | undefined
  rfe_id?: bigint | undefined
}
type BreakoutVO = {
  breakout_id?: bigint | undefined
  breakout_name?: string | undefined
  breakout_pre_markup?: BigDecimal | undefined
  breakout_price?: BigDecimal | undefined
  transactional_breakout_pre_markup?: BigDecimal | undefined
  transactional_breakout_price?: BigDecimal | undefined
}
type ItemOptionVO = { item_option_id?: bigint | undefined; quantity?: string | undefined }
type EstimateItemPriceVO = {
  add_price?: BigDecimal | undefined
  breakouts?: BreakoutVO[] | undefined
  em_estimate_item_price_id?: bigint | undefined
  item_option?: ItemOptionVO | undefined
  price?: BigDecimal | undefined
  shipping?: BigDecimal | undefined
  tax?: BigDecimal | undefined
  total_price?: BigDecimal | undefined
  transactional_add_price?: BigDecimal | undefined
  transactional_price?: BigDecimal | undefined
  transactional_shipping?: BigDecimal | undefined
  transactional_tax?: BigDecimal | undefined
  transactional_total_price?: BigDecimal | undefined
}
type EstimateItemDetailsVO = {
  comments?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  estimate_item_id?: bigint | undefined
  option_prices?: EstimateItemPriceVO[] | undefined
  pc_job_id?: bigint | undefined
  spec_name?: string | undefined
  spec_reference?: string | undefined
  spec_reference_id?: bigint | undefined
}
type EstimateDetailsVO = {
  comments?: string | undefined
  create_date?: string | undefined
  currency?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  description?: string | undefined
  estimate_id?: bigint | undefined
  estimate_title?: string | undefined
  expiration_date?: string | undefined
  items?: EstimateItemDetailsVO[] | undefined
  project?: ProjectBaseVO | undefined
  reference_number?: string | undefined
  rfe?: RfeBaseVO | undefined
  status?: string | undefined
  submit_date?: string | undefined
  submitted_by?: string | undefined
  submitted_by_user_id?: bigint | undefined
  supplier_workgroup?: WorkgroupBaseVO | undefined
  transactional_currency?: string | undefined
}
type EstimateExpandVO = {
  result?: EstimateDetailsVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type InvoiceItemSimpleVO = {
  custom_fields?: PropertyPaAndAttVO[] | undefined
  invoice_item_id?: bigint | undefined
  item_cost?: BigDecimal | undefined
  item_quantity?: bigint | undefined
  item_shipping?: BigDecimal | undefined
  item_sub_total?: BigDecimal | undefined
  item_tax?: BigDecimal | undefined
  job_id?: bigint | undefined
  spec_name?: string | undefined
  transactional_item_cost?: BigDecimal | undefined
  transactional_item_shipping?: BigDecimal | undefined
  transactional_item_sub_total?: BigDecimal | undefined
  transactional_item_tax?: BigDecimal | undefined
}
type InvoiceSimpleVO = {
  comments?: string | undefined
  currency?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  grand_total?: BigDecimal | undefined
  invoice_date?: string | undefined
  invoice_due_date?: string | undefined
  invoice_id?: bigint | undefined
  invoice_number?: string | undefined
  invoice_to?: string | undefined
  is_final?: number | undefined
  is_nonBillable?: number | undefined
  items?: InvoiceItemSimpleVO[] | undefined
  order_reference?: string | undefined
  order_title?: string | undefined
  payment_method?: string | undefined
  prepared_by?: string | undefined
  project_number?: bigint | undefined
  reference_number?: string | undefined
  shipping?: BigDecimal | undefined
  status?: string | undefined
  sub_total?: BigDecimal | undefined
  tax?: BigDecimal | undefined
  transactional_currency?: string | undefined
  transactional_grand_total?: BigDecimal | undefined
  transactional_shipping?: BigDecimal | undefined
  transactional_sub_total?: BigDecimal | undefined
  transactional_tax?: BigDecimal | undefined
}
type InvoiceDetailListExpandVO = {
  result?: InvoiceSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type InvoiceItemDetailVO = {
  custom_fields?: PropertyPaAndAttVO[] | undefined
  invoice_item_id?: bigint | undefined
  item_cost?: BigDecimal | undefined
  item_quantity?: bigint | undefined
  item_shipping?: BigDecimal | undefined
  item_sub_total?: BigDecimal | undefined
  item_tax?: BigDecimal | undefined
  job_id?: bigint | undefined
  shipment_id?: bigint | undefined
  spec_name?: string | undefined
  transactional_item_cost?: BigDecimal | undefined
  transactional_item_shipping?: BigDecimal | undefined
  transactional_item_sub_total?: BigDecimal | undefined
  transactional_item_tax?: BigDecimal | undefined
}
type InvoiceDetailVO = {
  comments?: string | undefined
  currency?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  grand_total?: BigDecimal | undefined
  invoice_date?: string | undefined
  invoice_due_date?: string | undefined
  invoice_id?: bigint | undefined
  invoice_number?: string | undefined
  invoice_to?: string | undefined
  is_final?: number | undefined
  is_nonBillable?: number | undefined
  items?: InvoiceItemDetailVO[] | undefined
  order_reference?: string | undefined
  order_title?: string | undefined
  payment_method?: string | undefined
  prepared_by?: string | undefined
  project_number?: bigint | undefined
  reference_number?: string | undefined
  shipping?: BigDecimal | undefined
  status?: string | undefined
  sub_total?: BigDecimal | undefined
  tax?: BigDecimal | undefined
  transactional_currency?: string | undefined
  transactional_grand_total?: BigDecimal | undefined
  transactional_shipping?: BigDecimal | undefined
  transactional_sub_total?: BigDecimal | undefined
  transactional_tax?: BigDecimal | undefined
}
type InvoiceExpandVO = {
  result?: InvoiceDetailVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type FileListResponseVO = {
  result?: FileVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type RoleListVO = {
  result?: RoleSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type OrderDetailWithIndicatorVO = {
  accepted_date?: string | undefined
  annulled_date?: string | undefined
  approved_date?: string | undefined
  awarded_date?: string | undefined
  budget_type?: string | undefined
  buyer?: UserVO | undefined
  buyer_workgroup?: WorkgroupBaseVO | undefined
  change_orders?: OrderDetailBaseVO[] | undefined
  classification?: string | undefined
  closed_date?: string | undefined
  closing_change_orders?: OrderDetailBaseVO[] | undefined
  comments?: string | undefined
  completion_date?: string | undefined
  creator_user_id?: bigint | undefined
  currency?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  grand_total?: BigDecimal | undefined
  grand_total_with_changes?: BigDecimal | undefined
  is_sell_order?: boolean | undefined
  item_count?: number | undefined
  last_activity_date?: string | undefined
  last_changed?: string | undefined
  last_status_change?: string | undefined
  misc_cost?: number | undefined
  order_id?: bigint | undefined
  order_items?: OrderItemSimpleVO[] | undefined
  order_number?: string | undefined
  order_title?: string | undefined
  order_total?: BigDecimal | undefined
  overs_percent?: number | undefined
  parent_order_id?: bigint | undefined
  payment_reference?: string | undefined
  print_order_ids?: bigint[] | undefined
  quote_id?: bigint | undefined
  shipping?: BigDecimal | undefined
  status?: string | undefined
  status_comments?: string | undefined
  supplier?: UserVO | undefined
  supplier_reference?: string | undefined
  supplier_selection_reason?: string | undefined
  supplier_workgroup?: WorkgroupBaseVO | undefined
  tax?: BigDecimal | undefined
  transactional_currency?: string | undefined
  transactional_grand_total?: BigDecimal | undefined
  transactional_grand_total_with_changes?: BigDecimal | undefined
  transactional_order_total?: BigDecimal | undefined
  transactional_shipping?: BigDecimal | undefined
  transactional_tax?: BigDecimal | undefined
  unders_percent?: number | undefined
}
type RfqBaseVO = {
  received_date?: string | undefined
  rfq_id?: bigint | undefined
  rfq_title?: string | undefined
  status?: string | undefined
}
type QuoteSimpleVO = {
  currency?: string | undefined
  grand_total?: BigDecimal | undefined
  quote_id?: bigint | undefined
  quote_title?: string | undefined
  rfq?: RfqBaseVO | undefined
  status?: string | undefined
  submit_date?: string | undefined
  transactional_currency?: string | undefined
  transactional_grand_total?: BigDecimal | undefined
}
type QuoteListVO = {
  result?: QuoteSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type QuotePriceSourceVO = { [x: string]: unknown }
type QuotePriceDetailVO = {
  breakouts?: BreakoutVO[] | undefined
  cost?: BigDecimal | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  fixed?: BigDecimal | undefined
  is_chosen?: boolean | undefined
  is_included?: boolean | undefined
  is_quoted?: boolean | undefined
  parent_price_id?: bigint | undefined
  price_id?: bigint | undefined
  quantity?: BigDecimal | undefined
  sell_price?: BigDecimal | undefined
  shipping?: BigDecimal | undefined
  source?: QuotePriceSourceVO | undefined
  supplier?: string | undefined
  tax?: BigDecimal | undefined
  total?: BigDecimal | undefined
  transactional_cost?: BigDecimal | undefined
  transactional_fixed?: BigDecimal | undefined
  transactional_sell_price?: BigDecimal | undefined
  transactional_shipping?: BigDecimal | undefined
  transactional_tax?: BigDecimal | undefined
  transactional_total?: BigDecimal | undefined
  transactional_variable?: BigDecimal | undefined
  variable?: BigDecimal | undefined
  variable_percent?: BigDecimal | undefined
}
type QuoteItemDetailVO = {
  chosen_quantity?: BigDecimal | undefined
  comments?: string | undefined
  completion_date?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  item_id?: bigint | undefined
  item_prices?: QuotePriceDetailVO[] | undefined
  item_shipping_total?: BigDecimal | undefined
  item_tax_total?: BigDecimal | undefined
  item_total?: BigDecimal | undefined
  reason_for_quote_selection?: string | undefined
  show_cost_prices_and_markup?: boolean | undefined
  spec?: SpecBaseVO | undefined
  transactional_item_shipping_total?: BigDecimal | undefined
  transactional_item_tax_total?: BigDecimal | undefined
  transactional_item_total?: BigDecimal | undefined
  vat_code?: string | undefined
  vat_rate?: BigDecimal | undefined
}
type QuoteDetailVO = {
  client?: string | undefined
  client_user_id?: bigint | undefined
  comments?: string | undefined
  creator_user_id?: bigint | undefined
  currency?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  description?: string | undefined
  grand_total?: BigDecimal | undefined
  is_show_supplier_information?: boolean | undefined
  last_update_by_user_id?: bigint | undefined
  proposed_order_completion_date?: string | undefined
  quote_expiration_date?: string | undefined
  quote_id?: bigint | undefined
  quote_items?: QuoteItemDetailVO[] | undefined
  quote_items_total?: BigDecimal | undefined
  quote_title?: string | undefined
  shipping?: BigDecimal | undefined
  status?: string | undefined
  submit_date?: string | undefined
  tax?: BigDecimal | undefined
  transactional_currency?: string | undefined
  transactional_grand_total?: BigDecimal | undefined
  transactional_quote_items_total?: BigDecimal | undefined
  transactional_shipping?: BigDecimal | undefined
  transactional_tax?: BigDecimal | undefined
  vat_code?: string | undefined
  vat_rate?: BigDecimal | undefined
}
type QuoteExpandVO = {
  result?: QuoteDetailVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type QuotePutPersistVO = {
  action?: string | undefined
  po_number?: string | undefined
  quote_id?: bigint | undefined
  state_change_comments?: string | undefined
}
type RfeItemSimpleVO = { rfe_item_id?: bigint | undefined }
type EstimateSimpleVO = { estimate_id?: bigint | undefined; estimate_title?: string | undefined }
type RfeSuEstimateSimpleVO = {
  supplier_estimates?: EstimateSimpleVO[] | undefined
  workgroup_id?: bigint | undefined
  workgroup_name?: string | undefined
}
type RfeSimpleVO = {
  estimate_due_date?: string | undefined
  rfe_id?: bigint | undefined
  rfe_items?: RfeItemSimpleVO[] | undefined
  rfe_title?: string | undefined
  supplier_estimates?: RfeSuEstimateSimpleVO[] | undefined
}
type RfeListVO = {
  results?: RfeSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type RfeSpecPO = {
  quantity_1?: bigint | undefined
  quantity_2?: bigint | undefined
  quantity_3?: bigint | undefined
  quantity_4?: bigint | undefined
  quantity_5?: bigint | undefined
  spec_id?: bigint | undefined
}
type RfePO = {
  description?: string | undefined
  details?: string | undefined
  estimate_due_date?: string | undefined
  proposed_order_completion_date?: string | undefined
  rfe_number?: string | undefined
  rfe_title?: string | undefined
  specs?: RfeSpecPO[] | undefined
  supplier_user_ids?: bigint[] | undefined
}
type RfqVO = {
  rfq_id?: bigint | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type RfeItemOptionVO = {
  item_option_id?: bigint | undefined
  quantity?: BigDecimal | undefined
  quantity_index?: number | undefined
}
type RfeItemSimpleEXTVO = {
  job_id?: bigint | undefined
  rfe_item_id?: bigint | undefined
  rfe_item_options?: RfeItemOptionVO[] | undefined
  spec_id?: bigint | undefined
  spec_name?: string | undefined
}
type RfeDetailsVO = {
  description?: string | undefined
  details?: string | undefined
  estimate_due_date?: string | undefined
  estimators?: string[] | undefined
  itemized_tax_and_shipping?: number | undefined
  proposed_order_completion_date?: string | undefined
  reference_number?: string | undefined
  requestor?: string | undefined
  rfe_id?: bigint | undefined
  rfe_items?: RfeItemSimpleEXTVO[] | undefined
  status?: string | undefined
  submitted_date?: string | undefined
  supplier_estimates?: RfeSuEstimateSimpleVO[] | undefined
  title?: string | undefined
}
type RfeExpandVO = {
  result?: RfeDetailsVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type QuoteBaseVO = {
  currency?: string | undefined
  grand_total?: BigDecimal | undefined
  quote_id?: bigint | undefined
  quote_title?: string | undefined
  status?: string | undefined
  submit_date?: string | undefined
  transactional_currency?: string | undefined
  transactional_grand_total?: BigDecimal | undefined
}
type RfqSimpleVO = {
  quotes?: QuoteBaseVO[] | undefined
  received_date?: string | undefined
  rfq_id?: bigint | undefined
  rfq_title?: string | undefined
  status?: string | undefined
}
type RfqListVO = {
  result?: RfqSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ErgoSpecSimpleVO = {
  is_active?: number | undefined
  is_template?: number | undefined
  quantity_1?: number | undefined
  quantity_2?: number | undefined
  quantity_3?: number | undefined
  quantity_4?: number | undefined
  quantity_5?: number | undefined
  reference_number?: string | undefined
  spec_id?: bigint | undefined
  spec_name?: string | undefined
}
type RfqItemBaseVO = {
  job_id?: bigint | undefined
  rfq_item_id?: bigint | undefined
  spec?: ErgoSpecSimpleVO | undefined
}
type RfqDetailsVO = {
  comments?: string | undefined
  description?: string | undefined
  proposed_completion_date?: string | undefined
  quote_due_date?: string | undefined
  quotes?: QuoteBaseVO[] | undefined
  received_date?: string | undefined
  recipient_name?: string | undefined
  requestor_name?: string | undefined
  rfq_id?: bigint | undefined
  rfq_items?: RfqItemBaseVO[] | undefined
  rfq_title?: string | undefined
  status?: string | undefined
}
type RfqExpandVO = {
  result?: RfqDetailsVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ShipmentSimpleVO = {
  locations_count?: bigint | undefined
  qty_received?: bigint | undefined
  qty_requested?: bigint | undefined
  qty_shipped?: bigint | undefined
  received_date?: string | undefined
  shipment_id?: bigint | undefined
  shipment_status?: string | undefined
  shipped_date?: string | undefined
  spec?: SpecBaseVO | undefined
}
type ShipmentListVO = {
  result?: ShipmentSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ShipmentLocationPostPersistVO = {
  address_line1?: string | undefined
  address_line2?: string | undefined
  address_line3?: string | undefined
  batch_label?: string | undefined
  city?: string | undefined
  company_name?: string | undefined
  country_iso_code?: string | undefined
  delivery_date?: string | undefined
  description_or_title?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  inner_carton_label?: string | undefined
  last_name?: string | undefined
  middle_name?: string | undefined
  outer_carton_label?: string | undefined
  pallet_lablel?: string | undefined
  poof_type?: string | undefined
  postal_code?: string | undefined
  request_type?: string | undefined
  requested_quantity?: bigint | undefined
  shipment_custom_fields?: CustomFieldPersistVO[] | undefined
  shipment_request_custom_fields?: CustomFieldPersistVO[] | undefined
  shipping_carrier?: string | undefined
  shipping_instruction?: string | undefined
  shpping_method?: string | undefined
  spec_ids?: string | undefined
  state?: string | undefined
  work_phone_number?: string | undefined
  workgroup_name?: string | undefined
}
type ShipmentLocationsPOSTVO = {
  location_id?: bigint | undefined
  shipment_id?: bigint | undefined
  spec_id?: bigint | undefined
}
type ShipmentLocationsPOSTResultVO = {
  results?: ShipmentLocationsPOSTVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ShipmentRequestBaseVO = {
  city?: string | undefined
  company_name?: string | undefined
  country?: string | undefined
  country_code?: string | undefined
  custom_fields?: PropertyPaAndAttVO[] | undefined
  description_or_title?: string | undefined
  due_date?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  is_use_spec_packaging?: boolean | undefined
  last_name?: string | undefined
  line_1?: string | undefined
  line_2?: string | undefined
  line_3?: string | undefined
  location_id?: bigint | undefined
  middle_name?: string | undefined
  postal?: string | undefined
  proof_type?: string | undefined
  qty_received?: bigint | undefined
  qty_requested?: bigint | undefined
  qty_shipped?: bigint | undefined
  received_comments?: string | undefined
  received_date?: string | undefined
  requested_shipping_carrier?: string | undefined
  requested_shipping_method?: string | undefined
  shipped_comments?: string | undefined
  shipped_date?: string | undefined
  shipped_in_units?: bigint | undefined
  shipped_in_uofm?: string | undefined
  shipped_shipping_carrier?: string | undefined
  shipped_shipping_method?: string | undefined
  shipping_cost?: BigDecimal | undefined
  shipping_instruction?: string | undefined
  state?: string | undefined
  tax?: BigDecimal | undefined
  tracking_number?: string | undefined
  type?: string | undefined
  weight?: BigDecimal | undefined
  weight_uofm?: string | undefined
  work_phone_number?: string | undefined
  workgroup_name?: string | undefined
}
type ShipmentDetailVO = {
  locations?: ShipmentRequestBaseVO[] | undefined
  locations_count?: bigint | undefined
  qty_received?: bigint | undefined
  qty_requested?: bigint | undefined
  qty_shipped?: bigint | undefined
  received_date?: string | undefined
  shipment_id?: bigint | undefined
  shipment_status?: string | undefined
  shipped_date?: string | undefined
  spec?: SpecBaseVO | undefined
}
type ShipmentExpandVO = {
  result?: ShipmentDetailVO | undefined
  resut?: ShipmentDetailVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ShipmentLocationPersistVO = {
  due_date?: string | undefined
  qty_received?: bigint | undefined
  qty_requested?: bigint | undefined
  qty_shipped?: bigint | undefined
  received_date?: string | undefined
  shipped_date?: string | undefined
  shipping_cost?: BigDecimal | undefined
  type?: string | undefined
}
type SpecListVO = {
  results?: SpecSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type SpecPersistVO = {
  jsonBody?: boolean | undefined
  product_type_id?: bigint | undefined
  quantity_1?: bigint | undefined
  quantity_2?: bigint | undefined
  quantity_3?: bigint | undefined
  quantity_4?: bigint | undefined
  quantity_5?: bigint | undefined
  sku?: string | undefined
  spec_name?: string | undefined
  spec_template_id?: bigint | undefined
  spec_type_id?: bigint | undefined
  versions?: SpecVersionPersistVO[] | undefined
}
type SpecVO = {
  spec_id?: bigint | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type PropertyPersistVO = {
  custom_fields?: CustomFieldPersistVO[] | undefined
  paper_id?: bigint | undefined
}
type SpecUpdatePersistVO = {
  inks_and_paper?: PropertyPersistVO[] | undefined
  product_type_id?: bigint | undefined
  quantity_1?: bigint | undefined
  quantity_2?: bigint | undefined
  quantity_3?: bigint | undefined
  quantity_4?: bigint | undefined
  quantity_5?: bigint | undefined
  sku?: string | undefined
  spec_name?: string | undefined
}
type TaskSimpleVO = {
  actual_end?: string | undefined
  actual_hours?: BigDecimal | undefined
  actual_start?: string | undefined
  assign_to?: PersonVO | undefined
  baseline_duration?: BigDecimal | undefined
  baseline_end_date?: string | undefined
  baseline_start_date?: string | undefined
  current_duration?: BigDecimal | undefined
  is_milestone?: boolean | undefined
  mod_date?: string | undefined
  plan_end?: string | undefined
  plan_start?: string | undefined
  priority?: string | undefined
  schedule_code?: string | undefined
  status?: string | undefined
  task_id?: bigint | undefined
  task_name?: string | undefined
  task_type?: string | undefined
}
type TaskListVO = {
  results?: TaskSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type TaskPersistVO = {
  actual_duration?: number | undefined
  actual_duration_hour?: number | undefined
  actual_end_date?: string | undefined
  actual_start_date?: string | undefined
  assign_to_user_id?: bigint | undefined
  comments?: string | undefined
  contributors?: string | undefined
  custom_status_id?: bigint | undefined
  description?: string | undefined
  name?: string | undefined
  percentage_complete?: bigint | undefined
  priority?: bigint | undefined
  revised_duration?: number | undefined
  revised_duration_hour?: number | undefined
  revised_end_date?: string | undefined
  revised_start_date?: string | undefined
  status_id?: bigint | undefined
  task_id?: bigint | undefined
  task_type_id?: bigint | undefined
}
type TaskCreatedVO = {
  status_code?: number | undefined
  status_reason?: string | undefined
  task_id?: bigint | undefined
}
type TaskDetailVO = {
  actual_duration?: BigDecimal | undefined
  actual_end?: string | undefined
  actual_hours?: BigDecimal | undefined
  actual_start?: string | undefined
  assign_to?: PersonVO | undefined
  baseline_duration?: BigDecimal | undefined
  baseline_end_date?: string | undefined
  baseline_start_date?: string | undefined
  comments?: string | undefined
  create_date?: string | undefined
  creator_workgroup_name?: string | undefined
  current_duration?: BigDecimal | undefined
  description?: string | undefined
  is_milestone?: boolean | undefined
  last_updated_by?: PersonVO | undefined
  mod_date?: string | undefined
  percent_complete?: number | undefined
  plan_duration?: BigDecimal | undefined
  plan_end?: string | undefined
  plan_start?: string | undefined
  priority?: string | undefined
  requested_by?: PersonVO | undefined
  schedule_code?: string | undefined
  status?: string | undefined
  task_id?: bigint | undefined
  task_name?: string | undefined
  task_type?: string | undefined
}
type TaskExpandVO = {
  result?: TaskDetailVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type TeamMemberSimpleVO = {
  company_name?: string | undefined
  name?: string | undefined
  phone?: string | undefined
  role?: string | undefined
  teammember_id?: bigint | undefined
  user_id?: bigint | undefined
  workgroup_name?: string | undefined
}
type TeamMemberListVO = {
  results?: TeamMemberSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type ContactUserVO = { role_id: bigint; user_id: bigint }
type TeamMemberBaseInfVO = {
  status_code?: number | undefined
  status_reason?: string | undefined
  teammember_id?: bigint | undefined
}
type ObjectStateSimpleVO = {
  object_state_id?: bigint | undefined
  object_state_name?: string | undefined
}
type ObjectStateListVO = {
  results?: ObjectStateSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type QuoteOfWgLevelSimpleVO = {
  currency?: string | undefined
  grand_total?: BigDecimal | undefined
  project?: ProjectBaseVO | undefined
  quote_id?: bigint | undefined
  quote_title?: string | undefined
  rfq?: RfqBaseVO | undefined
  status?: string | undefined
  submit_date?: string | undefined
  transactional_currency?: string | undefined
  transactional_grand_total?: BigDecimal | undefined
}
type TimeCardReceivedDetailVO = {
  billable_hours?: BigDecimal | undefined
  is_submit?: boolean | undefined
  last_updated_date?: string | undefined
  no_of_workdays?: number | undefined
  nonbillable_hours?: BigDecimal | undefined
  owner?: PersonVO | undefined
  submit_date?: string | undefined
  time_card_line?: TimeCardLineVO[] | undefined
  timecard_id?: bigint | undefined
  total_hours?: BigDecimal | undefined
  week_beginning?: string | undefined
}
type SpecTemplateSimpleVO = {
  created_by?: PersonVO | undefined
  created_date?: string | undefined
  is_active?: boolean | undefined
  is_externally_published?: boolean | undefined
  is_locked?: boolean | undefined
  last_updated_date?: string | undefined
  spec_template_id?: bigint | undefined
  spec_template_name?: string | undefined
}
type SpecTemplateListVO = {
  results?: SpecTemplateSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type SpecTemplateDetailVO = {
  created_by?: PersonVO | undefined
  created_date?: string | undefined
  is_active?: boolean | undefined
  is_externally_published?: boolean | undefined
  is_locked?: boolean | undefined
  last_updated_date?: string | undefined
  product_type?: string | undefined
  product_type_info?: ProductTypeVO | undefined
  spec_template_id?: bigint | undefined
  spec_template_name?: string | undefined
  spec_type?: SpecTypeVO | undefined
}
type SpecTemplateExpandVO = {
  result?: SpecTemplateDetailVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type PropertyParamSimpleVO = { data_type?: string | undefined; param_name?: string | undefined }
type PropertyParamListVO = {
  result?: PropertyParamSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type SupplierWorkgroupSimpleVO = {
  bu_supplier_workgroup_id?: bigint | undefined
  bu_supplier_workgroup_name?: string | undefined
  client_workgroup_id?: bigint | undefined
  client_workgroup_name?: string | undefined
  is_approved?: boolean | undefined
  supplier_code?: string | undefined
  supplier_workgroup_id?: bigint | undefined
  supplier_workgroup_name?: string | undefined
}
type SupplierWorkgroupListVO = {
  result?: SupplierWorkgroupSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type SupplierWorkgroupBasicVO = {
  bu_supplier_workgroup_id?: bigint | undefined
  bu_supplier_workgroup_name?: string | undefined
}
type SupplierWorkgroupDetailVO = {
  additional_workgroups_contain_same_supplier?: SupplierWorkgroupBasicVO[] | undefined
  bu_supplier_workgroup_id?: bigint | undefined
  bu_supplier_workgroup_name?: string | undefined
  client_workgroup_id?: bigint | undefined
  client_workgroup_name?: string | undefined
  is_approved?: boolean | undefined
  supplier_code?: string | undefined
  supplier_workgroup_id?: bigint | undefined
  supplier_workgroup_name?: string | undefined
}
type SupplierWorkgroupExpandVO = {
  result?: SupplierWorkgroupDetailVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type TaskWorkgroupLevelSimpleVO = {
  actual_end?: string | undefined
  actual_hours?: BigDecimal | undefined
  actual_start?: string | undefined
  assign_to?: PersonVO | undefined
  baseline_duration?: BigDecimal | undefined
  baseline_end_date?: string | undefined
  baseline_start_date?: string | undefined
  current_duration?: BigDecimal | undefined
  is_milestone?: boolean | undefined
  mod_date?: string | undefined
  plan_end?: string | undefined
  plan_start?: string | undefined
  priority?: string | undefined
  project?: ProjectBaseVO | undefined
  schedule_code?: string | undefined
  status?: string | undefined
  task_id?: bigint | undefined
  task_name?: string | undefined
  task_type?: string | undefined
}
type TaskWorkgroupLevelListVO = {
  results?: TaskWorkgroupLevelSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type TaskDetailWorkgroupLevelVO = {
  actual_duration?: BigDecimal | undefined
  actual_end?: string | undefined
  actual_hours?: BigDecimal | undefined
  actual_start?: string | undefined
  assign_to?: PersonVO | undefined
  baseline_duration?: BigDecimal | undefined
  baseline_end_date?: string | undefined
  baseline_start_date?: string | undefined
  comments?: string | undefined
  create_date?: string | undefined
  creator_workgroup_name?: string | undefined
  current_duration?: BigDecimal | undefined
  description?: string | undefined
  is_milestone?: boolean | undefined
  last_updated_by?: PersonVO | undefined
  mod_date?: string | undefined
  percent_complete?: number | undefined
  plan_duration?: BigDecimal | undefined
  plan_end?: string | undefined
  plan_start?: string | undefined
  priority?: string | undefined
  project?: ProjectBaseVO | undefined
  requested_by?: PersonVO | undefined
  schedule_code?: string | undefined
  status?: string | undefined
  task_id?: bigint | undefined
  task_name?: string | undefined
  task_type?: string | undefined
}
type TaskExpandWorkgroupLevelVO = {
  result?: TaskDetailWorkgroupLevelVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type TeamTemplateListVO = {
  results?: TeamTemplateSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type TeamTemplateItemVO = { role?: RoleSimpleVO | undefined; user?: UserPersonVO | undefined }
type TeamTemplateDetailVO = {
  team_teample_item?: TeamTemplateItemVO[] | undefined
  team_template_id?: bigint | undefined
  team_template_name?: string | undefined
}
type TeamTemplateExpandVO = {
  results?: TeamTemplateDetailVO | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
type WorkgroupMembersSimpleVO = {
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  user_id?: bigint | undefined
}
type WorkgroupMembersListVO = {
  results?: WorkgroupMembersSimpleVO[] | undefined
  status_code?: number | undefined
  status_reason?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/1.1/workgroups/:workgroup_id/projects/:project_id/fileTags': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileTagResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileTagResponseVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileTagResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileTagResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileTagResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileTagResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileTagResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileTagResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/1.1/workgroups/:workgroup_id/projects/:project_id/files': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileResponseVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: FileResponseVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { form: File }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/1.1/workgroups/:workgroup_id/projects/:project_id/files/:file_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: FileResponseVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: FileResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; file_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/1.1/workgroups/:workgroup_id/projects/:project_id/specs/:spec_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: V1x1SpecExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: V1x1SpecExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: V1x1SpecExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: V1x1SpecExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: V1x1SpecExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: V1x1SpecExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: V1x1SpecExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: V1x1SpecExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: V1X1SpecUpdatingPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/1.1/workgroups/:workgroup_id/projects/:project_id/teammembers': {
      $post:
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: V1x1InvitedTeamMemberResultsVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: V1x1InvitedTeamMemberResultsVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: V1x1InvitedTeamMemberResultsVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: V1x1InvitedTeamMemberResultsVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: V1x1InvitedTeamMemberResultsVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: V1x1InvitedTeamMemberResultsVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: V1x1InvitedTeamMemberResultsVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: V1x1InvitedTeamMemberResultsVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TeamMemberPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/1.1/workgroups/:workgroup_id/specTypes/:spec_type_id/specTypeFields': {
      $get:
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: SpecTypeFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: SpecTypeFieldsListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: SpecTypeFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: SpecTypeFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: SpecTypeFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: SpecTypeFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: SpecTypeFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: SpecTypeFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/countries': {
      $get:
        | { input: {}; output: CountryListVO; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CountryListVO; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CountryListVO; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CountryListVO; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CountryListVO; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CountryListVO; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CountryListVO; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CountryListVO; outputFormat: 'text'; status: 200 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'text'; status: 404 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'json'; status: 404 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'text'; status: 404 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'text'; status: 404 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'text'; status: 404 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'text'; status: 404 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'text'; status: 404 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'text'; status: 404 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'text'; status: 500 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'json'; status: 500 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'text'; status: 500 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'text'; status: 500 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'text'; status: 500 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'text'; status: 500 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'text'; status: 500 }
        | { input: {}; output: HTTPStatusVO; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/v1/workgroups': {
      $get:
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: WorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: WorkgroupListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: WorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: WorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: WorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: WorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: WorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: WorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              query: { workgroup_name?: string | undefined; workgroup_types?: string[] | undefined }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/automaticInvitations': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: AutomaticInvitationsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: AutomaticInvitationsListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: AutomaticInvitationsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: AutomaticInvitationsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: AutomaticInvitationsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: AutomaticInvitationsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: AutomaticInvitationsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: AutomaticInvitationsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/billingRecipients': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/buyOrders': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/buyOrders/:order_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/clientWorkgroups': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: ClientWorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ClientWorkgroupListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ClientWorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ClientWorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ClientWorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ClientWorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ClientWorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ClientWorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/clientWorkgroups/:client_workgroup_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ClientWorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ClientWorkgroupExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ClientWorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ClientWorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ClientWorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ClientWorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ClientWorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ClientWorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/clientWorkgroups/:client_workgroup_id/projectCategory': {
      $get:
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/clientWorkgroups/:client_workgroup_id/projectHomeUserFields': {
      $get:
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/clientWorkgroups/:client_workgroup_id/projectStatus': {
      $get:
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; client_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/contacts': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ContactsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/contacts/:user_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/customTaskStatus': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: WgTaskStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WgTaskStatusListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WgTaskStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WgTaskStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WgTaskStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WgTaskStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WgTaskStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WgTaskStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/customTaskTypes': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/deactivationReasons': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: DeactivationReasonListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: DeactivationReasonListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: DeactivationReasonListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: DeactivationReasonListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: DeactivationReasonListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: DeactivationReasonListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: DeactivationReasonListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: DeactivationReasonListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/defaultTaskPriority': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: TaskPriorityListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskPriorityListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskPriorityListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskPriorityListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskPriorityListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskPriorityListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskPriorityListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskPriorityListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/defaultTaskStatus': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: TaskStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskStatusListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/detail': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: WorkgroupHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: WorkgroupHTTPStatusVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: WorkgroupHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: WorkgroupHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: WorkgroupHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: WorkgroupHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: WorkgroupHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: WorkgroupHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WorkgroupUpdPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/exchangeRate': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: MultiExchangeRateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: MultiExchangeRateListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: MultiExchangeRateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: MultiExchangeRateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: MultiExchangeRateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: MultiExchangeRateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: MultiExchangeRateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: MultiExchangeRateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: MultiExchangeRatePersistListVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/myTimeCards': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/myTimeCards/:timeCard_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardDetailVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/productTypes': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/productTypesOfSpecTypes': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupAttributeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: WgSpecPrdTypeRegPersistVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: WgSpecPrdTypeRegPersistVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: WgSpecPrdTypeRegPersistVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: WgSpecPrdTypeRegPersistVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: WgSpecPrdTypeRegPersistVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: WgSpecPrdTypeRegPersistVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: WgSpecPrdTypeRegPersistVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: WgSpecPrdTypeRegPersistVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: WgSpecPrdTypeRegPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/profileImage': {
      $post:
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: ProfileImageVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: ProfileImageVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: ProfileImageVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: ProfileImageVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: ProfileImageVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: ProfileImageVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: ProfileImageVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: ProfileImageVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: File }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projectCategory': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectCategoryListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projectHomeUserFields': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectHomeUserFieldsListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projectStatus': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectStatusListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ProjectListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: ProjectVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: ProjectVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: ProjectVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: ProjectVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: ProjectVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: ProjectVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: ProjectVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: ProjectVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & { json: ProjectPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id': {
      $delete:
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ProjectExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ProjectExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ProjectExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ProjectExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ProjectExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ProjectExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ProjectExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ProjectExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $patch:
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPatchPO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/buyOrders': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: OrderPO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: OrderPO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: OrderPO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: OrderPO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: OrderPO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: OrderPO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: OrderPO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: OrderPO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: OrderPO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/buyOrders/:order_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/children': {
      $post:
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ProjectIdListVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/estimates': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: EstimateListExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: EstimateListExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: EstimateListExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: EstimateListExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: EstimateListExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: EstimateListExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: EstimateListExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: EstimateListExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: EstimatePO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: EstimatePO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: EstimatePO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: EstimatePO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: EstimatePO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: EstimatePO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: EstimatePO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: EstimatePO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: EstimatePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/estimates/:estimate_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: EstimateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: EstimateExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: EstimateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: EstimateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: EstimateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: EstimateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: EstimateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: EstimateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; estimate_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/invoices/orders/:order_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: InvoiceDetailListExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: InvoiceDetailListExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: InvoiceDetailListExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: InvoiceDetailListExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: InvoiceDetailListExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: InvoiceDetailListExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: InvoiceDetailListExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: InvoiceDetailListExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/invoices/:invoice_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: InvoiceExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: InvoiceExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: InvoiceExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: InvoiceExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: InvoiceExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: InvoiceExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: InvoiceExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: InvoiceExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/invoices/:invoice_id/files': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: FileListResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: FileListResponseVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: FileListResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: FileListResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: FileListResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: FileListResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: FileListResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: FileListResponseVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; invoice_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/memberroles/:user_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: RoleListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: RoleListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: RoleListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: RoleListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: RoleListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: RoleListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: RoleListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: RoleListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/orders/:order_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailWithIndicatorVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailWithIndicatorVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailWithIndicatorVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailWithIndicatorVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailWithIndicatorVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailWithIndicatorVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailWithIndicatorVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailWithIndicatorVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/quotes': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/quotes/:quote_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: QuoteExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: QuoteExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: QuoteExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: QuoteExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: QuoteExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: QuoteExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: QuoteExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: QuoteExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; quote_id: string } } & {
              json: QuotePutPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/rfes': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfeListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: RfqVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: RfqVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: RfqVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: RfqVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: RfqVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: RfqVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: RfqVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: RfqVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: RfePO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/rfes/:rfe_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: RfeExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: RfeExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: RfeExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: RfeExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: RfeExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: RfeExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: RfeExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: RfeExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfe_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/rfqs': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfqListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfqListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfqListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfqListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfqListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfqListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfqListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: RfqListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/rfqs/:rfq_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: RfqExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: RfqExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: RfqExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: RfqExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: RfqExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: RfqExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: RfqExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: RfqExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; rfq_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/sellOrders': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: OrderListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/sellOrders/:order_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: OrderDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: OrderVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; order_id: string } } & {
              json: OrderUpdPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/shipments': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ShipmentListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ShipmentListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ShipmentListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ShipmentListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ShipmentListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ShipmentListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ShipmentListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: ShipmentListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: ShipmentLocationsPOSTResultVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: ShipmentLocationsPOSTResultVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: ShipmentLocationsPOSTResultVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: ShipmentLocationsPOSTResultVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: ShipmentLocationsPOSTResultVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: ShipmentLocationsPOSTResultVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: ShipmentLocationsPOSTResultVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: ShipmentLocationsPOSTResultVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & {
              json: ShipmentLocationPostPersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/shipments/:shipment_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: ShipmentExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: ShipmentExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: ShipmentExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: ShipmentExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: ShipmentExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: ShipmentExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: ShipmentExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: ShipmentExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; shipment_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/shipments/:shipment_id/locations/:location_id': {
      $put:
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: {
              param: {
                workgroup_id: string
                project_id: string
                shipment_id: string
                location_id: string
              }
            } & { json: ShipmentLocationPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/specs': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: SpecListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: SpecListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: SpecListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: SpecListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: SpecListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: SpecListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: SpecListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: SpecListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: SpecVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: SpecVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: SpecVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: SpecVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: SpecVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: SpecVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: SpecVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: SpecVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: SpecPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/specs/:spec_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: SpecListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: SpecListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: SpecListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: SpecListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: SpecListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: SpecListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: SpecListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: SpecListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: SpecHTTPStatusVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; spec_id: string } } & {
              json: SpecUpdatePersistVO
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/tasks': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TaskListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TaskListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TaskListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TaskListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TaskListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TaskListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TaskListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TaskListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: TaskCreatedVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: TaskCreatedVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: TaskCreatedVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: TaskCreatedVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: TaskCreatedVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: TaskCreatedVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: TaskCreatedVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: TaskCreatedVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: TaskPersistVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/tasks/:task_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: TaskExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: TaskExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: TaskExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: TaskExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: TaskExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: TaskExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: TaskExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: TaskExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/teamMembersOfClientProject': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/teammembers': {
      $get:
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: TeamMemberListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: TeamMemberBaseInfVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: TeamMemberBaseInfVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: TeamMemberBaseInfVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: TeamMemberBaseInfVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: TeamMemberBaseInfVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: TeamMemberBaseInfVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: TeamMemberBaseInfVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: TeamMemberBaseInfVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 422
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string } } & { json: ContactUserVO }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/projects/:project_id/teammembers/:teammember_id': {
      $delete:
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: TeamMemberBaseInfVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: TeamMemberBaseInfVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: TeamMemberBaseInfVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: TeamMemberBaseInfVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: TeamMemberBaseInfVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: TeamMemberBaseInfVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: TeamMemberBaseInfVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: TeamMemberBaseInfVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; project_id: string; teammember_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/quoteStates': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: ObjectStateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ObjectStateListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ObjectStateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ObjectStateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ObjectStateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ObjectStateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ObjectStateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: ObjectStateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/quotes': {
      $get:
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteOfWgLevelSimpleVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteOfWgLevelSimpleVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteOfWgLevelSimpleVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteOfWgLevelSimpleVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteOfWgLevelSimpleVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteOfWgLevelSimpleVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteOfWgLevelSimpleVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: QuoteOfWgLevelSimpleVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } } & {
              query: {
                'quote_state_id, use filters={"quote_state_id":111111}'?: string | undefined
              }
            }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/receivedTimeCards': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TimeCardListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/receivedTimeCards/:timeCard_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardReceivedDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardReceivedDetailVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardReceivedDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardReceivedDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardReceivedDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardReceivedDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardReceivedDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: TimeCardReceivedDetailVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; timeCard_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/sellOrders': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: OrderWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/sellOrders/:order_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: OrderExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; order_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/specTemplates': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: SpecTemplateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: SpecTemplateListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: SpecTemplateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: SpecTemplateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: SpecTemplateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: SpecTemplateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: SpecTemplateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: SpecTemplateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/specTemplates/:spec_template_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: SpecTemplateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: SpecTemplateExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: SpecTemplateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: SpecTemplateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: SpecTemplateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: SpecTemplateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: SpecTemplateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: SpecTemplateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/specTypes/:spec_type_id/specTypeFields': {
      $get:
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: PropertyParamListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: PropertyParamListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: PropertyParamListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: PropertyParamListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: PropertyParamListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: PropertyParamListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: PropertyParamListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: PropertyParamListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; spec_type_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/supplierWorkgroups': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: SupplierWorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: SupplierWorkgroupListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: SupplierWorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: SupplierWorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: SupplierWorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: SupplierWorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: SupplierWorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: SupplierWorkgroupListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/supplierWorkgroups/:bu_supplier_workgroup_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: SupplierWorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: SupplierWorkgroupExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: SupplierWorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: SupplierWorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: SupplierWorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: SupplierWorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: SupplierWorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: SupplierWorkgroupExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; bu_supplier_workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/taskTypes': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskTypeListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/tasks': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: TaskWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskWorkgroupLevelListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TaskWorkgroupLevelListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/tasks/:task_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: TaskExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: TaskExpandWorkgroupLevelVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: TaskExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: TaskExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: TaskExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: TaskExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: TaskExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: TaskExpandWorkgroupLevelVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; task_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/teamTemplates': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: TeamTemplateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TeamTemplateListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TeamTemplateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TeamTemplateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TeamTemplateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TeamTemplateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TeamTemplateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: TeamTemplateListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/teamTemplates/:team_template_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: TeamTemplateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: TeamTemplateExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: TeamTemplateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: TeamTemplateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: TeamTemplateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: TeamTemplateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: TeamTemplateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: TeamTemplateExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; team_template_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/workgroupMembers': {
      $get:
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupMembersListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupMembersListVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupMembersListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupMembersListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupMembersListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupMembersListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupMembersListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: WorkgroupMembersListVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/v1/workgroups/:workgroup_id/workgroupMembers/:user_id': {
      $get:
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: UserDetailsExpandVO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { param: { workgroup_id: string; user_id: string } }
            output: HTTPStatusVO
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes

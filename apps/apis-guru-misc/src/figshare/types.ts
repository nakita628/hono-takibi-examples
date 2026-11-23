type Account = {
  active: bigint
  created_date: string
  email: string
  first_name: string
  group_id: bigint
  id: bigint
  institution_id: bigint
  institution_user_id: string
  last_name: string
  maximum_file_size: bigint
  modified_date: string
  pending_quota_request: boolean
  quota: bigint
  used_quota: bigint
  used_quota_private: bigint
  used_quota_public: bigint
}
type ErrorMessage = { code?: bigint | undefined; message?: string | undefined }
type Timeline = {
  firstOnline?: string | undefined
  publisherAcceptance?: string | undefined
  publisherPublication?: string | undefined
}
type Article = {
  defined_type: bigint
  defined_type_name: string
  doi: string
  group_id: number | null
  handle: string
  id: bigint
  published_date: string | null
  thumb: string
  timeline: Timeline
  title: string
  url: string
  url_private_api: string
  url_private_html: string
  url_public_api: string
  url_public_html: string
}
type CustomArticleFieldAdd = { name: string; value: { [x: string]: unknown } }
type FundingCreate = { id?: bigint | undefined; title?: string | undefined }
type TimelineUpdate = {
  firstOnline?: string | undefined
  publisherAcceptance?: string | undefined
  publisherPublication?: string | undefined
}
type ArticleCreate = {
  authors?: { [x: string]: unknown }[] | undefined
  categories?: bigint[] | undefined
  categories_by_source_id?: string[] | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  custom_fields_list?: CustomArticleFieldAdd[] | undefined
  defined_type?: string | undefined
  description?: string | undefined
  doi?: string | undefined
  funding?: string | undefined
  funding_list?: FundingCreate[] | undefined
  group_id?: bigint | undefined
  handle?: string | undefined
  is_metadata_record?: boolean | undefined
  keywords?: string[] | undefined
  license?: bigint | undefined
  metadata_reason?: string | undefined
  references?: string[] | undefined
  resource_doi?: string | undefined
  resource_title?: string | undefined
  tags?: string[] | undefined
  timeline?: TimelineUpdate | undefined
  title: string
}
type LocationWarnings = { entity_id: bigint; location: string; warnings: string[] }
type AccountReport = {
  account_id: bigint
  created_date: string
  download_url: string
  group_id: bigint
  id: bigint
  status: 'missing' | 'pending' | 'done'
}
type PrivateArticleSearch = {
  group?: number | undefined
  institution?: number | undefined
  limit?: bigint | undefined
  modified_since?: string | undefined
  offset?: bigint | undefined
  order_direction?: 'asc' | 'desc' | undefined
  page?: bigint | undefined
  page_size?: bigint | undefined
  published_since?: string | undefined
  search_for?: string | undefined
  doi?: string | undefined
  handle?: string | undefined
  item_type?: bigint | undefined
  order?:
    | 'published_date'
    | 'modified_date'
    | 'views'
    | 'shares'
    | 'downloads'
    | 'cites'
    | undefined
  project_id?: bigint | undefined
  resource_doi?: string | undefined
}
type ArticleWithProject = {
  defined_type: bigint
  defined_type_name: string
  doi: string
  group_id: number | null
  handle: string
  id: bigint
  published_date: string | null
  thumb: string
  timeline: Timeline
  title: string
  url: string
  url_private_api: string
  url_private_html: string
  url_public_api: string
  url_public_html: string
}
type Category = {
  id: bigint
  parent_id: bigint
  path: string
  source_id: string
  taxonomy_id: bigint
  title: string
}
type License = { name: string; url: string; value: bigint }
type Author = {
  full_name: string
  id: bigint
  is_active: boolean
  orcid_id: string
  url_name: string
}
type CustomArticleField = { is_mandatory: boolean | null; name: string; value: string }
type GroupEmbargoOptions = {
  id: bigint
  ip_name: string
  type: 'logged_in' | 'ip_range' | 'administrator'
}
type PublicFile = {
  computed_md5: string
  download_url: string
  id: bigint
  is_link_only: boolean
  name: string
  size: bigint
  supplied_md5: string
}
type ArticleCompletePrivate = {
  defined_type: bigint
  defined_type_name: string
  doi: string
  group_id: number | null
  handle: string
  id: bigint
  published_date: string | null
  thumb: string
  timeline: Timeline
  title: string
  url: string
  url_private_api: string
  url_private_html: string
  url_public_api: string
  url_public_html: string
  categories: Category[]
  citation: string
  confidential_reason: string
  created_date: string
  description: string
  embargo_date: string | null
  embargo_reason: string
  embargo_title: string
  embargo_type: string | null
  funding: string
  funding_list: number[]
  has_linked_file: boolean
  is_active: boolean
  is_confidential: boolean
  is_embargoed: boolean
  is_metadata_record: boolean
  is_public: boolean
  license: License
  metadata_reason: string
  modified_date: string | null
  references: string[]
  size: bigint
  status: string
  tags: string[]
  version: bigint
  authors: Author[]
  custom_fields: CustomArticleField[]
  embargo_options: GroupEmbargoOptions[]
  figshare_url: string
  files: PublicFile[]
  resource_doi: string | null
  resource_title: string | null
}
type ArticleUpdate = {
  authors?: { [x: string]: unknown }[] | undefined
  categories?: bigint[] | undefined
  categories_by_source_id?: string[] | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  custom_fields_list?: CustomArticleFieldAdd[] | undefined
  defined_type?: string | undefined
  description?: string | undefined
  doi?: string | undefined
  funding?: string | undefined
  funding_list?: FundingCreate[] | undefined
  group_id?: bigint | undefined
  handle?: string | undefined
  is_metadata_record?: boolean | undefined
  keywords?: string[] | undefined
  license?: bigint | undefined
  metadata_reason?: string | undefined
  references?: string[] | undefined
  resource_doi?: string | undefined
  resource_title?: string | undefined
  tags?: string[] | undefined
  timeline?: TimelineUpdate | undefined
  title?: string | undefined
}
type LocationWarningsUpdate = { location: string; warnings: string[] }
type AuthorsCreator = { authors: { [x: string]: unknown }[] }
type CategoriesCreator = { categories: bigint[] }
type ArticleConfidentiality = { is_confidential: boolean; reason: string }
type ConfidentialityCreator = { reason: string }
type ArticleEmbargo = {
  embargo_date: string | null
  embargo_options: { [x: string]: unknown }[]
  embargo_reason: string
  embargo_title: string
  embargo_type: string | null
  is_embargoed: boolean
}
type ArticleEmbargoUpdater = {
  embargo_date: string
  embargo_options?: { [x: string]: unknown }[] | undefined
  embargo_reason?: string | undefined
  embargo_title?: string | undefined
  embargo_type: 'article' | 'file'
  is_embargoed: boolean
}
type PrivateFile = {
  computed_md5: string
  download_url: string
  id: bigint
  is_link_only: boolean
  name: string
  size: bigint
  supplied_md5: string
}
type FileCreator = {
  link?: string | undefined
  md5?: string | undefined
  name?: string | undefined
  size?: bigint | undefined
}
type Location = { location: string }
type PrivateLink = { expires_date: string; html_location: string; id: string; is_active: boolean }
type PrivateLinkCreator = { expires_date?: string | undefined; read_only?: boolean | undefined }
type PrivateLinkResponse = { html_location: string; location: string; token: string }
type ArticleDOI = { doi: string }
type ArticleHandle = { handle: string }
type Resource = {
  doi?: string | undefined
  id?: string | undefined
  link?: string | undefined
  status?: string | undefined
  title?: string | undefined
  version?: bigint | undefined
}
type FileId = { file_id?: bigint | undefined }
type PrivateAuthorsSearch = {
  group_id?: bigint | undefined
  institution_id?: bigint | undefined
  is_active?: boolean | undefined
  is_public?: boolean | undefined
  limit?: bigint | undefined
  offset?: bigint | undefined
  orcid?: string | undefined
  order?:
    | 'published_date'
    | 'modified_date'
    | 'views'
    | 'shares'
    | 'downloads'
    | 'cites'
    | undefined
  order_direction?: 'asc' | 'desc' | undefined
  page?: bigint | undefined
  page_size?: bigint | undefined
  search_for?: string | undefined
}
type AuthorComplete = {
  full_name: string
  id: bigint
  is_active: boolean
  orcid_id: string
  url_name: string
}
type Collection = {
  doi: string
  handle: string
  id: bigint
  published_date: string | null
  timeline: Timeline
  title: string
  url: string
}
type CollectionCreate = {
  articles?: number[] | undefined
  authors?: { [x: string]: unknown }[] | undefined
  categories?: bigint[] | undefined
  categories_by_source_id?: string[] | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  custom_fields_list?: CustomArticleFieldAdd[] | undefined
  description?: string | undefined
  doi?: string | undefined
  funding?: string | undefined
  funding_list?: FundingCreate[] | undefined
  group_id?: bigint | undefined
  handle?: string | undefined
  keywords?: string[] | undefined
  references?: string[] | undefined
  resource_doi?: string | undefined
  resource_id?: string | undefined
  resource_link?: string | undefined
  resource_title?: string | undefined
  resource_version?: number | undefined
  tags?: string[] | undefined
  timeline?: TimelineUpdate | undefined
  title: string
}
type PrivateCollectionSearch = {
  group?: number | undefined
  institution?: number | undefined
  limit?: bigint | undefined
  modified_since?: string | undefined
  offset?: bigint | undefined
  order_direction?: 'asc' | 'desc' | undefined
  page?: bigint | undefined
  page_size?: bigint | undefined
  published_since?: string | undefined
  search_for?: string | undefined
  doi?: string | undefined
  handle?: string | undefined
  order?: 'published_date' | 'modified_date' | 'views' | 'shares' | 'cites' | undefined
  resource_doi?: string | undefined
}
type CollectionCompletePrivate = {
  doi: string
  handle: string
  id: bigint
  published_date: string | null
  timeline: Timeline
  title: string
  url: string
}
type CollectionUpdate = {
  articles?: number[] | undefined
  authors?: { [x: string]: unknown }[] | undefined
  categories?: bigint[] | undefined
  categories_by_source_id?: string[] | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  custom_fields_list?: CustomArticleFieldAdd[] | undefined
  description?: string | undefined
  doi?: string | undefined
  funding?: string | undefined
  funding_list?: FundingCreate[] | undefined
  group_id?: bigint | undefined
  handle?: string | undefined
  keywords?: string[] | undefined
  references?: string[] | undefined
  resource_doi?: string | undefined
  resource_id?: string | undefined
  resource_link?: string | undefined
  resource_title?: string | undefined
  resource_version?: number | undefined
  tags?: string[] | undefined
  timeline?: TimelineUpdate | undefined
  title?: string | undefined
}
type ArticlesCreator = { articles: bigint[] }
type CollectionPrivateLinkCreator = {
  expires_date?: string | undefined
  read_only?: boolean | undefined
}
type CollectionDOI = { doi: string }
type CollectionHandle = { handle: string }
type FundingSearch = { search_for?: string | undefined }
type FundingInformation = {
  funder_name: string
  grant_code: string
  id: bigint
  is_user_defined: boolean
  title: string
  url: string
}
type Institution = { domain: string | null; id: bigint; name: string }
type ShortAccount = {
  active: bigint
  email: string
  first_name: string
  id: bigint
  institution_id: bigint
  institution_user_id: string
  last_name: string
  orcid_id: string
  quota: bigint
  used_quota: bigint
  user_id: bigint
}
type AccountCreate = {
  email: string
  first_name: string
  group_id?: bigint | undefined
  institution_user_id?: string | undefined
  is_active?: boolean | undefined
  last_name?: string | undefined
  quota?: bigint | undefined
  symplectic_user_id?: string | undefined
}
type InstitutionAccountsSearch = {
  email?: string | undefined
  institution_user_id?: string | undefined
  is_active?: bigint | undefined
  limit?: bigint | undefined
  offset?: bigint | undefined
  page?: bigint | undefined
  page_size?: bigint | undefined
  search_for?: string | undefined
}
type AccountUpdate = { group_id: bigint; is_active: boolean }
type ShortCustomField = {
  field_type: 'text' | 'textarea' | 'dropdown' | 'url' | 'email' | 'date' | 'dropdown_large_list'
  id: bigint
  name: string
}
type Group = {
  association_criteria: string
  id: bigint
  name: string
  parent_id: bigint
  resource_id: string
}
type CurationDetail = {
  account_id: bigint
  article_id: bigint
  assigned_to: bigint
  comments_count: bigint
  created_date: string
  group_id: bigint
  id: bigint
  modified_date: string
  review_date: string | null
  status: 'pending' | 'approved' | 'rejected' | 'closed'
  version: bigint
}
type CurationComment = {
  account_id: bigint
  id: bigint
  text: string
  type: 'comment' | 'approved' | 'rejected' | 'closed'
}
type CurationCommentCreate = { text: string }
type Curation = {
  account_id: bigint
  article_id: bigint
  assigned_to: bigint
  comments_count: bigint
  created_date: string
  group_id: bigint
  id: bigint
  modified_date: string
  review_date: string | null
  status: 'pending' | 'approved' | 'rejected' | 'closed'
  version: bigint
}
type Role = { category: string; description: string; id: bigint; name: string }
type AccountGroupRoles = { [x: string]: unknown }
type AccountGroupRolesCreate = { [x: string]: unknown }
type User = {
  first_name: string
  id: bigint
  is_active: boolean
  is_public: boolean
  job_title: string
  last_name: string
  name: string
  orcid_id: string
  url_name: string
}
type ProjectPrivate = { id: bigint; published_date: string | null; title: string; url: string }
type ProjectCreate = {
  custom_fields?: { [x: string]: unknown } | undefined
  custom_fields_list?: CustomArticleFieldAdd[] | undefined
  description?: string | undefined
  funding?: string | undefined
  funding_list?: FundingCreate[] | undefined
  group_id?: bigint | undefined
  title: string
}
type CreateProjectResponse = { entity_id: bigint; location: string }
type ProjectsSearch = {
  group?: number | undefined
  institution?: number | undefined
  limit?: bigint | undefined
  modified_since?: string | undefined
  offset?: bigint | undefined
  order_direction?: 'asc' | 'desc' | undefined
  page?: bigint | undefined
  page_size?: bigint | undefined
  published_since?: string | undefined
  search_for?: string | undefined
}
type ProjectCompletePrivate = {
  id: bigint
  published_date: string | null
  title: string
  url: string
  role: 'Owner' | 'Collaborator' | 'Viewer'
  storage: 'individual' | 'group'
}
type ProjectUpdate = {
  custom_fields?: { [x: string]: unknown } | undefined
  custom_fields_list?: CustomArticleFieldAdd[] | undefined
  description?: string | undefined
  funding?: string | undefined
  funding_list?: FundingCreate[] | undefined
  title?: string | undefined
}
type ArticleProjectCreate = {
  authors?: { [x: string]: unknown }[] | undefined
  categories?: bigint[] | undefined
  categories_by_source_id?: string[] | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  custom_fields_list?: CustomArticleFieldAdd[] | undefined
  defined_type?: string | undefined
  description?: string | undefined
  doi?: string | undefined
  funding?: string | undefined
  funding_list?: FundingCreate[] | undefined
  handle?: string | undefined
  keywords?: string[] | undefined
  license?: bigint | undefined
  references?: string[] | undefined
  resource_doi?: string | undefined
  resource_title?: string | undefined
  tags?: string[] | undefined
  timeline?: TimelineUpdate | undefined
  title: string
}
type ProjectArticle = {
  defined_type: bigint
  defined_type_name: string
  doi: string
  group_id: number | null
  handle: string
  id: bigint
  published_date: string | null
  thumb: string
  timeline: Timeline
  title: string
  url: string
  url_private_api: string
  url_private_html: string
  url_public_api: string
  url_public_html: string
}
type ProjectCollaborator = { name: string; role_name: string; status: string; user_id: number }
type ProjectCollaboratorInvite = {
  comment?: string | undefined
  email?: string | undefined
  role_name: 'viewer' | 'collaborator'
  user_id?: bigint | undefined
}
type ResponseMessage = { message: string }
type ProjectNote = {
  abstract: string
  created_date: string
  id: bigint
  modified_date: string
  user_id: bigint
  user_name: string
}
type ProjectNoteCreate = { text: string }
type ProjectNotePrivate = {
  abstract: string
  created_date: string
  id: bigint
  modified_date: string
  user_id: bigint
  user_name: string
}
type ArticleSearch = {
  group?: number | undefined
  institution?: number | undefined
  limit?: bigint | undefined
  modified_since?: string | undefined
  offset?: bigint | undefined
  order_direction?: 'asc' | 'desc' | undefined
  page?: bigint | undefined
  page_size?: bigint | undefined
  published_since?: string | undefined
  search_for?: string | undefined
}
type ArticleComplete = {
  defined_type: bigint
  defined_type_name: string
  doi: string
  group_id: number | null
  handle: string
  id: bigint
  published_date: string | null
  thumb: string
  timeline: Timeline
  title: string
  url: string
  url_private_api: string
  url_private_html: string
  url_public_api: string
  url_public_html: string
  categories: Category[]
  citation: string
  confidential_reason: string
  created_date: string
  description: string
  embargo_date: string | null
  embargo_reason: string
  embargo_title: string
  embargo_type: string | null
  funding: string
  funding_list: number[]
  has_linked_file: boolean
  is_active: boolean
  is_confidential: boolean
  is_embargoed: boolean
  is_metadata_record: boolean
  is_public: boolean
  license: License
  metadata_reason: string
  modified_date: string | null
  references: string[]
  size: bigint
  status: string
  tags: string[]
  version: bigint
}
type ArticleVersions = { url: string; version: bigint }
type CollectionSearch = {
  group?: number | undefined
  institution?: number | undefined
  limit?: bigint | undefined
  modified_since?: string | undefined
  offset?: bigint | undefined
  order_direction?: 'asc' | 'desc' | undefined
  page?: bigint | undefined
  page_size?: bigint | undefined
  published_since?: string | undefined
  search_for?: string | undefined
}
type CollectionComplete = {
  doi: string
  handle: string
  id: bigint
  published_date: string | null
  timeline: Timeline
  title: string
  url: string
}
type CollectionVersions = { id: bigint; url: string }
type ItemType = {
  icon: string
  id: bigint
  is_selectable: boolean
  name: string
  public_description: string
  string_id: string
  url_name: string
}
type Project = { id: bigint; published_date: string | null; title: string; url: string }
type ProjectComplete = { id: bigint; published_date: string | null; title: string; url: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $get:
        | { input: {}; output: Account; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/articles': {
      $get:
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: Article[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: ArticleCreate }
            output: LocationWarnings
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ArticleCreate }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { json: ArticleCreate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | { input: { json: ArticleCreate }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/articles/export': {
      $get:
        | {
            input: { query: { group_id?: bigint | undefined } }
            output: AccountReport[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { group_id?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { group_id?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | { input: {}; output: AccountReport; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/articles/search': {
      $post:
        | {
            input: { json: PrivateArticleSearch }
            output: ArticleWithProject[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: PrivateArticleSearch }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { json: PrivateArticleSearch }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | { input: { json: PrivateArticleSearch }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/articles/:article_id': {
      $delete:
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { article_id: bigint } }
            output: ArticleCompletePrivate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { article_id: bigint } } & { json: ArticleUpdate }
            output: LocationWarningsUpdate
            outputFormat: 'json'
            status: 205
          }
        | {
            input: { param: { article_id: bigint } } & { json: ArticleUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } } & { json: ArticleUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } } & { json: ArticleUpdate }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/authors': {
      $get:
        | {
            input: { param: { article_id: bigint } }
            output: Author[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { article_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { article_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } } & { json: AuthorsCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { article_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { article_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } } & { json: AuthorsCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/authors/:author_id': {
      $delete:
        | {
            input: { param: { article_id: bigint; author_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { article_id: bigint; author_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint; author_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint; author_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/categories': {
      $get:
        | {
            input: { param: { article_id: bigint } }
            output: Category[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { article_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { article_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } } & { json: CategoriesCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { article_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { article_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } } & { json: CategoriesCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/categories/:category_id': {
      $delete:
        | {
            input: { param: { article_id: bigint; category_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { article_id: bigint; category_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint; category_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint; category_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/confidentiality': {
      $delete:
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { article_id: bigint } }
            output: ArticleConfidentiality
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { article_id: bigint } } & { json: ConfidentialityCreator }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { article_id: bigint } } & { json: ConfidentialityCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } } & { json: ConfidentialityCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } } & { json: ConfidentialityCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } } & { json: ConfidentialityCreator }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/embargo': {
      $delete:
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { article_id: bigint } }
            output: ArticleEmbargo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { article_id: bigint } } & { json: ArticleEmbargoUpdater }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { article_id: bigint } } & { json: ArticleEmbargoUpdater }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } } & { json: ArticleEmbargoUpdater }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } } & { json: ArticleEmbargoUpdater }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } } & { json: ArticleEmbargoUpdater }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/files': {
      $get:
        | {
            input: { param: { article_id: bigint } }
            output: PrivateFile[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { article_id: bigint } } & { json: FileCreator }
            output: Location
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { article_id: bigint } } & { json: FileCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } } & { json: FileCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } } & { json: FileCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } } & { json: FileCreator }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { article_id: bigint } } & { json: FileCreator }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/files/:file_id': {
      $delete:
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: PrivateFile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/private_links': {
      $get:
        | {
            input: { param: { article_id: bigint } }
            output: PrivateLink[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { article_id: bigint } } & { json: PrivateLinkCreator }
            output: PrivateLinkResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { article_id: bigint } } & { json: PrivateLinkCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } } & { json: PrivateLinkCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } } & { json: PrivateLinkCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } } & { json: PrivateLinkCreator }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { article_id: bigint } } & { json: PrivateLinkCreator }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/private_links/:link_id': {
      $delete:
        | {
            input: { param: { article_id: bigint; link_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { article_id: bigint; link_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint; link_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint; link_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint; link_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { article_id: bigint; link_id: string } } & { json: PrivateLinkCreator }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { article_id: bigint; link_id: string } } & { json: PrivateLinkCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint; link_id: string } } & { json: PrivateLinkCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint; link_id: string } } & { json: PrivateLinkCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint; link_id: string } } & { json: PrivateLinkCreator }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { article_id: bigint; link_id: string } } & { json: PrivateLinkCreator }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/publish': {
      $post:
        | {
            input: { param: { article_id: bigint } }
            output: Location
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/reserve_doi': {
      $post:
        | {
            input: { param: { article_id: bigint } }
            output: ArticleDOI
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/reserve_handle': {
      $post:
        | {
            input: { param: { article_id: bigint } }
            output: ArticleHandle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/resource': {
      $post:
        | {
            input: { param: { article_id: bigint } } & { json: Resource }
            output: Location
            outputFormat: 'json'
            status: 205
          }
        | {
            input: { param: { article_id: bigint } } & { json: Resource }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } } & { json: Resource }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint } } & { json: Resource }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } } & { json: Resource }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/account/articles/:article_id/versions/:version_id/': {
      $put:
        | {
            input: { param: { article_id: bigint; version_id: bigint } } & { json: ArticleUpdate }
            output: LocationWarningsUpdate
            outputFormat: 'json'
            status: 205
          }
        | {
            input: { param: { article_id: bigint; version_id: bigint } } & { json: ArticleUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint; version_id: bigint } } & { json: ArticleUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint; version_id: bigint } } & { json: ArticleUpdate }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/articles/:article_id/versions/:version_id/update_thumb': {
      $put:
        | {
            input: { param: { article_id: bigint; version_id: bigint } } & { json: FileId }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { article_id: bigint; version_id: bigint } } & { json: FileId }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { article_id: bigint; version_id: bigint } } & { json: FileId }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint; version_id: bigint } } & { json: FileId }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/account/authors/search': {
      $post:
        | {
            input: { json: PrivateAuthorsSearch }
            output: Author[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: PrivateAuthorsSearch }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { json: PrivateAuthorsSearch }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | { input: { json: PrivateAuthorsSearch }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/authors/:author_id': {
      $get:
        | {
            input: { param: { author_id: bigint } }
            output: AuthorComplete
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { author_id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { param: { author_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | { input: { param: { author_id: bigint } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { author_id: bigint } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/categories': {
      $get:
        | { input: {}; output: Category[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/collections': {
      $get:
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
              }
            }
            output: Collection[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: CollectionCreate }
            output: LocationWarnings
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CollectionCreate }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { json: CollectionCreate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | { input: { json: CollectionCreate }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/collections/search': {
      $post:
        | {
            input: { json: PrivateCollectionSearch }
            output: Collection[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PrivateCollectionSearch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: PrivateCollectionSearch }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PrivateCollectionSearch }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/collections/:collection_id': {
      $delete:
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { collection_id: bigint } }
            output: CollectionCompletePrivate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { collection_id: bigint } } & { json: CollectionUpdate }
            output: LocationWarningsUpdate
            outputFormat: 'json'
            status: 205
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CollectionUpdate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CollectionUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CollectionUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CollectionUpdate }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/collections/:collection_id/articles': {
      $get:
        | {
            input: { param: { collection_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: Article[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { collection_id: bigint } } & { json: ArticlesCreator }
            output: Location
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { collection_id: bigint } } & { json: ArticlesCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } } & { json: ArticlesCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } } & { json: ArticlesCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } } & { json: ArticlesCreator }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { collection_id: bigint } } & { json: ArticlesCreator }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { collection_id: bigint } } & { json: ArticlesCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } } & { json: ArticlesCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } } & { json: ArticlesCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } } & { json: ArticlesCreator }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/collections/:collection_id/articles/:article_id': {
      $delete:
        | {
            input: { param: { collection_id: bigint; article_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collection_id: bigint; article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint; article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint; article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/collections/:collection_id/authors': {
      $get:
        | {
            input: { param: { collection_id: bigint } }
            output: Author[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { collection_id: bigint } } & { json: AuthorsCreator }
            output: Location
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { collection_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } } & { json: AuthorsCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { collection_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { collection_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } } & { json: AuthorsCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } } & { json: AuthorsCreator }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/collections/:collection_id/authors/:author_id': {
      $delete:
        | {
            input: { param: { collection_id: bigint; author_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collection_id: bigint; author_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint; author_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint; author_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/collections/:collection_id/categories': {
      $get:
        | {
            input: { param: { collection_id: bigint } }
            output: Category[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { collection_id: bigint } } & { json: CategoriesCreator }
            output: Location
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CategoriesCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { collection_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CategoriesCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CategoriesCreator }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/collections/:collection_id/categories/:category_id': {
      $delete:
        | {
            input: { param: { collection_id: bigint; category_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collection_id: bigint; category_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint; category_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint; category_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/collections/:collection_id/private_links': {
      $get:
        | {
            input: { param: { collection_id: bigint } }
            output: PrivateLink[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { collection_id: bigint } } & { json: CollectionPrivateLinkCreator }
            output: PrivateLinkResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CollectionPrivateLinkCreator }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CollectionPrivateLinkCreator }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CollectionPrivateLinkCreator }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } } & { json: CollectionPrivateLinkCreator }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/collections/:collection_id/private_links/:link_id': {
      $delete:
        | {
            input: { param: { collection_id: bigint; link_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { collection_id: bigint; link_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint; link_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint; link_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint; link_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { collection_id: bigint; link_id: string } } & {
              json: CollectionPrivateLinkCreator
            }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { collection_id: bigint; link_id: string } } & {
              json: CollectionPrivateLinkCreator
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint; link_id: string } } & {
              json: CollectionPrivateLinkCreator
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint; link_id: string } } & {
              json: CollectionPrivateLinkCreator
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint; link_id: string } } & {
              json: CollectionPrivateLinkCreator
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { collection_id: bigint; link_id: string } } & {
              json: CollectionPrivateLinkCreator
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/collections/:collection_id/publish': {
      $post:
        | {
            input: { param: { collection_id: bigint } }
            output: Location
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/collections/:collection_id/reserve_doi': {
      $post:
        | {
            input: { param: { collection_id: bigint } }
            output: CollectionDOI
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/collections/:collection_id/reserve_handle': {
      $post:
        | {
            input: { param: { collection_id: bigint } }
            output: CollectionHandle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/collections/:collection_id/resource': {
      $post:
        | {
            input: { param: { collection_id: bigint } } & { json: Resource }
            output: Location
            outputFormat: 'json'
            status: 205
          }
        | {
            input: { param: { collection_id: bigint } } & { json: Resource }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { collection_id: bigint } } & { json: Resource }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } } & { json: Resource }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/account/funding/search': {
      $post:
        | {
            input: { json: FundingSearch }
            output: FundingInformation[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: FundingSearch }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { json: FundingSearch }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | { input: { json: FundingSearch }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/institution': {
      $get:
        | { input: {}; output: Institution; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/institution/accounts': {
      $get:
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                is_active?: bigint | undefined
                institution_user_id?: string | undefined
                email?: string | undefined
                id_lte?: bigint | undefined
                id_gte?: bigint | undefined
              }
            }
            output: ShortAccount[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                is_active?: bigint | undefined
                institution_user_id?: string | undefined
                email?: string | undefined
                id_lte?: bigint | undefined
                id_gte?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                is_active?: bigint | undefined
                institution_user_id?: string | undefined
                email?: string | undefined
                id_lte?: bigint | undefined
                id_gte?: bigint | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                is_active?: bigint | undefined
                institution_user_id?: string | undefined
                email?: string | undefined
                id_lte?: bigint | undefined
                id_gte?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | { input: { json: AccountCreate }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: AccountCreate }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { json: AccountCreate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | { input: { json: AccountCreate }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/institution/accounts/search': {
      $post:
        | {
            input: { json: InstitutionAccountsSearch }
            output: ShortAccount[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InstitutionAccountsSearch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: InstitutionAccountsSearch }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: InstitutionAccountsSearch }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/institution/accounts/:account_id': {
      $put:
        | {
            input: { param: { account_id: bigint } } & { json: AccountUpdate }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { account_id: bigint } } & { json: AccountUpdate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account_id: bigint } } & { json: AccountUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: bigint } } & { json: AccountUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account_id: bigint } } & { json: AccountUpdate }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/institution/articles': {
      $get:
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'downloads'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
                published_since?: string | undefined
                modified_since?: string | undefined
                status?: bigint | undefined
                resource_doi?: string | undefined
                item_type?: bigint | undefined
              }
            }
            output: Article[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'downloads'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
                published_since?: string | undefined
                modified_since?: string | undefined
                status?: bigint | undefined
                resource_doi?: string | undefined
                item_type?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'downloads'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
                published_since?: string | undefined
                modified_since?: string | undefined
                status?: bigint | undefined
                resource_doi?: string | undefined
                item_type?: bigint | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'downloads'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
                published_since?: string | undefined
                modified_since?: string | undefined
                status?: bigint | undefined
                resource_doi?: string | undefined
                item_type?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/institution/custom_fields': {
      $get:
        | {
            input: { query: { group_id?: bigint | undefined } }
            output: ShortCustomField[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { group_id?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { group_id?: bigint | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { group_id?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/institution/custom_fields/:custom_field_id/items/upload': {
      $post:
        | {
            input: { param: { custom_field_id: bigint } } & {
              form: { external_file?: File | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_field_id: bigint } } & {
              form: { external_file?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { custom_field_id: bigint } } & {
              form: { external_file?: File | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { custom_field_id: bigint } } & {
              form: { external_file?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { custom_field_id: bigint } } & {
              form: { external_file?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/institution/embargo_options': {
      $get:
        | { input: {}; output: GroupEmbargoOptions[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/institution/groups': {
      $get:
        | { input: {}; output: Group[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/institution/groups/:group_id/embargo_options': {
      $get:
        | {
            input: { param: { group_id: bigint } }
            output: GroupEmbargoOptions[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { group_id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { param: { group_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | { input: { param: { group_id: bigint } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/institution/review/:curation_id': {
      $get:
        | {
            input: { param: { curation_id: bigint } }
            output: CurationDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { curation_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { curation_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { curation_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { curation_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/institution/review/:curation_id/comments': {
      $get:
        | {
            input: { param: { curation_id: bigint } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: CurationComment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { curation_id: bigint } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { curation_id: bigint } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { curation_id: bigint } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { curation_id: bigint } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { curation_id: bigint } } & { json: CurationCommentCreate }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { curation_id: bigint } } & { json: CurationCommentCreate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { curation_id: bigint } } & { json: CurationCommentCreate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { curation_id: bigint } } & { json: CurationCommentCreate }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { curation_id: bigint } } & { json: CurationCommentCreate }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/institution/reviews': {
      $get:
        | {
            input: {
              query: {
                group_id?: bigint | undefined
                article_id?: bigint | undefined
                status?: 'pending' | 'approved' | 'rejected' | 'closed' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: Curation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                group_id?: bigint | undefined
                article_id?: bigint | undefined
                status?: 'pending' | 'approved' | 'rejected' | 'closed' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                group_id?: bigint | undefined
                article_id?: bigint | undefined
                status?: 'pending' | 'approved' | 'rejected' | 'closed' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                group_id?: bigint | undefined
                article_id?: bigint | undefined
                status?: 'pending' | 'approved' | 'rejected' | 'closed' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                group_id?: bigint | undefined
                article_id?: bigint | undefined
                status?: 'pending' | 'approved' | 'rejected' | 'closed' | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/institution/roles': {
      $get:
        | { input: {}; output: Role[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/institution/roles/:account_id': {
      $get:
        | {
            input: { param: { account_id: bigint } }
            output: AccountGroupRoles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { account_id: bigint } } & { json: AccountGroupRolesCreate }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { account_id: bigint } } & { json: AccountGroupRolesCreate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account_id: bigint } } & { json: AccountGroupRolesCreate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: bigint } } & { json: AccountGroupRolesCreate }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/institution/roles/:account_id/:group_id/:role_id': {
      $delete:
        | {
            input: { param: { account_id: bigint; group_id: bigint; role_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account_id: bigint; group_id: bigint; role_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account_id: bigint; group_id: bigint; role_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: bigint; group_id: bigint; role_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account_id: bigint; group_id: bigint; role_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/institution/users/:account_id': {
      $get:
        | {
            input: { param: { account_id: bigint } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/licenses': {
      $get:
        | { input: {}; output: License[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/projects': {
      $get:
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?: 'published_date' | 'modified_date' | 'views' | undefined
                order_direction?: 'asc' | 'desc' | undefined
                storage?: 'group' | 'individual' | undefined
                roles?: string | undefined
              }
            }
            output: ProjectPrivate[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?: 'published_date' | 'modified_date' | 'views' | undefined
                order_direction?: 'asc' | 'desc' | undefined
                storage?: 'group' | 'individual' | undefined
                roles?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?: 'published_date' | 'modified_date' | 'views' | undefined
                order_direction?: 'asc' | 'desc' | undefined
                storage?: 'group' | 'individual' | undefined
                roles?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?: 'published_date' | 'modified_date' | 'views' | undefined
                order_direction?: 'asc' | 'desc' | undefined
                storage?: 'group' | 'individual' | undefined
                roles?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: ProjectCreate }
            output: CreateProjectResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ProjectCreate }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { json: ProjectCreate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | { input: { json: ProjectCreate }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/projects/search': {
      $post:
        | {
            input: { json: ProjectsSearch }
            output: ProjectPrivate[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ProjectsSearch }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ProjectsSearch }; output: {}; outputFormat: string; status: 422 }
        | { input: { json: ProjectsSearch }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/account/projects/:project_id': {
      $delete:
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { project_id: bigint } }
            output: ProjectCompletePrivate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { project_id: bigint } } & { json: ProjectUpdate }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { project_id: bigint } } & { json: ProjectUpdate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint } } & { json: ProjectUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint } } & { json: ProjectUpdate }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/projects/:project_id/articles': {
      $get:
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: Article[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            } & { json: ArticleProjectCreate }
            output: LocationWarnings
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            } & { json: ArticleProjectCreate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            } & { json: ArticleProjectCreate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            } & { json: ArticleProjectCreate }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            } & { json: ArticleProjectCreate }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/projects/:project_id/articles/:article_id': {
      $delete:
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: ProjectArticle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/projects/:project_id/articles/:article_id/files': {
      $get:
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: PrivateFile[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/projects/:project_id/articles/:article_id/files/:file_id': {
      $get:
        | {
            input: { param: { project_id: bigint; article_id: bigint; file_id: bigint } }
            output: PrivateFile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint; file_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint; article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/projects/:project_id/collaborators': {
      $get:
        | {
            input: { param: { project_id: bigint } }
            output: ProjectCollaborator[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { project_id: bigint } } & { json: ProjectCollaboratorInvite }
            output: ResponseMessage
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: bigint } } & { json: ProjectCollaboratorInvite }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint } } & { json: ProjectCollaboratorInvite }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint } } & { json: ProjectCollaboratorInvite }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint } } & { json: ProjectCollaboratorInvite }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/projects/:project_id/collaborators/:user_id': {
      $delete:
        | {
            input: { param: { project_id: bigint; user_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: bigint; user_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint; user_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint; user_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint; user_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/projects/:project_id/leave': {
      $post:
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/projects/:project_id/notes': {
      $get:
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ProjectNote[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { project_id: bigint } } & { json: ProjectNoteCreate }
            output: Location
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: bigint } } & { json: ProjectNoteCreate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint } } & { json: ProjectNoteCreate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint } } & { json: ProjectNoteCreate }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint } } & { json: ProjectNoteCreate }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/projects/:project_id/notes/:note_id': {
      $delete:
        | {
            input: { param: { project_id: bigint; note_id: bigint } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: bigint; note_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint; note_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint; note_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { project_id: bigint; note_id: bigint } }
            output: ProjectNotePrivate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: bigint; note_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint; note_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint; note_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint; note_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { project_id: bigint; note_id: bigint } } & { json: ProjectNoteCreate }
            output: {}
            outputFormat: string
            status: 205
          }
        | {
            input: { param: { project_id: bigint; note_id: bigint } } & { json: ProjectNoteCreate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint; note_id: bigint } } & { json: ProjectNoteCreate }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint; note_id: bigint } } & { json: ProjectNoteCreate }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint; note_id: bigint } } & { json: ProjectNoteCreate }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/account/projects/:project_id/publish': {
      $post:
        | {
            input: { param: { project_id: bigint } }
            output: ResponseMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/articles': {
      $get:
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'downloads'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
                institution?: bigint | undefined
                published_since?: string | undefined
                modified_since?: string | undefined
                group?: bigint | undefined
                resource_doi?: string | undefined
                item_type?: bigint | undefined
                doi?: string | undefined
                handle?: string | undefined
              }
            } & { header: { 'X-Cursor'?: string | undefined } }
            output: Article[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'downloads'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
                institution?: bigint | undefined
                published_since?: string | undefined
                modified_since?: string | undefined
                group?: bigint | undefined
                resource_doi?: string | undefined
                item_type?: bigint | undefined
                doi?: string | undefined
                handle?: string | undefined
              }
            } & { header: { 'X-Cursor'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'downloads'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
                institution?: bigint | undefined
                published_since?: string | undefined
                modified_since?: string | undefined
                group?: bigint | undefined
                resource_doi?: string | undefined
                item_type?: bigint | undefined
                doi?: string | undefined
                handle?: string | undefined
              }
            } & { header: { 'X-Cursor'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'downloads'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
                institution?: bigint | undefined
                published_since?: string | undefined
                modified_since?: string | undefined
                group?: bigint | undefined
                resource_doi?: string | undefined
                item_type?: bigint | undefined
                doi?: string | undefined
                handle?: string | undefined
              }
            } & { header: { 'X-Cursor'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/articles/search': {
      $post:
        | {
            input: { header: { 'X-Cursor'?: string | undefined } } & { json: ArticleSearch }
            output: ArticleWithProject[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Cursor'?: string | undefined } } & { json: ArticleSearch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-Cursor'?: string | undefined } } & { json: ArticleSearch }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { header: { 'X-Cursor'?: string | undefined } } & { json: ArticleSearch }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/articles/:article_id': {
      $get:
        | {
            input: { param: { article_id: bigint } }
            output: ArticleComplete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/articles/:article_id/files': {
      $get:
        | {
            input: { param: { article_id: bigint } }
            output: PublicFile[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/articles/:article_id/files/:file_id': {
      $get:
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: PublicFile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint; file_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/articles/:article_id/versions': {
      $get:
        | {
            input: { param: { article_id: bigint } }
            output: ArticleVersions[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/articles/:article_id/versions/:v_number': {
      $get:
        | {
            input: { param: { article_id: bigint; v_number: bigint } }
            output: ArticleComplete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint; v_number: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint; v_number: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint; v_number: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/articles/:article_id/versions/:v_number/confidentiality': {
      $get:
        | {
            input: { param: { article_id: bigint; v_number: bigint } }
            output: ArticleConfidentiality
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint; v_number: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint; v_number: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint; v_number: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/articles/:article_id/versions/:v_number/embargo': {
      $get:
        | {
            input: { param: { article_id: bigint; v_number: bigint } }
            output: ArticleEmbargo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { article_id: bigint; v_number: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { article_id: bigint; v_number: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { article_id: bigint; v_number: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/categories': {
      $get:
        | { input: {}; output: Category[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/collections': {
      $get:
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
                institution?: bigint | undefined
                published_since?: string | undefined
                modified_since?: string | undefined
                group?: bigint | undefined
                resource_doi?: string | undefined
                doi?: string | undefined
                handle?: string | undefined
              }
            } & { header: { 'X-Cursor'?: string | undefined } }
            output: Collection[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
                institution?: bigint | undefined
                published_since?: string | undefined
                modified_since?: string | undefined
                group?: bigint | undefined
                resource_doi?: string | undefined
                doi?: string | undefined
                handle?: string | undefined
              }
            } & { header: { 'X-Cursor'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
                institution?: bigint | undefined
                published_since?: string | undefined
                modified_since?: string | undefined
                group?: bigint | undefined
                resource_doi?: string | undefined
                doi?: string | undefined
                handle?: string | undefined
              }
            } & { header: { 'X-Cursor'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?:
                  | 'published_date'
                  | 'modified_date'
                  | 'views'
                  | 'shares'
                  | 'cites'
                  | undefined
                order_direction?: 'asc' | 'desc' | undefined
                institution?: bigint | undefined
                published_since?: string | undefined
                modified_since?: string | undefined
                group?: bigint | undefined
                resource_doi?: string | undefined
                doi?: string | undefined
                handle?: string | undefined
              }
            } & { header: { 'X-Cursor'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/collections/search': {
      $post:
        | {
            input: { header: { 'X-Cursor'?: string | undefined } } & { json: CollectionSearch }
            output: Collection[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Cursor'?: string | undefined } } & { json: CollectionSearch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-Cursor'?: string | undefined } } & { json: CollectionSearch }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { header: { 'X-Cursor'?: string | undefined } } & { json: CollectionSearch }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/collections/:collection_id': {
      $get:
        | {
            input: { param: { collection_id: bigint } }
            output: CollectionComplete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/collections/:collection_id/articles': {
      $get:
        | {
            input: { param: { collection_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: Article[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { collection_id: bigint } } & {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/collections/:collection_id/versions': {
      $get:
        | {
            input: { param: { collection_id: bigint } }
            output: CollectionVersions[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/collections/:collection_id/versions/:version_id': {
      $get:
        | {
            input: { param: { collection_id: bigint; version_id: bigint } }
            output: CollectionComplete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collection_id: bigint; version_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { collection_id: bigint; version_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { collection_id: bigint; version_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/file/download/:file_id': {
      $get:
        | { input: { param: { file_id: bigint } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { file_id: bigint } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/institution/hrfeed/upload': {
      $post:
        | {
            input: { form: { hrfeed?: File | undefined } }
            output: ResponseMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { hrfeed?: File | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { form: { hrfeed?: File | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { form: { hrfeed?: File | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/institutions/:institution_string_id/articles/filter-by': {
      $get:
        | {
            input: { param: { institution_string_id: string } } & {
              query: { resource_id: string; filename: string }
            }
            output: Article[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { institution_string_id: string } } & {
              query: { resource_id: string; filename: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/item_types': {
      $get:
        | {
            input: { query: { group_id?: bigint | undefined } }
            output: ItemType[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { group_id?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { group_id?: bigint | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { group_id?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { group_id?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/licenses': {
      $get:
        | { input: {}; output: License[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/projects': {
      $get:
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?: 'published_date' | 'modified_date' | 'views' | undefined
                order_direction?: 'asc' | 'desc' | undefined
                institution?: bigint | undefined
                published_since?: string | undefined
                group?: bigint | undefined
              }
            } & { header: { 'X-Cursor'?: string | undefined } }
            output: Project[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?: 'published_date' | 'modified_date' | 'views' | undefined
                order_direction?: 'asc' | 'desc' | undefined
                institution?: bigint | undefined
                published_since?: string | undefined
                group?: bigint | undefined
              }
            } & { header: { 'X-Cursor'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?: 'published_date' | 'modified_date' | 'views' | undefined
                order_direction?: 'asc' | 'desc' | undefined
                institution?: bigint | undefined
                published_since?: string | undefined
                group?: bigint | undefined
              }
            } & { header: { 'X-Cursor'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: {
              query: {
                page?: bigint | undefined
                page_size?: bigint | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                order?: 'published_date' | 'modified_date' | 'views' | undefined
                order_direction?: 'asc' | 'desc' | undefined
                institution?: bigint | undefined
                published_since?: string | undefined
                group?: bigint | undefined
              }
            } & { header: { 'X-Cursor'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/projects/search': {
      $post:
        | {
            input: { header: { 'X-Cursor'?: string | undefined } } & { json: ProjectsSearch }
            output: Project[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Cursor'?: string | undefined } } & { json: ProjectsSearch }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-Cursor'?: string | undefined } } & { json: ProjectsSearch }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { header: { 'X-Cursor'?: string | undefined } } & { json: ProjectsSearch }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/projects/:project_id': {
      $get:
        | {
            input: { param: { project_id: bigint } }
            output: ProjectComplete
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/projects/:project_id/articles': {
      $get:
        | {
            input: { param: { project_id: bigint } }
            output: Article[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { project_id: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes

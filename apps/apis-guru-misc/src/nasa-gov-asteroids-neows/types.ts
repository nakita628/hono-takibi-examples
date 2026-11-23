type TechnologyArea = {
  code?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
}
type CloseoutDocument = string
type Organization = {
  acronym?: string | undefined
  city?: string | undefined
  name?: string | undefined
  state?: string | undefined
}
type CoInvestigator = string
type Destination = string
type File2 = { id?: bigint | undefined; size?: string | undefined; url?: string | undefined }
type LibraryItem = {
  completionDate?: string | undefined
  description?: string | undefined
  externalUrl?: string | undefined
  files?: File2[] | undefined
  id?: bigint | undefined
  publishedBy?: string | undefined
  publishedDate?: string | undefined
  title?: string | undefined
  type?: string | undefined
}
type PrincipalInvestigator = string
type ProgramDirector = string
type ProgramManager = string
type ProjectManager = string
type WorkLocation = string
type Project = {
  acronym?: string | undefined
  additionalTas?: TechnologyArea[] | undefined
  benefits?: string | undefined
  closeoutDocuments?: CloseoutDocument[] | undefined
  closeoutSummary?: string | undefined
  coFundingPartners?: Organization[] | undefined
  coInvestigators?: CoInvestigator[] | undefined
  description?: string | undefined
  destinations?: Destination[] | undefined
  endDate?: string | undefined
  id?: bigint | undefined
  lastUpdated?: string | undefined
  leadOrganization?: Organization | undefined
  libraryItems?: LibraryItem[] | undefined
  primaryTas?: TechnologyArea[] | undefined
  principalInvestigators?: PrincipalInvestigator[] | undefined
  programDirectors?: ProgramDirector[] | undefined
  programManagers?: ProgramManager[] | undefined
  projectManagers?: ProjectManager[] | undefined
  responsibleMissionDirectorateOrOffice?: string | undefined
  responsibleProgram?: string | undefined
  startDate?: string | undefined
  status?: string | undefined
  supportedMissionType?: string | undefined
  supportingOrganizations?: Organization[] | undefined
  technologyMaturityCurrent?: string | undefined
  technologyMaturityEnd?: string | undefined
  technologyMaturityStart?: string | undefined
  title?: string | undefined
  website?: string | undefined
  workLocations?: WorkLocation[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/projects/:id{.format}': {
      $get:
        | {
            input: { param: { id: bigint; '.format': string } } & {
              query: { format: 'json' | 'xml' }
            }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; '.format': string } } & {
              query: { format: 'json' | 'xml' }
            }
            output: Project
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: bigint; '.format': string } } & {
              query: { format: 'json' | 'xml' }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  } & {
    '/api/projects{.format}': {
      $get:
        | {
            input: { param: { '.format': string } } & {
              query: { updatedSince: string; format: 'json' | 'xml' }
            }
            output: { id?: bigint | undefined; lastUpdated?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { '.format': string } } & {
              query: { updatedSince: string; format: 'json' | 'xml' }
            }
            output: { id?: bigint | undefined; lastUpdated?: string | undefined }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { '.format': string } } & {
              query: { updatedSince: string; format: 'json' | 'xml' }
            }
            output: {}
            outputFormat: string
            status: 200
          }
    }
  },
  '/'
>
export default routes

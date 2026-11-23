type SurveyDetail = {
  id?: string | undefined
  name?: (string | null) | undefined
  title?: (string | null) | undefined
}
type DataItem = {
  ident?: (string | null) | undefined
  parentIdent?:
    | {
        parentValueIdent?: (string | null) | undefined
        parentVariableIdent?: (string | null) | undefined
      }
    | undefined
  values?: (string[] | null) | undefined
}
type HierarchicalInterview = {
  dataItems?: (DataItem[] | null) | undefined
  hierarchicalInterviews?: (HierarchicalInterview[] | null) | undefined
  ident?: (string | null) | undefined
  level?: { ident?: (string | null) | undefined } | undefined
}
type Interview = {
  dataItems?: (DataItem[] | null) | undefined
  hierarchicalInterviews?: (HierarchicalInterview[] | null) | undefined
  ident?: (string | null) | undefined
}
type Language = {
  ident?: (string | null) | undefined
  name?: (string | null) | undefined
  subLanguages?: (Language[] | null) | undefined
}
type AltLabel = {
  langIdent?: (string | null) | undefined
  mode?: {} | undefined
  text?: (string | null) | undefined
}
type Value = {
  code?: (string | null) | undefined
  ident?: (string | null) | undefined
  label?:
    | { altLabels?: (AltLabel[] | null) | undefined; text?: (string | null) | undefined }
    | undefined
  score?: (number | null) | undefined
}
type Variable = {
  ident?: (string | null) | undefined
  label?:
    | { altLabels?: (AltLabel[] | null) | undefined; text?: (string | null) | undefined }
    | undefined
  maxResponses?: number | undefined
  name?: (string | null) | undefined
  parentType?: {} | undefined
  questions?: (Variable[] | null) | undefined
  type?: {} | undefined
  use?: {} | undefined
  variableValues?:
    | {
        range?: { from?: (string | null) | undefined; to?: (string | null) | undefined } | undefined
        values?: (Value[] | null) | undefined
      }
    | undefined
}
type Hierarchy = {
  ident?: (string | null) | undefined
  metadata?:
    | {
        interviewCount?: number | undefined
        languages?: (Language[] | null) | undefined
        name?: (string | null) | undefined
        title?: (string | null) | undefined
        variables?: (Variable[] | null) | undefined
      }
    | undefined
  parent?:
    | {
        level?: (string | null) | undefined
        linkVar?: (string | null) | undefined
        ordered?: boolean | undefined
      }
    | undefined
}
type SurveyMetadata = {
  hierarchies?: (Hierarchy[] | null) | undefined
  interviewCount?: number | undefined
  languages?: (Language[] | null) | undefined
  name?: (string | null) | undefined
  title?: (string | null) | undefined
  variables?: (Variable[] | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Surveys': {
      $get:
        | { input: {}; output: SurveyDetail[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: SurveyDetail[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: SurveyDetail[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/Surveys/:surveyId/Interviews': {
      $get:
        | {
            input: { param: { surveyId: string } } & {
              query: { start?: number | undefined; maxLength?: number | undefined }
            }
            output: Interview[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { surveyId: string } } & {
              query: { start?: number | undefined; maxLength?: number | undefined }
            }
            output: Interview[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { surveyId: string } } & {
              query: { start?: number | undefined; maxLength?: number | undefined }
            }
            output: Interview[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/Surveys/:surveyId/Metadata': {
      $get:
        | {
            input: { param: { surveyId: string } }
            output: SurveyMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { surveyId: string } }
            output: SurveyMetadata
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { surveyId: string } }
            output: SurveyMetadata
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes

type AnnunciatorMessageType = 'CommonsMain' | 'LordsMain'
type ScrollingMessageAlertType =
  | 'Standard'
  | 'SecondaryChamber'
  | 'Alert'
  | 'SecurityNormal'
  | 'SecurityHigh'
type VerticalAlignment = 'Top' | 'Middle' | 'Bottom'
type ScrollingMessageViewModel = {
  alertType?: ScrollingMessageAlertType | undefined
  content?: (string | null) | undefined
  displayFrom?: string | undefined
  displayTo?: (string | null) | undefined
  id?: number | undefined
  verticalAlignment?: VerticalAlignment | undefined
}
type ContentType = 'Generic' | 'Member' | 'OralQuestionTime' | 'AnsweringBody' | 'Bill'
type HorizontalAlignment = 'Left' | 'Right' | 'Centre'
type HouseMembershipViewModel = { membershipFrom?: (string | null) | undefined }
type PartyViewModel = {
  backgroundColour?: (string | null) | undefined
  id?: number | undefined
  name?: (string | null) | undefined
}
type MemberViewModel = {
  id?: number | undefined
  latestHouseMembership?: HouseMembershipViewModel | undefined
  latestParty?: PartyViewModel | undefined
  nameAddressAs?: (string | null) | undefined
  nameDisplayAs?: (string | null) | undefined
  nameFullTitle?: (string | null) | undefined
  nameListAs?: (string | null) | undefined
  thumbnailUrl?: (string | null) | undefined
}
type ContentStyle =
  | 'DividerSolid'
  | 'EmptyLine'
  | 'Member'
  | 'Footer'
  | 'AnsweringBody'
  | 'WestminsterHallInfo'
  | 'GrandCommitteeInfo'
  | 'DividerDotted'
  | 'DividerDashed'
  | 'Division'
  | 'Text150'
  | 'Text140'
  | 'Text130'
  | 'Text120'
  | 'Text110'
  | 'Text100'
  | 'Text90'
  | 'Text80'
  | 'Text70'
type LineViewModel = {
  content?: (string | null) | undefined
  contentAdditionalJson?: (string | null) | undefined
  contentType?: ContentType | undefined
  contentUrl?: (string | null) | undefined
  displayOrder?: number | undefined
  forceCapitalisation?: boolean | undefined
  horizontalAlignment?: HorizontalAlignment | undefined
  member?: MemberViewModel | undefined
  style?: ContentStyle | undefined
  verticalAlignment?: VerticalAlignment | undefined
}
type Sounds = 'NewSlide' | 'DivisionBell' | 'Alert' | 'GenericBeep'
type SlideType =
  | 'Debate'
  | 'Division'
  | 'OralQuestionTime'
  | 'UrgentQuestion'
  | 'Statement'
  | 'Prayers'
  | 'HouseRisen'
  | 'Generic'
  | 'NotSitting'
  | 'PrimeMinistersQuestions'
  | 'PointsOfOrder'
  | 'BlankSlide'
type SlideViewModel = {
  carouselDisplaySeconds?: (number | null) | undefined
  carouselOrder?: (number | null) | undefined
  id?: number | undefined
  lines?: (LineViewModel[] | null) | undefined
  slideTime?: (string | null) | undefined
  soundToPlay?: Sounds | undefined
  speakerTime?: (string | null) | undefined
  type?: SlideType | undefined
}
type MessageViewModel = {
  annunciatorDisabled?: boolean | undefined
  annunciatorType?: AnnunciatorMessageType | undefined
  id?: number | undefined
  isSecurityOverride?: boolean | undefined
  publishTime?: string | undefined
  scrollingMessages?: (ScrollingMessageViewModel[] | null) | undefined
  showCommonsBell?: boolean | undefined
  showLordsBell?: boolean | undefined
  slides?: (SlideViewModel[] | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/Message/message/:annunciator/current': {
      $get:
        | {
            input: { param: { annunciator: AnnunciatorMessageType } }
            output: MessageViewModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { annunciator: AnnunciatorMessageType } }
            output: MessageViewModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { annunciator: AnnunciatorMessageType } }
            output: MessageViewModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { annunciator: AnnunciatorMessageType } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Message/message/:annunciator/:date': {
      $get:
        | {
            input: { param: { annunciator: AnnunciatorMessageType; date: string } }
            output: MessageViewModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { annunciator: AnnunciatorMessageType; date: string } }
            output: MessageViewModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { annunciator: AnnunciatorMessageType; date: string } }
            output: MessageViewModel
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { annunciator: AnnunciatorMessageType; date: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { annunciator: AnnunciatorMessageType; date: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes

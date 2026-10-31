import { createRoute, z } from '@hono/zod-openapi'

const AnnunciatorMessageTypeSchema = z
  .enum(['CommonsMain', 'LordsMain'])
  .openapi('AnnunciatorMessageType')

const ScrollingMessageAlertTypeSchema = z
  .enum(['Standard', 'SecondaryChamber', 'Alert', 'SecurityNormal', 'SecurityHigh'])
  .openapi('ScrollingMessageAlertType')

const VerticalAlignmentSchema = z.enum(['Top', 'Middle', 'Bottom']).openapi('VerticalAlignment')

const ScrollingMessageViewModelSchema = z
  .strictObject({
    alertType: ScrollingMessageAlertTypeSchema.exactOptional(),
    content: z.string().nullable().exactOptional(),
    displayFrom: z.iso.datetime({ offset: true }).exactOptional(),
    displayTo: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    verticalAlignment: VerticalAlignmentSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScrollingMessageViewModel')

const ContentTypeSchema = z
  .enum(['Generic', 'Member', 'OralQuestionTime', 'AnsweringBody', 'Bill'])
  .openapi('ContentType')

const HorizontalAlignmentSchema = z.enum(['Left', 'Right', 'Centre']).openapi('HorizontalAlignment')

const HouseMembershipViewModelSchema = z
  .strictObject({ membershipFrom: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('HouseMembershipViewModel')

const PartyViewModelSchema = z
  .strictObject({
    backgroundColour: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PartyViewModel')

const MemberViewModelSchema = z
  .strictObject({
    id: z.int32().exactOptional(),
    latestHouseMembership: HouseMembershipViewModelSchema.exactOptional(),
    latestParty: PartyViewModelSchema.exactOptional(),
    nameAddressAs: z.string().nullable().exactOptional(),
    nameDisplayAs: z.string().nullable().exactOptional(),
    nameFullTitle: z.string().nullable().exactOptional(),
    nameListAs: z.string().nullable().exactOptional(),
    thumbnailUrl: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberViewModel')

const ContentStyleSchema = z
  .enum([
    'DividerSolid',
    'EmptyLine',
    'Member',
    'Footer',
    'AnsweringBody',
    'WestminsterHallInfo',
    'GrandCommitteeInfo',
    'DividerDotted',
    'DividerDashed',
    'Division',
    'Text150',
    'Text140',
    'Text130',
    'Text120',
    'Text110',
    'Text100',
    'Text90',
    'Text80',
    'Text70',
  ])
  .openapi('ContentStyle')

const LineViewModelSchema = z
  .strictObject({
    content: z.string().nullable().exactOptional(),
    contentAdditionalJson: z.string().nullable().exactOptional(),
    contentType: ContentTypeSchema.exactOptional(),
    contentUrl: z.string().nullable().exactOptional(),
    displayOrder: z.int32().exactOptional(),
    forceCapitalisation: z.boolean().exactOptional(),
    horizontalAlignment: HorizontalAlignmentSchema.exactOptional(),
    member: MemberViewModelSchema.exactOptional(),
    style: ContentStyleSchema.exactOptional(),
    verticalAlignment: VerticalAlignmentSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LineViewModel')

const SoundsSchema = z.enum(['NewSlide', 'DivisionBell', 'Alert', 'GenericBeep']).openapi('Sounds')

const SlideTypeSchema = z
  .enum([
    'Debate',
    'Division',
    'OralQuestionTime',
    'UrgentQuestion',
    'Statement',
    'Prayers',
    'HouseRisen',
    'Generic',
    'NotSitting',
    'PrimeMinistersQuestions',
    'PointsOfOrder',
    'BlankSlide',
  ])
  .openapi('SlideType')

const SlideViewModelSchema = z
  .strictObject({
    carouselDisplaySeconds: z.int32().nullable().exactOptional(),
    carouselOrder: z.int32().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    lines: z.array(LineViewModelSchema).nullable().exactOptional(),
    slideTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    soundToPlay: SoundsSchema.exactOptional(),
    speakerTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    type: SlideTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SlideViewModel')

type MessageViewModelType = {
  annunciatorDisabled?: boolean
  annunciatorType?: z.infer<typeof AnnunciatorMessageTypeSchema>
  id?: number
  isSecurityOverride?: boolean
  publishTime?: string
  scrollingMessages?: z.infer<typeof ScrollingMessageViewModelSchema>[] | null
  showCommonsBell?: boolean
  showLordsBell?: boolean
  slides?: z.infer<typeof SlideViewModelSchema>[] | null
}

const MessageViewModelSchema: z.ZodType<MessageViewModelType> = z
  .lazy(() =>
    z
      .strictObject({
        annunciatorDisabled: z.boolean().exactOptional(),
        annunciatorType: AnnunciatorMessageTypeSchema.exactOptional(),
        id: z.int32().exactOptional(),
        isSecurityOverride: z.boolean().exactOptional(),
        publishTime: z.iso.datetime({ offset: true }).exactOptional(),
        scrollingMessages: z.array(ScrollingMessageViewModelSchema).nullable().exactOptional(),
        showCommonsBell: z.boolean().exactOptional(),
        showLordsBell: z.boolean().exactOptional(),
        slides: z.array(SlideViewModelSchema).nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('MessageViewModel')

export const getApiMessageMessageAnnunciatorCurrentRoute = createRoute({
  method: 'get',
  path: '/api/Message/message/{annunciator}/current',
  tags: ['Message'],
  summary: 'Return the current message by annunciator type',
  request: {
    params: z.object({
      annunciator: AnnunciatorMessageTypeSchema.openapi({
        param: {
          description: 'Current message by annunciator',
          in: 'path',
          name: 'annunciator',
          required: true,
          schema: { $ref: '#/components/schemas/AnnunciatorMessageType' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MessageViewModelSchema },
        'text/json': { schema: MessageViewModelSchema },
        'text/plain': { schema: MessageViewModelSchema },
      },
    },
    404: { description: 'Not Found' },
  },
})

export const getApiMessageMessageAnnunciatorDateRoute = createRoute({
  method: 'get',
  path: '/api/Message/message/{annunciator}/{date}',
  tags: ['Message'],
  summary: 'Return the most recent message by annunciator after date time specified',
  request: {
    params: z.object({
      annunciator: AnnunciatorMessageTypeSchema.openapi({
        param: {
          description: 'Message by annunciator type',
          in: 'path',
          name: 'annunciator',
          required: true,
          schema: { $ref: '#/components/schemas/AnnunciatorMessageType' },
        },
      }),
      date: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'First message after date time specified',
            in: 'path',
            name: 'date',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Latest message for given annunciator was issued before specified date',
      content: {
        'application/json': { schema: MessageViewModelSchema },
        'text/json': { schema: MessageViewModelSchema },
        'text/plain': { schema: MessageViewModelSchema },
      },
    },
    400: { description: "Date provided wasn't in a valid format" },
    404: { description: 'No message for given annunciator was issued before specified date' },
  },
})

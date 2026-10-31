import { createRoute, z } from '@hono/zod-openapi'

const ActionsSchema = z
  .object({
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
  })
  .openapi({ xml: { name: 'action' }, required: [] })
  .openapi('Actions')

const ActionsCommentsSchema = z
  .object({
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('ActionsComments')

const ActionsTextSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
  })
  .openapi({ xml: { name: 'action' }, required: [] })
  .openapi('ActionsText')

const BoardsSchema = z
  .object({
    closed: z.string().exactOptional().openapi({ description: ' true or false' }),
    desc: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    idBoardSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the board to copy into the new board' }),
    idOrganization: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id or name of the organization to add the board to.' }),
    keepFromSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'Components of the source board to copy.' }),
    'labelNames/blue': z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    'labelNames/green': z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    'labelNames/orange': z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    'labelNames/purple': z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    'labelNames/red': z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    'labelNames/yellow': z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
    powerUps: z
      .string()
      .exactOptional()
      .openapi({
        description: 'all or a comma-separated list of: calendar, cardAging, recap or voting',
      }),
    'prefs/background': z
      .string()
      .exactOptional()
      .openapi({ description: 'A standard background name, or the id of a custom background' }),
    'prefs/calendarFeedEnabled': z
      .string()
      .exactOptional()
      .openapi({ description: ' true or false' }),
    'prefs/cardAging': z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: pirate or regular' }),
    'prefs/cardCovers': z.string().exactOptional().openapi({ description: ' true or false' }),
    'prefs/comments': z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: disabled, members, observers, org or public' }),
    'prefs/invitations': z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: admins or members' }),
    'prefs/permissionLevel': z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: org, private or public' }),
    'prefs/selfJoin': z.string().exactOptional().openapi({ description: ' true or false' }),
    'prefs/voting': z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: disabled, members, observers, org or public' }),
    prefs_background: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    prefs_cardAging: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: pirate or regular' }),
    prefs_cardCovers: z.string().exactOptional().openapi({ description: ' true or false' }),
    prefs_comments: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: disabled, members, observers, org or public' }),
    prefs_invitations: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: admins or members' }),
    prefs_permissionLevel: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: org, private or public' }),
    prefs_selfJoin: z.string().exactOptional().openapi({ description: ' true or false' }),
    prefs_voting: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: disabled, members, observers, org or public' }),
    subscribed: z.string().exactOptional().openapi({ description: ' true or false' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('Boards')

const BoardsChecklistsSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('BoardsChecklists')

const BoardsClosedSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('BoardsClosed')

const BoardsDescSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('BoardsDesc')

const BoardsIdOrganizationSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('BoardsIdOrganization')

const BoardsLabelsSchema = z
  .object({
    color: z.string().exactOptional().openapi({ description: 'A valid label color or null' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('BoardsLabels')

const BoardsListsSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
    pos: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('BoardsLists')

const BoardsMembersSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: 'An email address' }),
    fullName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string with a length of at least 1.  Cannot begin or end with a space.',
      }),
    type: z.string().exactOptional().openapi({ description: 'One of: admin, normal or observer' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('BoardsMembers')

const BoardsMembershipsSchema = z
  .object({
    member_fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
      }),
    type: z.string().exactOptional().openapi({ description: 'One of: admin, normal or observer' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('BoardsMemberships')

const BoardsNameSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('BoardsName')

const BoardsPowerUpsSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: calendar, cardAging, recap or voting' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('BoardsPowerUps')

const BoardsSubscribedSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('BoardsSubscribed')

const CardsSchema = z
  .object({
    closed: z.string().exactOptional().openapi({ description: ' true or false' }),
    desc: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    due: z.string().exactOptional().openapi({ description: 'A date, or null' }),
    fileSource: z.string().exactOptional().openapi({ description: 'A file' }),
    idAttachmentCover: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the image attachment of this card to use as its cover, or null for no cover',
      }),
    idBoard: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the board the card should be moved to' }),
    idCardSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the card to copy into a new card.' }),
    idLabels: z
      .string()
      .exactOptional()
      .openapi({ description: 'A comma-separated list of objectIds, 24-character hex strings' }),
    idList: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the list that the card should be added to' }),
    idMembers: z
      .string()
      .exactOptional()
      .openapi({ description: 'A comma-separated list of objectIds, 24-character hex strings' }),
    keepFromSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'Properties of the card to copy over from the source.' }),
    labels: z
      .string()
      .exactOptional()
      .openapi({
        description: 'all or a comma-separated list of: blue, green, orange, purple, red or yellow',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the new card.  It isn&#39;t required if the name is being copied from provided by a URL, file or card that is being copied.',
      }),
    pos: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
    subscribed: z.string().exactOptional().openapi({ description: ' true or false' }),
    urlSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL starting with http:// or https:// or null' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('Cards')

const CardsActionsCommentsSchema = z
  .object({
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsActionsComments')

const CardsAttachmentsSchema = z
  .object({
    file: z.string().exactOptional().openapi({ description: 'A file' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 256' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 256' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL starting with http:// or https:// or null' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsAttachments')

const CardsChecklistCheckItemSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
    pos: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsChecklistCheckItem')

const CardsChecklistCheckItemNameSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsChecklistCheckItemName')

const CardsChecklistCheckItemPosSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsChecklistCheckItemPos')

const CardsChecklistCheckItemStateSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: complete, false, incomplete or true' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsChecklistCheckItemState')

const CardsChecklistIdChecklistCurrentCheckItemSchema = z
  .object({
    idChecklist: z.string().exactOptional().openapi({ description: 'An id, or null' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
    pos: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: complete, false, incomplete or true' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsChecklistIdChecklistCurrentCheckItem')

const CardsChecklistsSchema = z
  .object({
    idChecklistSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the source checklist to copy into a new checklist.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the checklist to add to the card, or null to create a new one.',
      }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsChecklists')

const CardsClosedSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsClosed')

const CardsDescSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsDesc')

const CardsDueSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: 'A date, or null' }) })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsDue')

const CardsIdAttachmentCoverSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the image attachment of this card to use as its cover, or null for no cover',
      }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsIdAttachmentCover')

const CardsIdBoardSchema = z
  .object({
    idList: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the list that the card should be moved to on the new board' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the board the card should be moved to' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsIdBoard')

const CardsIdLabelsSchema = z
  .object({
    value: z.string().exactOptional().openapi({ description: 'The id of the label to add' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsIdLabels')

const CardsIdListSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the list the card should be moved to' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsIdList')

const CardsIdMembersSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the member to add to the card' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsIdMembers')

const CardsLabelsSchema = z
  .object({
    color: z.string().exactOptional().openapi({ description: 'A valid label color or null' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'all or a comma-separated list of: blue, green, orange, purple, red or yellow',
      }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsLabels')

const CardsMembersVotedSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the member to vote &#39;yes&#39; on the card' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsMembersVoted')

const CardsNameSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsName')

const CardsPosSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsPos')

const CardsStickersSchema = z
  .object({
    image: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    left: z.string().exactOptional().openapi({ description: 'undefined' }),
    rotate: z.string().exactOptional().openapi({ description: 'undefined' }),
    top: z.string().exactOptional().openapi({ description: 'undefined' }),
    zIndex: z
      .string()
      .exactOptional()
      .openapi({ description: 'Valid Z values for stickers, must be an integer' }),
  })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsStickers')

const CardsSubscribedSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'card' }, required: [] })
  .openapi('CardsSubscribed')

const ChecklistsSchema = z
  .object({
    idBoard: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the board that the checklist should be added to' }),
    idCard: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the card that the checklist should be added to' }),
    idChecklistSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the source checklist to copy into a new checklist.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    pos: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
  })
  .openapi({ xml: { name: 'checklist' }, required: [] })
  .openapi('Checklists')

const ChecklistsCheckItemsSchema = z
  .object({
    checked: z.string().exactOptional().openapi({ description: ' true or false' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
    pos: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
  })
  .openapi({ xml: { name: 'checklist' }, required: [] })
  .openapi('ChecklistsCheckItems')

const ChecklistsIdCardSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the card that the checklist is on' }),
  })
  .openapi({ xml: { name: 'checklist' }, required: [] })
  .openapi('ChecklistsIdCard')

const ChecklistsNameSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
  })
  .openapi({ xml: { name: 'checklist' }, required: [] })
  .openapi('ChecklistsName')

const ChecklistsPosSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
  })
  .openapi({ xml: { name: 'checklist' }, required: [] })
  .openapi('ChecklistsPos')

const LabelNamesBlueSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('LabelNamesBlue')

const LabelNamesGreenSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('LabelNamesGreen')

const LabelNamesOrangeSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('LabelNamesOrange')

const LabelNamesPurpleSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('LabelNamesPurple')

const LabelNamesRedSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('LabelNamesRed')

const LabelNamesYellowSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('LabelNamesYellow')

const LabelsSchema = z
  .object({
    color: z.string().exactOptional().openapi({ description: 'A valid label color or null' }),
    idBoard: z.string().exactOptional().openapi({ description: 'An id' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'label' }, required: [] })
  .openapi('Labels')

const LabelsColorSchema = z
  .object({
    value: z.string().exactOptional().openapi({ description: 'A valid label color or null' }),
  })
  .openapi({ xml: { name: 'label' }, required: [] })
  .openapi('LabelsColor')

const LabelsNameSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'label' }, required: [] })
  .openapi('LabelsName')

const ListsSchema = z
  .object({
    closed: z.string().exactOptional().openapi({ description: ' true or false' }),
    idBoard: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the board that the list should be added to' }),
    idListSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the list to copy into a new list.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
    pos: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
    subscribed: z.string().exactOptional().openapi({ description: ' true or false' }),
  })
  .openapi({ xml: { name: 'list' }, required: [] })
  .openapi('Lists')

const ListsCardsSchema = z
  .object({
    desc: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    due: z.string().exactOptional().openapi({ description: 'A date, or null' }),
    idMembers: z
      .string()
      .exactOptional()
      .openapi({ description: 'A comma-separated list of objectIds, 24-character hex strings' }),
    labels: z
      .string()
      .exactOptional()
      .openapi({
        description: 'all or a comma-separated list of: blue, green, orange, purple, red or yellow',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
  })
  .openapi({ xml: { name: 'list' }, required: [] })
  .openapi('ListsCards')

const ListsClosedSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'list' }, required: [] })
  .openapi('ListsClosed')

const ListsIdBoardSchema = z
  .object({
    pos: z
      .string()
      .exactOptional()
      .openapi({ description: 'position of the list on the new board' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the board the list should be moved to' }),
  })
  .openapi({ xml: { name: 'list' }, required: [] })
  .openapi('ListsIdBoard')

const ListsMoveAllCardsSchema = z
  .object({
    idBoard: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the board that the cards should be moved to' }),
  })
  .openapi({ xml: { name: 'list' }, required: [] })
  .openapi('ListsMoveAllCards')

const ListsNameSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
  })
  .openapi({ xml: { name: 'list' }, required: [] })
  .openapi('ListsName')

const ListsPosSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
  })
  .openapi({ xml: { name: 'list' }, required: [] })
  .openapi('ListsPos')

const ListsSubscribedSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'list' }, required: [] })
  .openapi('ListsSubscribed')

const MembersSchema = z
  .object({
    avatarSource: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: gravatar, none or upload' }),
    bio: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    fullName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string with a length of at least 1.  Cannot begin or end with a space.',
      }),
    initials: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string with a length from 1 to 4.  Cannot begin or end with a space',
      }),
    'prefs/colorBlind': z.string().exactOptional().openapi({ description: ' true or false' }),
    'prefs/locale': z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 255' }),
    'prefs/minutesBetweenSummaries': z
      .string()
      .exactOptional()
      .openapi({ description: '-1 (disabled), 1 or 60' }),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.',
      }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('Members')

const MembersAvatarSchema = z
  .object({ file: z.string().exactOptional().openapi({ description: 'A file' }) })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersAvatar')

const MembersAvatarSourceSchema = z
  .object({
    value: z.string().exactOptional().openapi({ description: 'One of: gravatar, none or upload' }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersAvatarSource')

const MembersBioSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersBio')

const MembersBoardBackgroundsSchema = z
  .object({
    brightness: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: dark, light or unknown' }),
    file: z.string().exactOptional().openapi({ description: 'A file' }),
    tile: z.string().exactOptional().openapi({ description: ' true or false' }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersBoardBackgrounds')

const MembersBoardStarsSchema = z
  .object({
    idBoard: z.string().exactOptional().openapi({ description: 'The id of the board to star' }),
    pos: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersBoardStars')

const MembersBoardStarsIdBoardSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: 'An id' }) })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersBoardStarsIdBoard')

const MembersBoardStarsPosSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersBoardStarsPos')

const MembersCustomBoardBackgroundsSchema = z
  .object({
    brightness: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: dark, light or unknown' }),
    file: z.string().exactOptional().openapi({ description: 'A file' }),
    tile: z.string().exactOptional().openapi({ description: ' true or false' }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersCustomBoardBackgrounds')

const MembersCustomEmojiSchema = z
  .object({
    file: z.string().exactOptional().openapi({ description: 'A file' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 2 to 64' }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersCustomEmoji')

const MembersCustomStickersSchema = z
  .object({ file: z.string().exactOptional().openapi({ description: 'A file' }) })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersCustomStickers')

const MembersFullNameSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string with a length of at least 1.  Cannot begin or end with a space.',
      }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersFullName')

const MembersInitialsSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string with a length from 1 to 4.  Cannot begin or end with a space',
      }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersInitials')

const MembersOneTimeMessagesDismissedSchema = z
  .object({
    value: z.string().exactOptional().openapi({ description: 'Type of message dismissed' }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersOneTimeMessagesDismissed')

const MembersSavedSearchesSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A non-empty string with at least one non-space character' }),
    pos: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
    query: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersSavedSearches')

const MembersSavedSearchesNameSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'A non-empty string with at least one non-space character' }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersSavedSearchesName')

const MembersSavedSearchesPosSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'A position. top , bottom , or a positive number.' }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersSavedSearchesPos')

const MembersSavedSearchesQuerySchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 1 to 16384' }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersSavedSearchesQuery')

const MembersUsernameSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.',
      }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('MembersUsername')

const MyPrefsEmailPositionSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: 'One of: bottom or top' }) })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('MyPrefsEmailPosition')

const MyPrefsIdEmailListSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: 'An id' }) })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('MyPrefsIdEmailList')

const MyPrefsShowListGuideSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('MyPrefsShowListGuide')

const MyPrefsShowSidebarSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('MyPrefsShowSidebar')

const MyPrefsShowSidebarActivitySchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('MyPrefsShowSidebarActivity')

const MyPrefsShowSidebarBoardActionsSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('MyPrefsShowSidebarBoardActions')

const MyPrefsShowSidebarMembersSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('MyPrefsShowSidebarMembers')

const NotificationsSchema = z
  .object({ unread: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'notification' }, required: [] })
  .openapi('Notifications')

const NotificationsUnreadSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'notification' }, required: [] })
  .openapi('NotificationsUnread')

const OrganizationsSchema = z
  .object({
    desc: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string with a length of at least 1.  Cannot begin or end with a space.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    'prefs/associatedDomain': z
      .string()
      .exactOptional()
      .openapi({ description: 'The google apps domain to link this org to.' }),
    'prefs/boardVisibilityRestrict/org': z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: admin, none or org' }),
    'prefs/boardVisibilityRestrict/private': z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: admin, none or org' }),
    'prefs/boardVisibilityRestrict/public': z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: admin, none or org' }),
    'prefs/externalMembersDisabled': z
      .string()
      .exactOptional()
      .openapi({ description: ' true or false' }),
    'prefs/googleAppsVersion': z
      .string()
      .exactOptional()
      .openapi({ description: 'a number from 1 to 2' }),
    'prefs/orgInviteRestrict': z
      .string()
      .exactOptional()
      .openapi({ description: 'An email address with optional expansion tokens' }),
    'prefs/permissionLevel': z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: private or public' }),
    website: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL starting with http:// or https:// or null' }),
  })
  .openapi({ xml: { name: 'organization' }, required: [] })
  .openapi('Organizations')

const OrganizationsDescSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'organization' }, required: [] })
  .openapi('OrganizationsDesc')

const OrganizationsDisplayNameSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string with a length of at least 1.  Cannot begin or end with a space.',
      }),
  })
  .openapi({ xml: { name: 'organization' }, required: [] })
  .openapi('OrganizationsDisplayName')

const OrganizationsLogoSchema = z
  .object({ file: z.string().exactOptional().openapi({ description: 'A file' }) })
  .openapi({ xml: { name: 'organization' }, required: [] })
  .openapi('OrganizationsLogo')

const OrganizationsMembersSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: 'An email address' }),
    fullName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string with a length of at least 1.  Cannot begin or end with a space.',
      }),
    type: z.string().exactOptional().openapi({ description: 'One of: admin, normal or observer' }),
  })
  .openapi({ xml: { name: 'organization' }, required: [] })
  .openapi('OrganizationsMembers')

const OrganizationsMembersDeactivatedSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'organization' }, required: [] })
  .openapi('OrganizationsMembersDeactivated')

const OrganizationsMembershipsSchema = z
  .object({
    member_fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
      }),
    type: z.string().exactOptional().openapi({ description: 'One of: admin, normal or observer' }),
  })
  .openapi({ xml: { name: 'organization' }, required: [] })
  .openapi('OrganizationsMemberships')

const OrganizationsNameSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.',
      }),
  })
  .openapi({ xml: { name: 'organization' }, required: [] })
  .openapi('OrganizationsName')

const OrganizationsWebsiteSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL starting with http:// or https:// or null' }),
  })
  .openapi({ xml: { name: 'organization' }, required: [] })
  .openapi('OrganizationsWebsite')

const PrefsAssociatedDomainSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The google apps domain to link this org to.' }),
  })
  .openapi({ xml: { name: 'organization' }, required: [] })
  .openapi('PrefsAssociatedDomain')

const PrefsBackgroundSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'A standard background name, or the id of a custom background' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('PrefsBackground')

const PrefsBoardVisibilityRestrictSchema = z
  .object({
    value: z.string().exactOptional().openapi({ description: 'One of: admin, none or org' }),
  })
  .openapi({ xml: { name: 'organization' }, required: [] })
  .openapi('PrefsBoardVisibilityRestrict')

const PrefsCalendarFeedEnabledSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('PrefsCalendarFeedEnabled')

const PrefsCardAgingSchema = z
  .object({
    value: z.string().exactOptional().openapi({ description: 'One of: pirate or regular' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('PrefsCardAging')

const PrefsCardCoversSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('PrefsCardCovers')

const PrefsColorBlindSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('PrefsColorBlind')

const PrefsCommentsSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: disabled, members, observers, org or public' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('PrefsComments')

const PrefsExternalMembersDisabledSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'organization' }, required: [] })
  .openapi('PrefsExternalMembersDisabled')

const PrefsGoogleAppsVersionSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: 'a number from 1 to 2' }) })
  .openapi({ xml: { name: 'organization' }, required: [] })
  .openapi('PrefsGoogleAppsVersion')

const PrefsInvitationsSchema = z
  .object({
    value: z.string().exactOptional().openapi({ description: 'One of: admins or members' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('PrefsInvitations')

const PrefsLocaleSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 255' }),
  })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('PrefsLocale')

const PrefsMinutesBetweenSummariesSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: '-1 (disabled), 1 or 60' }) })
  .openapi({ xml: { name: 'member' }, required: [] })
  .openapi('PrefsMinutesBetweenSummaries')

const PrefsOrgInviteRestrictSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'An email address with optional expansion tokens' }),
  })
  .openapi({ xml: { name: 'organization' }, required: [] })
  .openapi('PrefsOrgInviteRestrict')

const PrefsPermissionLevelSchema = z
  .object({
    value: z.string().exactOptional().openapi({ description: 'One of: private or public' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('PrefsPermissionLevel')

const PrefsSelfJoinSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('PrefsSelfJoin')

const PrefsVotingSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: disabled, members, observers, org or public' }),
  })
  .openapi({ xml: { name: 'board' }, required: [] })
  .openapi('PrefsVoting')

const SessionsSchema = z
  .object({
    idBoard: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the board you&#39;re viewing.  Boards with no viewers will not get updates about members&#39; statuses.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: active, disconnected or idle' }),
  })
  .openapi({ xml: { name: 'session' }, required: [] })
  .openapi('Sessions')

const SessionsStatusSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of: active, disconnected or idle' }),
  })
  .openapi({ xml: { name: 'session' }, required: [] })
  .openapi('SessionsStatus')

const TokensWebhooksSchema = z
  .object({
    callbackURL: z
      .string()
      .exactOptional()
      .openapi({ description: 'A valid URL that is reachable with a HEAD request' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    idModel: z.string().exactOptional().openapi({ description: 'id of the model to be monitored' }),
  })
  .openapi({ xml: { name: 'token' }, required: [] })
  .openapi('TokensWebhooks')

const WebhooksSchema = z
  .object({
    active: z.string().exactOptional().openapi({ description: ' true or false' }),
    callbackURL: z
      .string()
      .exactOptional()
      .openapi({ description: 'A valid URL that is reachable with a HEAD request' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
    idModel: z
      .string()
      .exactOptional()
      .openapi({ description: 'id of the model that should be hooked' }),
  })
  .openapi({ xml: { name: 'webhook' }, required: [] })
  .openapi('Webhooks')

const WebhooksActiveSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: ' true or false' }) })
  .openapi({ xml: { name: 'webhook' }, required: [] })
  .openapi('WebhooksActive')

const WebhooksCallbackURLSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'A valid URL that is reachable with a HEAD request' }),
  })
  .openapi({ xml: { name: 'webhook' }, required: [] })
  .openapi('WebhooksCallbackURL')

const WebhooksDescriptionSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'a string with a length from 0 to 16384' }),
  })
  .openapi({ xml: { name: 'webhook' }, required: [] })
  .openapi('WebhooksDescription')

const WebhooksIdModelSchema = z
  .object({
    value: z.string().exactOptional().openapi({ description: 'id of the model to be monitored' }),
  })
  .openapi({ xml: { name: 'webhook' }, required: [] })
  .openapi('WebhooksIdModel')

const BoardsMembersRequestBody = {
  description: 'Attributes of "Boards Members" to be updated.',
  content: { 'application/json': { schema: BoardsMembersSchema } },
  required: true,
}

const OrganizationsMembersRequestBody = {
  description: 'Attributes of "Organizations Members" to be updated.',
  content: { 'application/json': { schema: OrganizationsMembersSchema } },
  required: true,
}

const PrefsBoardVisibilityRestrictRequestBody = {
  description: 'Attributes of "Prefs Board Visibility Restrict" to be updated.',
  content: { 'application/json': { schema: PrefsBoardVisibilityRestrictSchema } },
  required: true,
}

const PrefsPermissionLevelRequestBody = {
  description: 'Attributes of "Prefs Permission Level" to be updated.',
  content: { 'application/json': { schema: PrefsPermissionLevelSchema } },
  required: true,
}

const WebhooksRequestBody = {
  description: 'Attributes of "Webhooks" to be updated.',
  content: { 'application/json': { schema: WebhooksSchema } },
  required: true,
}

const ApiKeySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

const ApiTokenSecurityScheme = { in: 'query', name: 'token', type: 'apiKey' }

export const getActionsIdActionRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}',
  tags: ['action'],
  summary: 'getActionsByIdAction()',
  operationId: 'getActionsByIdAction',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      member: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'member',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      memberCreator: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'memberCreator',
            required: false,
            schema: { type: 'string' },
          },
        }),
      memberCreator_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'memberCreator_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putActionsIdActionRoute = createRoute({
  method: 'put',
  path: '/actions/{idAction}',
  tags: ['action'],
  summary: 'updateActionsByIdAction()',
  operationId: 'updateActionsByIdAction',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Actions" to be updated.',
      content: { 'application/json': { schema: ActionsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteActionsIdActionRoute = createRoute({
  method: 'delete',
  path: '/actions/{idAction}',
  tags: ['action'],
  summary: 'deleteActionsByIdAction()',
  operationId: 'deleteActionsByIdAction',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionBoardRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/board',
  tags: ['action'],
  summary: 'getActionsBoardByIdAction()',
  operationId: 'getActionsBoardByIdAction',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionBoardFieldRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/board/{field}',
  tags: ['action'],
  summary: 'getActionsBoardByIdActionByField()',
  operationId: 'getActionsBoardByIdActionByField',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionCardRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/card',
  tags: ['action'],
  summary: 'getActionsCardByIdAction()',
  operationId: 'getActionsCardByIdAction',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionCardFieldRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/card/{field}',
  tags: ['action'],
  summary: 'getActionsCardByIdActionByField()',
  operationId: 'getActionsCardByIdActionByField',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionDisplayRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/display',
  tags: ['action'],
  summary: 'getActionsDisplayByIdAction()',
  operationId: 'getActionsDisplayByIdAction',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionEntitiesRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/entities',
  tags: ['action'],
  summary: 'getActionsEntitiesByIdAction()',
  operationId: 'getActionsEntitiesByIdAction',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionListRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/list',
  tags: ['action'],
  summary: 'getActionsListByIdAction()',
  operationId: 'getActionsListByIdAction',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, idBoard, name, pos or subscribed',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionListFieldRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/list/{field}',
  tags: ['action'],
  summary: 'getActionsListByIdActionByField()',
  operationId: 'getActionsListByIdActionByField',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionMemberRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/member',
  tags: ['action'],
  summary: 'getActionsMemberByIdAction()',
  operationId: 'getActionsMemberByIdAction',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionMemberFieldRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/member/{field}',
  tags: ['action'],
  summary: 'getActionsMemberByIdActionByField()',
  operationId: 'getActionsMemberByIdActionByField',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionMemberCreatorRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/memberCreator',
  tags: ['action'],
  summary: 'getActionsMemberCreatorByIdAction()',
  operationId: 'getActionsMemberCreatorByIdAction',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionMemberCreatorFieldRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/memberCreator/{field}',
  tags: ['action'],
  summary: 'getActionsMemberCreatorByIdActionByField()',
  operationId: 'getActionsMemberCreatorByIdActionByField',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionOrganizationRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/organization',
  tags: ['action'],
  summary: 'getActionsOrganizationByIdAction()',
  operationId: 'getActionsOrganizationByIdAction',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionOrganizationFieldRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/organization/{field}',
  tags: ['action'],
  summary: 'getActionsOrganizationByIdActionByField()',
  operationId: 'getActionsOrganizationByIdActionByField',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putActionsIdActionTextRoute = createRoute({
  method: 'put',
  path: '/actions/{idAction}/text',
  tags: ['action'],
  summary: 'updateActionsTextByIdAction()',
  operationId: 'updateActionsTextByIdAction',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Actions Text" to be updated.',
      content: { 'application/json': { schema: ActionsTextSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getActionsIdActionFieldRoute = createRoute({
  method: 'get',
  path: '/actions/{idAction}/{field}',
  tags: ['action'],
  summary: 'getActionsByIdActionByField()',
  operationId: 'getActionsByIdActionByField',
  request: {
    params: z.object({
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const getBatchRoute = createRoute({
  method: 'get',
  path: '/batch',
  tags: ['batch'],
  summary: 'getBatch()',
  operationId: 'getBatch',
  request: {
    query: z.object({
      urls: z
        .string()
        .openapi({
          param: {
            description: 'list of API v1 GET routes, not including the version prefix',
            in: 'query',
            name: 'urls',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const postBoardsRoute = createRoute({
  method: 'post',
  path: '/boards',
  tags: ['board'],
  summary: 'addBoards()',
  operationId: 'addBoards',
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Boards" to be added.',
      content: { 'application/json': { schema: BoardsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}',
  tags: ['board'],
  summary: 'getBoardsByIdBoard()',
  operationId: 'getBoardsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'actions_entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'actions_display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_format: z
        .string()
        .default('list')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: count, list or minimal',
            in: 'query',
            name: 'actions_format',
            required: false,
            schema: { default: 'list', type: 'string' },
          },
        }),
      actions_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, null or lastView',
            in: 'query',
            name: 'actions_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'actions_limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      action_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'action_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      action_member: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'action_member',
            required: false,
            schema: { type: 'string' },
          },
        }),
      action_member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'action_member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      action_memberCreator: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'action_memberCreator',
            required: false,
            schema: { type: 'string' },
          },
        }),
      action_memberCreator_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'action_memberCreator_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      cards: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none, open or visible',
            in: 'query',
            name: 'cards',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      card_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'card_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      card_attachments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A boolean value or &quot;cover&quot; for only card cover attachments',
            in: 'query',
            name: 'card_attachments',
            required: false,
            schema: { type: 'string' },
          },
        }),
      card_attachment_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url',
            in: 'query',
            name: 'card_attachment_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      card_checklists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'card_checklists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      card_stickers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'card_stickers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      boardStars: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: mine or none',
            in: 'query',
            name: 'boardStars',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      labels: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'labels',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      label_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: color, idBoard, name or uses',
            in: 'query',
            name: 'label_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      labels_limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'labels_limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      lists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none or open',
            in: 'query',
            name: 'lists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      list_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, idBoard, name, pos or subscribed',
            in: 'query',
            name: 'list_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      memberships: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: active, admin, deactivated, me or normal',
            in: 'query',
            name: 'memberships',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      memberships_member: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'memberships_member',
            required: false,
            schema: { type: 'string' },
          },
        }),
      memberships_member_fields: z
        .string()
        .default('fullName and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'memberships_member_fields',
            required: false,
            schema: { default: 'fullName and username', type: 'string' },
          },
        }),
      members: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: admins, all, none, normal or owners',
            in: 'query',
            name: 'members',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, initials, fullName, username and confirmed')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: {
              default: 'avatarHash, initials, fullName, username and confirmed',
              type: 'string',
            },
          },
        }),
      membersInvited: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: admins, all, none, normal or owners',
            in: 'query',
            name: 'membersInvited',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      membersInvited_fields: z
        .string()
        .default('avatarHash, initials, fullName and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'membersInvited_fields',
            required: false,
            schema: { default: 'avatarHash, initials, fullName and username', type: 'string' },
          },
        }),
      checklists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'checklists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      checklist_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: idBoard, idCard, name or pos',
            in: 'query',
            name: 'checklist_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      organization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'organization',
            required: false,
            schema: { type: 'string' },
          },
        }),
      organization_fields: z
        .string()
        .default('name and displayName')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website',
            in: 'query',
            name: 'organization_fields',
            required: false,
            schema: { default: 'name and displayName', type: 'string' },
          },
        }),
      organization_memberships: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: active, admin, deactivated, me or normal',
            in: 'query',
            name: 'organization_memberships',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      myPrefs: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'myPrefs',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .default(
          'name, desc, descData, closed, idOrganization, pinned, url, shortUrl, prefs and labelNames',
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: {
              default:
                'name, desc, descData, closed, idOrganization, pinned, url, shortUrl, prefs and labelNames',
              type: 'string',
            },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}',
  tags: ['board'],
  summary: 'updateBoardsByIdBoard()',
  operationId: 'updateBoardsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Boards" to be updated.',
      content: { 'application/json': { schema: BoardsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardActionsRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/actions',
  tags: ['board'],
  summary: 'getBoardsActionsByIdBoard()',
  operationId: 'getBoardsActionsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      format: z
        .string()
        .default('list')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: count, list or minimal',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'list', type: 'string' },
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, null or lastView',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, or null',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Page * limit must be less than 1000',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '0', type: 'string' },
          },
        }),
      idModels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return actions related to these model ids',
            in: 'query',
            name: 'idModels',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'member',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      memberCreator: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'memberCreator',
            required: false,
            schema: { type: 'string' },
          },
        }),
      memberCreator_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'memberCreator_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardBoardStarsRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/boardStars',
  tags: ['board'],
  summary: 'getBoardsBoardStarsByIdBoard()',
  operationId: 'getBoardsBoardStarsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('mine')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: mine or none',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'mine', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postBoardsIdBoardCalendarKeyGenerateRoute = createRoute({
  method: 'post',
  path: '/boards/{idBoard}/calendarKey/generate',
  tags: ['board'],
  summary: 'addBoardsCalendarKeyGenerateByIdBoard()',
  operationId: 'addBoardsCalendarKeyGenerateByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardCardsRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/cards',
  tags: ['board'],
  summary: 'getBoardsCardsByIdBoard()',
  operationId: 'getBoardsCardsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A boolean value or &quot;cover&quot; for only card cover attachments',
            in: 'query',
            name: 'attachments',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachment_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url',
            in: 'query',
            name: 'attachment_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      stickers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'stickers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      members: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'members',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      checkItemStates: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'checkItemStates',
            required: false,
            schema: { type: 'string' },
          },
        }),
      checklists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'checklists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 1 to 1000',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, or null',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, or null',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('visible')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none, open or visible',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'visible', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardCardsFilterRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/cards/{filter}',
  tags: ['board'],
  summary: 'getBoardsCardsByIdBoardByFilter()',
  operationId: 'getBoardsCardsByIdBoardByFilter',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .openapi({
          param: {
            description: 'filter',
            in: 'path',
            name: 'filter',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const getBoardsIdBoardCardsIdCardRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/cards/{idCard}',
  tags: ['board'],
  summary: 'getBoardsCardsByIdBoardByIdCard()',
  operationId: 'getBoardsCardsByIdBoardByIdCard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'idCard',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      attachments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A boolean value or &quot;cover&quot; for only card cover attachments',
            in: 'query',
            name: 'attachments',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachment_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url',
            in: 'query',
            name: 'attachment_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'actions_entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'actions_display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'actions_limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      action_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'action_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      action_memberCreator_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'action_memberCreator_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      members: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'members',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, initials, fullName and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, initials, fullName and username', type: 'string' },
          },
        }),
      checkItemStates: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'checkItemStates',
            required: false,
            schema: { type: 'string' },
          },
        }),
      checkItemState_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: idCheckItem or state',
            in: 'query',
            name: 'checkItemState_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      labels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'labels',
            required: false,
            schema: { type: 'string' },
          },
        }),
      checklists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'checklists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      checklist_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: idBoard, idCard, name or pos',
            in: 'query',
            name: 'checklist_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardChecklistsRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/checklists',
  tags: ['board'],
  summary: 'getBoardsChecklistsByIdBoard()',
  operationId: 'getBoardsChecklistsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cards: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none, open or visible',
            in: 'query',
            name: 'cards',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      card_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'card_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      checkItems: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'checkItems',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      checkItem_fields: z
        .string()
        .default('name, nameData, pos and state')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: name, nameData, pos, state or type',
            in: 'query',
            name: 'checkItem_fields',
            required: false,
            schema: { default: 'name, nameData, pos and state', type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: idBoard, idCard, name or pos',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postBoardsIdBoardChecklistsRoute = createRoute({
  method: 'post',
  path: '/boards/{idBoard}/checklists',
  tags: ['board'],
  summary: 'addBoardsChecklistsByIdBoard()',
  operationId: 'addBoardsChecklistsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Boards Checklists" to be added.',
      content: { 'application/json': { schema: BoardsChecklistsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardClosedRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/closed',
  tags: ['board'],
  summary: 'updateBoardsClosedByIdBoard()',
  operationId: 'updateBoardsClosedByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Boards Closed" to be updated.',
      content: { 'application/json': { schema: BoardsClosedSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardDeltasRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/deltas',
  tags: ['board'],
  summary: 'getBoardsDeltasByIdBoard()',
  operationId: 'getBoardsDeltasByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tags: z
        .string()
        .openapi({
          param: {
            description: 'A valid tag for subscribing',
            in: 'query',
            name: 'tags',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ixLastUpdate: z
        .string()
        .openapi({
          param: {
            description: 'a number from -1 to Infinity',
            in: 'query',
            name: 'ixLastUpdate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardDescRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/desc',
  tags: ['board'],
  summary: 'updateBoardsDescByIdBoard()',
  operationId: 'updateBoardsDescByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Boards Desc" to be updated.',
      content: { 'application/json': { schema: BoardsDescSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postBoardsIdBoardEmailKeyGenerateRoute = createRoute({
  method: 'post',
  path: '/boards/{idBoard}/emailKey/generate',
  tags: ['board'],
  summary: 'addBoardsEmailKeyGenerateByIdBoard()',
  operationId: 'addBoardsEmailKeyGenerateByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardIdOrganizationRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/idOrganization',
  tags: ['board'],
  summary: 'updateBoardsIdOrganizationByIdBoard()',
  operationId: 'updateBoardsIdOrganizationByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Boards Id Organization" to be updated.',
      content: { 'application/json': { schema: BoardsIdOrganizationSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardLabelNamesBlueRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/labelNames/blue',
  tags: ['board'],
  summary: 'updateBoardsLabelNamesBlueByIdBoard()',
  operationId: 'updateBoardsLabelNamesBlueByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Label Names Blue" to be updated.',
      content: { 'application/json': { schema: LabelNamesBlueSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardLabelNamesGreenRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/labelNames/green',
  tags: ['board'],
  summary: 'updateBoardsLabelNamesGreenByIdBoard()',
  operationId: 'updateBoardsLabelNamesGreenByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Label Names Green" to be updated.',
      content: { 'application/json': { schema: LabelNamesGreenSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardLabelNamesOrangeRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/labelNames/orange',
  tags: ['board'],
  summary: 'updateBoardsLabelNamesOrangeByIdBoard()',
  operationId: 'updateBoardsLabelNamesOrangeByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Label Names Orange" to be updated.',
      content: { 'application/json': { schema: LabelNamesOrangeSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardLabelNamesPurpleRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/labelNames/purple',
  tags: ['board'],
  summary: 'updateBoardsLabelNamesPurpleByIdBoard()',
  operationId: 'updateBoardsLabelNamesPurpleByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Label Names Purple" to be updated.',
      content: { 'application/json': { schema: LabelNamesPurpleSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardLabelNamesRedRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/labelNames/red',
  tags: ['board'],
  summary: 'updateBoardsLabelNamesRedByIdBoard()',
  operationId: 'updateBoardsLabelNamesRedByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Label Names Red" to be updated.',
      content: { 'application/json': { schema: LabelNamesRedSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardLabelNamesYellowRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/labelNames/yellow',
  tags: ['board'],
  summary: 'updateBoardsLabelNamesYellowByIdBoard()',
  operationId: 'updateBoardsLabelNamesYellowByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Label Names Yellow" to be updated.',
      content: { 'application/json': { schema: LabelNamesYellowSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardLabelsRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/labels',
  tags: ['board'],
  summary: 'getBoardsLabelsByIdBoard()',
  operationId: 'getBoardsLabelsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: color, idBoard, name or uses',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postBoardsIdBoardLabelsRoute = createRoute({
  method: 'post',
  path: '/boards/{idBoard}/labels',
  tags: ['board'],
  summary: 'addBoardsLabelsByIdBoard()',
  operationId: 'addBoardsLabelsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Boards Labels" to be added.',
      content: { 'application/json': { schema: BoardsLabelsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardLabelsIdLabelRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/labels/{idLabel}',
  tags: ['board'],
  summary: 'getBoardsLabelsByIdBoardByIdLabel()',
  operationId: 'getBoardsLabelsByIdBoardByIdLabel',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idLabel: z
        .string()
        .openapi({
          param: {
            description: 'idLabel',
            in: 'path',
            name: 'idLabel',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: color, idBoard, name or uses',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardListsRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/lists',
  tags: ['board'],
  summary: 'getBoardsListsByIdBoard()',
  operationId: 'getBoardsListsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cards: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none, open or visible',
            in: 'query',
            name: 'cards',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      card_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'card_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('open')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none or open',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'open', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, idBoard, name, pos or subscribed',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postBoardsIdBoardListsRoute = createRoute({
  method: 'post',
  path: '/boards/{idBoard}/lists',
  tags: ['board'],
  summary: 'addBoardsListsByIdBoard()',
  operationId: 'addBoardsListsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Boards Lists" to be added.',
      content: { 'application/json': { schema: BoardsListsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardListsFilterRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/lists/{filter}',
  tags: ['board'],
  summary: 'getBoardsListsByIdBoardByFilter()',
  operationId: 'getBoardsListsByIdBoardByFilter',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .openapi({
          param: {
            description: 'filter',
            in: 'path',
            name: 'filter',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const postBoardsIdBoardMarkAsViewedRoute = createRoute({
  method: 'post',
  path: '/boards/{idBoard}/markAsViewed',
  tags: ['board'],
  summary: 'addBoardsMarkAsViewedByIdBoard()',
  operationId: 'addBoardsMarkAsViewedByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardMembersRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/members',
  tags: ['board'],
  summary: 'getBoardsMembersByIdBoard()',
  operationId: 'getBoardsMembersByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: admins, all, none, normal or owners',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('fullName and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'fullName and username', type: 'string' },
          },
        }),
      activity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'true or false ; works for premium organizations only.',
            in: 'query',
            name: 'activity',
            required: false,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardMembersRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/members',
  tags: ['board'],
  summary: 'updateBoardsMembersByIdBoard()',
  operationId: 'updateBoardsMembersByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: BoardsMembersRequestBody,
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardMembersFilterRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/members/{filter}',
  tags: ['board'],
  summary: 'getBoardsMembersByIdBoardByFilter()',
  operationId: 'getBoardsMembersByIdBoardByFilter',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .openapi({
          param: {
            description: 'filter',
            in: 'path',
            name: 'filter',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const putBoardsIdBoardMembersIdMemberRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/members/{idMember}',
  tags: ['board'],
  summary: 'updateBoardsMembersByIdBoardByIdMember()',
  operationId: 'updateBoardsMembersByIdBoardByIdMember',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: BoardsMembersRequestBody,
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteBoardsIdBoardMembersIdMemberRoute = createRoute({
  method: 'delete',
  path: '/boards/{idBoard}/members/{idMember}',
  tags: ['board'],
  summary: 'deleteBoardsMembersByIdBoardByIdMember()',
  operationId: 'deleteBoardsMembersByIdBoardByIdMember',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardMembersIdMemberCardsRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/members/{idMember}/cards',
  tags: ['board'],
  summary: 'getBoardsMembersCardsByIdBoardByIdMember()',
  operationId: 'getBoardsMembersCardsByIdBoardByIdMember',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A boolean value or &quot;cover&quot; for only card cover attachments',
            in: 'query',
            name: 'attachments',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachment_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url',
            in: 'query',
            name: 'attachment_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      members: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'members',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      checkItemStates: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'checkItemStates',
            required: false,
            schema: { type: 'string' },
          },
        }),
      checklists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'checklists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      board: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'board',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_fields: z
        .string()
        .default('name, desc, closed, idOrganization, pinned, url and prefs')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'board_fields',
            required: false,
            schema: {
              default: 'name, desc, closed, idOrganization, pinned, url and prefs',
              type: 'string',
            },
          },
        }),
      list: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'list',
            required: false,
            schema: { type: 'string' },
          },
        }),
      list_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, idBoard, name, pos or subscribed',
            in: 'query',
            name: 'list_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('visible')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none, open or visible',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'visible', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardMembersInvitedRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/membersInvited',
  tags: ['board'],
  summary: 'getBoardsMembersInvitedByIdBoard()',
  operationId: 'getBoardsMembersInvitedByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardMembersInvitedFieldRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/membersInvited/{field}',
  tags: ['board'],
  summary: 'getBoardsMembersInvitedByIdBoardByField()',
  operationId: 'getBoardsMembersInvitedByIdBoardByField',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardMembershipsRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/memberships',
  tags: ['board'],
  summary: 'getBoardsMembershipsByIdBoard()',
  operationId: 'getBoardsMembershipsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: active, admin, deactivated, me or normal',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      member: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'member',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('fullName and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'fullName and username', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardMembershipsIdMembershipRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/memberships/{idMembership}',
  tags: ['board'],
  summary: 'getBoardsMembershipsByIdBoardByIdMembership()',
  operationId: 'getBoardsMembershipsByIdBoardByIdMembership',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idMembership: z
        .string()
        .openapi({
          param: {
            description: 'idMembership',
            in: 'path',
            name: 'idMembership',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      member: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'member',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('fullName and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'fullName and username', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardMembershipsIdMembershipRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/memberships/{idMembership}',
  tags: ['board'],
  summary: 'updateBoardsMembershipsByIdBoardByIdMembership()',
  operationId: 'updateBoardsMembershipsByIdBoardByIdMembership',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idMembership: z
        .string()
        .openapi({
          param: {
            description: 'idMembership',
            in: 'path',
            name: 'idMembership',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Boards Memberships" to be updated.',
      content: { 'application/json': { schema: BoardsMembershipsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardMyPrefsRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/myPrefs',
  tags: ['board'],
  summary: 'getBoardsMyPrefsByIdBoard()',
  operationId: 'getBoardsMyPrefsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardMyPrefsEmailPositionRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/myPrefs/emailPosition',
  tags: ['board'],
  summary: 'updateBoardsMyPrefsEmailPositionByIdBoard()',
  operationId: 'updateBoardsMyPrefsEmailPositionByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "My Prefs Email Position" to be updated.',
      content: { 'application/json': { schema: MyPrefsEmailPositionSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardMyPrefsIdEmailListRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/myPrefs/idEmailList',
  tags: ['board'],
  summary: 'updateBoardsMyPrefsIdEmailListByIdBoard()',
  operationId: 'updateBoardsMyPrefsIdEmailListByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "My Prefs Id Email List" to be updated.',
      content: { 'application/json': { schema: MyPrefsIdEmailListSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardMyPrefsShowListGuideRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/myPrefs/showListGuide',
  tags: ['board'],
  summary: 'updateBoardsMyPrefsShowListGuideByIdBoard()',
  operationId: 'updateBoardsMyPrefsShowListGuideByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "My Prefs Show List Guide" to be updated.',
      content: { 'application/json': { schema: MyPrefsShowListGuideSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardMyPrefsShowSidebarRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/myPrefs/showSidebar',
  tags: ['board'],
  summary: 'updateBoardsMyPrefsShowSidebarByIdBoard()',
  operationId: 'updateBoardsMyPrefsShowSidebarByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "My Prefs Show Sidebar" to be updated.',
      content: { 'application/json': { schema: MyPrefsShowSidebarSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardMyPrefsShowSidebarActivityRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/myPrefs/showSidebarActivity',
  tags: ['board'],
  summary: 'updateBoardsMyPrefsShowSidebarActivityByIdBoard()',
  operationId: 'updateBoardsMyPrefsShowSidebarActivityByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "My Prefs Show Sidebar Activity" to be updated.',
      content: { 'application/json': { schema: MyPrefsShowSidebarActivitySchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardMyPrefsShowSidebarBoardActionsRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/myPrefs/showSidebarBoardActions',
  tags: ['board'],
  summary: 'updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard()',
  operationId: 'updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "My Prefs Show Sidebar Board Actions" to be updated.',
      content: { 'application/json': { schema: MyPrefsShowSidebarBoardActionsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardMyPrefsShowSidebarMembersRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/myPrefs/showSidebarMembers',
  tags: ['board'],
  summary: 'updateBoardsMyPrefsShowSidebarMembersByIdBoard()',
  operationId: 'updateBoardsMyPrefsShowSidebarMembersByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "My Prefs Show Sidebar Members" to be updated.',
      content: { 'application/json': { schema: MyPrefsShowSidebarMembersSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardNameRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/name',
  tags: ['board'],
  summary: 'updateBoardsNameByIdBoard()',
  operationId: 'updateBoardsNameByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Boards Name" to be updated.',
      content: { 'application/json': { schema: BoardsNameSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardOrganizationRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/organization',
  tags: ['board'],
  summary: 'getBoardsOrganizationByIdBoard()',
  operationId: 'getBoardsOrganizationByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardOrganizationFieldRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/organization/{field}',
  tags: ['board'],
  summary: 'getBoardsOrganizationByIdBoardByField()',
  operationId: 'getBoardsOrganizationByIdBoardByField',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postBoardsIdBoardPowerUpsRoute = createRoute({
  method: 'post',
  path: '/boards/{idBoard}/powerUps',
  tags: ['board'],
  summary: 'addBoardsPowerUpsByIdBoard()',
  operationId: 'addBoardsPowerUpsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Boards Power Ups" to be added.',
      content: { 'application/json': { schema: BoardsPowerUpsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteBoardsIdBoardPowerUpsPowerUpRoute = createRoute({
  method: 'delete',
  path: '/boards/{idBoard}/powerUps/{powerUp}',
  tags: ['board'],
  summary: 'deleteBoardsPowerUpsByIdBoardByPowerUp()',
  operationId: 'deleteBoardsPowerUpsByIdBoardByPowerUp',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      powerUp: z
        .string()
        .openapi({
          param: {
            description: 'powerUp',
            in: 'path',
            name: 'powerUp',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardPrefsBackgroundRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/prefs/background',
  tags: ['board'],
  summary: 'updateBoardsPrefsBackgroundByIdBoard()',
  operationId: 'updateBoardsPrefsBackgroundByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs Background" to be updated.',
      content: { 'application/json': { schema: PrefsBackgroundSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardPrefsCalendarFeedEnabledRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/prefs/calendarFeedEnabled',
  tags: ['board'],
  summary: 'updateBoardsPrefsCalendarFeedEnabledByIdBoard()',
  operationId: 'updateBoardsPrefsCalendarFeedEnabledByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs Calendar Feed Enabled" to be updated.',
      content: { 'application/json': { schema: PrefsCalendarFeedEnabledSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardPrefsCardAgingRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/prefs/cardAging',
  tags: ['board'],
  summary: 'updateBoardsPrefsCardAgingByIdBoard()',
  operationId: 'updateBoardsPrefsCardAgingByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs Card Aging" to be updated.',
      content: { 'application/json': { schema: PrefsCardAgingSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardPrefsCardCoversRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/prefs/cardCovers',
  tags: ['board'],
  summary: 'updateBoardsPrefsCardCoversByIdBoard()',
  operationId: 'updateBoardsPrefsCardCoversByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs Card Covers" to be updated.',
      content: { 'application/json': { schema: PrefsCardCoversSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardPrefsCommentsRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/prefs/comments',
  tags: ['board'],
  summary: 'updateBoardsPrefsCommentsByIdBoard()',
  operationId: 'updateBoardsPrefsCommentsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs Comments" to be updated.',
      content: { 'application/json': { schema: PrefsCommentsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardPrefsInvitationsRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/prefs/invitations',
  tags: ['board'],
  summary: 'updateBoardsPrefsInvitationsByIdBoard()',
  operationId: 'updateBoardsPrefsInvitationsByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs Invitations" to be updated.',
      content: { 'application/json': { schema: PrefsInvitationsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardPrefsPermissionLevelRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/prefs/permissionLevel',
  tags: ['board'],
  summary: 'updateBoardsPrefsPermissionLevelByIdBoard()',
  operationId: 'updateBoardsPrefsPermissionLevelByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: PrefsPermissionLevelRequestBody,
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardPrefsSelfJoinRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/prefs/selfJoin',
  tags: ['board'],
  summary: 'updateBoardsPrefsSelfJoinByIdBoard()',
  operationId: 'updateBoardsPrefsSelfJoinByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs Self Join" to be updated.',
      content: { 'application/json': { schema: PrefsSelfJoinSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardPrefsVotingRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/prefs/voting',
  tags: ['board'],
  summary: 'updateBoardsPrefsVotingByIdBoard()',
  operationId: 'updateBoardsPrefsVotingByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs Voting" to be updated.',
      content: { 'application/json': { schema: PrefsVotingSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putBoardsIdBoardSubscribedRoute = createRoute({
  method: 'put',
  path: '/boards/{idBoard}/subscribed',
  tags: ['board'],
  summary: 'updateBoardsSubscribedByIdBoard()',
  operationId: 'updateBoardsSubscribedByIdBoard',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Boards Subscribed" to be updated.',
      content: { 'application/json': { schema: BoardsSubscribedSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getBoardsIdBoardFieldRoute = createRoute({
  method: 'get',
  path: '/boards/{idBoard}/{field}',
  tags: ['board'],
  summary: 'getBoardsByIdBoardByField()',
  operationId: 'getBoardsByIdBoardByField',
  request: {
    params: z.object({
      idBoard: z
        .string()
        .openapi({
          param: {
            description: 'board_id',
            in: 'path',
            name: 'idBoard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const postCardsRoute = createRoute({
  method: 'post',
  path: '/cards',
  tags: ['card'],
  summary: 'addCards()',
  operationId: 'addCards',
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards" to be added.',
      content: { 'application/json': { schema: CardsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}',
  tags: ['card'],
  summary: 'getCardsByIdCard()',
  operationId: 'getCardsByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'actions_entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'actions_display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'actions_limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      action_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'action_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      action_memberCreator_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'action_memberCreator_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      attachments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A boolean value or &quot;cover&quot; for only card cover attachments',
            in: 'query',
            name: 'attachments',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachment_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url',
            in: 'query',
            name: 'attachment_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      members: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'members',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      membersVoted: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'membersVoted',
            required: false,
            schema: { type: 'string' },
          },
        }),
      memberVoted_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'memberVoted_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      checkItemStates: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'checkItemStates',
            required: false,
            schema: { type: 'string' },
          },
        }),
      checkItemState_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: idCheckItem or state',
            in: 'query',
            name: 'checkItemState_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      checklists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'checklists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      checklist_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: idBoard, idCard, name or pos',
            in: 'query',
            name: 'checklist_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      board: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'board',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_fields: z
        .string()
        .default('name, desc, descData, closed, idOrganization, pinned, url and prefs')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'board_fields',
            required: false,
            schema: {
              default: 'name, desc, descData, closed, idOrganization, pinned, url and prefs',
              type: 'string',
            },
          },
        }),
      list: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'list',
            required: false,
            schema: { type: 'string' },
          },
        }),
      list_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, idBoard, name, pos or subscribed',
            in: 'query',
            name: 'list_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      stickers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'stickers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sticker_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex',
            in: 'query',
            name: 'sticker_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default(
          'badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl and url',
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: {
              default:
                'badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl and url',
              type: 'string',
            },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}',
  tags: ['card'],
  summary: 'updateCardsByIdCard()',
  operationId: 'updateCardsByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards" to be updated.',
      content: { 'application/json': { schema: CardsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteCardsIdCardRoute = createRoute({
  method: 'delete',
  path: '/cards/{idCard}',
  tags: ['card'],
  summary: 'deleteCardsByIdCard()',
  operationId: 'deleteCardsByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardActionsRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}/actions',
  tags: ['card'],
  summary: 'getCardsActionsByIdCard()',
  operationId: 'getCardsActionsByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('commentCard and updateCard:idList')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'commentCard and updateCard:idList', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      format: z
        .string()
        .default('list')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: count, list or minimal',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'list', type: 'string' },
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, null or lastView',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, or null',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Page * limit must be less than 1000',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '0', type: 'string' },
          },
        }),
      idModels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return actions related to these model ids',
            in: 'query',
            name: 'idModels',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'member',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      memberCreator: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'memberCreator',
            required: false,
            schema: { type: 'string' },
          },
        }),
      memberCreator_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'memberCreator_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postCardsIdCardActionsCommentsRoute = createRoute({
  method: 'post',
  path: '/cards/{idCard}/actions/comments',
  tags: ['card'],
  summary: 'addCardsActionsCommentsByIdCard()',
  operationId: 'addCardsActionsCommentsByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Actions Comments" to be added.',
      content: { 'application/json': { schema: ActionsCommentsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardActionsIdActionCommentsRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/actions/{idAction}/comments',
  tags: ['card'],
  summary: 'updateCardsActionsCommentsByIdCardByIdAction()',
  description: 'This can only be done by the original author of the comment.',
  operationId: 'updateCardsActionsCommentsByIdCardByIdAction',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Actions Comments" to be updated.',
      content: { 'application/json': { schema: CardsActionsCommentsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteCardsIdCardActionsIdActionCommentsRoute = createRoute({
  method: 'delete',
  path: '/cards/{idCard}/actions/{idAction}/comments',
  tags: ['card'],
  summary: 'deleteCardsActionsCommentsByIdCardByIdAction()',
  description:
    'This can only be done by the original author of the comment, or someone with higher permissions than the original author.',
  operationId: 'deleteCardsActionsCommentsByIdCardByIdAction',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idAction: z
        .string()
        .openapi({
          param: {
            description: 'idAction',
            in: 'path',
            name: 'idAction',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardAttachmentsRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}/attachments',
  tags: ['card'],
  summary: 'getCardsAttachmentsByIdCard()',
  operationId: 'getCardsAttachmentsByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A boolean value or &quot;cover&quot; for only card cover attachments',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postCardsIdCardAttachmentsRoute = createRoute({
  method: 'post',
  path: '/cards/{idCard}/attachments',
  tags: ['card'],
  summary: 'addCardsAttachmentsByIdCard()',
  operationId: 'addCardsAttachmentsByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Attachments" to be added.',
      content: { 'application/json': { schema: CardsAttachmentsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardAttachmentsIdAttachmentRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}/attachments/{idAttachment}',
  tags: ['card'],
  summary: 'getCardsAttachmentsByIdCardByIdAttachment()',
  operationId: 'getCardsAttachmentsByIdCardByIdAttachment',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idAttachment: z
        .string()
        .openapi({
          param: {
            description: 'idAttachment',
            in: 'path',
            name: 'idAttachment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteCardsIdCardAttachmentsIdAttachmentRoute = createRoute({
  method: 'delete',
  path: '/cards/{idCard}/attachments/{idAttachment}',
  tags: ['card'],
  summary: 'deleteCardsAttachmentsByIdCardByIdAttachment()',
  operationId: 'deleteCardsAttachmentsByIdCardByIdAttachment',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idAttachment: z
        .string()
        .openapi({
          param: {
            description: 'idAttachment',
            in: 'path',
            name: 'idAttachment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardBoardRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}/board',
  tags: ['card'],
  summary: 'getCardsBoardByIdCard()',
  operationId: 'getCardsBoardByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardBoardFieldRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}/board/{field}',
  tags: ['card'],
  summary: 'getCardsBoardByIdCardByField()',
  operationId: 'getCardsBoardByIdCardByField',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardCheckItemStatesRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}/checkItemStates',
  tags: ['card'],
  summary: 'getCardsCheckItemStatesByIdCard()',
  operationId: 'getCardsCheckItemStatesByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: idCheckItem or state',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItemRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/checklist/{idChecklistCurrent}/checkItem/{idCheckItem}',
  tags: ['card'],
  summary: 'updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem()',
  operationId: 'updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idChecklistCurrent: z
        .string()
        .openapi({
          param: {
            description: 'idChecklistCurrent',
            in: 'path',
            name: 'idChecklistCurrent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idCheckItem: z
        .string()
        .openapi({
          param: {
            description: 'idCheckItem',
            in: 'path',
            name: 'idCheckItem',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Checklist Id Checklist Current Check Item" to be updated.',
      content: { 'application/json': { schema: CardsChecklistIdChecklistCurrentCheckItemSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postCardsIdCardChecklistIdChecklistCheckItemRoute = createRoute({
  method: 'post',
  path: '/cards/{idCard}/checklist/{idChecklist}/checkItem',
  tags: ['card'],
  summary: 'addCardsChecklistCheckItemByIdCardByIdChecklist()',
  operationId: 'addCardsChecklistCheckItemByIdCardByIdChecklist',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Checklist Check Item" to be added.',
      content: { 'application/json': { schema: CardsChecklistCheckItemSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItemRoute = createRoute({
  method: 'delete',
  path: '/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}',
  tags: ['card'],
  summary: 'deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()',
  operationId: 'deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idCheckItem: z
        .string()
        .openapi({
          param: {
            description: 'idCheckItem',
            in: 'path',
            name: 'idCheckItem',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCardRoute =
  createRoute({
    method: 'post',
    path: '/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/convertToCard',
    tags: ['card'],
    summary: 'addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()',
    operationId: 'addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem',
    request: {
      params: z.object({
        idCard: z
          .string()
          .openapi({
            param: {
              description: 'card id or shortlink',
              in: 'path',
              name: 'idCard',
              required: true,
              schema: { type: 'string' },
            },
          }),
        idChecklist: z
          .string()
          .openapi({
            param: {
              description: 'idChecklist',
              in: 'path',
              name: 'idChecklist',
              required: true,
              schema: { type: 'string' },
            },
          }),
        idCheckItem: z
          .string()
          .openapi({
            param: {
              description: 'idCheckItem',
              in: 'path',
              name: 'idCheckItem',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        key: z
          .string()
          .openapi({
            param: {
              description:
                '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
              in: 'query',
              name: 'key',
              required: true,
              schema: { type: 'string' },
            },
          }),
        token: z
          .string()
          .openapi({
            param: {
              description:
                '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
              in: 'query',
              name: 'token',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
    security: [{ api_key: [] }, { api_token: [] }],
  })

export const putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemNameRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/name',
  tags: ['card'],
  summary: 'updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()',
  operationId: 'updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idCheckItem: z
        .string()
        .openapi({
          param: {
            description: 'idCheckItem',
            in: 'path',
            name: 'idCheckItem',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Checklist Check Item Name" to be updated.',
      content: { 'application/json': { schema: CardsChecklistCheckItemNameSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPosRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/pos',
  tags: ['card'],
  summary: 'updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()',
  operationId: 'updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idCheckItem: z
        .string()
        .openapi({
          param: {
            description: 'idCheckItem',
            in: 'path',
            name: 'idCheckItem',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Checklist Check Item Pos" to be updated.',
      content: { 'application/json': { schema: CardsChecklistCheckItemPosSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardChecklistIdChecklistCheckItemIdCheckItemStateRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/state',
  tags: ['card'],
  summary: 'updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()',
  operationId: 'updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idCheckItem: z
        .string()
        .openapi({
          param: {
            description: 'idCheckItem',
            in: 'path',
            name: 'idCheckItem',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Checklist Check Item State" to be updated.',
      content: { 'application/json': { schema: CardsChecklistCheckItemStateSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardChecklistsRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}/checklists',
  tags: ['card'],
  summary: 'getCardsChecklistsByIdCard()',
  operationId: 'getCardsChecklistsByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cards: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none, open or visible',
            in: 'query',
            name: 'cards',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      card_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'card_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      checkItems: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'checkItems',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      checkItem_fields: z
        .string()
        .default('name, nameData, pos and state')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: name, nameData, pos, state or type',
            in: 'query',
            name: 'checkItem_fields',
            required: false,
            schema: { default: 'name, nameData, pos and state', type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: idBoard, idCard, name or pos',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postCardsIdCardChecklistsRoute = createRoute({
  method: 'post',
  path: '/cards/{idCard}/checklists',
  tags: ['card'],
  summary: 'addCardsChecklistsByIdCard()',
  operationId: 'addCardsChecklistsByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Checklists" to be added.',
      content: { 'application/json': { schema: CardsChecklistsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteCardsIdCardChecklistsIdChecklistRoute = createRoute({
  method: 'delete',
  path: '/cards/{idCard}/checklists/{idChecklist}',
  tags: ['card'],
  summary: 'deleteCardsChecklistsByIdCardByIdChecklist()',
  operationId: 'deleteCardsChecklistsByIdCardByIdChecklist',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardClosedRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/closed',
  tags: ['card'],
  summary: 'updateCardsClosedByIdCard()',
  operationId: 'updateCardsClosedByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Closed" to be updated.',
      content: { 'application/json': { schema: CardsClosedSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardDescRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/desc',
  tags: ['card'],
  summary: 'updateCardsDescByIdCard()',
  operationId: 'updateCardsDescByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Desc" to be updated.',
      content: { 'application/json': { schema: CardsDescSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardDueRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/due',
  tags: ['card'],
  summary: 'updateCardsDueByIdCard()',
  operationId: 'updateCardsDueByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Due" to be updated.',
      content: { 'application/json': { schema: CardsDueSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardIdAttachmentCoverRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/idAttachmentCover',
  tags: ['card'],
  summary: 'updateCardsIdAttachmentCoverByIdCard()',
  operationId: 'updateCardsIdAttachmentCoverByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Id Attachment Cover" to be updated.',
      content: { 'application/json': { schema: CardsIdAttachmentCoverSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardIdBoardRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/idBoard',
  tags: ['card'],
  summary: 'updateCardsIdBoardByIdCard()',
  operationId: 'updateCardsIdBoardByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Id Board" to be updated.',
      content: { 'application/json': { schema: CardsIdBoardSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postCardsIdCardIdLabelsRoute = createRoute({
  method: 'post',
  path: '/cards/{idCard}/idLabels',
  tags: ['card'],
  summary: 'addCardsIdLabelsByIdCard()',
  operationId: 'addCardsIdLabelsByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Id Labels" to be added.',
      content: { 'application/json': { schema: CardsIdLabelsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteCardsIdCardIdLabelsIdLabelRoute = createRoute({
  method: 'delete',
  path: '/cards/{idCard}/idLabels/{idLabel}',
  tags: ['card'],
  summary: 'deleteCardsIdLabelsByIdCardByIdLabel()',
  operationId: 'deleteCardsIdLabelsByIdCardByIdLabel',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idLabel: z
        .string()
        .openapi({
          param: {
            description: 'idLabel',
            in: 'path',
            name: 'idLabel',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardIdListRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/idList',
  tags: ['card'],
  summary: 'updateCardsIdListByIdCard()',
  operationId: 'updateCardsIdListByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Id List" to be updated.',
      content: { 'application/json': { schema: CardsIdListSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardIdMembersRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/idMembers',
  tags: ['card'],
  summary: 'updateCardsIdMembersByIdCard()',
  operationId: 'updateCardsIdMembersByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Id Members" to be updated.',
      content: { 'application/json': { schema: CardsIdMembersSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postCardsIdCardIdMembersRoute = createRoute({
  method: 'post',
  path: '/cards/{idCard}/idMembers',
  tags: ['card'],
  summary: 'addCardsIdMembersByIdCard()',
  operationId: 'addCardsIdMembersByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Id Members" to be added.',
      content: { 'application/json': { schema: CardsIdMembersSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteCardsIdCardIdMembersIdMemberRoute = createRoute({
  method: 'delete',
  path: '/cards/{idCard}/idMembers/{idMember}',
  tags: ['card'],
  summary: 'deleteCardsIdMembersByIdCardByIdMember()',
  operationId: 'deleteCardsIdMembersByIdCardByIdMember',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardLabelsRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/labels',
  tags: ['card'],
  summary: 'updateCardsLabelsByIdCard()',
  operationId: 'updateCardsLabelsByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Labels" to be updated.',
      content: { 'application/json': { schema: CardsLabelsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postCardsIdCardLabelsRoute = createRoute({
  method: 'post',
  path: '/cards/{idCard}/labels',
  tags: ['card'],
  summary: 'addCardsLabelsByIdCard()',
  operationId: 'addCardsLabelsByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Labels" to be added.',
      content: { 'application/json': { schema: CardsLabelsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteCardsIdCardLabelsColorRoute = createRoute({
  method: 'delete',
  path: '/cards/{idCard}/labels/{color}',
  tags: ['card'],
  summary: 'deleteCardsLabelsByIdCardByColor()',
  operationId: 'deleteCardsLabelsByIdCardByColor',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      color: z
        .string()
        .openapi({
          param: {
            description: 'color',
            in: 'path',
            name: 'color',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardListRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}/list',
  tags: ['card'],
  summary: 'getCardsListByIdCard()',
  operationId: 'getCardsListByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, idBoard, name, pos or subscribed',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardListFieldRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}/list/{field}',
  tags: ['card'],
  summary: 'getCardsListByIdCardByField()',
  operationId: 'getCardsListByIdCardByField',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postCardsIdCardMarkAssociatedNotificationsReadRoute = createRoute({
  method: 'post',
  path: '/cards/{idCard}/markAssociatedNotificationsRead',
  tags: ['card'],
  summary: 'addCardsMarkAssociatedNotificationsReadByIdCard()',
  operationId: 'addCardsMarkAssociatedNotificationsReadByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardMembersRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}/members',
  tags: ['card'],
  summary: 'getCardsMembersByIdCard()',
  operationId: 'getCardsMembersByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardMembersVotedRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}/membersVoted',
  tags: ['card'],
  summary: 'getCardsMembersVotedByIdCard()',
  operationId: 'getCardsMembersVotedByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postCardsIdCardMembersVotedRoute = createRoute({
  method: 'post',
  path: '/cards/{idCard}/membersVoted',
  tags: ['card'],
  summary: 'addCardsMembersVotedByIdCard()',
  operationId: 'addCardsMembersVotedByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Members Voted" to be added.',
      content: { 'application/json': { schema: CardsMembersVotedSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteCardsIdCardMembersVotedIdMemberRoute = createRoute({
  method: 'delete',
  path: '/cards/{idCard}/membersVoted/{idMember}',
  tags: ['card'],
  summary: 'deleteCardsMembersVotedByIdCardByIdMember()',
  operationId: 'deleteCardsMembersVotedByIdCardByIdMember',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardNameRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/name',
  tags: ['card'],
  summary: 'updateCardsNameByIdCard()',
  operationId: 'updateCardsNameByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Name" to be updated.',
      content: { 'application/json': { schema: CardsNameSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardPosRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/pos',
  tags: ['card'],
  summary: 'updateCardsPosByIdCard()',
  operationId: 'updateCardsPosByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Pos" to be updated.',
      content: { 'application/json': { schema: CardsPosSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardStickersRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}/stickers',
  tags: ['card'],
  summary: 'getCardsStickersByIdCard()',
  operationId: 'getCardsStickersByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postCardsIdCardStickersRoute = createRoute({
  method: 'post',
  path: '/cards/{idCard}/stickers',
  tags: ['card'],
  summary: 'addCardsStickersByIdCard()',
  operationId: 'addCardsStickersByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Stickers" to be added.',
      content: { 'application/json': { schema: CardsStickersSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardStickersIdStickerRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}/stickers/{idSticker}',
  tags: ['card'],
  summary: 'getCardsStickersByIdCardByIdSticker()',
  operationId: 'getCardsStickersByIdCardByIdSticker',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idSticker: z
        .string()
        .openapi({
          param: {
            description: 'idSticker',
            in: 'path',
            name: 'idSticker',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardStickersIdStickerRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/stickers/{idSticker}',
  tags: ['card'],
  summary: 'updateCardsStickersByIdCardByIdSticker()',
  operationId: 'updateCardsStickersByIdCardByIdSticker',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idSticker: z
        .string()
        .openapi({
          param: {
            description: 'idSticker',
            in: 'path',
            name: 'idSticker',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Stickers" to be updated.',
      content: { 'application/json': { schema: CardsStickersSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteCardsIdCardStickersIdStickerRoute = createRoute({
  method: 'delete',
  path: '/cards/{idCard}/stickers/{idSticker}',
  tags: ['card'],
  summary: 'deleteCardsStickersByIdCardByIdSticker()',
  operationId: 'deleteCardsStickersByIdCardByIdSticker',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idSticker: z
        .string()
        .openapi({
          param: {
            description: 'idSticker',
            in: 'path',
            name: 'idSticker',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putCardsIdCardSubscribedRoute = createRoute({
  method: 'put',
  path: '/cards/{idCard}/subscribed',
  tags: ['card'],
  summary: 'updateCardsSubscribedByIdCard()',
  operationId: 'updateCardsSubscribedByIdCard',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Cards Subscribed" to be updated.',
      content: { 'application/json': { schema: CardsSubscribedSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getCardsIdCardFieldRoute = createRoute({
  method: 'get',
  path: '/cards/{idCard}/{field}',
  tags: ['card'],
  summary: 'getCardsByIdCardByField()',
  operationId: 'getCardsByIdCardByField',
  request: {
    params: z.object({
      idCard: z
        .string()
        .openapi({
          param: {
            description: 'card id or shortlink',
            in: 'path',
            name: 'idCard',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const postChecklistsRoute = createRoute({
  method: 'post',
  path: '/checklists',
  tags: ['checklist'],
  summary: 'addChecklists()',
  operationId: 'addChecklists',
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Checklists" to be added.',
      content: { 'application/json': { schema: ChecklistsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getChecklistsIdChecklistRoute = createRoute({
  method: 'get',
  path: '/checklists/{idChecklist}',
  tags: ['checklist'],
  summary: 'getChecklistsByIdChecklist()',
  operationId: 'getChecklistsByIdChecklist',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cards: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none, open or visible',
            in: 'query',
            name: 'cards',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      card_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'card_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      checkItems: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'checkItems',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      checkItem_fields: z
        .string()
        .default('name, nameData, pos and state')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: name, nameData, pos, state or type',
            in: 'query',
            name: 'checkItem_fields',
            required: false,
            schema: { default: 'name, nameData, pos and state', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: idBoard, idCard, name or pos',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putChecklistsIdChecklistRoute = createRoute({
  method: 'put',
  path: '/checklists/{idChecklist}',
  tags: ['checklist'],
  summary: 'updateChecklistsByIdChecklist()',
  operationId: 'updateChecklistsByIdChecklist',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Checklists" to be updated.',
      content: { 'application/json': { schema: ChecklistsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteChecklistsIdChecklistRoute = createRoute({
  method: 'delete',
  path: '/checklists/{idChecklist}',
  tags: ['checklist'],
  summary: 'deleteChecklistsByIdChecklist()',
  operationId: 'deleteChecklistsByIdChecklist',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getChecklistsIdChecklistBoardRoute = createRoute({
  method: 'get',
  path: '/checklists/{idChecklist}/board',
  tags: ['checklist'],
  summary: 'getChecklistsBoardByIdChecklist()',
  operationId: 'getChecklistsBoardByIdChecklist',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getChecklistsIdChecklistBoardFieldRoute = createRoute({
  method: 'get',
  path: '/checklists/{idChecklist}/board/{field}',
  tags: ['checklist'],
  summary: 'getChecklistsBoardByIdChecklistByField()',
  operationId: 'getChecklistsBoardByIdChecklistByField',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getChecklistsIdChecklistCardsRoute = createRoute({
  method: 'get',
  path: '/checklists/{idChecklist}/cards',
  tags: ['checklist'],
  summary: 'getChecklistsCardsByIdChecklist()',
  operationId: 'getChecklistsCardsByIdChecklist',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A boolean value or &quot;cover&quot; for only card cover attachments',
            in: 'query',
            name: 'attachments',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachment_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url',
            in: 'query',
            name: 'attachment_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      stickers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'stickers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      members: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'members',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      checkItemStates: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'checkItemStates',
            required: false,
            schema: { type: 'string' },
          },
        }),
      checklists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'checklists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 1 to 1000',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, or null',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, or null',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('open')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none or open',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'open', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getChecklistsIdChecklistCardsFilterRoute = createRoute({
  method: 'get',
  path: '/checklists/{idChecklist}/cards/{filter}',
  tags: ['checklist'],
  summary: 'getChecklistsCardsByIdChecklistByFilter()',
  operationId: 'getChecklistsCardsByIdChecklistByFilter',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .openapi({
          param: {
            description: 'filter',
            in: 'path',
            name: 'filter',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const getChecklistsIdChecklistCheckItemsRoute = createRoute({
  method: 'get',
  path: '/checklists/{idChecklist}/checkItems',
  tags: ['checklist'],
  summary: 'getChecklistsCheckItemsByIdChecklist()',
  operationId: 'getChecklistsCheckItemsByIdChecklist',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('name, nameData, pos and state')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: name, nameData, pos, state or type',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'name, nameData, pos and state', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postChecklistsIdChecklistCheckItemsRoute = createRoute({
  method: 'post',
  path: '/checklists/{idChecklist}/checkItems',
  tags: ['checklist'],
  summary: 'addChecklistsCheckItemsByIdChecklist()',
  operationId: 'addChecklistsCheckItemsByIdChecklist',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Checklists Check Items" to be added.',
      content: { 'application/json': { schema: ChecklistsCheckItemsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getChecklistsIdChecklistCheckItemsIdCheckItemRoute = createRoute({
  method: 'get',
  path: '/checklists/{idChecklist}/checkItems/{idCheckItem}',
  tags: ['checklist'],
  summary: 'getChecklistsCheckItemsByIdChecklistByIdCheckItem()',
  operationId: 'getChecklistsCheckItemsByIdChecklistByIdCheckItem',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idCheckItem: z
        .string()
        .openapi({
          param: {
            description: 'idCheckItem',
            in: 'path',
            name: 'idCheckItem',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('name, nameData, pos and state')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: name, nameData, pos, state or type',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'name, nameData, pos and state', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteChecklistsIdChecklistCheckItemsIdCheckItemRoute = createRoute({
  method: 'delete',
  path: '/checklists/{idChecklist}/checkItems/{idCheckItem}',
  tags: ['checklist'],
  summary: 'deleteChecklistsCheckItemsByIdChecklistByIdCheckItem()',
  operationId: 'deleteChecklistsCheckItemsByIdChecklistByIdCheckItem',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idCheckItem: z
        .string()
        .openapi({
          param: {
            description: 'idCheckItem',
            in: 'path',
            name: 'idCheckItem',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putChecklistsIdChecklistIdCardRoute = createRoute({
  method: 'put',
  path: '/checklists/{idChecklist}/idCard',
  tags: ['checklist'],
  summary: 'updateChecklistsIdCardByIdChecklist()',
  operationId: 'updateChecklistsIdCardByIdChecklist',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Checklists Id Card" to be updated.',
      content: { 'application/json': { schema: ChecklistsIdCardSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putChecklistsIdChecklistNameRoute = createRoute({
  method: 'put',
  path: '/checklists/{idChecklist}/name',
  tags: ['checklist'],
  summary: 'updateChecklistsNameByIdChecklist()',
  operationId: 'updateChecklistsNameByIdChecklist',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Checklists Name" to be updated.',
      content: { 'application/json': { schema: ChecklistsNameSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putChecklistsIdChecklistPosRoute = createRoute({
  method: 'put',
  path: '/checklists/{idChecklist}/pos',
  tags: ['checklist'],
  summary: 'updateChecklistsPosByIdChecklist()',
  operationId: 'updateChecklistsPosByIdChecklist',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Checklists Pos" to be updated.',
      content: { 'application/json': { schema: ChecklistsPosSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getChecklistsIdChecklistFieldRoute = createRoute({
  method: 'get',
  path: '/checklists/{idChecklist}/{field}',
  tags: ['checklist'],
  summary: 'getChecklistsByIdChecklistByField()',
  operationId: 'getChecklistsByIdChecklistByField',
  request: {
    params: z.object({
      idChecklist: z
        .string()
        .openapi({
          param: {
            description: 'idChecklist',
            in: 'path',
            name: 'idChecklist',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const postLabelsRoute = createRoute({
  method: 'post',
  path: '/labels',
  tags: ['label'],
  summary: 'addLabels()',
  operationId: 'addLabels',
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Labels" to be added.',
      content: { 'application/json': { schema: LabelsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getLabelsIdLabelRoute = createRoute({
  method: 'get',
  path: '/labels/{idLabel}',
  tags: ['label'],
  summary: 'getLabelsByIdLabel()',
  operationId: 'getLabelsByIdLabel',
  request: {
    params: z.object({
      idLabel: z
        .string()
        .openapi({
          param: {
            description: 'idLabel',
            in: 'path',
            name: 'idLabel',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: color, idBoard, name or uses',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putLabelsIdLabelRoute = createRoute({
  method: 'put',
  path: '/labels/{idLabel}',
  tags: ['label'],
  summary: 'updateLabelsByIdLabel()',
  operationId: 'updateLabelsByIdLabel',
  request: {
    params: z.object({
      idLabel: z
        .string()
        .openapi({
          param: {
            description: 'idLabel',
            in: 'path',
            name: 'idLabel',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Labels" to be updated.',
      content: { 'application/json': { schema: LabelsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteLabelsIdLabelRoute = createRoute({
  method: 'delete',
  path: '/labels/{idLabel}',
  tags: ['label'],
  summary: 'deleteLabelsByIdLabel()',
  operationId: 'deleteLabelsByIdLabel',
  request: {
    params: z.object({
      idLabel: z
        .string()
        .openapi({
          param: {
            description: 'idLabel',
            in: 'path',
            name: 'idLabel',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getLabelsIdLabelBoardRoute = createRoute({
  method: 'get',
  path: '/labels/{idLabel}/board',
  tags: ['label'],
  summary: 'getLabelsBoardByIdLabel()',
  operationId: 'getLabelsBoardByIdLabel',
  request: {
    params: z.object({
      idLabel: z
        .string()
        .openapi({
          param: {
            description: 'idLabel',
            in: 'path',
            name: 'idLabel',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getLabelsIdLabelBoardFieldRoute = createRoute({
  method: 'get',
  path: '/labels/{idLabel}/board/{field}',
  tags: ['label'],
  summary: 'getLabelsBoardByIdLabelByField()',
  operationId: 'getLabelsBoardByIdLabelByField',
  request: {
    params: z.object({
      idLabel: z
        .string()
        .openapi({
          param: {
            description: 'idLabel',
            in: 'path',
            name: 'idLabel',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putLabelsIdLabelColorRoute = createRoute({
  method: 'put',
  path: '/labels/{idLabel}/color',
  tags: ['label'],
  summary: 'updateLabelsColorByIdLabel()',
  operationId: 'updateLabelsColorByIdLabel',
  request: {
    params: z.object({
      idLabel: z
        .string()
        .openapi({
          param: {
            description: 'idLabel',
            in: 'path',
            name: 'idLabel',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Labels Color" to be updated.',
      content: { 'application/json': { schema: LabelsColorSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putLabelsIdLabelNameRoute = createRoute({
  method: 'put',
  path: '/labels/{idLabel}/name',
  tags: ['label'],
  summary: 'updateLabelsNameByIdLabel()',
  operationId: 'updateLabelsNameByIdLabel',
  request: {
    params: z.object({
      idLabel: z
        .string()
        .openapi({
          param: {
            description: 'idLabel',
            in: 'path',
            name: 'idLabel',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Labels Name" to be updated.',
      content: { 'application/json': { schema: LabelsNameSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postListsRoute = createRoute({
  method: 'post',
  path: '/lists',
  tags: ['list'],
  summary: 'addLists()',
  operationId: 'addLists',
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Lists" to be added.',
      content: { 'application/json': { schema: ListsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getListsIdListRoute = createRoute({
  method: 'get',
  path: '/lists/{idList}',
  tags: ['list'],
  summary: 'getListsByIdList()',
  operationId: 'getListsByIdList',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cards: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none or open',
            in: 'query',
            name: 'cards',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      card_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'card_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      board: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'board',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_fields: z
        .string()
        .default('name, desc, descData, closed, idOrganization, pinned, url and prefs')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'board_fields',
            required: false,
            schema: {
              default: 'name, desc, descData, closed, idOrganization, pinned, url and prefs',
              type: 'string',
            },
          },
        }),
      fields: z
        .string()
        .default('name, closed, idBoard and pos')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, idBoard, name, pos or subscribed',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'name, closed, idBoard and pos', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putListsIdListRoute = createRoute({
  method: 'put',
  path: '/lists/{idList}',
  tags: ['list'],
  summary: 'updateListsByIdList()',
  operationId: 'updateListsByIdList',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Lists" to be updated.',
      content: { 'application/json': { schema: ListsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getListsIdListActionsRoute = createRoute({
  method: 'get',
  path: '/lists/{idList}/actions',
  tags: ['list'],
  summary: 'getListsActionsByIdList()',
  operationId: 'getListsActionsByIdList',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      format: z
        .string()
        .default('list')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: count, list or minimal',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'list', type: 'string' },
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, null or lastView',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, or null',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Page * limit must be less than 1000',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '0', type: 'string' },
          },
        }),
      idModels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return actions related to these model ids',
            in: 'query',
            name: 'idModels',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'member',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      memberCreator: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'memberCreator',
            required: false,
            schema: { type: 'string' },
          },
        }),
      memberCreator_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'memberCreator_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postListsIdListArchiveAllCardsRoute = createRoute({
  method: 'post',
  path: '/lists/{idList}/archiveAllCards',
  tags: ['list'],
  summary: 'addListsArchiveAllCardsByIdList()',
  operationId: 'addListsArchiveAllCardsByIdList',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getListsIdListBoardRoute = createRoute({
  method: 'get',
  path: '/lists/{idList}/board',
  tags: ['list'],
  summary: 'getListsBoardByIdList()',
  operationId: 'getListsBoardByIdList',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getListsIdListBoardFieldRoute = createRoute({
  method: 'get',
  path: '/lists/{idList}/board/{field}',
  tags: ['list'],
  summary: 'getListsBoardByIdListByField()',
  operationId: 'getListsBoardByIdListByField',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getListsIdListCardsRoute = createRoute({
  method: 'get',
  path: '/lists/{idList}/cards',
  tags: ['list'],
  summary: 'getListsCardsByIdList()',
  operationId: 'getListsCardsByIdList',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A boolean value or &quot;cover&quot; for only card cover attachments',
            in: 'query',
            name: 'attachments',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachment_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url',
            in: 'query',
            name: 'attachment_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      stickers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'stickers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      members: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'members',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      checkItemStates: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'checkItemStates',
            required: false,
            schema: { type: 'string' },
          },
        }),
      checklists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'checklists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 1 to 1000',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, or null',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, or null',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('open')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none or open',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'open', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postListsIdListCardsRoute = createRoute({
  method: 'post',
  path: '/lists/{idList}/cards',
  tags: ['list'],
  summary: 'addListsCardsByIdList()',
  operationId: 'addListsCardsByIdList',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Lists Cards" to be added.',
      content: { 'application/json': { schema: ListsCardsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getListsIdListCardsFilterRoute = createRoute({
  method: 'get',
  path: '/lists/{idList}/cards/{filter}',
  tags: ['list'],
  summary: 'getListsCardsByIdListByFilter()',
  operationId: 'getListsCardsByIdListByFilter',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .openapi({
          param: {
            description: 'filter',
            in: 'path',
            name: 'filter',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const putListsIdListClosedRoute = createRoute({
  method: 'put',
  path: '/lists/{idList}/closed',
  tags: ['list'],
  summary: 'updateListsClosedByIdList()',
  operationId: 'updateListsClosedByIdList',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Lists Closed" to be updated.',
      content: { 'application/json': { schema: ListsClosedSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putListsIdListIdBoardRoute = createRoute({
  method: 'put',
  path: '/lists/{idList}/idBoard',
  tags: ['list'],
  summary: 'updateListsIdBoardByIdList()',
  operationId: 'updateListsIdBoardByIdList',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Lists Id Board" to be updated.',
      content: { 'application/json': { schema: ListsIdBoardSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postListsIdListMoveAllCardsRoute = createRoute({
  method: 'post',
  path: '/lists/{idList}/moveAllCards',
  tags: ['list'],
  summary: 'addListsMoveAllCardsByIdList()',
  operationId: 'addListsMoveAllCardsByIdList',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Lists Move All Cards" to be added.',
      content: { 'application/json': { schema: ListsMoveAllCardsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putListsIdListNameRoute = createRoute({
  method: 'put',
  path: '/lists/{idList}/name',
  tags: ['list'],
  summary: 'updateListsNameByIdList()',
  operationId: 'updateListsNameByIdList',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Lists Name" to be updated.',
      content: { 'application/json': { schema: ListsNameSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putListsIdListPosRoute = createRoute({
  method: 'put',
  path: '/lists/{idList}/pos',
  tags: ['list'],
  summary: 'updateListsPosByIdList()',
  operationId: 'updateListsPosByIdList',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Lists Pos" to be updated.',
      content: { 'application/json': { schema: ListsPosSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putListsIdListSubscribedRoute = createRoute({
  method: 'put',
  path: '/lists/{idList}/subscribed',
  tags: ['list'],
  summary: 'updateListsSubscribedByIdList()',
  operationId: 'updateListsSubscribedByIdList',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Lists Subscribed" to be updated.',
      content: { 'application/json': { schema: ListsSubscribedSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getListsIdListFieldRoute = createRoute({
  method: 'get',
  path: '/lists/{idList}/{field}',
  tags: ['list'],
  summary: 'getListsByIdListByField()',
  operationId: 'getListsByIdListByField',
  request: {
    params: z.object({
      idList: z
        .string()
        .openapi({
          param: {
            description: 'idList',
            in: 'path',
            name: 'idList',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const getMembersIdMemberRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}',
  tags: ['member'],
  summary: 'getMembersByIdMember()',
  description:
    "If you specify 'me' as the username, this call will respond as if you had supplied the username associated with the supplied token",
  operationId: 'getMembersByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'actions_entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'actions_display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'actions_limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      action_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'action_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      action_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, null or lastView',
            in: 'query',
            name: 'action_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      action_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, or null',
            in: 'query',
            name: 'action_before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      cards: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none, open or visible',
            in: 'query',
            name: 'cards',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      card_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'card_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      card_members: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'card_members',
            required: false,
            schema: { type: 'string' },
          },
        }),
      card_member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'card_member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      card_attachments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A boolean value or &quot;cover&quot; for only card cover attachments',
            in: 'query',
            name: 'card_attachments',
            required: false,
            schema: { type: 'string' },
          },
        }),
      card_attachment_fields: z
        .string()
        .default('url and previews')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url',
            in: 'query',
            name: 'card_attachment_fields',
            required: false,
            schema: { default: 'url and previews', type: 'string' },
          },
        }),
      card_stickers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'card_stickers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      boards: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned',
            in: 'query',
            name: 'boards',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_fields: z
        .string()
        .default('name, closed, idOrganization and pinned')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'board_fields',
            required: false,
            schema: { default: 'name, closed, idOrganization and pinned', type: 'string' },
          },
        }),
      board_actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'board_actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_actions_entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'board_actions_entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_actions_display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'board_actions_display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_actions_format: z
        .string()
        .default('list')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: count, list or minimal',
            in: 'query',
            name: 'board_actions_format',
            required: false,
            schema: { default: 'list', type: 'string' },
          },
        }),
      board_actions_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, null or lastView',
            in: 'query',
            name: 'board_actions_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_actions_limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'board_actions_limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      board_action_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'board_action_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      board_lists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none or open',
            in: 'query',
            name: 'board_lists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      board_memberships: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: active, admin, deactivated, me or normal',
            in: 'query',
            name: 'board_memberships',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      board_organization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'board_organization',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_organization_fields: z
        .string()
        .default('name and displayName')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website',
            in: 'query',
            name: 'board_organization_fields',
            required: false,
            schema: { default: 'name and displayName', type: 'string' },
          },
        }),
      boardsInvited: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned',
            in: 'query',
            name: 'boardsInvited',
            required: false,
            schema: { type: 'string' },
          },
        }),
      boardsInvited_fields: z
        .string()
        .default('name, closed, idOrganization and pinned')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'boardsInvited_fields',
            required: false,
            schema: { default: 'name, closed, idOrganization and pinned', type: 'string' },
          },
        }),
      boardStars: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'boardStars',
            required: false,
            schema: { type: 'string' },
          },
        }),
      savedSearches: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'savedSearches',
            required: false,
            schema: { type: 'string' },
          },
        }),
      organizations: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, members, none or public',
            in: 'query',
            name: 'organizations',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      organization_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website',
            in: 'query',
            name: 'organization_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      organization_paid_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'organization_paid_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      organizationsInvited: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, members, none or public',
            in: 'query',
            name: 'organizationsInvited',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      organizationsInvited_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website',
            in: 'query',
            name: 'organizationsInvited_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      notifications: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard',
            in: 'query',
            name: 'notifications',
            required: false,
            schema: { type: 'string' },
          },
        }),
      notifications_entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'notifications_entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      notifications_display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'notifications_display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      notifications_limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 1 to 1000',
            in: 'query',
            name: 'notifications_limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      notification_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: data, date, idMemberCreator, type or unread',
            in: 'query',
            name: 'notification_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      notification_memberCreator: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'notification_memberCreator',
            required: false,
            schema: { type: 'string' },
          },
        }),
      notification_memberCreator_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'notification_memberCreator_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      notification_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An id, or null',
            in: 'query',
            name: 'notification_before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      notification_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An id, or null',
            in: 'query',
            name: 'notification_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      tokens: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'tokens',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      paid_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'paid_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      boardBackgrounds: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, custom, default, none or premium',
            in: 'query',
            name: 'boardBackgrounds',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      customBoardBackgrounds: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'customBoardBackgrounds',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      customStickers: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'customStickers',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      customEmoji: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'customEmoji',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}',
  tags: ['member'],
  summary: 'updateMembersByIdMember()',
  operationId: 'updateMembersByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members" to be updated.',
      content: { 'application/json': { schema: MembersSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberActionsRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/actions',
  tags: ['member'],
  summary: 'getMembersActionsByIdMember()',
  operationId: 'getMembersActionsByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      format: z
        .string()
        .default('list')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: count, list or minimal',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'list', type: 'string' },
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, null or lastView',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, or null',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Page * limit must be less than 1000',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '0', type: 'string' },
          },
        }),
      idModels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return actions related to these model ids',
            in: 'query',
            name: 'idModels',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'member',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      memberCreator: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'memberCreator',
            required: false,
            schema: { type: 'string' },
          },
        }),
      memberCreator_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'memberCreator_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postMembersIdMemberAvatarRoute = createRoute({
  method: 'post',
  path: '/members/{idMember}/avatar',
  tags: ['member'],
  summary: 'addMembersAvatarByIdMember()',
  operationId: 'addMembersAvatarByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Avatar" to be added.',
      content: { 'application/json': { schema: MembersAvatarSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberAvatarSourceRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/avatarSource',
  tags: ['member'],
  summary: 'updateMembersAvatarSourceByIdMember()',
  operationId: 'updateMembersAvatarSourceByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Avatar Source" to be updated.',
      content: { 'application/json': { schema: MembersAvatarSourceSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberBioRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/bio',
  tags: ['member'],
  summary: 'updateMembersBioByIdMember()',
  operationId: 'updateMembersBioByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Bio" to be updated.',
      content: { 'application/json': { schema: MembersBioSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberBoardBackgroundsRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/boardBackgrounds',
  tags: ['member'],
  summary: 'getMembersBoardBackgroundsByIdMember()',
  operationId: 'getMembersBoardBackgroundsByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, custom, default, none or premium',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postMembersIdMemberBoardBackgroundsRoute = createRoute({
  method: 'post',
  path: '/members/{idMember}/boardBackgrounds',
  tags: ['member'],
  summary: 'addMembersBoardBackgroundsByIdMember()',
  operationId: 'addMembersBoardBackgroundsByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Board Backgrounds" to be added.',
      content: { 'application/json': { schema: MembersBoardBackgroundsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/boardBackgrounds/{idBoardBackground}',
  tags: ['member'],
  summary: 'getMembersBoardBackgroundsByIdMemberByIdBoardBackground()',
  operationId: 'getMembersBoardBackgroundsByIdMemberByIdBoardBackground',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idBoardBackground: z
        .string()
        .openapi({
          param: {
            description: 'idBoardBackground',
            in: 'path',
            name: 'idBoardBackground',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/boardBackgrounds/{idBoardBackground}',
  tags: ['member'],
  summary: 'updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()',
  operationId: 'updateMembersBoardBackgroundsByIdMemberByIdBoardBackground',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idBoardBackground: z
        .string()
        .openapi({
          param: {
            description: 'idBoardBackground',
            in: 'path',
            name: 'idBoardBackground',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Board Backgrounds" to be updated.',
      content: { 'application/json': { schema: MembersBoardBackgroundsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteMembersIdMemberBoardBackgroundsIdBoardBackgroundRoute = createRoute({
  method: 'delete',
  path: '/members/{idMember}/boardBackgrounds/{idBoardBackground}',
  tags: ['member'],
  summary: 'deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()',
  operationId: 'deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idBoardBackground: z
        .string()
        .openapi({
          param: {
            description: 'idBoardBackground',
            in: 'path',
            name: 'idBoardBackground',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberBoardStarsRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/boardStars',
  tags: ['member'],
  summary: 'getMembersBoardStarsByIdMember()',
  operationId: 'getMembersBoardStarsByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postMembersIdMemberBoardStarsRoute = createRoute({
  method: 'post',
  path: '/members/{idMember}/boardStars',
  tags: ['member'],
  summary: 'addMembersBoardStarsByIdMember()',
  operationId: 'addMembersBoardStarsByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Board Stars" to be added.',
      content: { 'application/json': { schema: MembersBoardStarsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberBoardStarsIdBoardStarRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/boardStars/{idBoardStar}',
  tags: ['member'],
  summary: 'getMembersBoardStarsByIdMemberByIdBoardStar()',
  operationId: 'getMembersBoardStarsByIdMemberByIdBoardStar',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idBoardStar: z
        .string()
        .openapi({
          param: {
            description: 'idBoardStar',
            in: 'path',
            name: 'idBoardStar',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberBoardStarsIdBoardStarRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/boardStars/{idBoardStar}',
  tags: ['member'],
  summary: 'updateMembersBoardStarsByIdMemberByIdBoardStar()',
  operationId: 'updateMembersBoardStarsByIdMemberByIdBoardStar',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idBoardStar: z
        .string()
        .openapi({
          param: {
            description: 'idBoardStar',
            in: 'path',
            name: 'idBoardStar',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Board Stars" to be updated.',
      content: { 'application/json': { schema: MembersBoardStarsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteMembersIdMemberBoardStarsIdBoardStarRoute = createRoute({
  method: 'delete',
  path: '/members/{idMember}/boardStars/{idBoardStar}',
  tags: ['member'],
  summary: 'deleteMembersBoardStarsByIdMemberByIdBoardStar()',
  operationId: 'deleteMembersBoardStarsByIdMemberByIdBoardStar',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idBoardStar: z
        .string()
        .openapi({
          param: {
            description: 'idBoardStar',
            in: 'path',
            name: 'idBoardStar',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberBoardStarsIdBoardStarIdBoardRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/boardStars/{idBoardStar}/idBoard',
  tags: ['member'],
  summary: 'updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()',
  operationId: 'updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idBoardStar: z
        .string()
        .openapi({
          param: {
            description: 'idBoardStar',
            in: 'path',
            name: 'idBoardStar',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Board Stars Id Board" to be updated.',
      content: { 'application/json': { schema: MembersBoardStarsIdBoardSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberBoardStarsIdBoardStarPosRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/boardStars/{idBoardStar}/pos',
  tags: ['member'],
  summary: 'updateMembersBoardStarsPosByIdMemberByIdBoardStar()',
  operationId: 'updateMembersBoardStarsPosByIdMemberByIdBoardStar',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idBoardStar: z
        .string()
        .openapi({
          param: {
            description: 'idBoardStar',
            in: 'path',
            name: 'idBoardStar',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Board Stars Pos" to be updated.',
      content: { 'application/json': { schema: MembersBoardStarsPosSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberBoardsRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/boards',
  tags: ['member'],
  summary: 'getMembersBoardsByIdMember()',
  operationId: 'getMembersBoardsByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'actions_entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'actions_limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      actions_format: z
        .string()
        .default('list')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: count, list or minimal',
            in: 'query',
            name: 'actions_format',
            required: false,
            schema: { default: 'list', type: 'string' },
          },
        }),
      actions_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, null or lastView',
            in: 'query',
            name: 'actions_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      action_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'action_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      memberships: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: active, admin, deactivated, me or normal',
            in: 'query',
            name: 'memberships',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      organization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'organization',
            required: false,
            schema: { type: 'string' },
          },
        }),
      organization_fields: z
        .string()
        .default('name and displayName')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website',
            in: 'query',
            name: 'organization_fields',
            required: false,
            schema: { default: 'name and displayName', type: 'string' },
          },
        }),
      lists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none or open',
            in: 'query',
            name: 'lists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberBoardsFilterRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/boards/{filter}',
  tags: ['member'],
  summary: 'getMembersBoardsByIdMemberByFilter()',
  operationId: 'getMembersBoardsByIdMemberByFilter',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .openapi({
          param: {
            description: 'filter',
            in: 'path',
            name: 'filter',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const getMembersIdMemberBoardsInvitedRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/boardsInvited',
  tags: ['member'],
  summary: 'getMembersBoardsInvitedByIdMember()',
  operationId: 'getMembersBoardsInvitedByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberBoardsInvitedFieldRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/boardsInvited/{field}',
  tags: ['member'],
  summary: 'getMembersBoardsInvitedByIdMemberByField()',
  operationId: 'getMembersBoardsInvitedByIdMemberByField',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberCardsRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/cards',
  tags: ['member'],
  summary: 'getMembersCardsByIdMember()',
  operationId: 'getMembersCardsByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A boolean value or &quot;cover&quot; for only card cover attachments',
            in: 'query',
            name: 'attachments',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachment_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url',
            in: 'query',
            name: 'attachment_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      stickers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'stickers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      members: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'members',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      checkItemStates: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'checkItemStates',
            required: false,
            schema: { type: 'string' },
          },
        }),
      checklists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'checklists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 1 to 1000',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, or null',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, or null',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('visible')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none, open or visible',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'visible', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberCardsFilterRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/cards/{filter}',
  tags: ['member'],
  summary: 'getMembersCardsByIdMemberByFilter()',
  operationId: 'getMembersCardsByIdMemberByFilter',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .openapi({
          param: {
            description: 'filter',
            in: 'path',
            name: 'filter',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const getMembersIdMemberCustomBoardBackgroundsRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/customBoardBackgrounds',
  tags: ['member'],
  summary: 'getMembersCustomBoardBackgroundsByIdMember()',
  operationId: 'getMembersCustomBoardBackgroundsByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postMembersIdMemberCustomBoardBackgroundsRoute = createRoute({
  method: 'post',
  path: '/members/{idMember}/customBoardBackgrounds',
  tags: ['member'],
  summary: 'addMembersCustomBoardBackgroundsByIdMember()',
  operationId: 'addMembersCustomBoardBackgroundsByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Custom Board Backgrounds" to be added.',
      content: { 'application/json': { schema: MembersCustomBoardBackgroundsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/customBoardBackgrounds/{idBoardBackground}',
  tags: ['member'],
  summary: 'getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()',
  operationId: 'getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idBoardBackground: z
        .string()
        .openapi({
          param: {
            description: 'idBoardBackground',
            in: 'path',
            name: 'idBoardBackground',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/customBoardBackgrounds/{idBoardBackground}',
  tags: ['member'],
  summary: 'updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()',
  operationId: 'updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idBoardBackground: z
        .string()
        .openapi({
          param: {
            description: 'idBoardBackground',
            in: 'path',
            name: 'idBoardBackground',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Custom Board Backgrounds" to be updated.',
      content: { 'application/json': { schema: MembersCustomBoardBackgroundsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundRoute = createRoute({
  method: 'delete',
  path: '/members/{idMember}/customBoardBackgrounds/{idBoardBackground}',
  tags: ['member'],
  summary: 'deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()',
  operationId: 'deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idBoardBackground: z
        .string()
        .openapi({
          param: {
            description: 'idBoardBackground',
            in: 'path',
            name: 'idBoardBackground',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberCustomEmojiRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/customEmoji',
  tags: ['member'],
  summary: 'getMembersCustomEmojiByIdMember()',
  description: 'This gets the list of all of the user’s uploaded emoji',
  operationId: 'getMembersCustomEmojiByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postMembersIdMemberCustomEmojiRoute = createRoute({
  method: 'post',
  path: '/members/{idMember}/customEmoji',
  tags: ['member'],
  summary: 'addMembersCustomEmojiByIdMember()',
  operationId: 'addMembersCustomEmojiByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Custom Emoji" to be added.',
      content: { 'application/json': { schema: MembersCustomEmojiSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberCustomEmojiIdCustomEmojiRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/customEmoji/{idCustomEmoji}',
  tags: ['member'],
  summary: 'getMembersCustomEmojiByIdMemberByIdCustomEmoji()',
  operationId: 'getMembersCustomEmojiByIdMemberByIdCustomEmoji',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idCustomEmoji: z
        .string()
        .openapi({
          param: {
            description: 'idCustomEmoji',
            in: 'path',
            name: 'idCustomEmoji',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: name or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberCustomStickersRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/customStickers',
  tags: ['member'],
  summary: 'getMembersCustomStickersByIdMember()',
  description: 'This gets a list of all of the user’s uploaded stickers',
  operationId: 'getMembersCustomStickersByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postMembersIdMemberCustomStickersRoute = createRoute({
  method: 'post',
  path: '/members/{idMember}/customStickers',
  tags: ['member'],
  summary: 'addMembersCustomStickersByIdMember()',
  operationId: 'addMembersCustomStickersByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Custom Stickers" to be added.',
      content: { 'application/json': { schema: MembersCustomStickersSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberCustomStickersIdCustomStickerRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/customStickers/{idCustomSticker}',
  tags: ['member'],
  summary: 'getMembersCustomStickersByIdMemberByIdCustomSticker()',
  operationId: 'getMembersCustomStickersByIdMemberByIdCustomSticker',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idCustomSticker: z
        .string()
        .openapi({
          param: {
            description: 'idCustomSticker',
            in: 'path',
            name: 'idCustomSticker',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: scaled or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteMembersIdMemberCustomStickersIdCustomStickerRoute = createRoute({
  method: 'delete',
  path: '/members/{idMember}/customStickers/{idCustomSticker}',
  tags: ['member'],
  summary: 'deleteMembersCustomStickersByIdMemberByIdCustomSticker()',
  operationId: 'deleteMembersCustomStickersByIdMemberByIdCustomSticker',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idCustomSticker: z
        .string()
        .openapi({
          param: {
            description: 'idCustomSticker',
            in: 'path',
            name: 'idCustomSticker',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberDeltasRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/deltas',
  tags: ['member'],
  summary: 'getMembersDeltasByIdMember()',
  operationId: 'getMembersDeltasByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tags: z
        .string()
        .openapi({
          param: {
            description: 'A valid tag for subscribing',
            in: 'query',
            name: 'tags',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ixLastUpdate: z
        .string()
        .openapi({
          param: {
            description: 'a number from -1 to Infinity',
            in: 'query',
            name: 'ixLastUpdate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberFullNameRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/fullName',
  tags: ['member'],
  summary: 'updateMembersFullNameByIdMember()',
  operationId: 'updateMembersFullNameByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Full Name" to be updated.',
      content: { 'application/json': { schema: MembersFullNameSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberInitialsRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/initials',
  tags: ['member'],
  summary: 'updateMembersInitialsByIdMember()',
  operationId: 'updateMembersInitialsByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Initials" to be updated.',
      content: { 'application/json': { schema: MembersInitialsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberNotificationsRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/notifications',
  tags: ['member'],
  summary: 'getMembersNotificationsByIdMember()',
  description:
    'You can only read the notifications for the member associated with the supplied token',
  operationId: 'getMembersNotificationsByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      read_filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, read or unread',
            in: 'query',
            name: 'read_filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: data, date, idMemberCreator, type or unread',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 1 to 1000',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 100',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '0', type: 'string' },
          },
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An id, or null',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An id, or null',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      memberCreator: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'memberCreator',
            required: false,
            schema: { type: 'string' },
          },
        }),
      memberCreator_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'memberCreator_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberNotificationsFilterRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/notifications/{filter}',
  tags: ['member'],
  summary: 'getMembersNotificationsByIdMemberByFilter()',
  operationId: 'getMembersNotificationsByIdMemberByFilter',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .openapi({
          param: {
            description: 'filter',
            in: 'path',
            name: 'filter',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const postMembersIdMemberOneTimeMessagesDismissedRoute = createRoute({
  method: 'post',
  path: '/members/{idMember}/oneTimeMessagesDismissed',
  tags: ['member'],
  summary: 'addMembersOneTimeMessagesDismissedByIdMember()',
  operationId: 'addMembersOneTimeMessagesDismissedByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members One Time Messages Dismissed" to be added.',
      content: { 'application/json': { schema: MembersOneTimeMessagesDismissedSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberOrganizationsRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/organizations',
  tags: ['member'],
  summary: 'getMembersOrganizationsByIdMember()',
  operationId: 'getMembersOrganizationsByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, members, none or public',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      paid_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'paid_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberOrganizationsFilterRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/organizations/{filter}',
  tags: ['member'],
  summary: 'getMembersOrganizationsByIdMemberByFilter()',
  operationId: 'getMembersOrganizationsByIdMemberByFilter',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .openapi({
          param: {
            description: 'filter',
            in: 'path',
            name: 'filter',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const getMembersIdMemberOrganizationsInvitedRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/organizationsInvited',
  tags: ['member'],
  summary: 'getMembersOrganizationsInvitedByIdMember()',
  operationId: 'getMembersOrganizationsInvitedByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberOrganizationsInvitedFieldRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/organizationsInvited/{field}',
  tags: ['member'],
  summary: 'getMembersOrganizationsInvitedByIdMemberByField()',
  operationId: 'getMembersOrganizationsInvitedByIdMemberByField',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberPrefsColorBlindRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/prefs/colorBlind',
  tags: ['member'],
  summary: 'updateMembersPrefsColorBlindByIdMember()',
  operationId: 'updateMembersPrefsColorBlindByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs Color Blind" to be updated.',
      content: { 'application/json': { schema: PrefsColorBlindSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberPrefsLocaleRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/prefs/locale',
  tags: ['member'],
  summary: 'updateMembersPrefsLocaleByIdMember()',
  operationId: 'updateMembersPrefsLocaleByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs Locale" to be updated.',
      content: { 'application/json': { schema: PrefsLocaleSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberPrefsMinutesBetweenSummariesRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/prefs/minutesBetweenSummaries',
  tags: ['member'],
  summary: 'updateMembersPrefsMinutesBetweenSummariesByIdMember()',
  operationId: 'updateMembersPrefsMinutesBetweenSummariesByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs Minutes Between Summaries" to be updated.',
      content: { 'application/json': { schema: PrefsMinutesBetweenSummariesSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberSavedSearchesRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/savedSearches',
  tags: ['member'],
  summary: 'getMembersSavedSearchesByIdMember()',
  operationId: 'getMembersSavedSearchesByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postMembersIdMemberSavedSearchesRoute = createRoute({
  method: 'post',
  path: '/members/{idMember}/savedSearches',
  tags: ['member'],
  summary: 'addMembersSavedSearchesByIdMember()',
  operationId: 'addMembersSavedSearchesByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Saved Searches" to be added.',
      content: { 'application/json': { schema: MembersSavedSearchesSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberSavedSearchesIdSavedSearchRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/savedSearches/{idSavedSearch}',
  tags: ['member'],
  summary: 'getMembersSavedSearchesByIdMemberByIdSavedSearch()',
  operationId: 'getMembersSavedSearchesByIdMemberByIdSavedSearch',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idSavedSearch: z
        .string()
        .openapi({
          param: {
            description: 'idSavedSearch',
            in: 'path',
            name: 'idSavedSearch',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberSavedSearchesIdSavedSearchRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/savedSearches/{idSavedSearch}',
  tags: ['member'],
  summary: 'updateMembersSavedSearchesByIdMemberByIdSavedSearch()',
  operationId: 'updateMembersSavedSearchesByIdMemberByIdSavedSearch',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idSavedSearch: z
        .string()
        .openapi({
          param: {
            description: 'idSavedSearch',
            in: 'path',
            name: 'idSavedSearch',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Saved Searches" to be updated.',
      content: { 'application/json': { schema: MembersSavedSearchesSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteMembersIdMemberSavedSearchesIdSavedSearchRoute = createRoute({
  method: 'delete',
  path: '/members/{idMember}/savedSearches/{idSavedSearch}',
  tags: ['member'],
  summary: 'deleteMembersSavedSearchesByIdMemberByIdSavedSearch()',
  operationId: 'deleteMembersSavedSearchesByIdMemberByIdSavedSearch',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idSavedSearch: z
        .string()
        .openapi({
          param: {
            description: 'idSavedSearch',
            in: 'path',
            name: 'idSavedSearch',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberSavedSearchesIdSavedSearchNameRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/savedSearches/{idSavedSearch}/name',
  tags: ['member'],
  summary: 'updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()',
  operationId: 'updateMembersSavedSearchesNameByIdMemberByIdSavedSearch',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idSavedSearch: z
        .string()
        .openapi({
          param: {
            description: 'idSavedSearch',
            in: 'path',
            name: 'idSavedSearch',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Saved Searches Name" to be updated.',
      content: { 'application/json': { schema: MembersSavedSearchesNameSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberSavedSearchesIdSavedSearchPosRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/savedSearches/{idSavedSearch}/pos',
  tags: ['member'],
  summary: 'updateMembersSavedSearchesPosByIdMemberByIdSavedSearch()',
  operationId: 'updateMembersSavedSearchesPosByIdMemberByIdSavedSearch',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idSavedSearch: z
        .string()
        .openapi({
          param: {
            description: 'idSavedSearch',
            in: 'path',
            name: 'idSavedSearch',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Saved Searches Pos" to be updated.',
      content: { 'application/json': { schema: MembersSavedSearchesPosSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberSavedSearchesIdSavedSearchQueryRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/savedSearches/{idSavedSearch}/query',
  tags: ['member'],
  summary: 'updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch()',
  operationId: 'updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idSavedSearch: z
        .string()
        .openapi({
          param: {
            description: 'idSavedSearch',
            in: 'path',
            name: 'idSavedSearch',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Saved Searches Query" to be updated.',
      content: { 'application/json': { schema: MembersSavedSearchesQuerySchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberTokensRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/tokens',
  tags: ['member'],
  summary: 'getMembersTokensByIdMember()',
  operationId: 'getMembersTokensByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putMembersIdMemberUsernameRoute = createRoute({
  method: 'put',
  path: '/members/{idMember}/username',
  tags: ['member'],
  summary: 'updateMembersUsernameByIdMember()',
  operationId: 'updateMembersUsernameByIdMember',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Members Username" to be updated.',
      content: { 'application/json': { schema: MembersUsernameSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getMembersIdMemberFieldRoute = createRoute({
  method: 'get',
  path: '/members/{idMember}/{field}',
  tags: ['member'],
  summary: 'getMembersByIdMemberByField()',
  operationId: 'getMembersByIdMemberByField',
  request: {
    params: z.object({
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember or username',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const postNotificationsAllReadRoute = createRoute({
  method: 'post',
  path: '/notifications/all/read',
  tags: ['notification'],
  summary: 'addNotificationsAllRead()',
  operationId: 'addNotificationsAllRead',
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}',
  tags: ['notification'],
  summary: 'getNotificationsByIdNotification()',
  operationId: 'getNotificationsByIdNotification',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: data, date, idMemberCreator, type or unread',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      memberCreator: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'memberCreator',
            required: false,
            schema: { type: 'string' },
          },
        }),
      memberCreator_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'memberCreator_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      board: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'board',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_fields: z
        .string()
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'board_fields',
            required: false,
            schema: { default: 'name', type: 'string' },
          },
        }),
      list: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'list',
            required: false,
            schema: { type: 'string' },
          },
        }),
      card: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'card',
            required: false,
            schema: { type: 'string' },
          },
        }),
      card_fields: z
        .string()
        .default('name')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'card_fields',
            required: false,
            schema: { default: 'name', type: 'string' },
          },
        }),
      organization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'organization',
            required: false,
            schema: { type: 'string' },
          },
        }),
      organization_fields: z
        .string()
        .default('displayName')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website',
            in: 'query',
            name: 'organization_fields',
            required: false,
            schema: { default: 'displayName', type: 'string' },
          },
        }),
      member: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'member',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putNotificationsIdNotificationRoute = createRoute({
  method: 'put',
  path: '/notifications/{idNotification}',
  tags: ['notification'],
  summary: 'updateNotificationsByIdNotification()',
  operationId: 'updateNotificationsByIdNotification',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Notifications" to be updated.',
      content: { 'application/json': { schema: NotificationsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationBoardRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/board',
  tags: ['notification'],
  summary: 'getNotificationsBoardByIdNotification()',
  operationId: 'getNotificationsBoardByIdNotification',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationBoardFieldRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/board/{field}',
  tags: ['notification'],
  summary: 'getNotificationsBoardByIdNotificationByField()',
  operationId: 'getNotificationsBoardByIdNotificationByField',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationCardRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/card',
  tags: ['notification'],
  summary: 'getNotificationsCardByIdNotification()',
  operationId: 'getNotificationsCardByIdNotification',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationCardFieldRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/card/{field}',
  tags: ['notification'],
  summary: 'getNotificationsCardByIdNotificationByField()',
  operationId: 'getNotificationsCardByIdNotificationByField',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationDisplayRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/display',
  tags: ['notification'],
  summary: 'getNotificationsDisplayByIdNotification()',
  operationId: 'getNotificationsDisplayByIdNotification',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationEntitiesRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/entities',
  tags: ['notification'],
  summary: 'getNotificationsEntitiesByIdNotification()',
  operationId: 'getNotificationsEntitiesByIdNotification',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationListRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/list',
  tags: ['notification'],
  summary: 'getNotificationsListByIdNotification()',
  operationId: 'getNotificationsListByIdNotification',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, idBoard, name, pos or subscribed',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationListFieldRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/list/{field}',
  tags: ['notification'],
  summary: 'getNotificationsListByIdNotificationByField()',
  operationId: 'getNotificationsListByIdNotificationByField',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationMemberRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/member',
  tags: ['notification'],
  summary: 'getNotificationsMemberByIdNotification()',
  operationId: 'getNotificationsMemberByIdNotification',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationMemberFieldRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/member/{field}',
  tags: ['notification'],
  summary: 'getNotificationsMemberByIdNotificationByField()',
  operationId: 'getNotificationsMemberByIdNotificationByField',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationMemberCreatorRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/memberCreator',
  tags: ['notification'],
  summary: 'getNotificationsMemberCreatorByIdNotification()',
  operationId: 'getNotificationsMemberCreatorByIdNotification',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationMemberCreatorFieldRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/memberCreator/{field}',
  tags: ['notification'],
  summary: 'getNotificationsMemberCreatorByIdNotificationByField()',
  operationId: 'getNotificationsMemberCreatorByIdNotificationByField',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationOrganizationRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/organization',
  tags: ['notification'],
  summary: 'getNotificationsOrganizationByIdNotification()',
  operationId: 'getNotificationsOrganizationByIdNotification',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationOrganizationFieldRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/organization/{field}',
  tags: ['notification'],
  summary: 'getNotificationsOrganizationByIdNotificationByField()',
  operationId: 'getNotificationsOrganizationByIdNotificationByField',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putNotificationsIdNotificationUnreadRoute = createRoute({
  method: 'put',
  path: '/notifications/{idNotification}/unread',
  tags: ['notification'],
  summary: 'updateNotificationsUnreadByIdNotification()',
  operationId: 'updateNotificationsUnreadByIdNotification',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Notifications Unread" to be updated.',
      content: { 'application/json': { schema: NotificationsUnreadSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getNotificationsIdNotificationFieldRoute = createRoute({
  method: 'get',
  path: '/notifications/{idNotification}/{field}',
  tags: ['notification'],
  summary: 'getNotificationsByIdNotificationByField()',
  operationId: 'getNotificationsByIdNotificationByField',
  request: {
    params: z.object({
      idNotification: z
        .string()
        .openapi({
          param: {
            description: 'idNotification',
            in: 'path',
            name: 'idNotification',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const postOrganizationsRoute = createRoute({
  method: 'post',
  path: '/organizations',
  tags: ['organization'],
  summary: 'addOrganizations()',
  operationId: 'addOrganizations',
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Organizations" to be added.',
      content: { 'application/json': { schema: OrganizationsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getOrganizationsIdOrgRoute = createRoute({
  method: 'get',
  path: '/organizations/{idOrg}',
  tags: ['organization'],
  summary: 'getOrganizationsByIdOrg()',
  operationId: 'getOrganizationsByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'actions_entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'actions_display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'actions_limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      action_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'action_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      memberships: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: active, admin, deactivated, me or normal',
            in: 'query',
            name: 'memberships',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      memberships_member: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'memberships_member',
            required: false,
            schema: { type: 'string' },
          },
        }),
      memberships_member_fields: z
        .string()
        .default('fullName and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'memberships_member_fields',
            required: false,
            schema: { default: 'fullName and username', type: 'string' },
          },
        }),
      members: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: admins, all, none, normal or owners',
            in: 'query',
            name: 'members',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials, username and confirmed')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: {
              default: 'avatarHash, fullName, initials, username and confirmed',
              type: 'string',
            },
          },
        }),
      member_activity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'true or false ; works for premium organizations only.',
            in: 'query',
            name: 'member_activity',
            required: false,
            schema: { type: 'string' },
          },
        }),
      membersInvited: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: admins, all, none, normal or owners',
            in: 'query',
            name: 'membersInvited',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      membersInvited_fields: z
        .string()
        .default('avatarHash, initials, fullName and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'membersInvited_fields',
            required: false,
            schema: { default: 'avatarHash, initials, fullName and username', type: 'string' },
          },
        }),
      boards: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned',
            in: 'query',
            name: 'boards',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      board_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'board_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      board_actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'board_actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_actions_entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'board_actions_entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_actions_display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'board_actions_display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_actions_format: z
        .string()
        .default('list')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: count, list or minimal',
            in: 'query',
            name: 'board_actions_format',
            required: false,
            schema: { default: 'list', type: 'string' },
          },
        }),
      board_actions_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, null or lastView',
            in: 'query',
            name: 'board_actions_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_actions_limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'board_actions_limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      board_action_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'board_action_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      board_lists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none or open',
            in: 'query',
            name: 'board_lists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      paid_account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'paid_account',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('name, displayName, desc, descData, url, website, logoHash, products and powerUps')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website',
            in: 'query',
            name: 'fields',
            required: false,
            schema: {
              default:
                'name, displayName, desc, descData, url, website, logoHash, products and powerUps',
              type: 'string',
            },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}',
  tags: ['organization'],
  summary: 'updateOrganizationsByIdOrg()',
  operationId: 'updateOrganizationsByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Organizations" to be updated.',
      content: { 'application/json': { schema: OrganizationsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteOrganizationsIdOrgRoute = createRoute({
  method: 'delete',
  path: '/organizations/{idOrg}',
  tags: ['organization'],
  summary: 'deleteOrganizationsByIdOrg()',
  operationId: 'deleteOrganizationsByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getOrganizationsIdOrgActionsRoute = createRoute({
  method: 'get',
  path: '/organizations/{idOrg}/actions',
  tags: ['organization'],
  summary: 'getOrganizationsActionsByIdOrg()',
  operationId: 'getOrganizationsActionsByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      display: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'display',
            required: false,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      format: z
        .string()
        .default('list')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: count, list or minimal',
            in: 'query',
            name: 'format',
            required: false,
            schema: { default: 'list', type: 'string' },
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, null or lastView',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, or null',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Page * limit must be less than 1000',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '0', type: 'string' },
          },
        }),
      idModels: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return actions related to these model ids',
            in: 'query',
            name: 'idModels',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'member',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      memberCreator: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'memberCreator',
            required: false,
            schema: { type: 'string' },
          },
        }),
      memberCreator_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'memberCreator_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getOrganizationsIdOrgBoardsRoute = createRoute({
  method: 'get',
  path: '/organizations/{idOrg}/boards',
  tags: ['organization'],
  summary: 'getOrganizationsBoardsByIdOrg()',
  operationId: 'getOrganizationsBoardsByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_entities: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'actions_entities',
            required: false,
            schema: { type: 'string' },
          },
        }),
      actions_limit: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 1000',
            in: 'query',
            name: 'actions_limit',
            required: false,
            schema: { default: '50', type: 'string' },
          },
        }),
      actions_format: z
        .string()
        .default('list')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: count, list or minimal',
            in: 'query',
            name: 'actions_format',
            required: false,
            schema: { default: 'list', type: 'string' },
          },
        }),
      actions_since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A date, null or lastView',
            in: 'query',
            name: 'actions_since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      action_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'all or a comma-separated list of: data, date, idMemberCreator or type',
            in: 'query',
            name: 'action_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      memberships: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: active, admin, deactivated, me or normal',
            in: 'query',
            name: 'memberships',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      organization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'organization',
            required: false,
            schema: { type: 'string' },
          },
        }),
      organization_fields: z
        .string()
        .default('name and displayName')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website',
            in: 'query',
            name: 'organization_fields',
            required: false,
            schema: { default: 'name and displayName', type: 'string' },
          },
        }),
      lists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none or open',
            in: 'query',
            name: 'lists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getOrganizationsIdOrgBoardsFilterRoute = createRoute({
  method: 'get',
  path: '/organizations/{idOrg}/boards/{filter}',
  tags: ['organization'],
  summary: 'getOrganizationsBoardsByIdOrgByFilter()',
  operationId: 'getOrganizationsBoardsByIdOrgByFilter',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .openapi({
          param: {
            description: 'filter',
            in: 'path',
            name: 'filter',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const getOrganizationsIdOrgDeltasRoute = createRoute({
  method: 'get',
  path: '/organizations/{idOrg}/deltas',
  tags: ['organization'],
  summary: 'getOrganizationsDeltasByIdOrg()',
  operationId: 'getOrganizationsDeltasByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tags: z
        .string()
        .openapi({
          param: {
            description: 'A valid tag for subscribing',
            in: 'query',
            name: 'tags',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ixLastUpdate: z
        .string()
        .openapi({
          param: {
            description: 'a number from -1 to Infinity',
            in: 'query',
            name: 'ixLastUpdate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgDescRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/desc',
  tags: ['organization'],
  summary: 'updateOrganizationsDescByIdOrg()',
  operationId: 'updateOrganizationsDescByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Organizations Desc" to be updated.',
      content: { 'application/json': { schema: OrganizationsDescSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgDisplayNameRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/displayName',
  tags: ['organization'],
  summary: 'updateOrganizationsDisplayNameByIdOrg()',
  operationId: 'updateOrganizationsDisplayNameByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Organizations Display Name" to be updated.',
      content: { 'application/json': { schema: OrganizationsDisplayNameSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postOrganizationsIdOrgLogoRoute = createRoute({
  method: 'post',
  path: '/organizations/{idOrg}/logo',
  tags: ['organization'],
  summary: 'addOrganizationsLogoByIdOrg()',
  operationId: 'addOrganizationsLogoByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Organizations Logo" to be added.',
      content: { 'application/json': { schema: OrganizationsLogoSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteOrganizationsIdOrgLogoRoute = createRoute({
  method: 'delete',
  path: '/organizations/{idOrg}/logo',
  tags: ['organization'],
  summary: 'deleteOrganizationsLogoByIdOrg()',
  operationId: 'deleteOrganizationsLogoByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getOrganizationsIdOrgMembersRoute = createRoute({
  method: 'get',
  path: '/organizations/{idOrg}/members',
  tags: ['organization'],
  summary: 'getOrganizationsMembersByIdOrg()',
  operationId: 'getOrganizationsMembersByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: admins, all, none, normal or owners',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('fullName and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'fullName and username', type: 'string' },
          },
        }),
      activity: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'true or false ; works for premium organizations only.',
            in: 'query',
            name: 'activity',
            required: false,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgMembersRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/members',
  tags: ['organization'],
  summary: 'updateOrganizationsMembersByIdOrg()',
  operationId: 'updateOrganizationsMembersByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: OrganizationsMembersRequestBody,
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getOrganizationsIdOrgMembersFilterRoute = createRoute({
  method: 'get',
  path: '/organizations/{idOrg}/members/{filter}',
  tags: ['organization'],
  summary: 'getOrganizationsMembersByIdOrgByFilter()',
  operationId: 'getOrganizationsMembersByIdOrgByFilter',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filter: z
        .string()
        .openapi({
          param: {
            description: 'filter',
            in: 'path',
            name: 'filter',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const putOrganizationsIdOrgMembersIdMemberRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/members/{idMember}',
  tags: ['organization'],
  summary: 'updateOrganizationsMembersByIdOrgByIdMember()',
  operationId: 'updateOrganizationsMembersByIdOrgByIdMember',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: OrganizationsMembersRequestBody,
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteOrganizationsIdOrgMembersIdMemberRoute = createRoute({
  method: 'delete',
  path: '/organizations/{idOrg}/members/{idMember}',
  tags: ['organization'],
  summary: 'deleteOrganizationsMembersByIdOrgByIdMember()',
  operationId: 'deleteOrganizationsMembersByIdOrgByIdMember',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteOrganizationsIdOrgMembersIdMemberAllRoute = createRoute({
  method: 'delete',
  path: '/organizations/{idOrg}/members/{idMember}/all',
  tags: ['organization'],
  summary: 'deleteOrganizationsMembersAllByIdOrgByIdMember()',
  operationId: 'deleteOrganizationsMembersAllByIdOrgByIdMember',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getOrganizationsIdOrgMembersIdMemberCardsRoute = createRoute({
  method: 'get',
  path: '/organizations/{idOrg}/members/{idMember}/cards',
  tags: ['organization'],
  summary: 'getOrganizationsMembersCardsByIdOrgByIdMember()',
  operationId: 'getOrganizationsMembersCardsByIdOrgByIdMember',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      actions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization',
            in: 'query',
            name: 'actions',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A boolean value or &quot;cover&quot; for only card cover attachments',
            in: 'query',
            name: 'attachments',
            required: false,
            schema: { type: 'string' },
          },
        }),
      attachment_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url',
            in: 'query',
            name: 'attachment_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      members: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'members',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'avatarHash, fullName, initials and username', type: 'string' },
          },
        }),
      checkItemStates: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'checkItemStates',
            required: false,
            schema: { type: 'string' },
          },
        }),
      checklists: z
        .string()
        .default('none')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all or none',
            in: 'query',
            name: 'checklists',
            required: false,
            schema: { default: 'none', type: 'string' },
          },
        }),
      board: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'board',
            required: false,
            schema: { type: 'string' },
          },
        }),
      board_fields: z
        .string()
        .default('name, desc, closed, idOrganization, pinned, url and prefs')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'board_fields',
            required: false,
            schema: {
              default: 'name, desc, closed, idOrganization, pinned, url and prefs',
              type: 'string',
            },
          },
        }),
      list: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'list',
            required: false,
            schema: { type: 'string' },
          },
        }),
      list_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, idBoard, name, pos or subscribed',
            in: 'query',
            name: 'list_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      filter: z
        .string()
        .default('visible')
        .exactOptional()
        .openapi({
          param: {
            description: 'One of: all, closed, none, open or visible',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'visible', type: 'string' },
          },
        }),
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgMembersIdMemberDeactivatedRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/members/{idMember}/deactivated',
  tags: ['organization'],
  summary: 'updateOrganizationsMembersDeactivatedByIdOrgByIdMember()',
  operationId: 'updateOrganizationsMembersDeactivatedByIdOrgByIdMember',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idMember: z
        .string()
        .openapi({
          param: {
            description: 'idMember',
            in: 'path',
            name: 'idMember',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Organizations Members Deactivated" to be updated.',
      content: { 'application/json': { schema: OrganizationsMembersDeactivatedSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getOrganizationsIdOrgMembersInvitedRoute = createRoute({
  method: 'get',
  path: '/organizations/{idOrg}/membersInvited',
  tags: ['organization'],
  summary: 'getOrganizationsMembersInvitedByIdOrg()',
  operationId: 'getOrganizationsMembersInvitedByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getOrganizationsIdOrgMembersInvitedFieldRoute = createRoute({
  method: 'get',
  path: '/organizations/{idOrg}/membersInvited/{field}',
  tags: ['organization'],
  summary: 'getOrganizationsMembersInvitedByIdOrgByField()',
  operationId: 'getOrganizationsMembersInvitedByIdOrgByField',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getOrganizationsIdOrgMembershipsRoute = createRoute({
  method: 'get',
  path: '/organizations/{idOrg}/memberships',
  tags: ['organization'],
  summary: 'getOrganizationsMembershipsByIdOrg()',
  operationId: 'getOrganizationsMembershipsByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: active, admin, deactivated, me or normal',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      member: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'member',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('fullName and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'fullName and username', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getOrganizationsIdOrgMembershipsIdMembershipRoute = createRoute({
  method: 'get',
  path: '/organizations/{idOrg}/memberships/{idMembership}',
  tags: ['organization'],
  summary: 'getOrganizationsMembershipsByIdOrgByIdMembership()',
  operationId: 'getOrganizationsMembershipsByIdOrgByIdMembership',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idMembership: z
        .string()
        .openapi({
          param: {
            description: 'idMembership',
            in: 'path',
            name: 'idMembership',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      member: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'member',
            required: false,
            schema: { type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('fullName and username')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: { default: 'fullName and username', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgMembershipsIdMembershipRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/memberships/{idMembership}',
  tags: ['organization'],
  summary: 'updateOrganizationsMembershipsByIdOrgByIdMembership()',
  operationId: 'updateOrganizationsMembershipsByIdOrgByIdMembership',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idMembership: z
        .string()
        .openapi({
          param: {
            description: 'idMembership',
            in: 'path',
            name: 'idMembership',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Organizations Memberships" to be updated.',
      content: { 'application/json': { schema: OrganizationsMembershipsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgNameRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/name',
  tags: ['organization'],
  summary: 'updateOrganizationsNameByIdOrg()',
  operationId: 'updateOrganizationsNameByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Organizations Name" to be updated.',
      content: { 'application/json': { schema: OrganizationsNameSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgPrefsAssociatedDomainRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/prefs/associatedDomain',
  tags: ['organization'],
  summary: 'updateOrganizationsPrefsAssociatedDomainByIdOrg()',
  operationId: 'updateOrganizationsPrefsAssociatedDomainByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs Associated Domain" to be updated.',
      content: { 'application/json': { schema: PrefsAssociatedDomainSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteOrganizationsIdOrgPrefsAssociatedDomainRoute = createRoute({
  method: 'delete',
  path: '/organizations/{idOrg}/prefs/associatedDomain',
  tags: ['organization'],
  summary: 'deleteOrganizationsPrefsAssociatedDomainByIdOrg()',
  operationId: 'deleteOrganizationsPrefsAssociatedDomainByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgPrefsBoardVisibilityRestrictOrgRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/prefs/boardVisibilityRestrict/org',
  tags: ['organization'],
  summary: 'updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg()',
  operationId: 'updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: PrefsBoardVisibilityRestrictRequestBody,
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivateRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/prefs/boardVisibilityRestrict/private',
  tags: ['organization'],
  summary: 'updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg()',
  operationId: 'updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: PrefsBoardVisibilityRestrictRequestBody,
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgPrefsBoardVisibilityRestrictPublicRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/prefs/boardVisibilityRestrict/public',
  tags: ['organization'],
  summary: 'updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg()',
  operationId: 'updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: PrefsBoardVisibilityRestrictRequestBody,
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgPrefsExternalMembersDisabledRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/prefs/externalMembersDisabled',
  tags: ['organization'],
  summary: 'updateOrganizationsPrefsExternalMembersDisabledByIdOrg()',
  operationId: 'updateOrganizationsPrefsExternalMembersDisabledByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs External Members Disabled" to be updated.',
      content: { 'application/json': { schema: PrefsExternalMembersDisabledSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgPrefsGoogleAppsVersionRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/prefs/googleAppsVersion',
  tags: ['organization'],
  summary: 'updateOrganizationsPrefsGoogleAppsVersionByIdOrg()',
  operationId: 'updateOrganizationsPrefsGoogleAppsVersionByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs Google Apps Version" to be updated.',
      content: { 'application/json': { schema: PrefsGoogleAppsVersionSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgPrefsOrgInviteRestrictRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/prefs/orgInviteRestrict',
  tags: ['organization'],
  summary: 'updateOrganizationsPrefsOrgInviteRestrictByIdOrg()',
  operationId: 'updateOrganizationsPrefsOrgInviteRestrictByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Prefs Org Invite Restrict" to be updated.',
      content: { 'application/json': { schema: PrefsOrgInviteRestrictSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteOrganizationsIdOrgPrefsOrgInviteRestrictRoute = createRoute({
  method: 'delete',
  path: '/organizations/{idOrg}/prefs/orgInviteRestrict',
  tags: ['organization'],
  summary: 'deleteOrganizationsPrefsOrgInviteRestrictByIdOrg()',
  operationId: 'deleteOrganizationsPrefsOrgInviteRestrictByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      value: z
        .string()
        .openapi({
          param: {
            description: 'An email address with optional expansion tokens',
            in: 'query',
            name: 'value',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgPrefsPermissionLevelRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/prefs/permissionLevel',
  tags: ['organization'],
  summary: 'updateOrganizationsPrefsPermissionLevelByIdOrg()',
  operationId: 'updateOrganizationsPrefsPermissionLevelByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: PrefsPermissionLevelRequestBody,
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putOrganizationsIdOrgWebsiteRoute = createRoute({
  method: 'put',
  path: '/organizations/{idOrg}/website',
  tags: ['organization'],
  summary: 'updateOrganizationsWebsiteByIdOrg()',
  operationId: 'updateOrganizationsWebsiteByIdOrg',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Organizations Website" to be updated.',
      content: { 'application/json': { schema: OrganizationsWebsiteSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getOrganizationsIdOrgFieldRoute = createRoute({
  method: 'get',
  path: '/organizations/{idOrg}/{field}',
  tags: ['organization'],
  summary: 'getOrganizationsByIdOrgByField()',
  operationId: 'getOrganizationsByIdOrgByField',
  request: {
    params: z.object({
      idOrg: z
        .string()
        .openapi({
          param: {
            description: 'idOrg or name',
            in: 'path',
            name: 'idOrg',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: ['search'],
  summary: 'getSearch()',
  operationId: 'getSearch',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'a string with a length from 1 to 16384',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idBoards: z
        .string()
        .default('mine')
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of objectIds, 24-character hex strings',
            in: 'query',
            name: 'idBoards',
            required: false,
            schema: { default: 'mine', type: 'string' },
          },
        }),
      idOrganizations: z
        .string()
        .openapi({
          param: {
            description: 'A comma-separated list of objectIds, 24-character hex strings',
            in: 'query',
            name: 'idOrganizations',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idCards: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of objectIds, 24-character hex strings',
            in: 'query',
            name: 'idCards',
            required: false,
            schema: { type: 'string' },
          },
        }),
      modelTypes: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: actions, boards, cards, members or organizations',
            in: 'query',
            name: 'modelTypes',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      board_fields: z
        .string()
        .default('name and idOrganization')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url',
            in: 'query',
            name: 'board_fields',
            required: false,
            schema: { default: 'name and idOrganization', type: 'string' },
          },
        }),
      boards_limit: z
        .string()
        .default('10')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 1 to 1000',
            in: 'query',
            name: 'boards_limit',
            required: false,
            schema: { default: '10', type: 'string' },
          },
        }),
      card_fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url',
            in: 'query',
            name: 'card_fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      cards_limit: z
        .string()
        .default('10')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 1 to 1000',
            in: 'query',
            name: 'cards_limit',
            required: false,
            schema: { default: '10', type: 'string' },
          },
        }),
      cards_page: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 0 to 100',
            in: 'query',
            name: 'cards_page',
            required: false,
            schema: { default: '0', type: 'string' },
          },
        }),
      card_board: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'card_board',
            required: false,
            schema: { type: 'string' },
          },
        }),
      card_list: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'card_list',
            required: false,
            schema: { type: 'string' },
          },
        }),
      card_members: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'card_members',
            required: false,
            schema: { type: 'string' },
          },
        }),
      card_stickers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'card_stickers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      card_attachments: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A boolean value or &quot;cover&quot; for only card cover attachments',
            in: 'query',
            name: 'card_attachments',
            required: false,
            schema: { type: 'string' },
          },
        }),
      organization_fields: z
        .string()
        .default('name and displayName')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website',
            in: 'query',
            name: 'organization_fields',
            required: false,
            schema: { default: 'name and displayName', type: 'string' },
          },
        }),
      organizations_limit: z
        .string()
        .default('10')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 1 to 1000',
            in: 'query',
            name: 'organizations_limit',
            required: false,
            schema: { default: '10', type: 'string' },
          },
        }),
      member_fields: z
        .string()
        .default('avatarHash, fullName, initials, username and confirmed')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username',
            in: 'query',
            name: 'member_fields',
            required: false,
            schema: {
              default: 'avatarHash, fullName, initials, username and confirmed',
              type: 'string',
            },
          },
        }),
      members_limit: z
        .string()
        .default('10')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 1 to 1000',
            in: 'query',
            name: 'members_limit',
            required: false,
            schema: { default: '10', type: 'string' },
          },
        }),
      partial: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'partial',
            required: false,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const getSearchMembersRoute = createRoute({
  method: 'get',
  path: '/search/members',
  tags: ['search'],
  summary: 'getSearchMembers()',
  operationId: 'getSearchMembers',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'a string with a length from 1 to 16384',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .default('8')
        .exactOptional()
        .openapi({
          param: {
            description: 'a number from 1 to 20',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '8', type: 'string' },
          },
        }),
      idBoard: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An id, or null',
            in: 'query',
            name: 'idBoard',
            required: false,
            schema: { type: 'string' },
          },
        }),
      idOrganization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An id, or null',
            in: 'query',
            name: 'idOrganization',
            required: false,
            schema: { type: 'string' },
          },
        }),
      onlyOrgMembers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A boolean',
            in: 'query',
            name: 'onlyOrgMembers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const postSessionsRoute = createRoute({
  method: 'post',
  path: '/sessions',
  tags: ['session'],
  summary: 'addSessions()',
  operationId: 'addSessions',
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Sessions" to be added.',
      content: { 'application/json': { schema: SessionsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getSessionsSocketRoute = createRoute({
  method: 'get',
  path: '/sessions/socket',
  tags: ['session'],
  summary: 'getSessionsSocket()',
  description:
    'This is the route for WebSocket requests.  See the socket API reference for a description of WebSocket usage.',
  operationId: 'getSessionsSocket',
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putSessionsIdSessionRoute = createRoute({
  method: 'put',
  path: '/sessions/{idSession}',
  tags: ['session'],
  summary: 'updateSessionsByIdSession()',
  operationId: 'updateSessionsByIdSession',
  request: {
    params: z.object({
      idSession: z
        .string()
        .openapi({
          param: {
            description: 'idSession',
            in: 'path',
            name: 'idSession',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Sessions" to be updated.',
      content: { 'application/json': { schema: SessionsSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putSessionsIdSessionStatusRoute = createRoute({
  method: 'put',
  path: '/sessions/{idSession}/status',
  tags: ['session'],
  summary: 'updateSessionsStatusByIdSession()',
  operationId: 'updateSessionsStatusByIdSession',
  request: {
    params: z.object({
      idSession: z
        .string()
        .openapi({
          param: {
            description: 'idSession',
            in: 'path',
            name: 'idSession',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Sessions Status" to be updated.',
      content: { 'application/json': { schema: SessionsStatusSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getTokensTokenRoute = createRoute({
  method: 'get',
  path: '/tokens/{token}',
  tags: ['token'],
  summary: 'getTokensByToken()',
  operationId: 'getTokensByToken',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'token',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: dateCreated, dateExpires, idMember, identifier or permissions',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      webhooks: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: ' true or false',
            in: 'query',
            name: 'webhooks',
            required: false,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteTokensTokenRoute = createRoute({
  method: 'delete',
  path: '/tokens/{token}',
  tags: ['token'],
  summary: 'deleteTokensByToken()',
  operationId: 'deleteTokensByToken',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'token',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getTokensTokenMemberRoute = createRoute({
  method: 'get',
  path: '/tokens/{token}/member',
  tags: ['token'],
  summary: 'getTokensMemberByToken()',
  operationId: 'getTokensMemberByToken',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'token',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description:
              'all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username',
            in: 'query',
            name: 'fields',
            required: false,
            schema: { default: 'all', type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getTokensTokenMemberFieldRoute = createRoute({
  method: 'get',
  path: '/tokens/{token}/member/{field}',
  tags: ['token'],
  summary: 'getTokensMemberByTokenByField()',
  operationId: 'getTokensMemberByTokenByField',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'token',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getTokensTokenWebhooksRoute = createRoute({
  method: 'get',
  path: '/tokens/{token}/webhooks',
  tags: ['token'],
  summary: 'getTokensWebhooksByToken()',
  operationId: 'getTokensWebhooksByToken',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'token',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putTokensTokenWebhooksRoute = createRoute({
  method: 'put',
  path: '/tokens/{token}/webhooks',
  tags: ['token'],
  summary: 'updateTokensWebhooksByToken()',
  operationId: 'updateTokensWebhooksByToken',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'token',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Tokens Webhooks" to be updated.',
      content: { 'application/json': { schema: TokensWebhooksSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postTokensTokenWebhooksRoute = createRoute({
  method: 'post',
  path: '/tokens/{token}/webhooks',
  tags: ['token'],
  summary: 'addTokensWebhooksByToken()',
  operationId: 'addTokensWebhooksByToken',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'token',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Tokens Webhooks" to be added.',
      content: { 'application/json': { schema: TokensWebhooksSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getTokensTokenWebhooksIdWebhookRoute = createRoute({
  method: 'get',
  path: '/tokens/{token}/webhooks/{idWebhook}',
  tags: ['token'],
  summary: 'getTokensWebhooksByTokenByIdWebhook()',
  operationId: 'getTokensWebhooksByTokenByIdWebhook',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'token',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idWebhook: z
        .string()
        .openapi({
          param: {
            description: 'idWebhook',
            in: 'path',
            name: 'idWebhook',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteTokensTokenWebhooksIdWebhookRoute = createRoute({
  method: 'delete',
  path: '/tokens/{token}/webhooks/{idWebhook}',
  tags: ['token'],
  summary: 'deleteTokensWebhooksByTokenByIdWebhook()',
  operationId: 'deleteTokensWebhooksByTokenByIdWebhook',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'token',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      idWebhook: z
        .string()
        .openapi({
          param: {
            description: 'idWebhook',
            in: 'path',
            name: 'idWebhook',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getTokensTokenFieldRoute = createRoute({
  method: 'get',
  path: '/tokens/{token}/{field}',
  tags: ['token'],
  summary: 'getTokensByTokenByField()',
  operationId: 'getTokensByTokenByField',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            description: 'token',
            in: 'path',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

export const getTypesIdRoute = createRoute({
  method: 'get',
  path: '/types/{id}',
  tags: ['type'],
  summary: 'getTypesById()',
  operationId: 'getTypesById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const postWebhooksRoute = createRoute({
  method: 'post',
  path: '/webhooks',
  tags: ['webhook'],
  summary: 'addWebhooks()',
  operationId: 'addWebhooks',
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Webhooks" to be added.',
      content: { 'application/json': { schema: WebhooksSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putWebhooksIndexRoute = createRoute({
  method: 'put',
  path: '/webhooks/',
  tags: ['webhook'],
  summary: 'updateWebhooks()',
  operationId: 'updateWebhooks',
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: WebhooksRequestBody,
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getWebhooksIdWebhookRoute = createRoute({
  method: 'get',
  path: '/webhooks/{idWebhook}',
  tags: ['webhook'],
  summary: 'getWebhooksByIdWebhook()',
  operationId: 'getWebhooksByIdWebhook',
  request: {
    params: z.object({
      idWebhook: z
        .string()
        .openapi({
          param: {
            description: 'idWebhook',
            in: 'path',
            name: 'idWebhook',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putWebhooksIdWebhookRoute = createRoute({
  method: 'put',
  path: '/webhooks/{idWebhook}',
  tags: ['webhook'],
  summary: 'updateWebhooksByIdWebhook()',
  operationId: 'updateWebhooksByIdWebhook',
  request: {
    params: z.object({
      idWebhook: z
        .string()
        .openapi({
          param: {
            description: 'idWebhook',
            in: 'path',
            name: 'idWebhook',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: WebhooksRequestBody,
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const deleteWebhooksIdWebhookRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{idWebhook}',
  tags: ['webhook'],
  summary: 'deleteWebhooksByIdWebhook()',
  operationId: 'deleteWebhooksByIdWebhook',
  request: {
    params: z.object({
      idWebhook: z
        .string()
        .openapi({
          param: {
            description: 'idWebhook',
            in: 'path',
            name: 'idWebhook',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putWebhooksIdWebhookActiveRoute = createRoute({
  method: 'put',
  path: '/webhooks/{idWebhook}/active',
  tags: ['webhook'],
  summary: 'updateWebhooksActiveByIdWebhook()',
  operationId: 'updateWebhooksActiveByIdWebhook',
  request: {
    params: z.object({
      idWebhook: z
        .string()
        .openapi({
          param: {
            description: 'idWebhook',
            in: 'path',
            name: 'idWebhook',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Webhooks Active" to be updated.',
      content: { 'application/json': { schema: WebhooksActiveSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putWebhooksIdWebhookCallbackURLRoute = createRoute({
  method: 'put',
  path: '/webhooks/{idWebhook}/callbackURL',
  tags: ['webhook'],
  summary: 'updateWebhooksCallbackURLByIdWebhook()',
  operationId: 'updateWebhooksCallbackURLByIdWebhook',
  request: {
    params: z.object({
      idWebhook: z
        .string()
        .openapi({
          param: {
            description: 'idWebhook',
            in: 'path',
            name: 'idWebhook',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Webhooks Callback Url" to be updated.',
      content: { 'application/json': { schema: WebhooksCallbackURLSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putWebhooksIdWebhookDescriptionRoute = createRoute({
  method: 'put',
  path: '/webhooks/{idWebhook}/description',
  tags: ['webhook'],
  summary: 'updateWebhooksDescriptionByIdWebhook()',
  operationId: 'updateWebhooksDescriptionByIdWebhook',
  request: {
    params: z.object({
      idWebhook: z
        .string()
        .openapi({
          param: {
            description: 'idWebhook',
            in: 'path',
            name: 'idWebhook',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Webhooks Description" to be updated.',
      content: { 'application/json': { schema: WebhooksDescriptionSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const putWebhooksIdWebhookIdModelRoute = createRoute({
  method: 'put',
  path: '/webhooks/{idWebhook}/idModel',
  tags: ['webhook'],
  summary: 'updateWebhooksIdModelByIdWebhook()',
  operationId: 'updateWebhooksIdModelByIdWebhook',
  request: {
    params: z.object({
      idWebhook: z
        .string()
        .openapi({
          param: {
            description: 'idWebhook',
            in: 'path',
            name: 'idWebhook',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attributes of "Webhooks Id Model" to be updated.',
      content: { 'application/json': { schema: WebhooksIdModelSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
  security: [{ api_key: [] }, { api_token: [] }],
})

export const getWebhooksIdWebhookFieldRoute = createRoute({
  method: 'get',
  path: '/webhooks/{idWebhook}/{field}',
  tags: ['webhook'],
  summary: 'getWebhooksByIdWebhookByField()',
  operationId: 'getWebhooksByIdWebhookByField',
  request: {
    params: z.object({
      idWebhook: z
        .string()
        .openapi({
          param: {
            description: 'idWebhook',
            in: 'path',
            name: 'idWebhook',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field: z
        .string()
        .openapi({
          param: {
            description: 'field',
            in: 'path',
            name: 'field',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description:
              '<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 400: { description: 'Server rejection' } },
})

import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const profileNotes = pgTable('profile_notes', {
  id: serial('id').primaryKey(),
  login: text('login').notNull(),
  githubId: text('github_id').notNull(),
  name: text('name'),
  note: text('note').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})
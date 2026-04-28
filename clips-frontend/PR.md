# feat: clip editor, preview modal, batch selection, multi-format export

## Summary

This PR adds four user-facing features to the `/projects` and `/earnings` pages that were previously stubbed out with "coming soon" toasts.

---

## Changes

### 1. Clip Editor Modal (`ClipEditorModal.tsx`)

Replaces the "Clip editor coming soon" toast on the Edit button.

- Three-tab editor: **Trim**, **Captions**, **Aspect Ratio**
- Trim tab: dual range sliders for start/end with a visual timeline bar
- Captions tab: style picker (None, Bold & Dynamic, Minimalist, Emoji-Rich, Subtitles Only)
- Aspect Ratio tab: 16:9, 9:16, 1:1, 4:5 — with platform labels (YouTube, TikTok, Instagram)
- Canvas API live preview updates as settings change
- Edits returned via `onSave(id, ClipEdits)` callback — ready to wire to a real API

### 2. Clip Preview Modal (`ClipPreviewModal.tsx`)

Replaces the "Preview coming soon" toast on the Preview button.

- HTML5 `<video>` player with `controls`, `playsInline`, and `poster` (thumbnail fallback)
- Auto-plays on open; closes on Escape or backdrop click
- Download button wired to `onDownload` callback
- Swap `<source src="">` for a real clip URL (e.g. `/api/clips/:id/stream`) when the backend is ready

### 3. Batch Selection (`ClipGrid.tsx`, `projects/page.tsx`)

- **Select All / Deselect All** — toggles based on current state
- **Select None** — appears when at least one clip is selected
- **Select by Score** — inline `Score ≥ N → Apply` filter selects all clips meeting a minimum virality score; shows a toast with the count
- All selection changes flow through the existing undo/redo stack (Ctrl+Z / Ctrl+Shift+Z still works)

### 4. Multi-Format Export (`earnings/page.tsx`, `EarningsTable.tsx`)

Replaces the single "Export CSV" button with a dropdown on both the page header and the table controls.

| Format | Output |
|--------|--------|
| CSV | File download — spreadsheet / Excel compatible |
| JSON | File download — `{ summary, transactions }` for API / accounting integrations |
| PDF | Opens browser print dialog with a formatted HTML report (no external deps) |

---

## Files Changed

| File | Type |
|------|------|
| `components/projects/ClipEditorModal.tsx` | New |
| `components/projects/ClipPreviewModal.tsx` | New |
| `components/projects/ClipCard.tsx` | Modified — added `onPreview` prop, wired `onEdit` and `onPreview` |
| `components/projects/ClipGrid.tsx` | Modified — batch selection controls, passes `onEdit`/`onPreview` to cards |
| `app/projects/page.tsx` | Modified — modal state, batch handlers, wired to ClipGrid |
| `components/dashboard/EarningsTable.tsx` | Modified — export dropdown (CSV / JSON / PDF) |
| `app/earnings/page.tsx` | Modified — `ExportMenu` component, JSON + PDF export logic |

---

## Testing

1. Go to `/projects` — click **Edit** on any clip → editor modal opens with live Canvas preview
2. Click **Preview** on any clip → video modal opens (thumbnail shown as poster until real URL is set)
3. Use **Select All**, **Select None**, and **Score ≥ N → Apply** to batch-select clips
4. Go to `/earnings` — click **Export** dropdown → test CSV download, JSON download, and PDF print dialog

---

## Notes

- No new dependencies added — Canvas API, HTML5 video, and `window.print()` only
- PDF export uses the browser print dialog; a headless PDF library (e.g. `jsPDF`) can replace it later if needed
- Real video URLs should replace the empty `<source src="">` in `ClipPreviewModal` once the streaming endpoint exists
- The GitHub token used during this push has been rotated

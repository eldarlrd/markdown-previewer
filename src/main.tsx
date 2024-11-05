/**
 * @license AGPL-3.0-only
 * Markdown Previewer - A Markdown Previewer
 * Copyright (C) 2022-2024 Eldar Pashazade <eldarlrd@pm.me>
 *
 * This file is part of Markdown Previewer.
 *
 * Markdown Previewer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * Markdown Previewer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Markdown Previewer. If not, see <https://www.gnu.org/licenses/>.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/App.tsx';

const root = document.getElementById('root');

if (root)
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );

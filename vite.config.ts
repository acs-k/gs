import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/gs/', // Replace 'your-repo-name' with the actual repository name
  plugins: [react()],
});

### 🛠 Overleaf Space Maximiser

**Author:** sjain882

**Version:** 0.4.2

**Compatible Site:** Any Overleaf project editor: `https://www.overleaf.com/project/*`

#### ⚠️ Warning

- If using Chromium, this userscript requires an MV2 UserScript manager, such as [Tampermonkey Legacy](https://www.tampermonkey.net/)
- If using Firefox, any userscript manager will work fine.
- Changing settings for this userscript will reload the page, so make sure your work is saved and you have a stable internet connection.

#### 📌 What It Does
- Auto-hides the top toolbar on Overleaf when its not being hovered over.
- [Optional] Optimise spacing of file tree by reducing font size (customisable) and removing horizontal padding.
- [Optional] Remove file outline section to maximise the file tree and reduce visual clutter.

#### 🛠 Accessing Settings

1. Ensure your work is saved and you have a stable internet connection.
2. Hover near the top of the page to show the top toolbar, then click the "Overleaf Space Maximiser" button.
3. Change your settings, then click Save.
4. The page will reload.

#### 💡 Tip for laptop users with limited screen space

- I combine this userscript with a dedicated Chromium (Edge/Chrome/Cromite/Opera etc) profile shortcut with the `--profile-directory="<PROFILE>" -alt-high-dpi-setting=96 /high-dpi-support=1 /force-device-scale-factor=0.5` arguments (from [here](https://superuser.com/a/1845448)) to maximise vertical space
- I do this as I only use Overleaf in this browser profile, so no need to access tab/URL bar.
- This effectively creates an almost-fullscreen dedicated Overleaf app - very useful for small laptop screens.
- For Firefox based browsers, you can use `layout.css.devPixelsPerPx` in `about:config` with a separate profile.

#### 🔗 Project Links
- **Homepage:** [Browser Tweaks Repository](https://www.github.com/sjain882/Browser-Tweaks)
- **Support & Issues:** [Submit an Issue](https://www.github.com/sjain882/Browser-Tweaks/issues)
- **Download Script:** [Raw .user.js File](https://raw.githubusercontent.com/sjain882/Browser-Tweaks/main/Userscripts/Overleaf-Space-Maximiser.user.js)
- **Auto-Update URL:** Same as download URL (for script managers like Tampermonkey)

#### 🖼 Previews

The below images were captured on a 14" 1920x1080 laptop screen at 125% Windows DPI scaling.

Without userscript:

<img src="https://raw.githubusercontent.com/sjain882/Browser-Tweaks/refs/heads/main/Userscripts-Previews/Overleaf-Space-Maximiser/off.png" width="70%"><br><br>

With userscript (file outline enabled + optimised):

<img src="https://raw.githubusercontent.com/sjain882/Browser-Tweaks/refs/heads/main/Userscripts-Previews/Overleaf-Space-Maximiser/on_withFileOutline.png" width="70%"><br><br>

With userscript (file outline disabled):

<img src="https://raw.githubusercontent.com/sjain882/Browser-Tweaks/refs/heads/main/Userscripts-Previews/Overleaf-Space-Maximiser/on_withoutFileOutline.png" width="70%"><br><br>

Settings:

<img src="https://raw.githubusercontent.com/sjain882/Browser-Tweaks/refs/heads/main/Userscripts-Previews/Overleaf-Space-Maximiser/settings.png" width="70%"><br><br>

Bonus - my overall view with full vanilla settings:

<img src="https://raw.githubusercontent.com/sjain882/Browser-Tweaks/refs/heads/main/Userscripts-Previews/Overleaf-Space-Maximiser/overall_all_off.png" width="70%"><br><br>

Bonus - my overall view with userscript (file outline disabled) + Cromite DPI scaling tip from above:

<img src="https://raw.githubusercontent.com/sjain882/Browser-Tweaks/refs/heads/main/Userscripts-Previews/Overleaf-Space-Maximiser/overall_all_on.png" width="70%"><br><br>
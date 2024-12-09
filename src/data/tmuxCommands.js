export const tmuxData = {
  categories: [
    {
      name: "Sessions",
      items: [
        {
          desc: "Start a new session",
          shell: ["tmux", "tmux new", "tmux new-session"],
          tmuxcmd: ["new"],
          keywords: ["create"]
        },
        {
          desc: "Start a new session or attach to an existing session named <i>mysession</i>",
          shell: ["tmux new-session -A -s mysession"],
          tmuxcmd: [],
          keywords: ["create", "attach", "join"]
        },
        {
          desc: "Start a new session with the name <i>mysession</i>",
          shell: ["tmux new -s mysession"],
          tmuxcmd: ["new -s mysession"],
          keywords: ["create"]
        },
        {
          desc: "kill/delete the current session",
          shell: [],
          tmuxcmd: ["kill-session"],
          keywords: ["terminate"]
        },
        {
          desc: "kill/delete session <i>mysession</i>",
          shell: ["tmux kill-ses -t mysession", "tmux kill-session -t mysession"],
          tmuxcmd: [],
          keywords: ["terminate"]
        },
        {
          desc: "kill/delete all sessions but the current",
          shell: ["tmux kill-session -a"],
          tmuxcmd: [],
          keywords: ["terminate"]
        },
        {
          desc: "kill/delete all sessions but <i>mysession</i>",
          shell: ["tmux kill-session -a -t mysession"],
          tmuxcmd: [],
          keywords: ["terminate"]
        },
        {
          desc: "Rename session",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>$</kbd>']
        },
        {
          desc: "Detach from session",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>d</kbd>'],
          keywords: ["exit session"]
        },
        {
          desc: "Detach others on the session (Maximize window by detach other clients)",
          shell: [],
          tmuxcmd: ["attach -d"],
          keywords: ["exit session", "detach others", "maximize"]
        },
        {
          desc: "Show all sessions",
          shell: ["tmux ls", "tmux list-sessions"],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>s</kbd>']
        },
        {
          desc: "Attach to last session",
          shell: ["tmux a", "tmux at", "tmux attach", "tmux attach-session"],
          tmuxcmd: [],
          shortcut: []
        },
        {
          desc: "Attach to a session with the name <i>mysession</i>",
          shell: [
            "tmux a -t mysession",
            "tmux at -t mysession",
            "tmux attach -t mysession",
            "tmux attach-session -t mysession"
          ],
          tmuxcmd: [],
          shortcut: []
        },
        {
          desc: "Session and Window Preview",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>w</kbd>'],
          keywords: ["navigate", "switch"]
        },
        {
          desc: "Move to previous session",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>(</kbd>'],
          keywords: ["navigate", "switch"]
        },
        {
          desc: "Move to next session",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>)</kbd>'],
          keywords: ["navigate", "switch"]
        }
      ]
    },
    {
      name: "Windows",
      items: [
        {
          desc: "start a new session with the name <i>mysession</i> and window <i>mywindow</i>",
          shell: ["tmux new -s mysession -n mywindow"],
          tmuxcmd: [],
          keywords: ["create"]
        },
        {
          desc: "Create window",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>c</kbd>'],
          keywords: ["create new window"]
        },
        {
          desc: "Rename current window",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>,</kbd>']
        },
        {
          desc: "Close current window",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>&</kbd>'],
          keywords: ["kill window", "delete window"]
        },
        {
          desc: "List windows",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>w</kbd>'],
          keywords: ["list window", "show window"]
        },
        {
          desc: "Previous window",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>p</kbd>'],
          keywords: ["navigate"]
        },
        {
          desc: "Next window",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>n</kbd>'],
          keywords: ["navigate"]
        },
        {
          desc: "Switch/select window by number",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>0</kbd> ... <kbd>9</kbd>']
        },
        {
          desc: "Toggle last active window",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>l</kbd>']
        },
        {
          desc: "Reorder window, swap window number 2(src) and 1(dst)",
          shell: [],
          tmuxcmd: ["swap-window -s 2 -t 1"],
          shortcut: []
        },
        {
          desc: "Move current window to the left by one position",
          shell: [],
          tmuxcmd: ["swap-window -t -1"],
          shortcut: []
        },
        {
          desc: "Move window from source to target",
          shell: [],
          tmuxcmd: [
            "move-window -s src_ses:win -t target_ses:win",
            "movew -s foo:0 -t bar:9",
            "movew -s 0:0 -t 1:9"
          ],
          shortcut: []
        }
      ]
    },
    {
      name: "Panes",
      items: [
        {
          desc: "Toggle last active pane",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>;</kbd>']
        },
        {
          desc: "Split the current pane with a vertical line to create a horizontal layout",
          shell: [],
          tmuxcmd: ["split-window -h"],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>%</kbd>']
        },
        {
          desc: "Split the current with a horizontal line to create a vertical layout",
          shell: [],
          tmuxcmd: ["split-window -v"],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>"</kbd>']
        },
        {
          desc: "Join two windows as panes (Merge window 2 to window 1 as panes)",
          shell: [],
          tmuxcmd: ["join-pane -s 2 -t 1"],
          shortcut: []
        },
        {
          desc: "Move pane from one window to another (Move pane 1 from window 2 to pane after 0 of window 1)",
          shell: [],
          tmuxcmd: ["join-pane -s 2.1 -t 1.0"],
          shortcut: []
        },
        {
          desc: "Move the current pane left",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>{</kbd>']
        },
        {
          desc: "Move the current pane right",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>}</kbd>']
        },
        {
          desc: "Switch to pane to the direction",
          shell: [],
          tmuxcmd: [],
          shortcut: [
            '<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>↑</kbd>',
            '<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>↓</kbd>',
            '<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>→</kbd>',
            '<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>←</kbd>'
          ],
          keywords: ["navigate"]
        }
      ]
    },
    {
      name: "Copy Mode",
      items: [
        {
          desc: "use vi keys in buffer",
          shell: [],
          tmuxcmd: ["setw -g mode-keys vi"],
          shortcut: []
        },
        {
          desc: "Enter copy mode",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>[</kbd>']
        },
        {
          desc: "Enter copy mode and scroll one page up",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>PgUp</kbd>']
        },
        {
          desc: "Quit mode",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<kbd>q</kbd>']
        },
        {
          desc: "Go to top line",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<kbd>g</kbd>']
        },
        {
          desc: "Go to bottom line",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<kbd>G</kbd>']
        },
        {
          desc: "Move cursor left",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<kbd>h</kbd>']
        },
        {
          desc: "Move cursor down",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<kbd>j</kbd>']
        },
        {
          desc: "Move cursor up",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<kbd>k</kbd>']
        },
        {
          desc: "Move cursor right",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<kbd>l</kbd>']
        },
        {
          desc: "Search forward",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<kbd>/</kbd>']
        },
        {
          desc: "Search backward",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<kbd>?</kbd>']
        },
        {
          desc: "Copy selection",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<kbd>Enter</kbd>']
        },
        {
          desc: "Paste contents of buffer_0",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>]</kbd>']
        }
      ]
    },
    {
      name: "Misc",
      items: [
        {
          desc: "Enter command mode",
          shell: [],
          tmuxcmd: [],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>:</kbd>']
        },
        {
          desc: "Set OPTION for all sessions",
          shell: [],
          tmuxcmd: ["set -g OPTION"],
          shortcut: []
        },
        {
          desc: "Set OPTION for all windows",
          shell: [],
          tmuxcmd: ["setw -g OPTION"],
          shortcut: []
        },
        {
          desc: "Enable mouse mode",
          shell: [],
          tmuxcmd: ["set mouse on"],
          shortcut: []
        }
      ]
    },
    {
      name: "Help",
      items: [
        {
          desc: "List key bindings(shortcuts)",
          shell: ["tmux list-keys"],
          tmuxcmd: ["list-keys"],
          shortcut: ['<span class="prefix"><kbd>Ctrl</kbd> + <kbd>b</kbd> </span> <kbd>?</kbd>']
        },
        {
          desc: "Show every session, window, pane, etc...",
          shell: ["tmux info"],
          tmuxcmd: [],
          shortcut: []
        }
      ]
    }
  ]
};

export default tmuxData;
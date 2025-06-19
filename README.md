#Git & Github

## **What is Version Control**

**Version control** is a system that helps developers **track changes to code** over time. It allows multiple people to work on the same project without interfering with each other’s work and makes it easy to **revert to earlier versions** if something goes wrong.

### Why developers use version control:

1. **Collaboration**: Multiple developers can work on different parts of the codebase at the same time, and merge their changes together efficiently.
2. **History Tracking**: Every change is recorded with a timestamp, author name, and reason. This provides a clear history of how the project evolved.
3. **Backup**: The entire history of the project is stored, so if something breaks, you can roll back to a stable version.
4. **Branching and Merging**: Developers can create “branches” to work on new features or fixes without affecting the main codebase, then merge them back once they're ready.
5. **Accountability**: Since every change is associated with a specific user, it's easier to review and understand who did what and why.

The most popular version control system today is **Git**, often used with platforms like **GitHub**, **GitLab**, or **Bitbucket**.

Git is version control tool

Github is a service that hosts git repositories. (Collaboration)

### 💡 **Repository kya hota hai?**

**Repository** yaani **repo** ek aisi jagah hoti hai jahan aapka **project ka saara data aur code** store hota hai.

Socho jaise aapke computer mein ek folder hota hai, waise hi repository ek **smart folder** hota hai jo code, documentation, aur version history sab kuch sambhaal kar rakhta hai.

---

### 🔧 Types of Repository:

1. **Local Repository** – Jo aapke **apne computer** par hoti hai.
2. **Remote Repository** – Jo online hoti hai jaise **GitHub, GitLab, Bitbucket** par. Team ke sab log ise access kar sakte hain.

---

### 📦 Repository mein kya-kya hota hai?

- **Source Code** – Aapka likha hua code
- **README file** – Project ka basic info
- **Commits & History** – Kab kaunsa code badla, kisne badla
- **Branches** – Alag-alag versions of code (jaise "main", "dev", "feature-x")

---

### ✅ **To create a Git repository locally:**

1. **Open your terminal** and navigate to your project folder:
    
    ```bash
    cd path/to/your/project
    ```
    
2. **Initialize Git in that folder:**
    
    ```bash
    git init
    ```
    
    This creates a hidden `.git` folder to track changes.
    
3. **Add your project files:**
    
    ```bash
    git add .
    ```
    
4. **Commit the files with a message:**
    
    ```bash
    git commit -m "Initial commit"
    ```
    

### 🔄 What is Git Cloning?

**`git clone`** is used to **download a repository** (and its full history) from a remote server like GitHub to your local machine. It creates a complete copy of the repository including all files, branches, and commits.

---

### ✅ How to Clone a Repository:

1. **Find the repo URL**
    
    Go to the GitHub repo page you want to clone and click the green **“Code”** button. Copy the **HTTPS** or **SSH** link.
    
    Example URL:
    
    ```
    https://github.com/username/repository-name.git
    ```
    
2. **Open your terminal** and run:
    
    ```bash
    git clone https://github.com/username/repository-name.git
    ```
    
3. Git will create a folder named `repository-name` with all the files inside.

---

### ✅ Cloning into a specific folder name:

```bash
git clone https://github.com/username/repo-name.git my-folder
```

This will place the repo into a folder named `my-folder`.

---

### ✅ After Cloning:

To start working:

```bash
cd repository-name
```

You can now run `git status`, make changes, create branches, etc.

---

### 🔄 **Lifecycle of a Change in Git**

Here’s a step-by-step breakdown:

### 1. **Working Directory (Untracked/Modified)**

- This is where you make changes to your files (e.g., writing code).
- Git **notices the changes**, but hasn’t started tracking them yet.

### 2. **Staging Area (Index)**

- You **add** specific changes you want to include in the next commit.
- Git knows you're preparing these for a snapshot.

📦 Add to staging:

```bash
// Only adds index.js to the staging area

git add index.js
```

Or all files:

```bash
//Adds all changed files (in the current directory and subdirectories)to the staging area

git add .

```

### 3. **Local Repository (Committed)**

- You **commit** the staged changes with a message.
- This saves a **snapshot** in your Git history.

📝 Commit:

```bash
git commit -m "Added feature to index.js"
```

### 4. **Remote Repository (Pushed)**

- You push the committed changes to a remote like GitHub so others can access them.

🌍 Push:

```bash
git push origin main
```

---

### 🔁 Visual Summary:

```
[Working Directory] → git add → [Staging Area] → git commit → [Local Repo] → git push → [Remote Repo]
```

---

✅ The `git log` command is used to **view the history of commits** in your Git repository. It’s like a timeline of all the changes that have been committed.

### 🧾 **Basic Usage:**

```bash
git log
```

### 🧾 Output kuch aisa hota hai:

```bash
commit 1a2b3c4d5e6f7g8h9i0j
Author: Priyanshu <you@example.com>
Date:   Sat May 11 12:30:00 2025 +0530

    Added login feature
```

### 🔍 Useful `git log` options:

| Command | Description |
| --- | --- |
| `git log --oneline` | Shows a compact view (one commit per line) |
| `git log --stat` | Shows file changes summary per commit |
| `git log author="Priyanshu"` | Show commits by a specific author |
| `git log --since="2 weeks ago"` | Show commits made in a specific time frame |
| `git log -5` | Last 5 commits dikhata hai |
| `git log index.js` | Sirf `index.js` file ke commits dikhata hai |
| `git log -p` | Shows the actual code differences (diffs) |
| `git log --stat` | Shows file changes summary per commit |

---

### ➕ **What is `git add`?**

`git add` is used to **move changes from the working directory to the staging area**, preparing them to be committed.

Think of it like putting files into a box 🗃️ that you're going to seal (commit) soon.

---

### ✅ Basic Syntax:

```bash
git add <filename>
```

To add all files:

```bash
git add .
```

To add everything including deleted files:

```bash
git add -A
```

---

### 📂 Common Scenarios:

| Command | What it does |
| --- | --- |
| `git add index.js` | Adds a specific file |
| `git add .` | Adds all **modified and new** files in the folder |
| `git add -A` | Adds all **changes** (including deletions) |
| `git add *.js` | Adds all `.js` files in the directory |

---

## 🔧 **Basic Usage of `git config`**

### 1. **Set Global Username**

```bash
git config --global user.name "Your Name"
```

### 2. **Set Global Email**

```bash
git config --global user.email "your.email@example.com"
```

> These values will be used for all your Git commits unless overridden in a specific repository.
> 

---

### 📁 **Set Config for a Specific Repository**

Navigate into your Git repository folder, then run:

### Set username locally:

```bash
git config user.name "Your Name"
```

### Set email locally:

```bash
git config user.email "your.email@example.com"
```

### 📦 **Common Use Cases**

- Set default editor:

```bash
git config --global core.editor "code --wait"  # for VS Code
```

It **sets Visual Studio Code (VS Code)** as your **default editor for Git**, specifically when Git needs you to edit something — like writing a commit message, editing merge conflicts, or rebase messages.

---

## Commands

---

### 🔍 `ls -al` ka full meaning:

- **`ls`** – List directory contents (yaani folder ke andar kya-kya hai, wo dikhata hai)
- **`a`** – Show **all files**, including **hidden files** (jo `.` se start hote hain jaise `.git`)
- **`l`** – Show in **long listing format** (details ke saath)

---

### 📌 `git diff` kya dikhata hai?

- Aapne **working directory** mein jo bhi naye changes kiye hain (lekin commit nahi kiye), wo sab.
- Ye batata hai:
    - Kaunsi line **delete** hui
    - Kaunsi line **add** hui
    - Kaunse file mein kya badla

---

### 🧪 Example:

```bash
git diff
```

Agar aapne koi file edit ki ho, to yeh output dikha sakta hai:

```diff
- let message = "Hello";
+ let message = "Hello, World!";
```

Yahaan:

- wali line purani hai (delete ya change hui)
- `+` wali line nayi hai (add hui)

## Basic simple

git - vcs (Version control system)

managing, tracking, backup

git init                      - git initialize (it creates a .git hidden folder to track the changes or taking backup)

ls                                                   - shows all the folder and files

ls -a                                               - shows the hidden folder like (.git)

in windows       ls -force      to see hideen files

git add <filename>                         -   adding the to staging part

git add .                                              - adding all the files

git commit                                         -m “this is  my first commit”   - commiting the file with the message.

git status                                                 - for showing the status.

git log                                                      - shows all the commit

git diff                                                      - shows the changes.

git log —oneline        -                      shows all the commit in one line with short hash

git reset <commit_hash>             -     Resets the HEAD to a previous commit, but keeps your changes                                                                     in the staging area.

git reset --hard <commit-hash>       - Resets HEAD, staging area, and **your working directory**. All                                                                           changes  are **lost**.

pahle github ke jagah pendrive likha tha

![image.png](attachment:cad674ff-6487-4d06-9592-4b630ca3b699:image.png)

### Git command to add all to the remote in github

`git remote add origin https://github.com/PriyanshuVishwakarma07/git_github-masterclass.git`

 `git remote -v`   is used to **verify the remotes** connected to your local Git repository.

### Want to edit or remove a remote?

- **Change remote URL:**
    
    ```bash
    git remote set-url origin <new-url>
    ```
    
- **Remove a remote:**
    
    ```bash
    git remote remove origin
    ```
    

git push -u origin main 

### 🔍 Breakdown:

- **`git push`** – Pushes your local commits to the remote repository.
- **`origin`** – The name of the remote (default name when you add a remote).
- **`main`** – The name of the local branch you want to push.
- **`u`** or **`-set-upstream`** – Links your local `main` branch to the remote `origin/main` branch, so you can use `git push` and `git pull` in the future without specifying the branch every time.

---

## 🌴 **Git Branching kya hota hai?**

**Branching** ka matlab hota hai ki aap apne code ka **ek naya path (branch)** bana rahe ho jahan aap naye features ya changes try kar sakte ho **bina main code ko disturb kiye**.

> Jaise ek duplicate line nikal li coding ki train se — usme changes karo, test karo, aur jab ready ho jao, toh waapas merge kar do.
> 

---

### 🧠 **Kyun use karte hain branching?**

- ✅ **Naya feature** banana ho (jaise navbar)
- 🐞 **Bug fix** karna ho bina main code ke chhed-chhaad ke
- 👨‍💻 Team mein alag-alag log alag features pe kaam karte hain
- 🧪 Experimental idea test karna ho

---

### 📌 **Important Git Branch Commands**

| Command | Kya karta hai |  |
| --- | --- | --- |
| `git branch` | Branch list dikhata hai |  |
| `git branch navbar` | Nayi branch `navbar` banata hai | 
• Quoting becomes necessary if your branch name includes spaces or symbols. For example:

`branch "feature/navbar update"` |
| `git checkout navbar` | Us branch pe switch karta hai |  |
| `git checkout -b navbar` | Ek hi command se branch banao + switch bhi ho jao |  |
| `git merge navbar` | `navbar` branch ko `main` mein jodta hai |  |
| `git branch -d navbar` | Kaam hone ke baad us branch ko delete karta hai |  |

---

### 🎯 **Example Flow**

### 1. Start karo main branch se:

```bash
git checkout main
```

### 2. Ek nayi branch banao:

```bash
git checkout -b add-navbar
```

### 3. `index.html` ya `style.css` mein navbar ka code likho

### 4. Commit karo changes:

```bash
git add .
git commit -m "Added navbar"
```

### 5. Main branch pe wapas jao:

```bash
git checkout main
```

### 6. Merge karo:

```bash
git merge add-navbar
```

### 7. Push to GitHub:

```bash
git push
```

---

### 🖼️ Sochne ka tareeka:

```
main branch:
    o---o---o

new branch (add-navbar):
                \
                 o---o---o

Merge ke baad:
    o---o---o---o---o

```

---

Note: jaise ki hamne ek dusri branch banayi h or usme bhot saare commit h or hum chahte h ki merge karte time sirf ek commit ho us branch ka to hum hum use squash kar sakte h using 👇

                           BUT ISSE  HISTORY LOSS HO JAATI HAI

### ✅ Typical Workflow

```bash
# Step 1: Make sure you're on the target branch (e.g., main or dev)
git checkout main

# Step 2: Squash merge feat-d into main
git merge --squash feat-d

# Step 3:agar kuch unstaged hai toh add kar lo
git add .    
                
# Step 4: Commit the squashed changes
git commit -m "feat: add all changes from feat-d as a single commit"

```

# Rebase -

### **Short Definition (Hin+English):**

> git rebase ek branch ke commits ko doosri branch (jaise main) ke latest commits ke baad shift karta hai — jisse tumhari branch ki timeline latest base ke according update ho jaati hai, aur history clean & linear ban jaati hai.
> 

---

### 🧠 Ek Line Summary:

> Rebase ka matlab hai: “Apne commits ko latest main ke baad lagana, jaise ki tumne wahi se kaam start kiya ho.
> 

![image.png](attachment:2d97a2f5-ab48-415e-90f8-3e98413e2303:image.png)

![image.png](attachment:dc8e3868-c403-4e67-b80f-2d18c85070b7:image.png)

## 🚀 **Step-by-Step: `git rebase` kaise use karein**

### 🧩 Scenario:

Tumhari `feature-B` branch hai, jisme tum kaam kar rahe ho. Lekin tab se `main` branch me naye commits aa chuke hain. Ab tum chaahte ho ki tumhari branch `feature-B` latest `main` ke upar ho — bina merge commit ke.

---

### ✅ Step 1: Apni branch pe switch karo

```bash
git checkout feature-B
```

---

### ✅ Step 2: Rebase karo latest `main` ke upar

```bash
git rebase main
```

### 🔍 Kya hoga?

Git tumhare `feature-B` ke commits ko `main` ke **last commit ke baad** shift karega. Timeline jaise "update" ho jaayegi.

---

### ⚠️ Step 3: Agar conflict aaye toh resolve karo

Git bolega:

```
CONFLICT (content): Merge conflict in filename.js
```

👉 Conflict solve karo manually, fir:

```bash
git add .
git rebase --continue
```

Agar kuch galat ho gaya ho:

```bash
git rebase --abort
```

U - untracked

A - index added

M- modified

S - Staged

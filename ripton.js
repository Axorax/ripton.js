if (document.querySelector('.ripton')) {
    var s = document.createElement("style");
    s.textContent = `@keyframes ripton{0%{width:0;height:0;opacity:0.5;}100%{width:500px;height:500px;opacity:0;}}`;
    document.head.appendChild(s);
    document.querySelectorAll('.ripton').forEach(b => {
        b.style.cssText += 'overflow:hidden;position:relative;';
        b.addEventListener('click', function(e) {
            let x = e.clientX - e.target.offsetLeft,
            y = e.clientY - e.target.offsetTop,
            w = document.createElement('span');
            w.id = 'ripton-wave';
            w.style.cssText = 'position:absolute;background:#fff;transform:translate(-50%,-50%);pointer-events:none;border-radius:50%;animation:ripton 1s linear infinite;';
            if (b.className.match(/ripton-bg\[.+\]/)) {
                w.style.background = b.className.match(/ripton-bg\[.+\]/)[0].replace('ripton-bg[', '').replace(']', '');
            }
            w.style.left = `${x}px`;
            w.style.top = `${y}px`;
            this.appendChild(w);
            setTimeout(() => {
                w.remove();
            }, 1000)
        });
    });
}